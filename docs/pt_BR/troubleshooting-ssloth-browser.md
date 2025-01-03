# Troubleshooting (SSLoth-Browser)

Esta página oferece recursos de solução de problemas para problemas com a página "Instalando boot9strap (SSLoth-Browser)", que é usada nas versões do sistema entre 11.4.0 e 11.13.0. Se você não consegue resolver seu problema com o conselho nesta página, por favor entre no [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) e descreva o seu problema, incluindo o que você já tentou.

::: warning

Essas instruções são válidas somente para a página "Instalando boot9strap (SSLoth-Browser)". Se você estiver usando um **New 3DS** na versão **11.15.0 a 11.17.0**, você deve seguir as [instruções de troubleshooting para Instalando boot9strap (super-skaterhax)](troubleshooting-super-skaterhax).

:::

## SSLoth-Browser

:::details Tela vermelha/roxa/rosa e branca após executar o Browserhax

Isso provavelmente indica que você já possui custom firmware. Você deve [checar por CFW](checking-for-cfw).

:::

:::details "An error has occured. Hold down the POWER button to turn off the power..." (tela preta com texto)

O arquivo `arm11code.bin` está faltando ou fora do lugar apropriado. Baixe a última versão do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), coloque `otherapp.bin` na raíz do cartão SD e renomeie-o para `arm11code.bin`. Não adicione a extensão `.bin` se você não a vê.

:::

:::details "Ocorreu um erro, forçando o software a fechar..." (caixa de mensagem branca)

Pode haver um erro com seu arquivo `arm11code.bin`. Baixe a última versão do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), coloque `otherapp.bin` na raíz do cartão SD e renomeie-o para `arm11code.bin`. Não adicione a extensão `.bin` se você não a vê.

Você também pode tentar redefinir os dados salvos do seu navegador:

1. Inicie o navegador, então abra as configurações do navegador
2. Role até o final e selecione "Reinicializar Dados Salvos" (também pode ser chamado de "Inicializar Dados Salvos" ou "Limpar Todos os Dados Salvos")
3. Tente o exploit novamente

:::

:::details Abrir o QR Code ou URL do browserhax causa um crash

Exploits do navegador (como este) geralmente são instáveis e causam crashes com frequência, mas em alguns casos podem ser corrigidos seguindo as etapas a seguir.

1. Inicie o navegador, então abra as configurações do navegador
2. Role até o final e selecione "Reinicializar Dados Salvos" (também pode ser chamado de "Inicializar Dados Salvos" ou "Limpar Todos os Dados Salvos")
3. Tente o exploit novamente

:::

:::details Solicitação de atualização do sistema ao abrir o navegador

O proxy SSLoth foi configurado incorretamente. Refaça a seção do SSLoth na página.

:::

:::details Erro 032-0420 ao abrir o navegador

Siga estas etapas em ordem:

1. Abra as Configurações do Sistema no seu console
2. Navegue para `Configuração de internet` -> `Configurações de conexão`
3. Clique no seu slot de conexão da rede e navegue para `Mudar configurações` -> `Próxima página (seta para a direita)` -> `Servidor proxy`
4. Defina "Servidor proxy" para "Não"
5. Clique OK, depois clique em Salvar
6. Quando solicitado, clique em "Testar" para realizar o teste de conexão
   - O teste deve ser bem-sucedido
7. Clique "OK" para continuar
8. Pressione "Voltar" duas vezes e, em seguida, "Fechar" para voltar ao Menu HOME
9. Abra o navegador de internet uma vez
10. Se aparecer uma solicitação de atualização do sistema, pressione OK
    - Isso não vai atualizar o sistema
11. Inicie novamente pela [Seção II](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)

:::

:::details Parado em "Doing agbhax..."

Pode haver um erro com seu arquivo `arm11code.bin`. Baixe novamente a última versão do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), coloque-o na raiz de seu cartão SD e renomeie-o para `arm11code.bin`. Não adicione a extensão `.bin` se você não a vê.

:::

:::details "PrepareArm9ForTwl returned error c8804631!"

Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.

:::

:::details Failed to mount the SD card!

Faça o backup de seus dados e formate novamente seu cartão SD como FAT32 com a ferramenta recomendada dependendo do seu sistema operacional ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). MiniTool Partition Wizard e a ferramenta de formatação da HP (HPUSBDisk) são conhecidas por causar problemas com cartões SD para 3DS.

Se isso falhar, tente usar outro cartão SD.

:::

## Problemas com o SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Voltar para [Instalando boot9strap (SSLoth-Browser)](installing-boot9strap-\(ssloth-browser\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
