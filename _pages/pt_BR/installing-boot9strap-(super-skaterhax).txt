---
title: "Instalando boot9strap (super-skaterhax)"
---

{% include toc title="Tabela de Conteúdo" %}

{% capture technical_info %}
<summary><em>Detalhes técnicos (opcional)</em></summary>
Para detalhes técnicos sobre os exploits que você usará nesta página, consulte [aqui](https://github.com/zoogie/super-skaterhax).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Notas de Compatibilidade

Super-skaterhax (quando usado para iniciar o Homebrew Launcher) é compatível com modelos New na versão 11.15.0 e acima em todas as regiões.

As instruções fornecidas só se aplicam ao New 3DS, New 3DS XL e ao New 2DS XL. Por favor, certifique-se de que o console que você está modificando é um New 3DS, New 3DS XL, ou New 2DS XL antes de continuar.
{: .notice--warning}

### O que é necessário

* A versão mais recente do [super-skaterhax](https://github.com/zoogie/super-skaterhax/releases) (o arquivo release `.zip`)
* A versão mais recente do [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download direto)
* A versão mais recente do [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download direto)
* A versão mais recente do [nimdsphax](https://github.com/luigoalma/nimdsphax/releases/download/v1.0/nimdsphax_v1.0.zip) (download direto)
* A versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (o arquivo `.zip` do Luma3DS)

#### Seção I - Preparação

Nesta seção, você irá copiar os arquivos necessários para acionar tanto superskaterhax quanto o Homebrew Launcher.

1. Desligue seu console
1. Insira o cartão SD no seu computador
1. Copie `boot.firm` e `boot.3dsx` do `.zip` do Luma3DS para a raiz do seu cartão SD
    + A raiz do cartão SD refere-se ao diretório inicial no seu cartão SD onde você pode ver a pasta Nintendo 3DS, mas não está dentro dela
1. Copy everything inside the folder for your console's region and version (`arm11code.bin` and `browserhax_hblauncher_ropbin_payload.bin`) in the release_new3ds `.zip` to the root of your SD card
1. Crie uma pasta chamada `boot9strap` na raiz do seu cartão SD
1. Copie o `boot9strap.firm` e o `boot9strap.firm.sha` do `.zip` do boot9strap para a pasta `/boot9strap/` no seu cartão SD
1. Copie `SafeB9SInstaller.bin` do `.zip` do SafeB9SInstaller para a raiz do seu cartão SD
1. Crie uma pasta chamada `3ds` na raiz do seu cartão SD se ela ainda não existir
    + Esta pasta armazena aplicativos homebrew e dados; é diferente da pasta `Nintendo 3DS` que o console gera automaticamente
1. Copie a pasta `nimdsphax` do nimdsphax `.zip` para a pasta `/3ds/` no seu cartão SD
1. Reinsira o cartão SD no seu console
1. Ligue o seu console

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}


#### Seção II - super-skaterhax

Nesta seção, você visitará a página web contendo o exploit, que iniciará o Homebrew Launcher.

Se você ainda não tem, certifique-se de que você tem uma conexão de Internet ativa configurada em seu console.
{: .notice--info}

{% capture set_date %}
<summary>Se a data do sistema estiver incorreta, este método não irá funcionar.<br>Siga os passos abaixo para definir a data correta.</summary>
1. Abra as Configurações do Sistema no seu console
1. Selecione "Outras Configurações"
1. Navegue até "Data e Hora" -> "Data de hoje"
1. Use as setas para cima/baixo para definir o dia, mês e ano correto
1. Selecione OK para confirmar
{% endcapture %}
<details>{{ set_date | markdownify }}</details>
{: .notice--info}

1. No Menu HOME, pressione os gatilhos da Esquerda e da Direita ao mesmo tempo para abrir a câmera
    + Se você não consegue abrir a câmera, abra o Navegador de Internet e digite manualmente a URL (`https://zoogie.github.io/web/super/` para EUR/USA/JPN, `https://zoogie.github.io/web/korea` para KOR)
1. Toque no botão do código QR e digitalize um dos seguintes códigos QR para a região do seu console [aqui](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
    + Se você receber um aviso de certificado de segurança, aperte (A) para permitir a conexão
1. Pressione o botão (Select) para abrir a aba de favoritos
    + Se o seu botão (Select) não responder, toque no ícone de estrela no canto inferior esquerdo da tela
1. Toque em "Adicionar aos favoritos"
1. Aperte (B) uma vez para retornar ao navegador
1. Aperte (Start) para abrir o menu de contexto
    + Se o seu botão (Start) não responder, toque no menu de 3 linhas no canto inferior direito da tela
1. Toque em "Configurações"
1. Toque em "Excluir Cookies"
1. Aperte (A) para continuar
1. Aperte (Home) para retornar ao Menu HOME, depois aperte (A) imediatamente para iniciar o navegador novamente
1. Selecione o botão "GO GO!" na tela superior
    + Se qualquer prompt aparecer, aprove todos eles
    + Se o seu console congela em uma tela amarela, segure o botão POWER até que ele desligue e tente esta seção novamente
    + Se o seu console congela numa tela vermelha, segure o botão POWER até que ele desligue, refaça o passo 3 da Seção II e tente novamente esta seção
    + Se seu console mostra "Text" na tela de baixo, você tem um Old 3DS e este método **não irá funcionar em seu dispositivo**. Se este for o caso, siga [Instalando boot9strap (MSET9)](installing-boot9strap-(mset9)) ao invés disso
    + Se você receber outro erro, tente novamente até 5 vezes e, se ainda não funcionar, [siga este guia de troubleshooting](troubleshooting#installing-boot9strap-super-skaterhax)
1. Seu console terá inicializado o Homebrew Launcher
1. Abra o nimdsphax da lista de homebrews
1. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
    + Se o seu console congelar em uma tela vermelha ou verde, segure o botão POWER até que ele desligue, então tente esta seção novamente
    + Isso pode levar até cinco tentativas

#### Seção III - Instalando o boot9strap

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

{% include_relative include/luma3ds-installed-note.txt %}

___

### Continue para [Finalizando a instalação](finalizing-setup)
{: .notice--primary}
