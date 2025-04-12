---
noneSelected: Modelo do sistema é necessário.
invalidVersion: Esta não parece ser uma versão válida de sistema.
otherPrefix: (Other)
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/selecting.js
---

# Começando

Antes de iniciar este guia, veremos se o custom firmware já está instalado e verificaremos a versão atual do sistema do seu console.

### Seção I - Checando por CFW

1. Desligue seu console
2. Segure o botão (Select)
3. Ligue o seu console enquanto ainda segura o botão (Select)
4. Se você não ver um menu personalizado (seu console apenas inicia no Menu HOME), você pode prosseguir para a próxima seção

::: warning

Se você ver a tela de configuração do Luma3DS ou qualquer outro menu personalizado (por exemplo, GodMode9, Decrypt9WIP), PARE - você já tem custom firmware! Continue [daqui](checking-for-cfw#what-to-do-next).

:::

### Seção II - Verificando a Versão do Sistema

1. Abra as Configurações do Sistema no seu console
2. A versão do seu sistema será exibida no canto inferior direito da tela superior (por exemplo, "Ver. 11.17.0-50U")

### Seção II - Selecione um Método

Para encontrar o método correto para o seu console, selecione o modelo do seu console e a versão do sistema que encontrou na Seção II.

<!--@include: @/_internal/consoleVersionSelect.html -->

---

#### Métodos Alternativos

Se possível, você deve seguir o método fornecido pelo prompt acima.

Caso contrário, métodos que funcionam em todas as versões estão disponíveis, mas requerem hardware adicional:

1. [ntrboot](ntrboot) - requer um flashcart de DS compatível
2. [Instalando boot9strap (Hardmod)](installing-boot9strap-\(hardmod\)) - requer soldagem
