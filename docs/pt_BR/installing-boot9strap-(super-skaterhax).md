# Instalando boot9strap (superskaterhax)

:::details Detalhes técnicos (opcional)

Para detalhes técnicos sobre os exploits que você usará nesta página, consulte [aqui](https://github.com/zoogie/super-skaterhax).

:::

### Notas de Compatibilidade

Super-skaterhax (quando usado para iniciar o Homebrew Launcher) é compatível com modelos New na versão 11.15.0 e acima em todas as regiões.

::: warning

As instruções fornecidas só se aplicam ao New 3DS, New 3DS XL e ao New 2DS XL. Por favor, certifique-se de que o console que você está modificando é um New 3DS, New 3DS XL, ou New 2DS XL antes de continuar.

:::

### O que é necessário

- O arquivo `.zip` do [super-skaterhax](https://skater.nintendohomebrew.com) para a região e versão de sistema do seu console

#### Seção I - Preparação

Nesta seção, você irá copiar os arquivos necessários para acionar tanto superskaterhax quanto o Homebrew Launcher.

1. Desligue seu console

2. Insira o cartão SD no seu computador

3. Copie tudo do `.zip` do super-skaterhax para a raiz do seu cartão SD, substituindo quaisquer arquivos existentes

   ::: info

   ![](/images/screenshots/skaterhax/skater-root-layout.png)

   :::

4. Reinsira o cartão SD no seu console

5. Ligue o seu console

6. Abra as Configurações do Sistema

7. Selecione "Outras Configurações"

8. Navegue para "Perfil" -> "Configurações de Região"
   - Se você receber um [aviso](/images/screenshots/skaterhax/country-change-notice.png) que diz que você vai perder acesso aos recursos da sua Nintendo Network ID, você pode com segurança selecionar OK para continuar
   - Após completar esta página, você pode restaurar as configurações de região de volta ao normal

9. Selecione as seguintes opções de acordo com a região de seu console ([imagem](/images/screenshots/skaterhax/skater-lang.png))
   - USA: United States, Do Not Set
   - EUR: United Kingdom, Do Not Set
   - JPN: 日本, 設定しない
   - KOR: 대한민국, 설정하지 않음

10. Saia das Configurações do Sistema

#### Seção II - super-skaterhax

Nesta seção, você visitará a página web contendo o exploit, que iniciará o Homebrew Launcher.

::: info

Se você ainda não tem, certifique-se de que você tem uma conexão de Internet ativa configurada em seu console.

:::

1. No Menu HOME, pressione os gatilhos da Esquerda e da Direita ao mesmo tempo para abrir a câmera
   - Se você não consegue abrir a câmera, abra o Navegador de Internet e digite a URL manualmente (`https://zoogie.github.io/web/super/` para EUR/USA/JPN, `https://zoogie.github.io/web/korea` para KOR)
2. Toque no botão do código QR e digitalize um dos seguintes códigos QR para a região do seu console [aqui](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
   - Se você receber um aviso de certificado de segurança, verifique se a data do sistema está correta
3. Pressione (Select) para abrir a aba de favoritos
   - Se o seu botão (Select) não responder, toque no ícone de estrela no canto inferior esquerdo da tela
4. Toque em "Adicionar aos favoritos"
5. Aperte (B) uma vez para retornar ao navegador
6. Pressione (ZR) para abrir a lista de abas
   - Se seu botão (ZR) não estiver respondendo, toque nos dois quadrados sobrepostos no canto inferior direito da tela
7. Certifique-se de que a única aba aberta é o site do super-skaterhax
   - Esta aba deve estar destacada em azul na lista de abas
   - Se outras abas estiverem abertas, feche-as
8. Aperte (B) uma vez para retornar ao navegador
9. Aperte (Start) para abrir o menu de contexto
   - Se o seu botão (Start) não responder, toque no menu de 3 linhas no canto inferior direito da tela
10. Toque em "Configurações"
11. Toque em "Excluir Cookies"
12. Aperte (A) para continuar
13. Aperte (Home) para retornar ao Menu HOME, depois aperte (A) imediatamente para iniciar o navegador novamente
14. Selecione o botão "GO GO!" no topo da tela inferior
15. Pressione (A) para fechar o [popup](/images/screenshots/skaterhax/skater-popup.png)
    - Se o seu console congela em uma tela amarela, segure o botão POWER até que ele desligue e tente esta seção novamente
    - Se o seu console congela numa tela vermelha, segure o botão POWER até que ele desligue, refaça o passo 3 da Seção II e tente esta seção novamente
    - Se seu console [mostrar a palavra Text no canto superior esquerdo da tela inferior](/images/screenshots/skaterhax/skater-old3ds.png), você tem um Old 3DS e este exploit **não irá funcionar no seu dispositivo**. Se este for o caso, siga [Instalando boot9strap (MSET9)](installing-boot9strap-\(mset9\)) ao invés disso
    - Se você receber outro erro, tente novamente até 5 vezes e, se ainda não funcionar, [siga este guia de troubleshooting](troubleshooting#installing-boot9strap-super-skaterhax)
16. Seu console terá inicializado o Homebrew Launcher
17. Abra o nimdsphax da lista de homebrews
18. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
    - Se o seu console congelar em uma tela vermelha ou verde, segure o botão POWER até que ele desligue, então tente esta seção novamente
    - Isso pode levar até cinco tentativas

#### Seção III - Instalando o boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - Se um passo na tela inferior tiver texto de cor vermelha e você não for solicitado a introduzir um combo de botões, [siga este guia de solução de problemas](troubleshooting#issues-with-safeb9sinstaller)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Agora você pode restaurar as suas configurações de região de volta ao normal.

:::

::: tip

Continue em [Finalizando a instalação](finalizing-setup)

:::
