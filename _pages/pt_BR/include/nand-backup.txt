1. Aperte (Home) para abrir o menu de ações
1. Selecione "Scripts..."
1. Selecione "GM9Megascript"
1. Selecione "Backup Options"
1. Selecione "SysNAND Backup"
1. Aperte (A) para confirmar
    + Este processo levará algum tempo
    + Se você receber um erro, procure por seu problema no [guia de troubleshooting](troubleshooting#finalizing-setup)
1. Aperte (A) para continuar
1. Aperte (B) para retornar para o menu principal
1. Selecione "Exit"
1. Se solicitado, aperte (A) para bloquear as permissões de escrita
1. Navegue para `[S:] SYSNAND VIRTUAL`
1. Aperte (A) em `essential.exefs` para selecioná-lo
1. Selecione "Copy to 0:/gm9/out''
    + Se você ver "Destination already exists", aperte (A) em "Overwrite file(s)"
1. Aperte (A) para continuar
1. Segure (R) e aperte (Start) ao mesmo tempo para desligar seu console
1. Insira o cartão SD no seu computador
1. Copie `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha` e `essential.exefs` da pasta `/gm9/out/` no seu cartão SD para um local seguro no seu computador
    + Copie estes backups para vários lugares (como armazenamento de arquivos online, um disco rígido externo, etc.)
    + Esses backups irão te salvar de um brick e/ou te ajudarão a recuperar os arquivos da memória NAND caso algo dê errado
1. Delete `<date>_<serialnumber>_sysnand_##.bin` e `<date>_<serialnumber>_sysnand_##.bin.sha` da pasta `/gm9/out/` no seu cartão SD após copiá-lo
    + Os outros arquivos de backup são insignificantes em tamanho e podem ser mantidos no seu cartão SD para fácil acesso
1. Reinsira o cartão SD no seu console
