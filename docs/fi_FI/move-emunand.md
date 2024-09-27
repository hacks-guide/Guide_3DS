# Move EmuNAND

## Required Reading

Tässä lisäosiossa opastetaan EmuNANDin sisällön siirtäminen uuteen SysNAND-kokoonpanoon sekä EmuNAND-osion poistaminen tämän jälkeen. Huomaa, että termit EmuNAND ja RedNAND viittaavat [saman konseptin](http://3dbrew.org/wiki/NAND_Redirection) kahteen hiukan erilaiseen toteutukseen.

Huomaa, että jos sinulla on muita käynnistystiedostoja kuin `GodMode9.firm` SD-korttisi `/luma/payloads`‑kansiossa, (START)-painikkeen pohjassa pitäminen käynnistyksen aikana avaa "ketjulatausvalikon", jossa sinun on käytettävä ristiohjainta ja (A):ta avataksesi GodMode9:n näitä ohjeita varten.

::: danger

Sinulla TÄYTYY olla asennettuna sekä Luma3DS että boot9strap käyttääksesi tätä ohjetta.

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Power off your console
2. Aseta SD-korttisi tietokoneeseesi
3. Kopioi GodMode9‑`.zip`‑pakkauksesta `GodMode9.firm` SD-korttisi `/luma/payloads/`‑kansioon
4. Kopioi GodMode9-`.zip`-pakkauksesta `gm9`-kansio SD-korttisi juureen
5. Reinsert your SD card into your console

### Section II - Backup SysNAND DSiWare Saves

::: info

Jos sinulla ei ole yhtäkään DSiWare-peliä tai -tallennusta, voit ohittaa tämän vaiheen.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is completed
3. Jos sinua kehotetaan korjaamaan RTC-aika ja -päivämäärä, paina (A):ta ja aseta ne oikein, paina sitten (A):ta jatkaaksesi
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Mene hakemistoon `[2:] SYSNAND TWLN` → `title`
5. Pidä (R):ää pohjassa ja paina samalla (A):ta `00030004`-kansion kohdalla valitaksesi sen, valitse sitten "Copy to 0:/gm9/out"
   - This process may take some time if you have many DSiWare games
6. Paina (B):tä kahdesti palataksesi päävalikkoon

### Section III - Backup GBA VC Saves

::: info

Jos sinulla ei ole yhtäkään GBA VC -peliä tai -tallennusta, voit ohittaa tämän vaiheen.

:::

::: info

Huomaa, että tämä ei ole tarpeellista muille Virtual Console -peleille (GBC, NES jne.)

:::

::: info

Tallennus kopioidaan SD-korttisi `/gm9/out/`-kansioon tiedostonimellä `<sovellustunnus>.gbavc.sav`.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Do the following process for each GBA VC game that you want to back up the save for:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - Paina (A):ta jatkaaksesi
   - Press (Start) to reboot your console

### Section IV - Copy EmuNAND to SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Mene hakemistoon `[E:] SYSNAND VIRTUAL`
3. Paina (A):ta `nand.bin`-tiedoston kohdalla, valitse "NAND image options..." ja sitten "Restore SysNAND (safe)"
4. Paina (A):ta ottaaksesi käyttöön SysNANDin ylikirjoittamisen ja syötä annettu painikeyhdistelmä
   - This will not overwrite your boot9strap installation
5. Syötä annettu painikeyhdistelmä ottaaksesi käyttöön SysNANDiin kirjoittamisen (lvl1)
   - This process will take some time
6. Once it is completed, press (A) to continue
7. Paina (B):tä kieltäytyäksesi lukitsemasta kirjoitusoikeuksia kehotettaessa
8. Paina (B):tä palataksesi päävalikkoon

### Section V - Restore DSiWare Saves

::: info

Jos et varmuuskopioinut DSiWare-tallennuksia aiemmin, voit ohittaa tämän osion.

:::

1. Mene hakemistoon `[0:] SDCARD` → `gm9` → `out`
2. Paina (Y):tä `00030004`-kansion kohdalla kopioidaksesi sen
3. Paina (B):tä kahdesti palataksesi päävalikkoon
4. Mene hakemistoon `[2:] SYSNAND TWLN` → `title`
5. Paina (Y):tä liittääksesi `00030004`-kansion
6. Valitse "Copy path(s)"
7. Paina (A):ta ottaaksesi käyttöön SysNANDiin kirjoittamisen (lvl1) ja syötä annettu painikeyhdistelmä
8. Valitse "Overwrite file(s)"
   - This process may take some time if you have many DSiWare games
9. Paina (B):tä kieltäytyäksesi lukitsemasta kirjoitusoikeuksia kehotettaessa
10. Paina (B):tä kahdesti palataksesi päävalikkoon

### Section VI - Restore GBA VC Saves

::: info

Jos et varmuuskopioinut GBA VC -tallennuksia aiemmin, voit ohittaa tämän osion.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. Tee seuraavat toimet jokaista GBA VC -peliä kohden, jonka tallennuksen haluat palauttaa:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Mene hakemistoon `[0:] SDCARD` → `gm9`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Paina (B):tä palataksesi päävalikkoon
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Paina (A):ta jatkaaksesi
   - Press (Start) to reboot your console
   - Launch the GBA VC game
   - Exit the GBA VC game

### Section VII - Backup SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **Varmuuskopioi SD-korttisi kaikki tiedostot tietokoneellesi; kaikki tiedostot poistetaan seuraavaksi**

### Section VIII - Format SD card

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. Pidä (R):ää pohjassa ja paina samalla (B):tä irrottaaksesi SD-korttisi
2. Aseta SD-korttisi tietokoneeseesi
3. Kopioi kaikki tiedostosi takaisin SD-kortillesi
   - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsert your SD card into your console
5. Paina (A):ta liittääksesi SD-korttisi takaisin järjestelmään
6. Paina (START)-painiketta käynnistääksesi uudelleen

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
