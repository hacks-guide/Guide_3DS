---
title: "FAQ"
---
{% include toc title="Table des matières"%}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

**Oui**, vous pouvez toujours installer un custom firmware sur votre 3DS, même après la fermeture de l'eShop.
{: .notice--info}

## FAQ Pré-installation

{% capture compat %}
<summary><u>Je suis sur la dernière version du logiciel système. Is my console hackable without any external hardware/prerequisites?</u></summary>

**Yes!** New 3DS / New 3DS XL / New 2DS XL can use [super-skaterhax](installing-boot9strap-(super-skaterhax)), while 3DS / 3DS XL / 2DS can use [MSET9](installing-boot9strap-(mset9)).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>What consoles is this guide compatible with?</u></summary>

This guide is compatible with all retail 3DS-family devices (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). If your system version string is displayed as "0.0.0-0", then you may have a developer unit.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>À quelle point est-ce risqué de hacker ma console ?</u></summary>

Bricks are now effectively impossible unless you are purposely trying to brick your console.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Est-ce que je pourrais lancer des Homebrew et des émulateurs incroyables avec un custom firmware ?</u></summary>

Oui ! Ce guide installera quelques applications homebrew utiles, tel qu'[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest), qui est un magasin d'applications homebrew.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Pourrais-je utiliser un custom firmware pour jouer à des jeux d'autres régions ?</u></summary>

Oui : Luma3DS va automatiquement ignorer la vérification de la région pour les cartes de jeux et les jeux installés. Some games may need to make use of Luma's [locale emulation feature](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) in order to work properly on out-of-region consoles.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Vais-je perdre des fonctionnalités si j'installe un custom firmware ?</u></summary>

Non. Consoles with custom firmware can download game updates and run physical cartridges as any other 3DS can.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Can I keep my NNID, saves, digital games (etc.)?</u></summary>

Votre Identifiant Nintendo Network (si vous en avez un) ne sera pas affecté par les manipulations faites dans ce guide. Consoles with a region of KOR, CHN, or TWN do not have NNID functionality to begin with and are thus unaffected.

Following this guide alone should not result in data loss (saves, digital games, etc), but SD card corruption is always a possibility. You should make a backup of your SD card contents if you have important data.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Est-ce que ma 3DS va être bannie pour avoir installé un custom firmware ?</u></summary>

Bans are no longer possible because Nintendo Network services have been shut down (for everyone).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Pourrais-je installer un custom firmware sans utiliser un ordinateur (par exemple : un téléphone portable sous Android)?</u></summary>

Oui ! La seule chose dont vous avez besoin est d'avoir un moyen de mettre des fichiers sur une carte SD compatible.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>De quelle taille la carte SD doit-elle être ?</u></summary>

Vous aurez besoin d'au moins 1.5 GB d'espace libre sur votre carte SD pour suivre ce guide dans son entièreté. Bien que la 3DS soit officiellement compatible avec les cartes SD jusqu'à 32 Go, les cartes SD plus grandes peuvent être utilisées si elles sont reformatées manuellement en FAT32. Il n'est pas recommandé d'utiliser des cartes SD de plus de 128 Go en raison de problèmes connus avec les graphiques GBA et les thèmes personnalisés.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>J'ai entendu parler de ces choses pour lesquelles je dois payer (Gateway, Sky3DS, ntrboot, R4, etc). En ai-je besoin ?</u></summary>

Non. While a DS flashcart can be used to mod a 3DS using [ntrboot](ntrboot), there is now a free software method available for most consoles.

3DS-mode flashcarts like Gateway and Sky3DS are not recommended because they are obsolete and may carry brick risk.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Quelle est la différence entre un custom firmware et un homebrew ?</u></summary>

