# Informations importantes

::: info

Lisez attentivement cette page s'il s'agit de la première fois que vous hacker une 3DS (ou si vous n'êtes pas familier avec la technologie en général) ! Si vous savez ce que vous faites et que vous avez une expérience antérieure, continuez vers [Pour commencer](get-started).

:::

Cette page couvre une partie de la terminologie informatique de base et des informations spécifiques à la 3DS que vous devriez connaître avant de suivre ce guide.

Chaque section est réduite par défaut. Cliquez ou appuyez sur le nom de la section pour l'ouvrir.

## Compatibilité

:::: details Avec quelles consoles ce guide est-il compatible ?

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

Ce guide fonctionne avec toutes les consoles commerciales de la famille Nintendo 3DS (y compris la 3DS, les 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL et New 2DS XL/LL), indépendamment de la région ou du firmware. Il n'est PAS compatible avec la famille de consoles DSi (DSi, DSi XL/LL). Pour les consoles de la famille DSi, veuillez consulter [ce guide](https://dsi.cfw.guide).

::::

:::: details De quel type d'ordinateur / matériel ai-je besoin pour suivre ce guide ?

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

Dans la plupart des cas, vous pouvez suivre ce guide tant que vous avez la possibilité de télécharger des fichiers depuis Internet et de les copier sur votre carte SD. Selon votre ordinateur/téléphone/appareil électronique, vous devrez peut-être acheter un adaptateur de carte SD vers USB pour permettre à votre ordinateur de lire votre carte SD.

::::

:::: details Quel type de carte SD ma console utilise-t-elle/a-t-elle besoin ?

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

L'emplacement du port carte SD et le type de carte SD accepté dépendent du modèle de votre 3DS. Plus d'informations peuvent être trouvées sur la [page officielle de l'assistance de Nintendo](https://fr-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card).

La 3DS peut lire des cartes SD de n'importe quelle capacité (même celles supérieures à 32 Go), mais la carte doit être formatée en FAT32 (**pas** exFAT ou NTFS). Vous pouvez utiliser l'un des outils suivants pour formater votre carte SD, selon votre système d'exploitation : [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)). Les cartes SD de plus de **128 Go** ne sont pas recommandées en raison de problèmes connus avec des thèmes personnalisés et des graphiques GBA/DS.

::: warning

Pour suivre ce guide, vous aurez besoin d'une carte SD d'une capacité d'au moins **2 Go**.

:::

::: info

Si vous le souhaitez, vous pouvez vérifier si votre carte SD contient des erreurs avant de suivre ce guide en utilisant [H2testw (Windows)](h2testw-\(windows\)), [F3 (Linux)](f3-\(linux\)), ou [F3XSwift (Mac)](f3xswift-\(mac\))

:::

::::

:::: warning

:::details Risques potentiels (Décharge de responsabilité)

En hackant votre console, vous la soumettez à un risque (très faible, mais pas inexistant) de brick (console inutilisable). _**Un placement de fichier incorrect ne brickera PAS votre console**_, mais délibérément ignorer des instructions le peut.

En bref, le hack de votre console est sûr, mais _**vous seul êtes responsable**_ en cas de problème.

:::

::::

## Terminologie importante

::: warning

Suivre ce guide à lui seul ne devrait pas entraîner de perte de données, mais la corruption de la carte SD est toujours une possibilité. Vous devriez faire une sauvegarde de votre carte SD (en particulier le dossier `Nintendo 3DS`) si vous avez des données importantes.

:::

:::: details Que signifie "racine de la carte SD" ou "/luma/" ?

::: info

![](/images/screenshots/onboarding/sdroot.png)

:::

Quand vous copiez des fichiers sur la carte SD, il est important de les copier au bon endroit - sinon, la console ne détectera pas le fichier et l'exploit ou le logiciel que vous essayez d'utiliser ne fonctionnera pas. Un terme que vous verrez fréquemment sur ce guide est **racine de la carte SD**, ce qui signifie que vous n'êtes à l'intérieur d'aucun dossier sur votre carte SD. Le répertoire qui apparaît lorsque vous ouvrez votre carte SD pour la première fois sur votre ordinateur est appelé la « racine ».

Vous pouvez également voir les noms de dossiers indiqués comme ceci : `/dossier/`. Les slashs sont utilisés pour indiquer des répertoires et ne font pas partie du nom du dossier. Par exemple, `/dossier1/dossier2/` ferait référence au `dossier2` à l'intérieur du `dossier1` :

::: info

![](/images/screenshots/onboarding/folders.png)

:::

Les signes **"plus grand que" et "plus petit que"** (\< et \>) sont également parfois utilisés pour faire référence à des identifiants spécifiques au système. Par exemple, si le guide dit `<ID0>`, il fait référence à l'identifiant spécifique à la console dans le dossier `Nintendo 3DS`, plutôt qu'à un dossier littéralement nommé "ID0" :

::: info

![](/images/screenshots/onboarding/anglebrackets.png)

:::

::::

:::: details Comment télécharger des fichiers depuis GitHub ?

::: info

![](/images/screenshots/onboarding/github.png)

:::

Dans ce guide, vous copierez les fichiers qui sont téléchargés sur votre ordinateur ou votre téléphone, sur la carte SD de votre console. Beaucoup de ces fichiers proviennent de GitHub, qui est un site utilisé par les développeurs pour publier leurs logiciels open-source. Lorsque vous téléchargez des fichiers depuis GitHub, vous devriez télécharger le fichier qui _n'est pas_ le code source.

::::

:::: details Comment puis-je extraire/ouvrir un fichier ZIP ?

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

Certains des fichiers que l'on vous demandera de télécharger arrivent dans le format `.zip`, qui est utilisé pour empaqueter plusieurs fichiers en un.

Quand on vous demande de "copier un (fichier) à partir de (fichier).zip", cela signifie que vous devez ouvrir (ou "extraire") le fichier ZIP. À l'intérieur du fichier ZIP se trouve le fichier que vous cherchez, après quoi vous pouvez le copier à l'emplacement spécifié sur votre carte SD.

Sur la plupart des systèmes d'exploitation, vous pouvez extraire des fichiers en double-cliquant sur le fichier. Si cela ne fonctionne pas, vous pouvez installer un outil d'extraction tiers réputé comme [7-zip](https://7-zip.org/) à la place.

::::

:::: details Que sont les extensions de fichier ?

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

Si votre ordinateur exécute Windows, les extensions de fichiers peuvent être masquées par défaut, ce qui peut rendre plus difficile la recherche des fichiers que vous cherchez. Pour activer l'affichage des extensions de fichiers, suivez [ces instructions](file-extensions-\(windows\)).

::::

## Obtenir de l'aide

Si vous rencontrez un problème en suivant ce guide, vous pouvez obtenir de l'aide de plusieurs façons !

- Si vous avez des questions qui n'ont pas reçu de réponse sur cette page, leurs réponses peuvent être dans la [FAQ Pré-installation](faq#pre-installation-faq).
- Si vous rencontrez un problème en suivant ce guide, vous pouvez consulter la page de [Dépannage](troubleshooting) pour trouver une solution.
- Si les ressources que nous vous avons fournies ici ne vous ont pas aidées, vous pouvez obtenir une assistance individuelle sur [Nintendo Homebrew sur Discord](https://discord.gg/MWxPgEp).

::: tip

Continuer vers [Pour commencer](get-started)

:::
