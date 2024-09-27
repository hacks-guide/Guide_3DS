# Flashing ntrboot (DSi)

## Required Reading

Antes de prosseguir, certifique-se de que você tenha lido todas as informações em [ntrboot](ntrboot)

Este método requer acesso temporário a um Nintendo DSi compatível com seu flashcart. Este método usa o flashcart para executar o arquivo '.nds' que faz o flash do ntrboot no seu DSi. Isso significa que seu flashcart deve suportar a execução de arquivos '.nds' na versão do seu DSi. Consulte a tabela em [ntrboot](ntrboot) para obter mais informações.

::: danger

Note que em algumas raras circunstâncias, pode ser possível que o processo de instalação cause um **brick** em um flashcart falso e torne-o permanentemente inutilizável. Isso é pouco provável, mas, no entanto, apenas os flashcarts originais listados são suportados. Para reduzir a chance de receber um cartão falso, é recomendável que você use um site de boa reputação para comprar o seu flashcart (como [NDS Card](https://www. ds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. Desligue o **DSi de origem**
2. Insira o cartão SD do seu flashcart no seu computador
3. Copie 'ds_ntrboot_flasher_dsi.nds' para o cartão SD do seu flashcart
4. Reinsira o cartão SD do seu flashcart no seu flashcart
5. Insira o seu flashcart do DS / DSi compatível com o ntrboot no seu **DSi de origem**

### Section II - Flashing ntrboot

1. Execute 'ds_ntrboot_flasher_dsi.nds' no **DSi de origem** usando seu flashcart
2. Aperte (A) para continuar
3. Use (Cima) e (Baixo) nos botões direcionais para selecionar seu flashcart
4. Aperte (A) para continuar
5. Aperte (A) para "inject ntrboothax"
6. Aperte (A) para selecionar "RETAIL"
7. Aperte (A) para continuar
8. Selecione "EXIT"

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
