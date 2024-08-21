
Ao criar o ID1 do MSET9 no Windows 10 ou superior, o script pode falhar com este erro:

![Error 18](/images/screenshots/troubleshooting/234.png)

Isso ocorre devido ao suporte beta a UTF-8 no Windows. Você precisa desabilitá-lo para executar o MSET9:

1. Aperte **Windows + R** para abrir a caixa de diálogo Executar, digite `intl.cpl` e então clique em "OK"

![Executar](/images/screenshots/troubleshooting/234run.png)
{: .notice--info}

1. Clique em `Administrativo`, depois em `Alterar Localidade do Sistema`

![Região](/images/screenshots/troubleshooting/234region.png)
{: .notice--info}
![Administrativo](/images/screenshots/troubleshooting/234administrative.png)
{: .notice--info}

1. Desmarque a caixa ao lado de `Beta: Usar Unicode UTF-8 para suporte de linguagem mundial`, então clique em "OK"

![Localidade](/images/screenshots/troubleshooting/234locale.png)
{: .notice--info}

1. Clique em "Reiniciar agora"

![Reiniciar](/images/screenshots/troubleshooting/234restart.png)
{: .notice--info}

Depois que seu PC for reiniciado, tente criar o ID1 do MSET9 novamente.
