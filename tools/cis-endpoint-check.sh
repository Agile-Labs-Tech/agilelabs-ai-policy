#!/bin/bash
# CIS macOS Level 1 quick check — maps to the CIS Baseline Mapping rows C-01..C-14.
# Read-only. Run on each Company-issued Mac; save output as EV-CIS evidence:
#   ./cis-endpoint-check.sh > "EV-CIS-$(scutil --get ComputerName)-$(date +%Y%m%d).txt"
echo "Device : $(scutil --get ComputerName 2>/dev/null)  |  User: $(whoami)  |  Date: $(date '+%d %b %Y %H:%M')"
echo "Serial : $(system_profiler SPHardwareDataType 2>/dev/null | awk -F': ' '/Serial/{print $2}')"
sw_vers
echo
echo "[C-01] FileVault:            $(fdesetup status 2>&1)"
fw=$(/usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate 2>&1)
sm=$(/usr/libexec/ApplicationFirewall/socketfilterfw --getstealthmode 2>&1)
echo "[C-04] Firewall:             $fw / $sm"
echo "[C-02] Update schedule:      $(softwareupdate --schedule 2>&1)"
for k in AutomaticDownload AutomaticallyInstallMacOSUpdates CriticalUpdateInstall ConfigDataInstall; do
  echo "       $k = $(defaults read /Library/Preferences/com.apple.SoftwareUpdate $k 2>/dev/null || echo 'not set')"
done
echo "[C-03] Screen lock:          $(sysadminctl -screenLock status 2>&1 | sed 's/.*] //' | tail -1)"
echo "[C-05] Sophos processes:     $(pgrep -f -i sophos 2>/dev/null | wc -l | tr -d ' ') running"
echo "[C-06] Gatekeeper:           $(spctl --status 2>&1)"
echo "       SIP:                  $(csrutil status 2>&1)"
echo "[C-07] Guest account:        GuestEnabled=$(defaults read /Library/Preferences/com.apple.loginwindow GuestEnabled 2>/dev/null || echo '0 (default off)')"
echo -n "[C-09] Sharing ports:        "
for p in 22 5900 445; do nc -z -G1 localhost $p >/dev/null 2>&1 && echo -n "$p:OPEN " || echo -n "$p:closed "; done; echo
echo "[C-11] Time sync (timed):    $(pgrep -x timed >/dev/null && echo running || echo NOT running)"
aa=$(defaults read "/Library/Application Support/CrashReporter/DiagnosticMessagesHistory.plist" AutoSubmit 2>/dev/null)
tp=$(defaults read "/Library/Application Support/CrashReporter/DiagnosticMessagesHistory.plist" ThirdPartyDataSubmit 2>/dev/null)
ad=$(defaults read com.apple.AdLib allowApplePersonalizedAdvertising 2>/dev/null)
echo "[C-14] Telemetry:            AppleAnalytics=${aa:-0(off)} ThirdParty=${tp:-0(off)} PersonalisedAds=${ad:-0(off)}  (0/absent = off = pass)"
ns=$(defaults read /Library/Preferences/SystemConfiguration/com.apple.nat 2>/dev/null | grep -c '"Enabled" = 1')
nc -z -G1 localhost 548 >/dev/null 2>&1 && afp="OPEN" || afp="off"
nc -z -G1 localhost 3031 >/dev/null 2>&1 && rae="OPEN" || rae="off"
echo "       Extra sharing:        AFP=$afp RemoteAppleEvents=$rae InternetSharing=$([ "${ns:-0}" -gt 0 ] && echo ENABLED || echo off)"
dest=$(tmutil destinationinfo 2>&1 | awk -F': ' '/^Name/{print $2}' | head -1)
mounted=$(tmutil destinationinfo 2>&1 | awk -F': ' '/^Mount Point/{print $2}' | head -1)
echo "[C-13] Time Machine dest:    ${dest:-none configured}  (mounted: ${mounted:-no})"
lb=$(tmutil latestbackup 2>&1)
case "$lb" in
  *"Full Disk Access"*) echo "       Last backup:          [needs Full Disk Access - verify via System Settings > Time Machine and screenshot]" ;;
  *"Failed to mount"*)  echo "       Last backup:          [destination not mounted - connect backup drive]" ;;
  *)                    echo "       Last backup:          $(echo "$lb" | tail -1)" ;;
esac
