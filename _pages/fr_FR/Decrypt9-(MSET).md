* * *

title: "Decrypt9 (MSET)" permalink: /decrypt9-(mset).html lang: en_US ref: decrypt9-(mset)

* * *

La première chose que ce guide va faire est de vous faire exécuter Decrypt9, qui est un outil qui nous permettra d'installer la version 2.1.0, qui contient une vulnérabilité qui est nécessaire pour poursuivre l'exploitation du système. {: .notice}

Si vous avez déjà un CFW basé sur une EmuNAND, ce guide concerne exclusivement SysNAND et vous devez suivre toutes les instructions en rapport à la SysNAND. Notez que les termes EmuNAND et RedNAND font référence à des implémentations légèrement différentes [du même concept](http://3dbrew.org/wiki/NAND_Redirection). {: .notice--info}

#### Ce dont vous aurez besoin

* Un linker DS fonctionnant sur votre version de 3DS
* La dernière version de [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Instructions

  1. Créez un dossier qui s'appellera `files9` sur la racine de votre carte SD si le dossier n'existe pas
  2. Copiez `Launcher.dat` et `Decrypt9WIP.dat` de l'archive Decrypt9WIP`.zip` à la racine de votre carte SD
  3. Réinsérez votre carte SD dans votre 3DS
  4. Copiez `Decrypt9.nds` de l'archive Decrypt9WIP`.zip` sur votre linker
  5. Démarrez votre linker DS
  6. Démarrez `Decrypt9.nds` sur votre linker DS
  7. Sélectionnez l'option correcte pour la version de votre système 
    * 4.X.X -> « 4.x Decrypt9WIP »
    * 6.X.X -> « 6.x Decrypt9WIP »
  8. Redémarrer la console, puis allez dans « Paramètres de la console », puis « Autres paramètres », puis « Profil », puis « Profil Nintendo DS »
  9. Si l'exploit réussit, vous allez démarrer dans Decrypt9

Continuez vers [2.1.0 ctrtransfer](2.1.0-ctrtransfer). {: .notice--primary}