En termes de définition, le custom firmware fait référence à une modification du logiciel système de la 3DS pour faire des choses qu'il n'est normalement pas en mesure de faire. Les Homebrew se réfèrent généralement aux logiciels créés en dehors des sources officielles (par exemple : non distribué sur l'eShop ou par cartes de jeu).

Historiquement, la 3DS avait un accès aux homebrews de type "userland" grâce à des exploits plus anciens comme ninjhax, que les gens appelaient parfois juste "homebrew". Le niveau d'accès au système accordé avec "userland" vous permettait d'exécuter des homebrews et des émulateurs de base, mais ne vous permettait pas de (facilement) modifier des jeux ou de dumper des cartes de jeu. Il était aussi beaucoup moins stable, avec des homebrew crashant malencontreusement et nécessitant un redémarrage complet. Le CFW offre un niveau d'accès au système beaucoup plus élevé tout en étant plus stable que les points d'accès ne donnant accès qu'aux homebrew.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## FAQ Post-Installation

{% capture compat %}
<summary><u>Est-ce dangereux de mettre à jour ma 3DS vers la dernière version avec un custom firmware dessus ?</u></summary>

Si vous utilisez Luma3DS, votre lanceur de custom firmware (boot9strap) ne sera *jamais* supprimé quand vous ferez une mise à jour de la console. There have been updates in the past that have resulted in Luma3DS crashing on boot, so it is a good idea to wait a couple of hours to ensure that the latest update will not temporarily render the console unusable until Luma3DS is updated. Les mises à jour de la console peuvent être effectuées de la même manière qu'elles sont sur une 3DS non modifiée : via les Paramètres de la console, le mode sans échec ou l'invite de mise à jour lorsque la mise à jour est automatiquement téléchargée.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Comment puis-je changer pour une carte SD plus grande ?</u></summary>

Copiez et collez le contenu de votre ancienne carte SD vers la nouvelle carte SD formatée au préalable en FAT32. Pour les cartes SD de 128 Go, une taille d'allocation de 65536 est recommandée. Les cartes SD de plus de 128 Go ne sont pas recommandées en raison de problèmes connus avec les graphiques GBA et les thèmes personnalisés.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Peut-on utiliser le Transfert de données avec un custom firmware installé ?</u></summary>

Oui, les transferts peuvent être effectués par le biais de la fonction officielle de Transfert de données vers d'autres consoles avec CFW (des incohérences peuvent survenir si la console cible n'est pas hackée). Les tickets pour les titres illégitimes (homebrew) ne seront pas transférés, mais il est possible de faire réapparaître ces titres avec [faketik](https://github.com/ihaveamac/faketik/releases/latest). Assurez-vous de ne pas effectuer de transfert sans fil, car cela supprimera les titres illégitimes. Le CFW restera sur les deux consoles.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Comment puis-je changer la langue de la console sur une 3DS japonaise ?</u></summary>

Le seul moyen de changer la langue d'une 3DS japonaise est d'effectuer un changement de région [region chnage](region-changing). Note that this is very likely to break the Nintendo eShop on your console, which means you will be unable to update your games whether they are in-region or out-of-region.
 {% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Comment puis-je mettre à jour les applications homebrew ?</u></summary>

Cela dépend du format de l'application homebrew. En général :

* Les homebrew au **format CIA** peuvent être mis à jour en installant un nouveau CIA, qui écrasera généralement l'ancien. Si l'ancien CIA n'est pas écrasé, vous pouvez supprimer l'ancien via le menu de Gestion des données comme n'importe quel autre application 3DS.
* Les homebrew au **format 3DSX** peuvent être mis à jour en remplaçant le fichier 3DSX dans `/3ds/` par une version à jour. Si l'application homebrew inclut des ressources supplémentaires, vous devrez peut-être placer ce dossier ailleurs. Reportez-vous à la documentation de l'application homebrew.
* Pour mettre à jour Luma3DS, voir [cette page](restoring-updating-cfw). Pour mettre à jour GodMode9, voir [cette page](godmode9-usage#updating-godmode9).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Comment puis-je mettre à jour mes jeux ?</u></summary>

Vous pouvez continuer à télécharger les mises à jour de jeu depuis le Nintendo eShop, même si celui-ci est maintenant fermé.

Si le jeu n'est pas de la même région que votre console, vous allez avoir besoin de télécharger la mise à jour depuis une 3DS qui à cette mise à jour d'installée [dump the update](dumping-titles-and-games-cartridges). The Nintendo eShop only contains updates for the console's region (for example, a Japanese 3DS will only have updates for Japanese games).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>À l'aide ! Quelque chose de grave est arrivé à ma 3DS , elle ne veut pas démarrer le Menu HOME...</u></summary>

Please look at the [troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware). **Uninstalling CFW when your console is in an unbootable state is not recommended, as it is very likely to lead to a brick**.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## FAQ menuhax / A9LH / Gateway

{% capture compat %}
<summary><u>I modded my console (x) years ago, so it already has some sort of homebrew. Que dois-je faire ?</u></summary>

Il est recommandé que vous mettiez à jour votre ancienne configuration vers une configuration moderne basée sur boot9strap. Suivez le guide [Vérification du CFW](checking-for-cfw) pour voir comment mettre à jour votre installation.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Ma configuration marche très bien pour moi. Pourquoi devrais-je la mettre à jour ?</u></summary>

La grande majorité des homebrew modernes (tels que Checkpoint et BootNTR Selector) ont seulement été testés sur des configurations modernes basées sur boot9strap et ne peuvent donc potentiellement pas fonctionner correctement (voire pas du tout) sur des anciennes cenfigurations basées sur menuhax, A9LH, ou Gateway. De plus, en fonction de votre configuration, vous ne pourrez peut-être pas mettre à jour vers le logiciel système le plus récent en toute sécurité. Les configurations modernes basées sur boot9strap permettent un plus grand niveau d'accès au système que les hacks précédents, y compris la possibilité de dumper le bootrom de votre console.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Vais-je perdre quoi que ce soit en améliorant ma configuration ?</u></summary>

Votre ancienne configuration (incluant votre EmuNAND, si vous en avez un) peut normalement être directement migrée vers boot9strap sans perte de données. Si vous avez des données particulièrement importantes pour vous, il serait une bonne idée de faire une sauvegarde déchiffrée de vos données avant de mettre à jour votre installation avec un outil comme [JKSM](https://github. om/J-D-K/JKSM/releases/tag/12%2F20%2F2018).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Comment puis-je transférer mes sauvegardes depuis une configuration Gateway vers une configuration moderne ?</u></summary>

**R :** Voir [ce thread](https://gbatemp.net/threads/425743/).
{% endcapture %}
<details>{{ compat | markdownify }}</details>
