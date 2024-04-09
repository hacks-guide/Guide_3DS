---
layout: splash
title: "Guide Hacks 3DS" #
header:
  overlay_color: "#5e616c" #
  overlay_image: /images/home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "Bien Démarrer"
  cta_url: "key-information"
  caption:
excerpt: "Un guide complet pour l'installation d'un custom firmware sur 3DS (et 2DS) <br /> depuis le firmware original vers boot9strap.<br />"
---

Lisez attentivement toutes les pages d'introduction (y compris celle-ci !) avant de continuer.
{: .notice--info}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

## Qu'est-ce qu'un custom firmware ?

Un **custom firmware** ("CFW") est une modification complète du logiciel système de votre 3DS, comparable à "l'accès administrateur" sur un ordinateur. Il vous permet de faire tout ce que la 3DS est physiquement capable de faire, plutôt que d'être limité par tout ce que Nintendo vous permet de faire.

Les utilisations populaires pour un custom firmware sont :

* Exécution de logiciels homebrew et de jeux conçus pour ou portés sur la Nintendo 3DS
* Outrepasser le verrouillage de la région, vous permettant de jouer à des jeux d'autres régions
* Personnalisation du menu HOME, à l'aide de [thèmes et badges](https://themeplaza.art) créés par la communauté
* Modification de jeux ("ROMs hacks") via [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-(Unily-version-8.0-and-higher))
* Modification des données de sauvegarde, sauvegarde et restauration de celles-ci
* Émulation d'anciennes consoles, ainsi que la lecture native des jeux DS et GBA
* Installation de vos cartes de jeu physiques pour un usage numérique

## Qu'est-ce que ce guide me fait installer ?

Ce guide va :
+ Install **boot9strap** and **Luma3DS custom firmware** on unmodified retail 3DS/2DS consoles
    + Luma3DS supprimera automatiquement le verrouillage régional et vous permettra d'exécuter des logiciels non signés
+ Installer divers logiciels homebrew, tels qu'un programme d'installation de packages, un gestionnaire de fichiers de sauvegarde et une boutique d'applications homebrew
+ Effectuer des sauvegardes de fichiers système critiques qui peuvent aider à éviter les bricks (et à récupérer les données le cas échéant)

___

### Continuer vers [Informations importantes](key-information)
{: .notice--primary}
