* * *

title: "H2testw (Windows)" permalink: /h2testw-(windows).html lang: en_US ref: h2testw-(windows)

* * *

Denne siden vil gå gjennom prosessen for å sjekke SD-kortet etter feil ved hjelp av h2testw. {: .notice}

Avhengig av størrelsen på SD-kortet og hastigheten på datamaskinen din, kan denne prosessen ta opptil flere timer! {: .notice--info}

Denne siden er for Windows-brukere. Hvis du ikke bruker Windows, sjekk ut disse sidene; [F3 (linux)](f3-(linux)) or [F3X (mac)](f3x-(mac)) pages. {: .notice--info}

#### Det du trenger

* Siste utgave av [h2testw](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)

#### Instruksjoner

  1. Kopier `h2testw.exe` fra h2testw `.zip` til skrivebordet
  2. Sett inn SD-kortet i datamaskinen din
  3. Kjør `h2tsetw.exe`
  4. Velg "Engelsk"
  5. Klikk "Select target"
  6. Velg stasjonsbokstaven til SD-kortet
  7. Kontroller at "all available space" er valgt
  8. Klikk "Write + Verify"
  9. Vent til prosessen er ferdig

Hvis testen viser resultatet `Test finished without errors`, er SD-kortet klart, og du kan så slette alle `.h2w` filene på SD-kortet {: .notice--success}

Hvis testen viser noe annet resultat kan det hende SD-kortet er korrupt eller skadet og du må kanskje bytte det!{: .notice--danger}

Gå tilbake til [Kom i Gang](get-started) {: .notice--primary}