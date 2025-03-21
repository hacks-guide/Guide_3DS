# A9LH para B9S

## Leitura Obrigatória

Esta página é para usuários do arm9loaderhax atualizarem seus consoles para boot9strap.

Todas as versões futuras do Luma3DS serão liberadas apenas no formato `.firm`, que só será compatível com com boot9strap e o sighax. Isto significa que você deve utilizar esta página para atualizar sua instalação, só assim você irá continuar recebendo as atualizações mais recentes do Luma3DS.

## O que é necessário

::: warning

Para usar os links do [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) nesta página, você precisará de um cliente de torrent como [qBittorrent](https://www.qbittorrent.org/download.php) ou [Deluge](http://dev.deluge-torrent.org/wiki/Download).

:::

::: info

Note que apenas no New 3DS o 'secret_sector.bin' é necessário para reverter o exploit arm9loaderhax, e é por isso que ele não é necessário para a instalação do boot9strap em um console de varejo. Se você não tiver um New 3DS, você não precisa do `secret_sector.bin`.

:::

- <font-awesome-icon icon="fa-solid fa-magnet"/> **Apenas para usuários do New 3DS:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (link magnético)
- A versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (o arquivo `.zip` do Luma3DS)
- A versão 7.0.5 do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (download direto)
- A versão mais recente do [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download direto)
- A versão mais recente do [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download direto)

## Instruções

### Seção I - Preparação

::: info

Para todas as etapas nesta seção, substitua quaisquer arquivos existentes no seu cartão SD.

:::

1. Desligue seu console

2. Insira o cartão SD no seu computador

3. Copy everything from the latest Luma3DS `.zip` to the root of your SD card
    - A raiz do cartão SD refere-se ao diretório inicial do seu cartão SD, onde você pode ver a pasta Nintendo 3DS, mas não está dentro dela

4. Copie `arm9loaderhax.bin` do arquivo `.zip` do Luma3DS v7.0.5 para a raiz do seu cartão SD

5. Copie o `SafeB9SInstaller.bin` do `.zip` do SafeB9SInstaller para a pasta `/luma/payloads/` no seu cartão SD
    - Se as pastas `luma` ou `payloads` não existirem, crie-as
    - Apague todos os outros payloads `.bin` existentes (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) da pasta `/luma/payloads/` do seu cartão SD, pois eles não serão compatíveis com as versões do Luma3DS que utilizam boot9strap

6. Crie uma pasta chamada `boot9strap` na raiz do seu cartão SD

7. Copie o `boot9strap.firm` e o `boot9strap.firm.sha` do `.zip` do boot9strap para a pasta `/boot9strap/` no seu cartão SD

8. **Apenas usuários dos New 3DS:** Copie o `secret_sector.bin` para a pasta `/boot9strap/` no seu cartão SD

    ::: info

    ![](/images/screenshots/a9lh-to-b9s-root-layout.png)

    :::

9. Reinsira o cartão SD no seu console

### Seção II - Instalando boot9strap

1. Inicialize seu console enquanto segura (Start) para iniciar o SafeB9SInstaller
    - Se você ver o menu de configuração do Luma3DS ao invés do SafeB9SInstaller, simplesmente aperte (Start), então desligue seu 3DS e tente novamente
    - Se você receber um erro, tente usar um novo cartão SD ou formate seu cartão SD atual (faça um backup dos arquivos existentes primeiro)
2. Espere todos as verificações de segurança finalizarem
    - Se você receber o erro "OTP Crypto Fail", baixe <font-awesome-icon icon="fa-solid fa-magnet"/> aeskeydb.bin, e coloque-o na pasta`/boot9strap/` do seu cartão SD e tente novamente
3. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
    - Se um passo na tela inferior possuir texto em cor vermelha, e você não for solicitado a introduzir um combo de botões, siga o guia de [troubleshooting](troubleshooting-a9lh-to-b9s)

<!--@include: ./_include/configure-luma3ds.md -->

___

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
