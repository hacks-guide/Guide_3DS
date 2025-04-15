Esta seção redefinirá a configuração do console para os valores padrão. \*\*Os jogos instalados e seus dados salvos não serão afetados. \* Isto é **necessário** para evitar problemas conhecidos relacionados ao modo de memória estendida e applets em alguns consoles.

::: warning

This process will reset your Mii data. If you wish to save any Miis that you have created, either [generate a QR code](https://en-americas-support.nintendo.com/app/answers/detail/a_id/298/~/how-to-generate-a-qr-code%E2%84%A2-for-a-mii) for each Mii that you want to save, or make a backup of `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` before following these instructions. You can restore this file to the same directory _after_ your console has gone through initial setup.

:::

1. Desligue seu console
2. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
3. Navegue para `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - O `<ID0>` é uma pasta com um nome de 32 caracteres
4. Use os botões direcionais para destacar `00010017`
5. Aperte (Gatilho Direito) + (A) para abrir as opções de pasta
6. Selecione "Copy to 0:/gm9/out''
7. Aperte (A) para continuar
8. Enquanto estiver destacando `00010017`, pressione (X) para apagá-lo
9. Aperte (A) para confirmar
10. Aperte (A) para destravar "SysNAND (lvl1) writing", então aperte a sequência de botões solicitada
11. Depois que o arquivo for excluído, aperte (A) para continuar
12. Se solicitado, aperte (A) para bloquear as permissões de escrita
13. Aperte (Start) para reiniciar seu console
14. Seu console irá carregar no menu de configuração inicial
    - Isso é um comportamento esperado. Você não perdeu nenhum dos seus dados do jogo
15. Complete o menu inicial de configuração seguindo os avisos na tela do seu console
