# Troubleshooting (super-skaterhax)

Esta página oferece recursos de solução de problemas para problemas com a página "Instalando boot9strap (super-skaterhax)". Se você não consegue resolver seu problema com o conselho nesta página, por favor entre no [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) e descreva o seu problema, incluindo o que você já tentou.

::: warning

Essas instruções são válidas somente para a página "Instalando boot9strap (superskaterhax)". Se você estiver usando **qualquer coisa diferente de** um **New 3DS** na versão **11.15.0 a 11.17.0**, você deve seguir as [instruções de troubleshooting para Instalando boot9strap (SSLoth-Browser)](troubleshooting-ssloth-browser).

:::

## Problemas com o super-skaterhax

:::details "Ocorreu um erro. Por favor salve seus dados em qualquer software em uso, e reinicie o sistema."

Se nenhuma cor piscar após pressionar "GO GO!":

- Certifique-se que você definiu corretamente a data e [região](/images/screenshots/skater/skater-lang.png) de seu sistema
- Certifique-se que nenhuma outra aba do navegador esteja aberta, então reinicie o navegador e tente o exploit novamente

Se a tela piscar com cores e então congelar/ter um crash:

- Certifique-se que você tenha as cópias corretas de `arm11code.bin` e `browserhax_hblauncher_ropbin_payload.bin` para a versão e região de seu console
- Tente redefinir os dados do seu navegador:
  1. Inicie o navegador, então abra as configurações do navegador
  2. Role até o final e selecione "Reinicializar Dados Salvos" (também pode ser chamado de "Inicializar Dados Salvos" ou "Limpar Todos os Dados Salvos")
  3. Tente o exploit novamente
- Tente alterar o idioma do sistema para um idioma diferente do atual

:::

:::: details "Ocorreu um erro. Segure o botão POWER para desligar o sistema..." (tela preta com texto)

O arquivo `arm11code.bin` está faltando ou fora do lugar apropriado. Certifique-se de copiar os arquivos da [versão atual do super-skaterhax](https://skater.nintendohomebrew.com) para sua região e versão para a raiz do seu cartão SD (não dentro de uma pasta).

::: info

![](/images/screenshots/skaterhax/skater-root-layout.png)

:::

::::

:::details An exception occured ou "DLL_HEAP_INFORMATION" ao apertar GO! GO!

Isso provavelmente indica que você já possui custom firmware. Você deve [checar por CFW](checking-for-cfw).

:::

## Problemas com o SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Voltar para [Instalando boot9strap (superskaterhax)](installing-boot9strap-\(super-skaterhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
