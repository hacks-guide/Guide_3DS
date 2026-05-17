1. Power off your console.
1. Insert your SD card into your computer.
1. Create a folder named `3ds` on the root of your SD card if it does not already exist.
1. Copy `GodMode9.firm` from the GodMode9 `.zip` to the `/luma/payloads/` folder on your SD card.
1. Copy the `gm9` folder from the GodMode9 `.zip` to the root of your SD card.
1. Create a folder named `in` in the `/gm9/` folder if it does not already exist.
1. Copy the 11.15.0 CTRTransfer image `.bin` and `.bin.sha` files from the CTRTransfer `.zip` to the `/gm9/in/` folder on your SD card.
1. Copy `ctrtransfer.gm9` to the `/gm9/scripts/` folder on your SD card.
1. Copy `FBI.3dsx` to the `/3ds/` folder on your SD card.
1. Copy `faketik.3dsx` to the `/3ds/` folder on your SD card.
1. Reinsert your SD card into your console.

::: tip

Your SD card should contain the below listed files and folders. It does not have to contain these and only these contents.

:::

```shell
💾 SD CARD
├── 📁 3ds
│   ├── 📄 FBI.3dsx
│   └── 📄 faketik.3dsx
├── 📁 config
│   └── 📁 ssl
│       └── 📄 cacert.pem
├── 📁 gm9
│   ├── 📁 in
│   │   ├── 📄 11.15.0-47[region]_ctrtransfer_[model].bin.sha
│   │   └── 📄 11.15.0-47[region]_ctrtransfer_[model].bin
│   ├── 📁 scripts
│   │   ├── 📄 ctrtransfer.gm9
│   │   ├── 📄 GM9Megascript.gm9
│   │   └── 📄 NANDManager.gm9
│   └── 📁 support
│       ├── 📄 decTitleKeys.bin.here
│       └── 📄 seeddb.bin.here
├── 📁 luma
│   ├── 📁 payloads
│   │   └── 📄 GodMode9.firm
│   └── 📄 config.ini
├── 📁 Nintendo 3DS
├── 📄 boot.3dsx
└── 📄 boot.firm
```
