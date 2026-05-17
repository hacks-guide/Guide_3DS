# FAQ

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

**Oui**, vous pouvez toujours installer un custom firmware sur votre 3DS, même après la fermeture de l'eShop.

:::

## FAQ Pré-installation

:::details Je suis sur la dernière version du système. Ma console est-elle en mesure d'être hackée sans l'utilisation de matériel externe ou de prérequis ?

**Oui !** Les New 3DS / New 3DS XL / New 2DS XL peuvent utiliser [super-skaterhax](installing-boot9strap-(super-skaterhax)), tandis que les 3DS / 3DS XL / 2DS peuvent utiliser [MSET9](installing-boot9strap-(mset9)).

:::

:::details Avec quelles consoles ce guide est-il compatible ?

Ce guide est compatible avec toutes les consoles de la famille 3DS (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). Si votre version du système affiche "0.0.0-0", alors vous pourriez être en possession d'une console pour développeur.

:::

:::details À quel point est-il risqué de hacker ma console ?

Les bricks sont maintenant presque impossibles à moins que vous essayiez intentionnellement de bricker votre console.

:::

:::details Est-ce que je peux tourner des homebrew et des émulateurs fantastiques avec ceci ?

Oui ! Ce guide va installer quelques applications homebrew utiles, y compris [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest), qui s'agit d'une sorte d'App Store homebrew.

:::

:::details Je peux utiliser ceci pour jouer à des jeux d'autres régions ?

Oui ; Luma3DS ignorera automatiquement la vérification de région pour les cartes de jeu et les jeux installés. Certains jeux peuvent avoir besoin d'utiliser [la fonction d'émulation locale](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) de Luma pour fonctionner correctement sur les consoles hors région.

:::

:::details Vais-je perdre des fonctionnalités si j'installe un CFW ?

Non. Les consoles avec un custom firmware peuvent télécharger les mises à jour des jeux et lancer des cartouches de jeu comme n'importe quelle autre 3DS.

:::

:::details Je peux garder mes NNID, sauvegardes, jeux numériques (etc.) ?

Votre NNID (si vous en avez un) ne sera pas affecté par ce guide. Les consoles des régions KOR, CHN ou TWN n'ont de toute façon pas de NNID et ne sont donc pas affectées.

Suivre ce guide à lui seul ne devrait pas entraîner de perte de données (sauvegardes, jeux numériques, etc), mais la corruption de la carte SD est toujours une possibilité. Vous devriez faire une sauvegarde du contenu de votre carte SD si vous avez des données importantes.

:::

:::details Ma 3DS sera-t-elle bannie pour avoir un CFW ?

Les bans ne sont plus possibles car les services Nintendo Network ont été fermés (pour tout le monde).

:::

:::details Puis-je faire ceci sans un ordinateur (par ex. un smartphone Android) ?

Dans la plupart des cas, oui ! L'exploit MSET9 (principalement utilisé pour le dernier firmware sur les Old 3DS) nécessite l'exécution d'un script Python ou l'utilisation d'une application Android, alors que tous les autres exploits ne nécessitent que le placement de fichiers sur la carte SD.

Il se peut que vous ayez besoin d'un ordinateur fonctionnant sous Windows, macOS ou Linux pour reformater votre carte SD si elle a une capacité de 64 Go ou plus.

:::

:::details Quelle taille de carte SD puis-je utiliser ?

Vous aurez besoin d'au moins 1,5 Go d'espace libre sur votre carte SD pour suivre ce guide dans son entièreté. Bien que la 3DS soit officiellement compatible avec les cartes SD jusqu'à 32 Go, les cartes SD plus grandes peuvent être utilisées si elles sont reformatées manuellement en FAT32. Il n'est pas recommandé d'utiliser des cartes SD de plus de 128 Go en raison de problèmes connus avec les graphismes GBA et les thèmes personnalisés.

:::

:::details Devrais-je utiliser une nouvelle carte SD, ou celle que j'ai déjà ?

