* * *

title: "OTP Info" permalink: /otp-info.html lang: en_US ref: otp-info

* * *

OTP er en 0x100 byte region av tilsynelatende tilfeldig data mot adressen 0x10012000. Det er antatt at konsollens unike nøkler er avledet fra denne regionen, men det er fortsatt ikke kjent hvordan. Regionen er sannsynlig konsollens unike datalagring som er dekryptert av bootromet men vi vet ikke helt sikker hvordan dette fungerer før noen dumper det beskyttende bootromet. Det er på dette tidspunktet ukjent om noen har vært vellykket i å dumpe det beskyttede bootromet.

Før versjon 3.0.0-X har 0x10012000-regionen (OTP) vært ubeskyttet og kunne bli dumpet av en angriper med tilstrekkelig tillatelser (arm9 kodeutførelse).

Etter versjon 3.0.0-X byttet Nintendo til å låse denne regionen med register CFG_SYSPROT9, noe som også låser bootloaderen, å er satt veldig tidlig i oppstarten av konsollen lenge før vi har tilgang til kodeutførelse. Registeret kan bare bli angitt én gang og kan ikke slås av før konsollen er fullstendig avslått, det er derfor ikke mulig å dumpe hele OTP uten en versjon tidligere en 3.0.0-X.

Det er imidlertid en metode for å dumpe "hashen" av OTP på versjon 9.6.0-X. Fordi Kernel9Loader ikke frigjør SHA_HASH registeret etter det er brukt, når man da dumper SHA_HASH vil dette gi hashen av OTP som ble overført Kernel9 fra Kernel9Loader. I tillegg er det et langvarig sikkerhetsproblem hvor en MCU omstart forårsaket av i2c ikke tømmer RAM som det er ment det skal.

Dette gir et maskinvare basert angrep hvor vilkårlige data skrives til nand_sector96+0x10 i en SysNAND sikkerhetskopi og så flashet til konsollen. Etterpå kobler vi i2c til en MCU omstart på vår kommando, skriver et nyttelast (en payload som skriver 0x1000A040 - 0x1000A060 til en fil på SD-kortet) til arm9 minnet på et tilfeldig sted, og fyller minnet med en NOP etterfulgt av JMP instruksjon som peker til nyttelasten. Vi kan da kjøre en MCU omstart flere ganger (med stigende nand_sector96+0x10 hver gang) helt til Kernel9Loader tilfeldig hopper til nyttelasten.

På grunn av kompleksiteten og ekstra maskinvare involvert i metoden beskrevet ovenfor har jeg besluttet å begrense omfanget av denne guiden strengt tatt til bare å bruke en programvare basert løsning til en versjon under 3.0.0-X. Versjon 2.1.0-X ble valgt fordi det er den eneste versjonen under 3.0.0-X som inneholder en fullstendig utnyttelesbar nettleser-versjon (2.0.0-X har en delvis utnyttelesbar nettleser men fungerer ikke av andre grunner).

Denne prosessen innebærer å flashe konsollens CTRNAND til 2.1.0-4. Dette gjøres ved å installere et forhåndslaget CTRNAND bilde på konsollen som inneholder 2.1.0, og kopierer konsollens spesifikke filer (som `moveable.sed` og `SecureInfo_A`) til den for så å reparere tittel databasen CMACS. På nye 3DS-er bytter den også CTRNAND krypteringsporet og installerer en gammel 3DS NCSD header til NAND, dette tillater den å starte opp en gammel 3DS 2.1.0 eksklusiv programvare.