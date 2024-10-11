# Finalizando a Instalação

## Leitura Obrigatória

O arquivo `boot.firm` é o que é iniciado pelo boot9strap depois que ele termina de carregar a NAND. Neste caso, estamos usando o Luma3DS por [LumaTeam](https://github.com/LumaTeam/) para alterar o console, permitindo que ele execute um software de homebrew.

Nesta página, faremos backups de arquivos críticos do sistema e instalaremos os seguintes programas de homebrew. A maioria dessas etapas serão automatizadas usando um script que você irá executar no seu console.

::: info

O script irá instalar os seguintes aplicativos:

- **[FBI](https://github.com/lifehackerhansol/FBI)** _(instala arquivos formatados como CIA)_
- **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** _(inicia o Homebrew Launcher)_
- **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** _(instala temas personalizados)_
- **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** _(cria e restaura dados salvos para jogos de 3DS e DS)_
- **[ftpd](https://github.com/mtheall/ftpd)** _(acessa o cartão SD do seu 3DS através de uma conexão sem fio)_
- **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** _(uma loja de aplicativos homebrew para baixar aplicativos homebrew no 3DS usando Wi-Fi)_
- **[GodMode9](https://github.com/d0k3/GodMode9)** _(ferramenta multiuso que permite interagir com a NAND e cartuchos)_

Se você não quer um destes aplicativos, você pode removê-los depois de concluir esta página navegando até Configurações do Sistema -> Gerenciamento de Dados -> Nintendo 3DS -> Software. (GodMode9 não pode ser removido desta maneira e é geralmente necessário para outras funções.)

:::

## Notas de Compatibilidade

::: warning

Se o seu **New 3DS** estava na versão 2.1.0 antes de seguir este guia, você deve [restaurar o seu backup da NAND](godmode9-usage#restoring-a-nand-backup) antes de continuar. Isto provavelmente não se aplica a você, a menos que você seguiu este guia em 2017.

:::

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
4. Aperte (B) para continuar
5. Selecione "Nullify user time offset"
6. Aperte (B) para continuar
7. Aperte (B) para retornar para o menu principal do Rosalina
8. Aperte (B) para sair do menu do Rosalina

### Seção IV - Configuração do Script

Nesta seção, você usará uma série de scripts para automatizar a instalação de homebrews, limpeza de cartão SD e backup de arquivos do sistema.

1. Desligue seu console
2. Aperte e segure (X), e enquanto segura (X), ligue o console. Isto irá iniciar o Finalizing Setup Helper
   - Se você inicializar no Menu HOME, sua pasta `payloads` pode estar nomeada incorretamente ou no local errado
   - If you encounter an error, consult the [troubleshooting](troubleshooting-finalizing-setup) page
3. Se o Helper for bem-sucedido, o seu console iniciará no GodMode9
   - A partir deste ponto, você pode acessar o GodMode9 segurando START enquanto liga o console
4. Se você for solicitado para criar um backup de arquivos essenciais, aperte (A) pra fazê-lo, e depois aperte (A) para continuar quando ele for concluído
5. Se você for solicitado para consertar o RTC date&time, pressione (A) para consertar, então insira a data e a hora, depois pressione (A) para continuar
6. Aperte (Home) para abrir o menu de ações
7. Selecione "Scripts..."
8. Selecione "finalize"
9. Siga as instruções no script, respondendo a quaisquer perguntas que lhe sejam feitas
   - If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting-finalizing-setup) page
10. Uma vez que o script disser "Setup complete!", aperte (A) para desligar o dispositivo
    - Se você NÃO ver a mensagem "Setup complete!", o script não foi bem-sucedido e você terá que refazer esta seção a partir do Passo 3
11. Insira o cartão SD no seu computador
12. Copie a pasta `/gm9/backups/` no seu cartão SD para um local seguro no seu computador
    - Esta pasta contém backups críticos de arquivos e deve ser copiada para vários locais (por exemplo, armazenamento online) se possível
    - Os dois arquivos da SysNAND são seu backup da NAND e podem ser usados para reverter seu console para um estado funcional, em caso de um brick devido a problemas de software
    - O arquivo `essential.exefs` contém arquivos únicos do seu console e pode ser usado para recuperar seus dados, em caso de uma falha de hardware
13. Se você ainda os tiver, exclua os dois arquivos `SysNAND` da pasta `/gm9/backups/` do seu cartão SD
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

::: info

Para informações sobre como usar os vários recursos do GodMode9, confira as páginas [Uso do GodMode9](godmode9-usage) e [Fazendo Dump de Aplicativos e Jogos de Cartucho](dumping-titles-and-game-cartridges).

:::
