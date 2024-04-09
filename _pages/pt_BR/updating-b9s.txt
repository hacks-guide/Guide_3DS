---
title: "Atualizando B9S" #
---

{% include toc title="Tabela de Conteúdo" %}

### Leitura Obrigatória

Esta página é para usuários do boot9strap atualizarem a instalação do boot9strap para a versão mais recente.

### O que é necessário

* A versão mais recente do [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download direto)
* A versão mais recente do [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download direto)
* A versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (o arquivo `.zip` do Luma3DS)

### Instruções

#### Seção I - Preparação

Para todas as etapas nesta seção, substitua quaisquer arquivos existentes no seu cartão SD.
{: .notice--info}

1. Insira o cartão SD no seu computador
1. Crie uma pasta chamada `boot9strap` na raiz do seu cartão SD
1. Copie o `boot9strap.firm` e o `boot9strap.firm.sha` do `.zip` do boot9strap para a pasta `/boot9strap/` no seu cartão SD
1. Copie `SafeB9SInstaller.firm` do `.zip` do SafeB9SInstaller para a raiz do seu cartão SD e renomeie-o para `boot.firm`
1. Reinsira o cartão SD no seu console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### Seção II - Instalando o boot9strap

1. Ligue o seu console
    + Isso deve iniciar o SafeB9SInstaller automaticamente
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### Seção III - Atualizar Luma3DS

1. Insira o cartão SD no seu computador
1. Copie `boot.firm` e `boot.3dsx` do `.zip` do Luma3DS para a raiz do seu cartão SD, substituindo o arquivo existente
1. Reinsira o cartão SD no seu console
1. Ligue o seu console
1. Se o seu console foi inicializado no menu de configuração do Luma3DS, pressione (Start) para salvar e reiniciar
    + O menu de configuração do Luma3DS são configurações para o custom firmware do Luma3DS. Muitas dessas configurações podem ser úteis para personalização ou depuração
    + Para a finalidade deste guia, estas configurações serão deixadas nas configurações padrão

___

### Continue para [Finalizando a instalação](finalizing-setup)
{: .notice--primary}
