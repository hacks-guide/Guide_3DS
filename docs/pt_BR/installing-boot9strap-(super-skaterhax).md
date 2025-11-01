---
head:
  [
    [ 'script', { src: '/assets/js/common.js' } ],
    [ 'script', { src: '/assets/js/skater-link.js' } ],
    [ 'script', { src: '/assets/js/link-common.js' } ]
  ]
---

# Instalando boot9strap (superskaterhax)

:::details Detalhes técnicos (opcional)

Para detalhes técnicos sobre os exploits que você usará nesta página, consulte [aqui](https://github.com/zoogie/super-skaterhax).

:::

### Notas de Compatibilidade

Super-skaterhax (quando usado para iniciar o Homebrew Launcher) é compatível com modelos New na versão 11.15.0 e acima em todas as regiões.

::: info

Sabe-se que este exploit é inconsistente: funciona para alguns, mas não para outros. Se você preferir usar um exploit mais consistente (que pode demorar mais tempo, mas terá o mesmo resultado final), siga [MSET9](installing-boot9strap-\(mset9\)) em vez disso.

:::

### O que é necessário

- O `.zip` do [Super-skaterhax](https://skater.nintendohomebrew.com) para a versão do sistema e da região do seu console

#### Seção I - Preparação

Nesta seção, você irá copiar os arquivos necessários para acionar tanto superskaterhax quanto o Homebrew Launcher.

1. Desligue seu console

2. Insira o cartão SD no seu computador

3. Copie tudo do `.zip` do Super-skaterhax para a raiz do seu cartão SD. Se algum dos arquivos existir, substitua-os pelos novos arquivos.
   ::: info

   ![](/images/screenshots/skaterhax/skater-root-layout.png)

   :::

4. Reinsira o cartão SD no seu console

5. Ligue o seu console

6. Abra as Configurações do Sistema

7. Selecione "Outras Configurações"

8. Navegue para "Perfil" -> "Configurações de Região"
   - Estas configurações serão alteradas temporariamente para aumentar as chances de sucesso do exploit
   - Você pode restaurar suas configurações de região de volta ao normal assim que finalizar esta página
   - Se você receber um [aviso](/images/screenshots/skaterhax/country-change-notice.png) dizendo que você perderá o acesso aos recursos de sua Nintendo Network ID, é seguro selecionar OK para continuar

9. Selecione as seguintes opções de acordo com a região de seu console ([imagem](/images/screenshots/skaterhax/skater-lang.png))
   - USA: Primeiro selecione United States, depois selecione Do Not Set
   - EUR: Primeiro selecione United Kingdom, depois selecione Do Not Set
   - JPN: Primeiro selecione 日本, depois selecione 設定しない
   - KOR: Primeiro selecione 대한민국, depois selecione 설정하지 않음

10. Navegue até "Data e Hora"

11. Defina "Today's Date" e "Current Time" para a data e hora atuais

12. Saia das Configurações do Sistema

#### Seção II - super-skaterhax

Nesta seção, você visitará a página web contendo o exploit, que iniciará o Homebrew Launcher.

::: info

Um vídeo que detalha essas etapas está disponível [aqui](https://www.youtube.com/watch?v=DEcZB72vJts).

:::

1. Abra o Navegador de Internet
2. Toque no ícone de 3 linhas (☰) no canto inferior direito da tela
3. Toque em `Configurações` -> vá para baixo -> `Redefinir Dados Salvos` -> `Limpar Tudo` -> `Limpar` -> `OK`
   - O navegador será fechado
4. Abra novamente o Navegador de Internet
5. Toque em `Próximo` -> `Google` -> `OK` -> `OK`
6. Toque na barra de endereços na parte superior da tela inferior
7. Digite a URL correspondente à região do seu console:
   - **EUA/EUR/JPN**: `https://skater.686178.xyz/go/super`
   - **KOR**: `https://skater.686178.xyz/go/korea`
8. Toque em "Abrir"
   - Você deve ver o texto "GO GO!". Não clique nele ainda
9. Toque no ícone de 3 linhas (☰) no canto inferior direito da tela
10. Toque em "Adicionar aos Favoritos"
11. Toque no ícone de 3 linhas (☰) no canto inferior direito da tela
12. Toque em `Configurações` -> `Excluir Cookies` -> `Sim`
13. Aperte (Home) para retornar ao Menu HOME, depois imediatamente abra novamente o Navegador de Internet
14. Aguarde a página carregar completamente e, em seguida, toque no botão "GO GO!" no topo da tela inferior
15. Espere a página carregar completamente, depois aperte (A) para dispensar o [popup](/images/screenshots/skaterhax/skater-popup.png)
16. Se o seu console exibir:
    - **A tela do "The Homebrew Launcher"**: Continue para o próximo passo
    - **Mensagem "Um erro ocorreu"**: O exploit falhou devido a chance aleatória. Abra a Configuração do Sistema, mude o idioma para um diferente (se possível), então tente novamente esta seção. Você pode ter que repetir esta sequência até dez vezes
      - Em consoles da região JPN/KOR, há apenas uma configuração de idioma. Nesses console, você deve abrir a Configuração do Console, fechá-la, então tentar esta seçao novamente
      - Se o exploit ainda não for bem-sucedido após cinco tentativas, poderá haver um problema com seus arquivos ou com a preparação. Certifique-se de que a região e a data/hora estejam corretas e de que você tem seguido esta seção **exatamente**. Se você usou o WinRAR para extrair arquivos para o cartão SD, re-extraia os arquivos usando o Explorador de Arquivos ou 7-zip ao invés disso
      - Se o exploit ainda não for bem-sucedido após dez tentativas, siga [MSET9](installing-boot9strap-\(mset9\)) ao invés disso
    - **Uma tela preta que diz "Ocorreu um erro"**: Seus arquivos estão no lugar incorreto. Certifique-se de que os arquivos super-skaterhax estejam na raiz do cartão SD
    - **Uma tela amarela**: o Homebrew Launcher falhou ao abrir devido a chance aleatória. Segure o botão POWER até que o console desligue, e tente novamente esta seção
    - **[A palavra "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: Você tem um Old 3DS, no qual esse exploit **não funciona**. Se este for o caso, siga [MSET9](installing-boot9strap-\(mset9\)) ao invés disso
17. Abra o nimdsphax da lista de homebrews
18. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
    - Se o seu console congelar em uma tela vermelha ou verde, segure o botão POWER até que ele desligue, então tente esta seção novamente

#### Seção III - Instalando boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - Se um passo na parte inferior da tela tiver texto vermelho e você não for solicitado a introduzir um combo de botões, [siga este guia de troubleshooting](troubleshooting-super-skaterhax)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Agora você pode restaurar suas configurações de região de volta ao normal.

:::

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
