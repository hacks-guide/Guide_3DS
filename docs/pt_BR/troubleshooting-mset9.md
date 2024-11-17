# Troubleshooting (MSET9)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (MSET9)", "Installing boot9strap (MSET9 CLI)" and "Installing boot9strap (MSET9 Play Store)" pages. Se você não consegue resolver seu problema com o conselho nesta página, por favor entre no [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) e descreva o seu problema, incluindo o que você já tentou.

## MSET9 (application / script)

:::details Python 3 não está instalado

O Python não está instalado no computador que você está usando. Baixe-o do [site do Python](https://www.python.org/downloads/), clique duas vezes no instalador e siga as instruções para instalar o Python. Quando o Python estiver instalado, tente novamente.

:::

:::details HOME Menu extdata: Missing!

Por favor, ligue seu console com o seu cartão SD inserido e, em seguida, verifique o status de MSET9 novamente.

Se isso não funcionar, seu cartão SD precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta
4. Comece novamente da [Seção I Passo 7](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

:::

:::details Mii Maker extdata: Missing!

Dados do Mii Maker não foram encontrados no cartão SD. Por favor, ligue seu console com o seu cartão SD inserido, inicie o Mii Maker, então verifique o status de MSET9 novamente.

Se isso não funcionar, seu cartão SD precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta
4. Comece novamente da [Seção I Passo 8](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::details Title database: Not initialized!

Certifique-se que você reiniciou o banco de dados.

- Desligue seu console com o cartão SD inserido
- Inicie as Configurações do Sistema e navegue para `Gerenciador de Dados` -> `Nintendo 3DS` -> `Software` -> Apagar ([imagem](/images/screenshots/database-reset.jpg))
  - Isso não irá apagar nenhum dos seus dados
- Se você receber uma mensagem para reiniciar, após reiniciar, desligue seu console e comece novamente a partir de [Seção I Etapa 14](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

Se você _não_ receber uma mensagem de redefinição, seu cartão SD precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
2. Digite `2` e pressione enter para verificar o status do MSET9
   - Isso irá criar as databases fictícias novamente
3. Feche a janela de script do MSET9
4. Comece novamente da [Seção I Etapa 12](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 01: Couldn't find Nintendo 3DS folder

Você não está executando o MSET9 na raiz do cartão SD, ou o cartão SD está sem a pasta Nintendo 3DS.

Lembre-se, seu cartão SD deve ficar assim:

::: info

![](/images/screenshots/mset9/mset9-root-layout.png)

:::

Se o layout do seu cartão SD estiver correto, então o cartão SD provavelmente não está sendo lido pelo seu console e precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta
4. Comece novamente do início da [Seção I](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

::::

:::details Error 02: Your SD is write protected

A proteção contra gravação está ativada neste cartão SD. Se você está usando um cartão SD completo, certifique-se de que a alavanca está [para cima](/images/sdlock.png). Caso contrário, tente ejetar e reinserir seu cartão SD.

:::

:::details Error 04: You don't have 1 ID0, you have (#)!

Você tem múltiplas pastas ID0. Para determinar a pasta correta, siga estas instruções:

1. Renomeie a pasta `Nintendo 3DS` para `BACKUP_Nintendo 3DS`
2. Reinsira o cartão SD no seu console
3. Ligue o seu console
4. Espere o console gerar os dados do cartão SD
   - Seus aplicativos terão desaparecido. Isto é normal e será resolvido em breve
5. Desligue seu console
6. Insira o cartão SD no seu computador
7. Vá até a pasta `Nintendo 3DS` no seu cartão SD
8. Anote os primeiros caractéres da pasta que você ver
   - Este é seu verdadeiro ID0, o qual manteremos na pasta Nintendo 3DS verdadeira
9. Remova o ID0 da pasta `Nintendo 3DS` atual
10. Mova a pasta do verdadeiro ID0 da pasta `BACKUP_Nintendo 3DS` para a pasta `Nintendo 3DS`
11. Se existir, mova a pasta `Private` da pasta `BACKUP_Nintendo 3DS` para a pasta `Nintendo 3DS`

Assim que você tiver feito isso, continue da [Seção I Passo 3](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 05: You don't have 1 ID1, you have (#)!

<!--@include: ./_include/id1-check.md -->

::::

:::details Error 06: You need at least 16MB free

Seu cartão SD não possui espaço suficiente para acionar o MSET9. Libere um pouco de espaço e tente novamente.

No final deste guia, você precisará de pelo menos 1,3GB para fazer um backup da NAND, então é melhor liberar pelo menos isso.

:::

:::details Error 07: One or more files are missing or malformed!

Um ou mais arquivos que o MSET9 precisa executar estão ausentes ou corrompidos. Baixe novamente o [Release `.zip` do MSET9](https://github.com/hacks-guide/MSET9/releases/latest) e extraia-o para a raiz do seu cartão SD, substituindo todos os arquivos existentes, então tente novamente.

:::

:::details Error 18: Windows Locale Settings are broken!

<!--@include: ./_include/winerror234.md -->

:::

## MSET9 (exploit)

:::details Tela vermelha após reinserir o cartão SD (Seção II Passo 11)

Talvez você esteja sem o `SafeB9S.bin` na raiz do seu cartão SD, ou o arquivo pode estar corrompido. Copie-o do `.zip` do MSET9, substituindo quaisquer arquivos existentes, depois siga essas instruções para remover o arquivo de ativação:

1. Força o desligamento do seu console segurando o botão POWER por 20 segundos
2. Insira o cartão SD no seu computador

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
   - O estado atual deve exibir [Injected](/images/screenshots/mset9/mset9-injected.png)
   - Se você já removeu o arquivo de ativação (ou nunca o injetou), o estado atual irá mostrar [Ready](/images/screenshots/mset9/mset9-ready.png), e você pode [tentar a Seção II novamente](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)
2. Digite `4` e pressione Enter
3. Assim que a janela disser "Removed trigger file", digite `0` e depois pressione Enter
4. Reinsira o cartão SD no seu console
5. Ligue o seu console
6. Retorne à [Seção II Passo 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

Alternativamente, seu cartão SD pode estar sem a formatação apropriada ou mal particionado. Depois de remover o arquivo de ativação, formate-o:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta
4. Comece novamente da [Seção II Etapa 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details Configuração do Console carregando infinitamente após reinserir o cartão SD

Você provavelmente fez algo diferente das instruções do MSET9, selecionou o modelo/versão errado, ou seu cartão SD precisa ser formatado. Certifique-se de estar escolhendo o [modelo](/images/3dsmodels.png) e a versão de firmware corretos ao abrir o script.

Siga estas instruções para remover o arquivo de ativação e tentar novamente a Seção II:

1. Força o desligamento do seu console segurando o botão POWER por 20 segundos
2. Insira o cartão SD no seu computador

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
   - O estado atual deve exibir [Injected](/images/screenshots/mset9/mset9-injected.png)
   - Se você já removeu o arquivo de ativação (ou não o injetou), o estado atual irá mostrar [Ready](/images/screenshots/mset9/mset9-ready.png), e você está pronto para tentar a Seção II novamente
2. Digite `4` e pressione Enter
3. Assim que a janela disser "Removed trigger file", digite `0` e depois pressione Enter
4. Reinsira o cartão SD no seu console
5. Ligue o seu console
6. Retorne à [Seção II Passo 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

Se você continuar tendo este problema e tem certeza que fez tudo corretamente, certifique-se de que o arquivo de ativação foi removido e formate seu cartão SD:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta
4. Comece novamente da [Seção II Etapa 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details Erro "An exception ocurred" após acionar MSET9

Isso provavelmente indica que você já possui custom firmware. Você deve [checar por CFW](checking-for-cfw).

:::

## Issues with SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\))

:::

::: tip

Go back to [Installing boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
