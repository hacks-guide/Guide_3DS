---
head:
  [
    [ 'script', { src: '/assets/js/common.js' } ],
    [
        'script',
        { src: '/assets/js/soundhax-frankenfirm-link.js' }
      ],
    [ 'script', { src: '/assets/js/link-common.js' } ]
  ]
---

# Troubleshooting (Soundhax)

Esta página oferece recursos de solução de problemas para problemas com a página "Instalando boot9strap (Soundhax)", que é usada nas versões do sistema entre 1.0.0 e 11.3.0. Se você não conseguir resolver seu problema com a ajuda nesta página, junte-se à [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) e descreva seu problema, incluindo o que você já tentou.

## Problemas com o Soundhax

:::details Tela vermelha/roxa/rosa e branca após executar o Soundhax

Se o seu console está na versão de sistema 9.4.0, 9.5.0, ou 9.6.0, você pode estar encontrando um bug com uma versão antiga do universal-otherapp. Baixe a última versão [aqui](https://github.com/TuxSH/universal-otherapp/releases/latest).

Se seu console não está nesses firmware, isso provavelmente indica que você já tem custom firmware. Você deve [checar por CFW](checking-for-cfw).

:::

:::details "Ocorreu um erro, forçando o software a fechar..." (caixa de mensagem branca)

Há um problema com seu arquivo `otherapp.bin` (ele está faltando, colocado no lugar errado ou corrompido). Baixe a última versão do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) e coloque-a na raiz do seu cartão SD.

Você também pode ter o arquivo Soundhax errado para o seu console, região e versão. Verifique se os detalhes do seu console estão corretos e baixe novamente seu arquivo Soundhax [aqui](http://soundhax.com), então coloque-o na raiz do seu cartão SD, substituindo o existente.

Se as instruções acima não corrigirem o seu problema, e você está usando um Old 3DS / Old 3DS XL / Old 2DS, você pode estar encontrando um problema envolvendo atualizações de cartucho. Dê uma outra olhada na versão do sistema. Caso o número antes da letra seja 4 ou inferior (por exemplo, 11.3.0-**4**U), substitua o arquivo Soundhax na raiz do seu cartão SD por [este](http://soundhax.686178.xyz/frankenfirm.html?crash).

Se nenhum desses corrigiram seu problema, junte-se [ao Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter assistência.

:::

:::details "Não é possível tocar"

Você tem o arquivo Soundhax errado para seu console, região e versão. Verifique se os detalhes do seu console estão corretos e baixe novamente seu arquivo Soundhax [aqui](http://soundhax.com), então coloque-o na raiz do seu cartão SD, substituindo o existente.

Se as instruções acima não corrigirem o seu problema, e você está usando um Old 3DS / Old 3DS XL / Old 2DS, você pode estar encontrando um problema envolvendo atualizações de cartucho. Dê uma outra olhada na versão do sistema. Caso o número antes da letra seja 3 ou inferior (por exemplo, 11.3.0-**0**U), substitua o arquivo Soundhax na raiz do seu cartão SD por [este](http://soundhax.686178.xyz/frankenfirm.html?unplayable).

Se nenhum desses corrigiram seu problema, junte-se [ao Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.

:::

:::details Failed to mount the SD card!

Se isso falhar, tente usar outro cartão SD.

:::

## Problemas com o SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Voltar para [Instalando boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
