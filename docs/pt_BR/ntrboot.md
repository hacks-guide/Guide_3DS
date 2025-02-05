# ntrboot

::: tip

Se seu flashcart já veio com o ntrboot (ou você já instalou o ntrboot no seu flashcart), você pode pular para [Instalando boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\)) para obter instruções sobre como usá-lo.

:::

## Leitura Obrigatória

Instalar o boot9strap com o ntrboot requer um flashcart do DS / DSi compatível com o ntrboot. Note-se que alguns destes flashcarts são vendidos já executando flash em ntrboot.

Enquanto o exploit do ntrboot funciona independentemente da versão do sistema, o ntrboot flasher (o qual instala o exploit no flashcart) não. Isso significa que, dependendo das versões e consoles suportados pelo seu flashcart, apenas certos métodos podem estar disponíveis para você.

Observe que cartões com "Time Bomb" não poderão mais executar arquivos '.nds' quando detectarem que o horário do sistema passou a data determinada pelo firmware do flashcart. Um método de contornar isto é ajustar o relógio do sistema para uma data anterior.

| Nome do Flashcart                                                                                                           |            Preço atual |                         "Time Bomb"?                         |                                Versões do 3DS?                                |                          Versões do DSi?                          | Outras notas                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :----------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575)                                                              | $17.99 |                              Não                             |                                     TODAS                                     |                               TODAS                               | **Já vem pré-carregado com ntrboot** (interruptor externo para trocar entre os modos ntrboot ("3DS") e NDS); não configure o ntrboot manualmente. Este cartucho precisa de um cartão SD inserido para funcionar tanto para o ntrboot quanto para firmware NDS. |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=574)         | $16.99 |                     3 de Setembro de 2024                    |                                     TODAS                                     |                               TODAS                               | **Já vem pré-carregado com ntrboot**; pode ser configurado de volta para um flashcart NDS.                                                                                                                                                                                                                           |
| [**DSTT** (ndstt.com)](http://www.nds-card.com/ProShow.asp?ProID=157)                    | $11.99 |                              Não                             |                                    Nenhuma                                    |                              Nenhuma                              | Apenas modelos com [certos flash chips](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) são compatíveis com ntrboot.                                                                                                                                                                             |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=146)     | $15.99 | 1.85b: 3 de Setembro de 2024 |                                     TODAS                                     |                               TODAS                               |                                                                                                                                                                                                                                                                                                                                      |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=490) | $17.99 |  4.0b: 3 de Setembro de 2024 |                                     TODAS                                     |                               TODAS                               | Apenas flashcarts do r4isdhc **.com** marcados com o ano de 2014 ou posterior são compatíveis.                                                                                                                                                                                                       |
| **Ace3DS Plus**                                                                                                             |                        |                              Não                             |                                     TODAS                                     |                               TODAS                               | Este cartucho precisa de um cartão SD inserido para funcionar tanto para o ntrboot quanto para firmware NDS.                                                                                                                                                                                                         |
| **Acekard 2i**                                                                                                              |                        |                              Não                             |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                                                                                                                                                      |
| **Gateway Blue**                                                                                                            |                        |                              Não                             | 4.1.0 - 4.5.0 |                               TODAS                               |                                                                                                                                                                                                                                                                                                                                      |
| **Infinity 3 R4i** (r4infinity.com)                                                      |                        |                              Não                             |                                     TODAS                                     |                               TODAS                               |                                                                                                                                                                                                                                                                                                                                      |
| **R4 3D Revolution**                                                                                                        |                        |                              Não                             |                                    Nenhuma                                    |                              Nenhuma                              |                                                                                                                                                                                                                                                                                                                                      |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                         |                        |                              Não                             |                                     TODAS                                     |                               TODAS                               | **Já vem pré-carregado com ntrboot** ([interruptor interno para trocar entre os modos ntrboot e NDS)](/images/screenshots/r4i-gold-3ds-plus.png); não configure o ntrboot manualmente.                                                                                                            |
| **R4i Gold 3DS** (r4ids.cn)                                                              |                        |                              Não                             |                                     TODAS                                     |                               TODAS                               | Todos os flashcarts são compatíveis.                                                                                                                                                                                                                                                                                 |
| **R4i Ultra** (r4ultra.com)                                                              |                        |                              Não                             |       <= 4.3.0       |                               TODAS                               |                                                                                                                                                                                                                                                                                                                                      |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                         |                        |                         Desconhecido                         |                                     TODAS                                     |                               TODAS                               | Apenas a Edição Deluxe com o adesivo azul é compatível.                                                                                                                                                                                                                                                              |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                  |                        |  4.0b: 3 de Setembro de 2024 |                                     TODAS                                     |                               TODAS                               | Apenas flashcarts do r4isdhc **.com** marcados com o ano de 2014 ou posterior são compatíveis.                                                                                                                                                                                                       |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                 |                        |  4.0b: 3 de Setembro de 2024 |                                     TODAS                                     |                               TODAS                               | Apenas flashcarts do r4isdhc **.com** marcados com o ano de 2014 ou posterior são compatíveis.                                                                                                                                                                                                       |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

Certifique-se de que seu flashcart seja capaz de executar arquivos `.nds` no seu console antes de começar. Alguns flashcarts podem exigir arquivos de firmware ou "kernel" a serem copiados para o cartão SD do flashcart. Consulte as instruções do seu flashcart específico para obter mais informações.

Observe que os métodos específicos podem ter informações adicionais de compatibilidade.

O uso desse exploit, independentemente do método de flash, requer acesso a um pequeno ímã se o console de destino for de um estilo de dobramento (qualquer sistema da família 3DS que não seja o old 2DS com um interruptor para o modo de descanso). Isso é porque o exploit requer que o seu console entre em modo de descanso enquanto ainda tem acesso aos botões.

::: info

Para testar se um ímã vai funcionar, segure-o em cima ou ao redor dos botões (A)(B)(X)(Y) enquanto o console está ligado para ver se ele ativa o modo de descanso. Caso aconteça, ambas as telas ficarão pretas enquanto o ímã é mantido nesse ponto.

:::

Saiba que o flashcart não será capaz de ser utilizado para a sua funcionalidade padrão enquanto o exploit ntrboot estiver instalado nele (exceto no caso do Acekard 2i, que permanece funcional \*apenas em sistemas 3DS com custom firmware \*). Isso significa que, para a maioria dos flashcarts, ele nem sequer será exibido no Menu HOME. Existem etapas opcionais no final das instruções da instalação do ntrboot para removê-lo do seu flashcart após terminar o guia.

::: danger

Note que em algumas raras circunstâncias, pode ser possível que o processo de instalação cause um **brick** em um flashcart falso e torne-o permanentemente inutilizável. Isso é pouco provável, mas, no entanto, apenas os flashcarts originais listados são suportados. Para reduzir a chance de receber um cartão falso, é recomendável que você use um site de boa reputação para comprar o seu flashcart (como [NDS Card](https://www. ds-card.com/)).

:::

___

## Métodos

___

### Configurando ntrboot (Único 3DS)

Este método não requer nada além de seu 3DS original sem modificações e um cartão flashcart compatível. Este método usa o flashcart para executar o arquivo '.nds' do ntrboot flasher no seu 3DS. Isto significa que seu flashcart deve oferecer suporte a execução de arquivos '.nds' na versão atual do seu 3DS. Consulte a tabela de flashcart acima para obter mais informações.

::: tip

Continue em [Executar flash do ntrboot (único sistema 3DS)](flashing-ntrboot-\(3ds-single-system\))

:::

___

### Flashing ntrboot (Vários 3DS)

Este método requer acesso temporário a um segundo console da família 3DS que já está executando boot9strap. Isso não requer que seu flashcart suporte nenhuma das versões de ambos 3DS.

::: tip

Continue para [Executar flash em ntrboot (múltiplos sistemas 3DS)](flashing-ntrboot-\(3ds-multi-system\))

:::

___

### Flashing ntrboot (NDS)

Este método requer acesso temporário a um Nintendo DS ou Nintendo DS Lite compatível com seu flashcart. Este método usa o flashcart para executar o arquivo '.nds' que faz o flash do ntrboot no seu NDS.

::: tip

Continue em [Executar flash do ntrboot (NDS)](flashing-ntrboot-\(nds\))

:::

___

### Flashing ntrboot (DSi)

Este método requer acesso temporário a um Nintendo DSi compatível com seu flashcart. Este método usa o flashcart para executar o arquivo '.nds' que faz o flash do ntrboot no seu DSi. Isso significa que seu flashcart deve suportar a execução de arquivos '.nds' na versão do seu DSi. Consulte a tabela de flashcart acima para obter mais informações.

::: tip

Continue em [Executar flash do ntrboot (DSi)](flashing-ntrboot-\(dsi\))

:::
