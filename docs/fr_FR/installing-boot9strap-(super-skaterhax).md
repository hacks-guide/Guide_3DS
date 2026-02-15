---
head:
  [
    [ 'script', { src: '/assets/js/common.js' } ],
    [ 'script', { src: '/assets/js/skater-link.js' } ],
    [ 'script', { src: '/assets/js/link-common.js' } ]
  ]
---

# Installation de boot9strap (super-skaterhax)

:::details Détails techniques (optionnel)

Pour les détails techniques sur les exploits que vous utiliserez sur cette page, voir [ici](https://github.com/zoogie/super-skaterhax).

:::

### Notes de compatibilité

Super-skaterhax (lorsqu'il est utilisé pour lancer l'Homebrew Launcher) est compatible avec les modèles New 3DS en version 11.15.0 et plus dans toutes les régions.

::: info

Cet exploit est connu pour être irrégulier : ça marche pour certaines personnes, mais pas pour d'autres. Si vous préférez utiliser un exploit plus régulier (ce qui pourra prendre plus de temps, mais aura le même résultat final), suivez [MSET9](installing-boot9strap-\(mset9\)) à la place.

:::

### Ce dont vous avez besoin

- Le `.zip` [Super-skaterhax](https://skater.nintendohomebrew.com) pour la région et la version système de votre console

#### Section I - Préparatifs

Dans cette section, vous copierez les fichiers nécessaires pour déclencher à la fois super-skaterhax et l'Homebrew Launcher.

1. Éteignez votre console

2. Insérez votre carte SD dans votre ordinateur

3. Copiez tout depuis le `.zip` de Super-skaterhax à la racine de votre carte SD. S'il y a déjà des fichiers existants, remplacez-les par les nouveaux fichiers.
   ::: info

   ![](/images/screenshots/skaterhax/skater-root-layout.png)

   :::

4. Réinsérez votre carte SD dans votre console

5. Allumez votre console

6. Ouvrez les Paramètres de la Console

7. Sélectionnez "Autres paramètres"

8. Naviguez vers "Profil" -> "Paramètres de région"
   - Ces paramètres seront temporairement modifiés pour augmenter le taux de réussite de l'exploit
   - Vous pourrez restaurer les paramètres de votre région à la normale une fois que vous aurez terminé cette page
   - Si vous recevez un [avertissement](/images/screenshots/skaterhax/country-change-notice.png) indiquant que vous perdrez l'accès aux fonctionnalités de l'identifiant Nintendo Network, vous pouvez sélectionner OK en toute sécurité pour continuer

9. Sélectionnez les options suivantes en fonction de la région de votre console ([image](/images/screenshots/skaterhax/country-change-notice.png))
   - USA : Sélectionnez d'abord United States (États-Unis), puis sélectionnez Do Not Set (Ne pas choisir)
   - EUR : Sélectionnez d'abord United Kingdom (Royaume-Uni), puis sélectionnez Do Not Set (Ne pas choisir)
   - JPN: Sélectionnez d'abord 日本, puis sélectionnez 設定しない
   - KOR: Sélectionnez d'abord 대한민국, puis sélectionnez 설정하지 않음

10. Naviguez vers "Date et heure"

11. Réglez la "Date d'aujourd'hui" et l'"Heure actuelle" à la date et heure actuelle

12. Quittez Paramètres de la console

#### Section II - super-skaterhax

Dans cette section, vous allez visiter la page web d'exploit du Navigateur Internet, qui lancera l'Homebrew Launcher.

::: info

Une vidéo en anglais détaillant ces étapes est disponible [ici](https://www.youtube.com/watch?v=DEcZB72vJts).

:::

1. Ouvrez le Navigateur Internet
2. Appuyez sur l'icône à 3 lignes (☰) en bas à droite de l'écran
3. Appuyez sur `Paramètres` -> faites défiler -> `Effacer données de sauvegarde` -> `Oui` -> `Réinitialiser` -> `OK`
   - Le navigateur se fermera
4. Rouvrez le Navigateur Internet
5. Appuyez sur `Suite` -> `Google` -> `OK` -> `OK`
6. Appuyez sur la barre d'adresse en haut de l'écran du bas
7. Saisissez l'URL qui correspond à la région de votre console :
   - **USA/EUR/JPN** : `https://skater.686178.xyz/go/super`
   - **KOR** : `https://skater.686178.xyz/go/korea`
8. Appuyez sur "Ouvrir"
   - Vous devriez voir le texte "GO GO!". Il ne faut pas le cliquer pour le moment
9. Appuyez sur l'icône à 3 lignes (☰) en bas à droite de l'écran
10. Appuyez sur "Ajouter aux favoris"
11. Appuyez sur l'icône à 3 lignes (☰) en bas à droite de l'écran
12. Appuyez sur `Paramètres` -> `Effacer les cookies` (témoins) -> `Oui`
13. Appuyez sur (Home) pour retourner au Menu HOME, puis rouvrez immédiatement le Navigateur Internet
14. Attendez que la page se charge complètement, puis appuyez sur le bouton "GO GO!" en haut de l'écran du bas
15. Attendez que la page se charge complètement, puis appuyez sur (A) pour ignorer le [pop-up](/images/screenshots/skaterhax/skater-popup.png)
16. Si votre console affiche :
    - **L'écran du Homebrew Launcher** : Continuez à l'étape suivante
    - **Une boîte de message blanche qui affiche "Une erreur est survenue"** : L'exploit a échoué à cause du hasard. Ouvrez les Paramètres de la Console, changez la langue à une autre langue (si possible), puis réessayez cette section. Il va peut-être falloir répéter cette séquence jusqu'à dix fois
      - Sur les consoles de la région JPN/KOR, il n'y a qu'une langue disponible. Sur ces consoles, vous devriez ouvrir les Paramètres de la Console, les fermer, puis réessayer cette section
      - Si l'exploit échoue encore après cinq tentatives, il y a peut-être un problème avec vos fichiers ou vos préparations. Assurez-vous que la région et la date/heure sont correctes, et que vous avez bien suivi cette section **à la lettre**. Si vous avez utilisé WinRAR pour extraire les fichiers sur la carte SD, extrayez les fichiers de nouveau en utilisant l'Explorateur de fichiers ou 7-zip
      - Si l'exploit échoue encore après dix tentatives, suivez [MSET9](installing-boot9strap-\(mset9\)) à la place
    - **Un écran noir qui affiche "Une erreur est survenue"** : Votre placement des fichiers est incorrect. Assurez-vous que les fichiers super-skaterhax sont à la racine de la carte SD
    - **Un écran jaune** : l'Homebrew Launcher n'a pas pu s'ouvrir à cause du hasard. Maintenez le bouton POWER jusqu'à ce que la console s'éteigne, puis réessayez cette section
    - **[Le mot "Text"](/images/screenshots/skaterhax/skater-old3ds.png)** : Vous avez une Old 3DS, sur laquelle cet exploit **ne fonctionne pas**. Si c'est le cas, vous devriez suivre [MSET9](installing-boot9strap-\(mset9\)) à la place
17. Lancez "nimdsphax" que vous trouverez dans la liste des homebrews
18. Si l'exploit a réussi, vous devriez avoir démarré dans SafeB9SInstaller
    - Si votre console se freeze (ne répond plus) sur un écran rouge ou vert, maintenez le bouton POWER jusqu'à ce qu'elle s'éteigne, puis réessayez cette section

#### Section III - Installer boot9strap

Dans cette section, vous installerez un custom firmware sur votre console.

1. Lorsque vous y êtes invité, entrez la combinaison de touches indiquée sur l'écran supérieur pour installer boot9strap
   - Dans le cas où un message en rouge apparaîtrait lors d'une étape sur l'écran du bas et que vous n'êtes pas sollicité pour saisir une combinaison de boutons, [suivez ce guide de dépannage](troubleshooting-super-skaterhax)
2. Une fois l'opération terminée, appuyez sur (A) pour redémarrer votre console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Vous pouvez maintenant restaurer vos paramètres régionaux habituels.

:::

::: tip

Continuer vers [Finalisation de l'installation](finalizing-setup)

:::
