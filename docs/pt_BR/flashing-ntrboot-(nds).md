# Flashing ntrboot (NDS)

## Leitura Obrigatória

Antes de prosseguir, certifique-se de que você tenha lido todas as informações em [ntrboot](ntrboot)

Este método requer acesso temporário a um Nintendo DS ou Nintendo DS Lite compatível com seu flashcart. Este método usa o flashcart para executar o arquivo '.nds' que faz o flash do ntrboot no seu NDS.

::: danger

Note que em algumas raras circunstâncias, pode ser possível que o processo de instalação cause um **brick** em um flashcart falso e torne-o permanentemente inutilizável. Isso é pouco provável, mas, no entanto, apenas os flashcarts originais listados são suportados. Para reduzir a chance de receber um cartão falso, é recomendável que você use um site de boa reputação para comprar o seu flashcart (como [NDS Card](https://www. ds-card.com/)).

:::

## O que é necessário

- Seu flashcart compatível com ntrboot
- Dois consoles
    - **NDS / NDSL de origem**: o Nintendo DS ou Nintendo DS Lite que é compatível com o seu flashcart
    - **3DS de destino**: o console da família 3DS com firmware padrão
- A versão v1.3 do [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (download direto)
- A versão mais recente do [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instruções

### Seção I - Preparação

1. Desligue o **NDS / NDSL de origem**
2. Insira o cartão SD do seu flashcart no seu computador
3. Crie uma pasta de nome `ntrboot` na raíz do cartão SD do seu flashcart
4. Copie `boot9strap_ntr.firm` do `.zip` boot9strap ntr para a pasta `/ntrboot/` no cartão SD de seu flashcart
5. Copie `ntrboot_flasher_nds.nds` para o cartão SD do seu flashcart
6. Reinsira o cartão SD do seu flashcart no seu flashcart
7. Insira o seu flashcart do DS / DSi compatível com o ntrboot no seu **NDS / NDSL de origem**

### Seção II - Preparando ntrboot

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

Continue para [Instalando boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
