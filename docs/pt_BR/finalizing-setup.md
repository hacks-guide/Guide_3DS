# Finalizando a Instalação

## Leitura Obrigatória

Na página anterior, você instalou o boot9strap, um loader de custom firmware que carrega o arquivo `boot.firm` do cartão SD ou NAND (memória interna). Neste caso, estamos usando o Luma3DS por [LumaTeam](https://github.com/LumaTeam/) como nosso `boot.firm` para alterar o console, permitindo que ele execute software homebrew.

Nesta página, faremos backups de arquivos críticos do sistema e instalaremos os seguintes programas de homebrew. A maioria dessas etapas serão automatizadas usando um script que você irá executar no seu console.

::: info

O script irá instalar os seguintes aplicativos:

- **FBI** por Steveice10 _(instala aplicativos formatados em CIA)_
- **Homebrew Launcher Loader** pelo PabloMK7 _(executa o Homebrew Launcher, para homebrew em formato 3DSX)_
- **Anemone3DS** por astronautlevel2 _(instala temas, splashes e insígnias)_
- **Checkpoint** de BernardoGiordano/FlagBrew _(gerencia dados salvos para jogos de 3DS/DS)_
- **ftpd** by mtheall _(permite acesso sem fio ao cartão SD do 3DS via FTP)_
- **Universal-Updater** por Universal-Team _(loja de aplicativos no dispositivo para baixar homebrew através do Wi-Fi)_
- **GodMode9** por d0k3 _(ferramenta multiuso para extrair dados da memória interna ou de cartuchos)_

Se você não quer um destes aplicativos, você pode removê-los depois de concluir esta página navegando até Configurações do Sistema -> Gerenciamento de Dados -> Nintendo 3DS -> Software. (GodMode9 não pode ser removido desta maneira e é geralmente necessário para outras funções.)

::: details Links do código-fonte (opcional)

Todos os aplicativos instalados neste guia são de código aberto. Se você está interessado em ver como eles funcionam, ou gostaria de deixar uma estrela para mostrar sua apreciação, seu código-fonte está vinculado aqui:

- [FBI](https://github.com/lifehackerhansol/FBI)
- [Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)
- [Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)
- [Checkpoint](https://github.com/bernardogiordano/checkpoint/releases)
- [ftpd](https://github.com/mtheall/ftpd)
- [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)
- [GodMode9](https://github.com/d0k3/GodMode9)

:::

## Notas de Compatibilidade

::: info

Se a sua instalação do CFW anterior era baseada em EmuNAND e você deseja mover o conteúdo da sua EmuNAND/RedNAND para SysNAND, siga [Mover EmuNAND](move-emunand) antes de seguir esta página. Se você não sabe o que é uma EmuNAND, isso não se aplica a você.

:::

## O que é necessário

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (download direto)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (download direto)

## Instruções

### Seção I - Preparação

Nesta seção, você copiará os arquivos necessários para seguir o resto das instruções nesta página.

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie `finalize.romfs` para a raiz do seu cartão SD
4. Abra a pasta `luma` no seu cartão SD e crie uma pasta chamada `payloads` dentro, se já não existir
5. Copie `finalize_helper.firm` para a pasta `payloads`
6. Reinsira o cartão SD no seu console

As capturas de tela abaixo indicam o layout mínimo do cartão SD que é necessário para seguir esta página. Você pode ter arquivos ou pastas extras no seu cartão SD, dependendo da sua instalação anterior ou do método que você seguiu.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### Seção II - Atualizando o Sistema

Nesta seção, você atualizará seu sistema para a versão mais recente, que é seguro de fazer com custom firmware.

<!--@include: ./_include/sysupdate.md -->

### Seção III - Configuração do RTC e DSP

Nesta seção, você irá sincronizar o relógio interno do seu 3DS com a hora real e descarregar o firmware de som (que é necessário para que alguns softwares de homebrew utilizem o som corretamente).

1. Aperte (Gatilho Esquerdo) + (D-pad pra baixo) + (Select) ao mesmo tempo para abrir o menu Rosalina
   - Se algum desses botões estiver quebrado, baixe o arquivo [config.ini](/assets/config.ini) e coloque-o na pasta `luma`, substituindo o arquivo já existente. Isso vai mudar a combinação de botões do Rosalina menu para (X) + (Y)
2. Selecione "Miscellaneous options"
3. Selecione "Dump DSP firmware"
4. Pressione (B) para continuar
5. Selecione "Nullify user time offset"
6. Pressione (B) para continuar
7. Aperte (B) para retornar para o menu principal do Rosalina
8. Aperte (B) para sair do menu do Rosalina

### Seção IV - Configuração do Script

Nesta seção, você usará uma série de scripts para automatizar a instalação de homebrews, limpeza de cartão SD e backup de arquivos do sistema.

1. Desligue seu console
2. Aperte e segure (X), e enquanto segura (X), ligue o console. Isto irá iniciar o Finalizing Setup Helper
   - If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled, or `x_finalize_helper.firm` may be in the wrong location
   - Se você encontrar um erro, consulte a página de [troubleshooting](troubleshooting-finalizing-setup)
3. After a few seconds, your console should automatically boot into GodMode9
   - From this point forward, you can access GodMode9 by holding (Start) while powering on your console
   - Holding (X) on boot will no longer do anything
4. If necessary, configure GodMode9:
   - If you are prompted to select a language, use the D-Pad and press (A) to select English
     - This language choice only affects GodMode9's menu options
     - You can set it to your language of choice after completing this guide
   - If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue
   - Se você for solicitado para consertar o RTC date&time, pressione (A) para consertar, então insira a data e a hora, depois pressione (A) para continuar
5. Once you see [root] and a list of drives, press (Home) to bring up the action menu
6. Selecione "Scripts..." (_not_ Lua scripts)
7. Selecione "finalize"
8. Siga as instruções no script, respondendo a quaisquer perguntas que lhe sejam feitas
   - If you see "Information #05: No title database", press (A) and enter the key combination on the bottom screen to proceed
   - If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting-finalizing-setup) page, then open GodMode9 by holding (Start) on boot to re-run the script
9. Uma vez que o script disser "Setup complete!", aperte (A) para desligar o dispositivo
   - Se você NÃO ver a mensagem "Setup complete!", o script não foi bem-sucedido e você terá que refazer esta seção a partir do Passo 3
10. Insira o cartão SD no seu computador
11. Copie a pasta `/gm9/backups/` no seu cartão SD para um local seguro no seu computador
    - Esta pasta contém backups críticos de arquivos e deve ser copiada para vários locais (por exemplo, armazenamento online) se possível
    - Os dois arquivos da SysNAND são seu backup da NAND e podem ser usados para reverter seu console para um estado funcional, em caso de um brick devido a problemas de software
    - O arquivo `essential.exefs` contém arquivos únicos do seu console e pode ser usado para recuperar seus dados, em caso de uma falha de hardware
12. Se você ainda os tiver, exclua os dois arquivos `SysNAND` da pasta `/gm9/backups/` do seu cartão SD
    - O arquivo `essential.exefs` é pequeno e pode ser mantido no seu cartão SD para fácil acesso

___

::: tip

Você terminou! Custom firmware agora está totalmente configurado no seu console.

:::

::: info

Tentando descobrir o que fazer com seu dispositivo recém-modificado? Visite [nossa wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Informações e Notas

::: info

Aqui estão alguns combos que você deve saber:

- Segurar (Select) ao ligar o console irá abrir o menu de configuração do Luma3DS.
- Segurar (Start) ao ligar o console irá abrir o GodMode9, ou se você tiver vários payloads na pasta `/luma/payloads/`, o chainloader do Luma3DS.
- Por padrão, pressionar (Gatilho Esquerdo) + (D-Pad para Baixo) + (Select) enquanto no modo 3DS abrirá o menu Rosalina, onde você pode verificar informações do sistema, fazer capturas de tela, habilitar cheats, e muito mais. Isto pode ser alterado a partir do menu do Rosalina.
- Segurar (Start) + (Select) + (X) ao ligar o console fará com que o LED de notificação mostre uma cor, para fins de depuração. Veja o [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4) para uma lista.

:::

### Pretendo

Pretendo é um serviço de substituição da Nintendo Network, que ressuscita serviços on-line da Nintendo Network. Também revive o serviço Miiverse através do juxtaposition. O guia oficial pode ser encontrado [aqui](https://pretendo.network/docs/install/3ds).

**Nota: Pretendo não suporta todos os serviços on-line, porém trabalho está sendo feito para que isso seja possível.**

Uma lista de jogos que o Pretendo suporta pode ser encontrada [aqui](https://wiki.pretendo.zip/game-support-status).

::: info

Para informações sobre como usar os vários recursos do GodMode9, confira as páginas [Uso do GodMode9](godmode9-usage) e [Fazendo Dump de Aplicativos e Jogos de Cartucho](dumping-titles-and-game-cartridges).

:::
