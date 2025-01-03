---
noneSelected: Le modèle de la console doit être sélectionné.
invalidVersion: Il semblerait que ce numéro de version soit invalide.
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/selecting.js
---

# Pour commencer

Avant de commencer ce guide, nous verrons si un custom firmware est déjà installé et vérifierons la version actuelle du logiciel système de votre console.

### Section I - Vérification de la présence d’un CFW

1. Éteignez votre console
2. Maintenez le bouton (Select) enfoncé
3. Allumez votre console tout en maintenant le bouton (Select) enfoncé
4. Si vous ne voyez pas de menu personnalisé (votre console démarre sur le Menu HOME), vous pouvez passer à la section suivante

::: warning

Si vous voyez l'écran de configuration de Luma3DS ou tout autre menu personnalisé (par ex. GodMode9, Decrypt9WIP), STOP - vous avez déjà un custom firmware ! Continuez [ici](checking-for-cfw#what-to-do-next).

:::

### Section II - Vérification de la version du logiciel système

1. Lancez les Paramètres de la console
2. La version de votre logiciel système sera affichée en bas à droite de l'écran supérieur (par ex. "Ver. 11.17.0-50U")

### Section III – Sélectionner une méthode

Pour trouver la méthode adaptée à votre console, veuillez sélectionner le modèle de votre console et la version du système que vous avez trouvé dans la Section II.

<!--@include: @/_internal/consoleVersionSelect.html -->

---

#### Méthodes alternatives

Si possible, vous devriez suivre la méthode indiquée dans le formulaire ci-dessus.

Sinon, des méthodes qui fonctionnent sur toutes les versions sont disponibles, mais nécessitent du matériel supplémentaire :

1. [ntrboot](ntrboot) - nécessite un linker DS compatible
2. [Installation de boot9strap (Hardmod)](installing-boot9strap-\(hardmod\)) - nécessite de faire de la soudure
