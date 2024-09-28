# Instalando boot9strap (superskaterhax)

:::details Technical Details (optional)

Para detalhes técnicos sobre os exploits que você usará nesta página, consulte [aqui](https://github.com/zoogie/super-skaterhax).

:::

### Compatibility Notes

Super-skaterhax (quando usado para iniciar o Homebrew Launcher) é compatível com modelos New na versão 11.15.0 e acima em todas as regiões.

::: warning

As instruções fornecidas só se aplicam ao New 3DS, New 3DS XL e ao New 2DS XL. Por favor, certifique-se de que o console que você está modificando é um New 3DS, New 3DS XL, ou New 2DS XL antes de continuar.

:::

### What You Need

- The [Super-skaterhax](https://skater.nintendohomebrew.com) zip for your console's region and system version

#### Section I - Prep Work

Nesta seção, você irá copiar os arquivos necessários para acionar tanto superskaterhax quanto o Homebrew Launcher.

1. Desligue seu console

2. Insira o cartão SD no seu computador

3. Copy everything from the Super-skaterhax `.zip` to the root of your SD card, overwriting any existing files

   ::: info

   ![](/images/screenshots/skater-root-layout.png)

   :::

4. Reinsira o cartão SD no seu console

5. Ligue o seu console

6. Launch System Settings

7. Selecione "Outras Configurações"

8. Navigate to "Profile" -> "Region Settings"
   - If you get a [warning](/images/screenshots/skaterhax/country-change-notice.png) that tells you that you will lose access to Nintendo Network ID features, you can safely select OK to continue
   - After completing this page, you can restore the region settings back to normal

9. Select the following options according to your console's region ([image](/images/screenshots/skaterhax/skater-lang.png))
   - USA: United States, Do Not Set
   - EUR: United Kingdom, Do Not Set
   - JPN: 日本, 設定しない
   - KOR: 대한민국, 설정하지 않음

10. Exit System Settings

#### Section II - super-skaterhax

Nesta seção, você visitará a página web contendo o exploit, que iniciará o Homebrew Launcher.

::: info

Se você ainda não tem, certifique-se de que você tem uma conexão de Internet ativa configurada em seu console.

:::

1. No Menu HOME, pressione os gatilhos da Esquerda e da Direita ao mesmo tempo para abrir a câmera
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/super/` for EUR/USA/JPN, `https://zoogie.github.io/web/korea` for KOR)
2. Toque no botão do código QR e digitalize um dos seguintes códigos QR para a região do seu console [aqui](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
   - If you get a security certificate warning, please ensure that the system date is today's
3. Press (Select) to open the bookmark tab
   - If your (Select) button does not respond, tap the star icon on the bottom-left corner of the screen
4. Toque em "Adicionar aos favoritos"
5. Aperte (B) uma vez para retornar ao navegador
6. Press (ZR) to open the tab list
   - If your (ZR) button does not respond, tap the two overlapped squares near the bottom-right corner of the screen
7. Make sure that the only tab open is the super-skaterhax website
   - This tab should be highlighted in blue on the tab list
   - If other tabs are open, close them
8. Aperte (B) uma vez para retornar ao navegador
9. Aperte (Start) para abrir o menu de contexto
   - If your (Start) button does not respond, tap the 3-line menu on the bottom-right corner of the screen
10. Toque em "Configurações"
11. Toque em "Excluir Cookies"
12. Aperte (A) para continuar
13. Aperte (Home) para retornar ao Menu HOME, depois aperte (A) imediatamente para iniciar o navegador novamente
14. Select the "GO GO!" button on the top of the bottom screen
15. Press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
    - If your console freezes on a yellow screen, hold the POWER button until it turns off, then retry this section
    - If your console freezes on a red screen, hold the POWER button until it turns off, redo step 3 of Section II, then retry this section
    - If your console [shows the word Text on the top-left corner of the bottom screen](/images/screenshots/skaterhax/skater-old3ds.png), you have an Old 3DS and this exploit **will not work on your device**. Se este for o caso, siga [Instalando boot9strap (MSET9)](installing-boot9strap-\(mset9\)) ao invés disso
    - If you get another error, try again up to 5 times, and if it still doesn't work, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-super-skaterhax)
16. Seu console terá inicializado o Homebrew Launcher
17. Abra o nimdsphax da lista de homebrews
18. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
    - If your console freezes on a red or green screen, hold the POWER button until it turns off, then retry this section
    - This may take up to five attempts

#### Section III - Installing boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

You may now restore your region settings back to normal.

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
