---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/skater-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Instalando boot9strap (superskaterhax)

:::details Detalhes técnicos (opcional)

Para detalhes técnicos sobre os exploits que você usará nesta página, consulte [aqui](https://github.com/zoogie/super-skaterhax).

:::

### Notas de Compatibilidade

Super-skaterhax (quando usado para iniciar o Homebrew Launcher) é compatível com modelos New na versão 11.15.0 e acima em todas as regiões.

::: info

This exploit is known to be inconsistent: it works for some people, but not others. If you prefer to use a more consistent exploit (which may take longer, but will have the same end result), follow [MSET9](installing-boot9strap-\(mset9\)) instead.

:::

### O que é necessário

- O arquivo `.zip` do [super-skaterhax](https://skater.nintendohomebrew.com) para a região e versão de sistema do seu console

#### Seção I - Preparação

Nesta seção, você irá copiar os arquivos necessários para acionar tanto superskaterhax quanto o Homebrew Launcher.

1. Desligue seu console

2. Insira o cartão SD no seu computador

3. Copie tudo do `.zip` do super-skaterhax para a raiz do seu cartão SD, substituindo quaisquer arquivos existentes

    ::: info

    ![](/images/screenshots/skaterhax/skater-root-layout.png)

    :::

4. Reinsira o cartão SD no seu console

5. Ligue o seu console

6. Abra as Configurações do Sistema

7. Selecione "Outras Configurações"

8. Navegue para "Perfil" -> "Configurações de Região"
    - Estas configurações serão alteradas temporariamente para aumentar as chances de sucesso do exploit
    - Você pode restaurar suas configurações de região de volta ao normal assim que finalizar esta página
    - Se você receber um [aviso](/images/screenshots/skaterhax/country-change-notice.png) dizendo que você perderá o acesso aos recursos de sua Nintendo Network ID, é seguro selecionar OK para continuar

9. Selecione as seguintes opções de acordo com a região de seu console ([imagem](/images/screenshots/skaterhax/skater-lang.png))
    - USA: United States, Do Not Set
    - EUR: United Kingdom, Do Not Set
    - JPN: 日本, 設定しない
    - KOR: 대한민국, 설정하지 않음

10. Navigate to "Date & Time"

11. Set "Today's Date" and "Current Time" to the current date and time in your timezone

12. Saia das Configurações do Sistema

#### Seção II - super-skaterhax

Nesta seção, você visitará a página web contendo o exploit, que iniciará o Homebrew Launcher.

::: info

A video detailing these steps is available [here](https://www.youtube.com/watch?v=DEcZB72vJts).

:::

1. Open the Internet Browser
2. Tap the 3-line (☰) icon on the bottom-right corner of the screen
3. Tap `Settings` -> scroll down -> `Reset Save Data` -> `Clear All` -> `Clear` -> `OK`
    - The browser will close
4. Reopen the Internet Browser
5. Tap `Next` -> `Google` -> `OK` -> `OK`
6. Tap on the address bar at the top of the bottom screen
7. Enter the URL corresponding to your console's region:
    - **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
    - **KOR**: `https://skater.686178.xyz/go/korea`
8. Tap "Open"
    - You should see the text "GO GO!". Do not click on it yet
9. Tap the 3-line (☰) icon on the bottom-right corner of the screen
10. Tap on "Add to Bookmarks"
11. Tap the 3-line (☰) icon on the bottom-right corner of the screen
12. Tap on `Settings` -> `Delete Cookies` -> `Yes`
13. Press (Home) to return to the HOME Menu, then immediately reopen the Internet Browser
14. Wait for the page to fully load, then tap the "GO GO!" button on the top of the bottom screen
15. Wait for the page to fully load, then press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
16. If your console displays:
    - **"The Homebrew Launcher" screen**: Continue to the next step
    - **A white "Error has occurred" message box**: The exploit failed due to random chance. Open System Settings, change the language to a different one (if possible), then retry this section. You may have to repeat this sequence up to ten times
        - On JPN/KOR region consoles, there is only one language setting. On those consoles, you should open System Settings, close it, then retry this section
        - If the exploit is still unsuccessful after five attempts, there may be a problem with your files or prep work. Ensure that region and date/time are correct, and that you have been following this section **exactly**. If you used WinRAR to extract files to the SD card, re-extract the files using File Explorer or 7-zip instead
        - If the exploit is still unsuccessful after ten attempts, follow [MSET9](installing-boot9strap-\(mset9\)) instead
    - **A black screen that says "An error has occurred"**: Your file placement is incorrect. Ensure that the super-skaterhax files are on the root of the SD card
    - **A yellow screen**: Homebrew Launcher failed to open due to random chance. Hold the POWER button until the console turns off, then retry this section
    - **[The word "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: You have an Old 3DS, where this exploit **does not work**. Se este for o caso, siga [Instalando boot9strap (MSET9)](installing-boot9strap-\(mset9\)) ao invés disso
17. Abra o nimdsphax da lista de homebrews
18. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
    - Se o seu console congelar em uma tela vermelha ou verde, segure o botão POWER até que ele desligue, então tente esta seção novamente

#### Seção III - Instalando boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

You may now restore your region settings back to normal.

:::

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
