# Flashing ntrboot (Vários 3DS)

## Required Reading

Antes de prosseguir, certifique-se de que você leu todas as informações em [ntrboot](ntrboot).

Este método requer acesso temporário a um segundo console da família 3DS que já está executando boot9strap. Isso não requer que seu flashcart suporte nenhuma das versões de ambos 3DS.

::: danger

Note que em algumas raras circunstâncias, pode ser possível que o processo de instalação cause um **brick** em um flashcart falso e torne-o permanentemente inutilizável. Isso é pouco provável, mas, no entanto, apenas os flashcarts originais listados são suportados. Para reduzir a chance de receber um cartão falso, é recomendável que você use um site de boa reputação para comprar o seu flashcart (como [NDS Card](https://www. ds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two 3DS family consoles
  - **The source 3DS**: the 3DS family console that is already running boot9strap
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Prep Work

1. Desligue o \*\* 3DS de origem\*\*
2. Insira o cartão SD do **3ds de origem** no seu computador
3. Crie uma pasta chamada `ntrboot` na raiz do seu cartão SD
4. Copie o `boot9strap_ntr.firm` e o `boot9strap_ntr.firm.sha` do `.zip` do boot9strap para a pasta `/boot9strap/` no seu cartão SD
5. Copie o `ntrboot_flasher.firm` do `.zip` do ntrboot_flasher para a pasta `/luma/payloads` no cartão SD do **3DS de origem**
6. Reinsira o cartão SD do **3DS de origem** no **3DS de origem**
7. Insira o seu flashcart do DS / DSi compatível com o ntrboot no seu **3DS de origem**

### Section II - Flashing ntrboot

1. Execute o chainloader do Luma3DS segurando (Start) durante a inicialização do **3DS de origem**
2. Selecione "ntrboot_flasher"
3. Leia o aviso em vermelho na tela
4. Aperte (A) para continuar
5. Selecione seu flashcart
   - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Selecione "Dump Flash"
7. Aguarde até que o processo seja concluído
8. Aperte (A) para continuar
9. Aperte (A) para retornar ao menu principal
10. Selecione "Inject Ntrboot"
11. Aperte (A) para selecionar "retail unit ntrboot"
12. Aguarde até que o processo seja concluído
13. Aperte (A) para retornar ao menu principal
14. Aperte (B) para desligar o **3DS de origem**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
