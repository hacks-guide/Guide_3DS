# Updating B9S

## Required Reading

Esta página é para usuários do boot9strap atualizarem a instalação do boot9strap para a versão mais recente.

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Prep Work

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

### Section II - Installing boot9strap

1. Ligue o seu console
   - This should automatically launch SafeB9SInstaller
2. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
3. Assim que for completo, force o seu console a desligar segurando o botão POWER
   - Your console will only boot to the SafeB9SInstaller screen until the next section is completed

### Section III - Update Luma3DS

1. Insira o cartão SD no seu computador
2. Copie `boot.firm` e `boot.3dsx` do `.zip` do Luma3DS para a raiz do seu cartão SD, substituindo o arquivo existente
3. Reinsira o cartão SD no seu console
4. Ligue o seu console
5. Se o seu console foi inicializado no menu de configuração do Luma3DS, pressione (Start) para salvar e reiniciar
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Muitas dessas configurações podem ser úteis para personalização ou depuração
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
