#!/bin/sh

# ================================================================================
# You're not supposed to open this link directly
# Please run the following command according to the app you use
# -------- iSH --------
# wget -O - https://3ds.hacks.guide/assets/imset9.sh | sh
# ------ a-Shell ------
# sh -c 'curl -sL -o imset9.sh https://3ds.hacks.guide/assets/imset9.sh && sh imset9.sh ; rm imset9.sh'
# ================================================================================

OGPWD="$PWD"
PLATFORM=$(uname)
MACHINE=$(uname -m)
RELEASE=$(uname -r)
ENV=unknown
if [ "$PLATFORM" = "Linux" ] && [ "$MACHINE" = "i686" ] && echo "$RELEASE" | grep -q -- '-ish$'; then
    ENV=ish
fi
if [ "$PLATFORM" = "Darwin" ] && echo "$MACHINE" | grep -q '^i\(Pod\|Phone\|Pad\)'; then
    ENV=ashell
fi

if [ "$ENV" = "unknown" ]; then
    echo "This is only for iSH or a-Shell on iOS/iPadOS."
    exit 1
fi

case $ENV in
    "ish")
        command -v python3 >/dev/null || apk add python3
        if ! command -v python3 >/dev/null; then
            echo "Failed to install python3, either try again or install manually."
            exit 1
        fi
        ;;
    "ashell")
        true
        ;;
esac

case $ENV in
    "ish")
        MOUNT=$(mktemp -d)
        mount -t ios - "$MOUNT"
        sleep 1
        cd "$MOUNT"
        ;;
    "ashell")
        if ! echo "$PWD" | grep -Fq "com.apple.filesystems.userfsd"; then
            pickFolder
        fi
        ;;
esac

if [ ! -f b9 ] || [ ! -f mset9.py ]; then
    echo "Downloading MSET9 files..."
    ZIP_API_URL="https://api.github.com/repos/hacks-guide/MSET9/releases/latest"
    case $ENV in
        "ish")
            # works...?
            #wget -O MSET9.zip $(wget -O - $ZIP_API_URL | grep -o '"https://github\.com/.\+/releases/download/.\+/.\+\.zip"' | tr -d '"')
            # probably better
            wget -O MSET9.zip $(wget -O - $ZIP_API_URL | python3 -c 'import json,sys;print(json.loads(sys.stdin.read())["assets"][0]["browser_download_url"])')
            ;;
        "ashell")
            # ashell have jq by default
            curl -sL -o MSET9.zip $(curl -sL $ZIP_API_URL | jq -r '.assets[0].browser_download_url')
            ;;
    esac
    python3 -m zipfile -e MSET9.zip .
    rm MSET9.zip
    if [ ! -f b9 ] || [ ! -f mset9.py ]; then
        echo "Unable to download MSET9 files automatically, please get them manually."
        exit 1
    fi
fi

clear
case $ENV in
    "ish")
        # workaround for piped script
        python3 mset9.py </dev/tty
        ;;
    "ashell")
        # no permission to /dev/tty
        python3 mset9.py
        ;;
esac

case $ENV in
    "ish")
        cd "$OGPWD"
        umount "$MOUNT"
        rmdir "$MOUNT"
        ;;
    "ashell")
        true
        ;;
esac
