---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/soundhax-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Instalando boot9strap (Soundhax)

:::details Detalhes Técnicos (opcional)

Para detalhes técnicos sobre os exploits que você usará nesta página, veja [aqui](https://github.com/nedwill/soundhax) e [aqui](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Notas de Compatibilidade

Soundhax (quando combinado com universal-otherapp) é compatível com as versões 1.0.0 a 11.3.0 em todas as regiões.

## O que é necessário

- A versão mais recente do [Soundhax](http://soundhax.com) _(para sua região, console e versão)_
    - Se o Soundhax aparecer no seu navegador como um vídeo não-reproduzível, pressione Ctrl+S ou Cmd+S para salvá-lo no seu computador
- A versão mais recente do [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download direto)
- A versão mais recente do [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download direto)
- A versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (o arquivo `.zip` do Luma3DS)
- A versão mais recente do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instruções

### Seção I - Preparação

Nesta seção, você irá copiar os arquivos necessários para acionar o Soundhax e o universal-otherapp.

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie o Soundhax `.m4a` para a raiz do seu cartão SD
    - A raiz do cartão SD refere-se ao diretório inicial do seu cartão SD, onde você pode ver a pasta Nintendo 3DS, mas não está dentro dela
4. Copie `otherapp.bin` para a raiz do seu cartão SD
5. Copie tudo do arquivo `.zip` do Luma3DS para a raiz do seu cartão SD
6. Crie uma pasta chamada `boot9strap` na raiz do seu cartão SD
7. Copie o `boot9strap.firm` e o `boot9strap.firm.sha` do `.zip` do boot9strap para a pasta `/boot9strap/` no seu cartão SD
8. Copie `SafeB9SInstaller.bin` do `.zip` do SafeB9SInstaller para a raiz do seu cartão SD
9. Reinsira o cartão SD no seu console
10. Ligue o seu console

::: info

![](/images/screenshots/soundhax/soundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Seção II - Iniciando o SafeB9SInstaller

Nesta seção, você irá iniciar o Soundhax através do aplicativo Som Nintendo 3DS, que usará o aplicativo universal-otherapp para iniciar o instaladorboot9strap (custom firmware).

1. Abra o Som Nintendo 3DS

    ::: info

    ![](/images/screenshots/soundhax/soundhax-welcome.png)

    :::

2. Se você nunca abriu o Som Nintendo 3DS antes e receber as dicas de como utilizá-lo de um ícone de pássaro, passe por todos os palpites dos papagaios, depois feche o aplicativo normalmente e abra-o novamente
    - Nesta situação, abrir o Soundhax imediatamente faria com que estas dicas aparecessem toda vez que o Som Nintendo 3DS fosse aberto, até que isto fosse feito

3. Vá até `/SDCARD`, depois toque "<3 nedwill 2016"

    - Isso pode levar várias tentativas (até 10)
    - Se você ver a mensagem "Não foi possível reproduzir", você está em uma versão do sistema incompatível com o Soundhax, ou baixou o arquivo errado do Soundhax
    - Se o console congelar, desligue-o forçadamente segurando o botão de liga/desliga, e então tente novamente
    - Caso receba um erro diferente, [siga este guia de troubleshooting](troubleshooting-soundhax)

    ::: info

    ![](/images/screenshots/soundhax/soundhax-launch.png)

    :::

4. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller

### Seção III - Instalando boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
    - Se um passo na tela inferior possuir texto em cor vermelha, e você não for solicitado a introduzir um combo de botões, siga o [guia de troubleshooting](troubleshooting-soundhax)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
