1. Aperte (Home) para abrir o menu de ações
2. Selecione "Scripts..."
3. Selecione "GM9Megascript"
4. Selecione "Backup Options"
5. Selecione "SysNAND Backup"
6. Aperte (A) para confirmar
   - Esse processo levará algum tempo
   - Se você receber um erro, procure pelo problema no [guia de troubleshooting](troubleshooting#finalizing-setup)
7. Aperte (A) para continuar
8. Aperte (B) para retornar para o menu principal
9. Selecione "Exit"
10. Se solicitado, aperte (A) para bloquear as permissões de escrita
11. Navegue para `[S:] SYSNAND VIRTUAL`
12. Aperte (A) em `essential.exefs` para selecioná-lo
13. Selecione "Copy to 0:/gm9/out''
    - Se você ver "Destination already exists", pressione (A) em "Overwrite file(s)"
14. Aperte (A) para continuar
15. Segure (R) e aperte (Start) ao mesmo tempo para desligar seu console
16. Insira o cartão SD no seu computador
17. Copie `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha` e `essential.exefs` da pasta `/gm9/out/` no seu cartão SD para um local seguro no seu computador
    - Copie esses backups para vários locais (como armazenamento online, um disco rígido externo, etc.)
    - Esses backups irão te salvar de um brick e/ou te ajudarão a recuperar arquivos da memória NAND caso algo dê errado no futuro
18. Delete `<date>_<serialnumber>_sysnand_##.bin` e `<date>_<serialnumber>_sysnand_##.bin.sha` da pasta `/gm9/out/` no seu cartão SD após copiá-lo
    - Os outros arquivos de backup são insignificantes em tamanho, e podem ser mantidos no cartão SD para facilitar o acesso
19. Reinsira o cartão SD no seu console
