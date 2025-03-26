# Atualizando o B9S

## Leitura Obrigatória

Esta página é para usuários do boot9strap atualizarem a instalação do boot9strap para a versão mais recente.

## O que é necessário

- A versão mais recente do [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download direto)
- A versão mais recente do [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download direto)
- A versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (o arquivo `.zip` do Luma3DS)

## Instruções

### Seção I - Preparação

::: info

Para todas as etapas nesta seção, substitua quaisquer arquivos existentes no seu cartão SD.

:::

1. Insira o cartão SD no seu computador
2. Crie uma pasta chamada `boot9strap` na raiz do seu cartão SD
3. Copie o `boot9strap.firm` e o `boot9strap.firm.sha` do `.zip` do boot9strap para a pasta `/boot9strap/` no seu cartão SD
4. Copie `SafeB9SInstaller.firm` do `.zip` do SafeB9SInstaller para a raiz do seu cartão SD e renomeie-o para `boot.firm`
5. Reinsira o cartão SD no seu console

    ::: info

    ![](/images/screenshots/updateb9s-root-layout.png)

    :::

### Seção II - Instalando boot9strap

1. Ligue o seu console
    - Isso deverá iniciar automaticamente o SafeB9SInstaller
2. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
    - Se um passo na tela inferior possuir texto em cor vermelha, e você não for solicitado a introduzir um combo de botões, siga o guia de [troubleshooting](troubleshooting-updating-b9s)
3. Assim que for completo, force o seu console a desligar segurando o botão POWER
    - Seu console sempre iniciará na tela do SafeB9SInstaller até que a próxima seção seja concluída

### Seção III - Atualizando Luma3DS

1. Insira o cartão SD no seu computador
2. Copie tudo do arquivo `.zip` do Luma3DS para a raiz do seu cartão SD, substituindo quaisquer arquivos existentes
3. Reinsira o cartão SD no seu console
4. Ligue o seu console
5. Se o seu console foi inicializado no menu de configuração do Luma3DS, pressione (Start) para salvar e reiniciar
    - O menu de configuração do Luma3DS possui configurações para o custom firmware do Luma3DS. Muitas dessas configurações podem ser úteis para personalização ou depuração
    - Para a finalidade deste guia, mantenha essas opções nas configurações padrão

___

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