Vous ne devriez utiliser qu'une seule carte SD avec une 3DS à la fois. Si vous utilisez une autre carte SD pour modder votre console, vous allez créer un autre 'profil' pour votre logiciel moddé, qui sera inaccessible sur votre carte SD d'origine. Cependant, **votre console restera moddée**, puisque le mod est installé sur la mémoire interne (pas sur la carte SD).

Si vous avez acheté une nouvelle carte SD pour l'utiliser avec votre console, vous devriez formater la nouvelle carte SD ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))), puis copier et coller tout le contenu de votre ancienne carte SD vers la nouvelle carte SD. Vous pouvez le faire avant ou après avoir moddé la console.

:::

:::details J'ai entendu parler de plusieurs choses pour lesquelles je devrais payer (Gateway, Sky3DS, ntrboot, R4, etc). En ai-je besoin ?

Non. Bien qu'un linker DS puisse être utilisée pour modifier une 3DS à l'aide de [ntrboot](ntrboot), il existe désormais une méthode logicielle gratuite disponible pour la plupart des consoles.

Les linkers en mode 3DS tels que Gateway et Sky3DS ne sont pas recommandés car ils sont obsolètes et peuvent comporter un risque de brick.

:::

:::details Quelle est la différence entre un custom firmware et un homebrew ?

En termes de définition, le custom firmware fait référence à une modification du logiciel système de la 3DS pour faire des choses qu'elle n'est normalement pas en mesure de faire. Les Homebrew font généralement référence aux logiciels créés en dehors des sources officielles (c'est-à-dire non distribués par l'eShop ou des cartouches).

Historiquement, la 3DS avait un accès aux homebrew de type "userland" grâce à des exploits plus anciens comme ninjhax, que les gens appelaient parfois juste "homebrew". Le niveau d'accès au système accordé avec "userland" vous permettait d'exécuter des homebrew et émulateurs de base, mais ne vous permettait pas de (facilement) modifier des jeux ou d'extraire des cartes de jeu. C'était aussi beaucoup moins stable, avec des homebrew crashant malencontreusement et nécessitant un redémarrage complet. Le custom firmware offre un niveau d'accès au système beaucoup plus élevé tout en étant plus stable que les points d'entrée ne donnant accès qu'aux homebrew.

:::

## FAQ Post-Installation

:::details Est-ce sans risques de mettre à jour ma 3DS vers la dernière version avec un CFW dessus ?

Si vous utilisez Luma3DS, votre lanceur de custom firmware (boot9strap) ne sera _jamais_ supprimé quand vous effectuerez une mise à jour de la console. Il y a eu des mises à jour dans le passé qui ont entraîné un plantage de Luma3DS au démarrage, c'est donc une bonne idée d'attendre quelques heures pour s'assurer que la dernière mise à jour ne rendra pas la console temporairement inutilisable jusqu'à ce que Luma3DS soit mis à jour. Les mises à jour de la console peuvent être effectuées de la même manière qu'elles sont sur une 3DS non modifiée : via les Paramètres de la console, le mode sans échec ou l'invite de mise à jour lorsque la mise à jour est automatiquement téléchargée.

:::

:::details Comment mettre à jour ma carte SD ?

Copiez et collez le contenu de votre ancienne carte SD vers la nouvelle carte SD formatée au préalable en FAT32. Pour les cartes SD de 128 Go, une taille d'allocation de 65536 est recommandée. Les cartes SD de plus de 128 Go ne sont pas recommandées en raison de problèmes connus avec les graphismes GBA et les thèmes personnalisés. Des instructions de formatage spécifiques sont disponibles ici : [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)).

:::

:::details Puis-je transférer mon système avec le CFW ?

