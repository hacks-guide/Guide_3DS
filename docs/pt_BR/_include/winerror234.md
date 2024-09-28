Ao criar o ID1 do MSET9 no Windows 10 ou superior, o script pode falhar com este erro:

![Error 18](/images/screenshots/troubleshooting/234.png)

Isso ocorre devido ao suporte beta a UTF-8 no Windows. Você precisa desabilitá-lo para executar o MSET9:

1. Hit **Windows Key + R** to open up the Run dialogue, type `intl.cpl` then click "OK"
   ::: info

   ![Executar](/images/screenshots/troubleshooting/234run.png)

   :::

2. Clique em `Administrativo`, depois em `Alterar Localidade do Sistema`

   ::: info

   ![Região](/images/screenshots/troubleshooting/234region.png)

   :::

   ::: info

   ![Administrativo](/images/screenshots/troubleshooting/234administrative.png)

   :::

3. Desmarque a caixa ao lado de `Beta: Usar Unicode UTF-8 para suporte de linguagem mundial`, então clique em "OK"

   ::: info

   ![Localidade](/images/screenshots/troubleshooting/234locale.png)

   :::

4. Clique em "Reiniciar agora"

   ::: info

   ![Reiniciar](/images/screenshots/troubleshooting/234restart.png)

   :::

Depois que seu PC for reiniciado, tente criar o ID1 do MSET9 novamente.
