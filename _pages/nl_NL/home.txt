---
layout: splash
title: "3DS Hacks Handleiding" #
header:
  overlay_color: "#5e616c" #
  overlay_image: /images/home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "Begin"
  cta_url: "key-information"
  caption:
excerpt: "A complete guide to 3DS (and 2DS) custom firmware, <br /> from stock to boot9strap.<br />"
---

Neem alle inleidende pagina's (inclusief deze pagina!) grondig door voordat je verdergaat.
{: .notice--info}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

## Wat is custom firmware?

**Custom firmware** ("CFW") is een volledige software-wijziging van je 3DS, vergelijkbaar met "beheerderstoegang" op een computer. Het stelt je in staat om alles te doen wat de 3DS fysiek in staat is te doen, in plaats van te worden beperkt door wat Nintendo toelaat.

De populairste toepassingen voor custom firmware zijn:

* Homebrew software en spellen gemaakt voor of ported naar de Nintendo 3DS
* Het omzeilen van region lock, wat je toelaat om spellen te spelen uit andere regio's
* HOME-menu aanpassing, met behulp van door de community gemaakte [thema's en badges](https://themeplaza.art)
* Modificatie van spellen ("ROM hacks") met [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-(Only-version-8.0-and-higher))
* Bewerking, backup en herstel van opgeslagen gegevens
* Emulatie van oudere consoles, alsook het afspelen van DS en GBA spellen met de ingebouwde emulators van de 3DS
* Je fysieke cartridges installeren voor digitaal gebruik

## Wat installeert deze handleiding?

Deze handleiding zal:
+ Install **boot9strap** and **Luma3DS custom firmware** on unmodified retail 3DS/2DS consoles
    + Luma3DS zal automatisch de regio vergrendeling verwijderen en je toestaat niet-ondertekende software uit te voeren
+ Verschillende homebrew software installeren, zoals een package installer, save file manager en een homebrew app store
+ Een back-up maken van kritieke systeembestanden dat bricks kan helpen vermijden (en gegevens kan herstellen in het geval van een brick)

___

### Continue to [Key Information](key-information)
{: .notice--primary}