Oui, les transferts systèmes peuvent être effectués par le biais de la fonction officielle de Transfert de données vers d'autres consoles avec CFW (des incohérences peuvent survenir si la console cible n'est pas hackée). Les tickets pour les titres illégitimes (homebrew) ne seront pas transférés, mais il est possible de faire réapparaître ces titres avec [faketik](https://github.com/ihaveamac/faketik/releases/latest). Assurez-vous de ne pas effectuer de transfert sans fil, car cela supprimera les titres illégitimes. Le CFW restera sur les deux consoles.

:::

:::details Comment puis-je changer la langue de la console sur une 3DS japonaise ?

Le seul moyen de changer la langue d'une 3DS japonaise est d'effectuer un [changement de région](region-changing). Notez que ceci est très susceptible de rendre inutilisable l'eShop de votre console, ce qui signifie que vous ne pourrez pas mettre à jour vos jeux, qu'ils soient en région ou hors région. Vous ne pourrez pas accéder à Banque Pokémon (si vous l'avez installée), car elle dépend de l'accès eShop.

:::

:::details Comment mettre à jour les applications homebrew ?

Cela dépend du format de l'application homebrew. En général :

- Les homebrew au **format CIA** peuvent être mis à jour en installant un nouveau CIA, qui écrasera généralement l'ancien. Si l'ancien CIA n'est pas écrasé, vous pouvez supprimer l'ancien via le menu de Gestion des données comme n'importe quel autre application 3DS.
- Les homebrew au **format 3DSX** peuvent être mis à jour en remplaçant le fichier 3DSX dans `/3ds/` par une nouvelle copie. Si l'application homebrew inclut des ressources supplémentaires, vous devrez peut-être placer ce dossier ailleurs. Reportez-vous à la documentation de l'application homebrew.
- Pour mettre à jour Luma3DS, voir [cette page](restoring-updating-cfw). Pour mettre à jour GodMode9, voir [cette page](godmode9-usage#updating-godmode9).

:::

:::details Comment mets-je à jour mes jeux ?

Vous pouvez continuer à télécharger les mises à jour de jeu depuis le Nintendo eShop, même si celui-ci est maintenant fermé.

Si le jeu n'est pas de la même région que votre console, vous allez avoir besoin d'[extraire les mises à jour](dumping-titles-and-game-cartridges) depuis une 3DS qui a cette mise à jour d'installée. Le Nintendo eShop ne contient que des mises à jour pour la région de la console (par exemple, une 3DS japonaise ne disposera que de mises à jour pour les jeux japonais).

:::

:::details À l'aide ! Quelque chose de grave est arrivé à ma 3DS, elle ne veut pas démarrer vers le menu HOME...

Veuillez consulter le [guide de dépannage](troubleshooting-post-install). **Désinstaller le CFW lorsque votre console ne démarre plus n'est pas recommandé, car il est très susceptible de conduire à un brick**.

:::

## FAQ menuhax / A9LH / Gateway

:::details J'ai moddé ma console il y a (x) années, donc elle a déjà une sorte de homebrew. Que dois-je faire ?

Il est recommandé que vous mettiez à jour votre ancienne configuration vers une configuration moderne basée sur boot9strap. Suivez le guide de [Vérification du CFW](checking-for-cfw) pour voir comment mettre à jour votre installation.

:::

:::details Mon installation marche très bien pour moi. Pourquoi devrais-je la mettre à jour ?

La grande majorité des Homebrew modernes (tels que Checkpoint et BootNTR Selector) n'ont été testés que sur les configurations modernes basées sur boot9strap et il se peut qu'ils ne marcheront pas entièrement (ou du tout) sur des configurations anciennes basées sur menuhax, A9LH, ou Gateway. De plus, selon votre installation, vous ne serez peut-être pas en mesure de mettre à jour vers le firmware le plus récent en toute sécurité. Des configurations modernes basées sur bootstrap9 permettent un plus grand niveau d'accès au système que des hacks anciens, y compris la possibilité d'extraire le bootrom de votre console.

:::

:::details Vais-je perdre quoi que ce soit si je mets à jour ma configuration ?

Votre ancienne configuration (y compris votre EmuNAND, si vous en avez un) peut normalement être directement migrée vers boot9strap sans perte de données. Si vous avez des données qui vous sont particulièrement importantes, ce serait une bonne idée de faire une sauvegarde déchiffrée de vos données avant de mettre à jour votre configuration à l'aide d'un outil comme [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).

:::

:::details Comment déplacer des sauvegardes depuis une configuration Gateway existante vers une configuration plus moderne ?

Voir [ce fil](https://gbatemp.net/threads/425743/).

:::
