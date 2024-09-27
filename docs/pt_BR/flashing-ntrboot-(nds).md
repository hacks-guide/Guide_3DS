# Flashing ntrboot (NDS)

## Required Reading

Antes de prosseguir, certifique-se de que você tenha lido todas as informações em [ntrboot](ntrboot)

Este método requer acesso temporário a um Nintendo DS ou Nintendo DS Lite compatível com seu flashcart. Este método usa o flashcart para executar o arquivo '.nds' que faz o flash do ntrboot no seu NDS.

::: danger

Note que em algumas raras circunstâncias, pode ser possível que o processo de instalação cause um **brick** em um flashcart falso e torne-o permanentemente inutilizável. Isso é pouco provável, mas, no entanto, apenas os flashcarts originais listados são suportados. Para reduzir a chance de receber um cartão falso, é recomendável que você use um site de boa reputação para comprar o seu flashcart (como [NDS Card](https://www. ds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source NDS / NDSL**: the Nintendo DS or Nintendo DS Lite which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. Desligue o **NDS / NDSL de origem**
2. Insira o cartão SD do seu flashcart no seu computador
3. Crie uma pasta de nome `ntrboot` na raíz do cartão SD do seu flashcart
4. Copie `boot9strap_ntr.firm` do `.zip` boot9strap ntr para a pasta `/ntrboot/` no cartão SD de seu flashcart
5. Copie `ntrboot_flasher_nds.nds` para o cartão SD do seu flashcart
6. Reinsira o cartão SD do seu flashcart no seu flashcart
7. Insira o seu flashcart do DS / DSi compatível com o ntrboot no seu **NDS / NDSL de origem**

### Section II - Flashing ntrboot

1. Abra o `ntrboot_flasher_nds.nds` no **NDS / NDSL de origem** usando seu flashcart
2. Aperte (A) para continuar
3. Use (Cima) e (Baixo) nos botões direcionais para selecionar seu flashcart
4. Aperte (A) para continuar
5. Selecione "Dump flash" para fazer um backup da memória do flashcart
6. Aperte a sequência de botões para confirmar
7. Aperte (A) para continuar
8. Use (Cima) e (Baixo) nos botões direcionais para selecionar seu flashcart
9. Aperte (A) para continuar
10. Selecione "Inject FIRM" para instalar boot9strap no flashcart
11. Aperte a sequência de botões para confirmar
12. Aperte (A) para continuar
13. Desligue o **NDS / NDSL de origem**
14. Ejete seu flashcart do **NDS / NDSL de origem**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
