# ntrboot

::: tip

Se seu flashcart já veio com o ntrboot (ou você já instalou o ntrboot no seu flashcart), você pode pular para [Instalando boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\)) para obter instruções sobre como usá-lo.

:::

## Required Reading

Instalar o boot9strap com o ntrboot requer um flashcart do DS / DSi compatível com o ntrboot. Note-se que alguns destes flashcarts são vendidos já executando flash em ntrboot.

Enquanto o exploit do ntrboot funciona independentemente da versão do sistema, o ntrboot flasher (o qual instala o exploit no flashcart) não. Isso significa que, dependendo das versões e consoles suportados pelo seu flashcart, apenas certos métodos podem estar disponíveis para você.

Observe que cartões com "Time Bomb" não poderão mais executar arquivos '.nds' quando detectarem que o horário do sistema passou a data determinada pelo firmware do flashcart. Um método de contornar isto é ajustar o relógio do sistema para uma data anterior.

| Flashcart Name                                                                                                              |          Current Price |                       "Time Bomb"?                       |                                 3DS Versions?                                 |                           DSi Versions?                           | Other Notes                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575)                                                              | $17.99 |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** (external switch to switch between ntrboot ("3DS") and NDS modes); do not manually flash with ntrboot. Este cartucho precisa de um cartão SD inserido para funcionar tanto para o ntrboot quanto para firmware NDS. |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=574)         | $16.99 |                     September 3, 2024                    |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot**; can be flashed back to an NDS flashcart.                                                                                                                                                                                                                                 |
| [**DSTT** (ndstt.com)](http://www.nds-card.com/ProShow.asp?ProID=157)                    | $11.99 |                            No                            |                                      None                                     |                                None                               | Only models with [certain flash chips](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) are compatible with ntrboot.                                                                                                                                                                      |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=146)     | $15.99 | 1.85b: September 3, 2024 |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                                              |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=490) | $17.99 |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                                              |
| **Ace3DS Plus**                                                                                                             |                        |                            No                            |                                      ALL                                      |                                ALL                                | Este cartucho precisa de um cartão SD inserido para funcionar tanto para o ntrboot quanto para firmware NDS.                                                                                                                                                                                                 |
| **Acekard 2i**                                                                                                              |                        |                            No                            |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                                                                                                                                              |
| **Gateway Blue**                                                                                                            |                        |                            No                            | 4.1.0 - 4.5.0 |                                ALL                                |                                                                                                                                                                                                                                                                                                                              |
| **Infinity 3 R4i** (r4infinity.com)                                                      |                        |                            No                            |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                                              |
| **R4 3D Revolution**                                                                                                        |                        |                            No                            |                                      None                                     |                                None                               |                                                                                                                                                                                                                                                                                                                              |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                         |                        |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** ([internal switch to switch between ntrboot and NDS modes](/images/screenshots/r4i-gold-3ds-plus.png)); do not manually flash with ntrboot.                                                                                                            |
| **R4i Gold 3DS** (r4ids.cn)                                                              |                        |                            No                            |                                      ALL                                      |                                ALL                                | All carts are compatible.                                                                                                                                                                                                                                                                                    |
| **R4i Ultra** (r4ultra.com)                                                              |                        |                            No                            |       <= 4.3.0       |                                ALL                                |                                                                                                                                                                                                                                                                                                                              |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                         |                        |                          Unknown                         |                                      ALL                                      |                                ALL                                | Only the Deluxe Edition with the blue sticker is compatible.                                                                                                                                                                                                                                                 |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                  |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                                              |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                 |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                                              |

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

## Methods

___

### Flashing ntrboot (Único 3DS)

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
