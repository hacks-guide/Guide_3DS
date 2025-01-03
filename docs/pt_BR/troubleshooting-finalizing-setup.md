# Troubleshooting (Finalizando a Instalação)

Esta página oferece recursos de solução de problemas para problemas com a página "Finalizando a Instalação". Se você não consegue resolver seu problema com o conselho nesta página, por favor entre no [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) e descreva o seu problema, incluindo o que você já tentou.

## Problemas com a Finalização da Instalação

:::details Não foi possível atualizar o console

As etapas abaixo podem ser tentadas em qualquer ordem, mas são listadas de maneira mais fácil para maneira mais difícil de realizar.

1. Se você estiver usando Pretendo, volte para a Nintendo com o Nimbus e tente novamente
2. Defina suas configurações de DNS para "Automático"
3. Aproxime-se do seu roteador Wi-Fi
4. Atualize a partir do Safe Mode desligando o console, segurando (Gatilho Esquerdo) + (Gatilho Direito) + (Botão direcional para cima) + (A) na inicialização, seguindo as instruções na tela
5. Exclua sua conexão Wi-Fi e reconecte sua rede Wi-Fi novamente
6. Reinicie seu roteador Wi-Fi
7. Conecte-se a uma conexão Wi-Fi diferente, como um ponto de acesso móvel
8. Servidores Nintendo podem estar desligados; Tente novamente mais tarde
9. Se o erro persistir, [siga CTRTransfer](ctrtransfer), e tente novamente
10. Para mais suporte (em Inglês), entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp)

:::

:::details Error #22: finalize.romfs is invalid

O arquivo `finalize.romfs` está corrompido ou é ilegível. [Baixe novamente](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) e copie-o para a raíz do cartão SD, substituindo qualquer cópia existente, depois tente novamente.

:::

:::details Information #23: finalize.romfs in wrong location

O arquivo `finalize.romfs` foi colocado no local errado ao invés de raiz do SD. O script tentará resolver isso, mas requer a sua permissão para fazê-lo. Aperte (A) nas próximas mensagens para continuar.

:::

:::details Error #24: SD is write-protected

Certifique-se de que seu cartão SD não esteja [bloqueado](/images/sdlock.png). Se o cartão SD não estiver bloqueado e você continuar a receber este erro, junte-se ao [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) para assistência.

:::

:::details Error #02: Missing essential.exefs

Você disse 'No' para a mensagem "Make essential files backup?" no GodMode9. Desligue seu dispositivo, ligue-o enquanto segura (Start) para entrar novamente no GodMode9, diga 'Yes' para a mensagem, e então tente novamente.

:::

:::details Erro #04: No space

Você precisa de pelo menos 1.3GB de espaço livre para executar o backup da NAND, que é parte do script. Se você não tem espaço suficiente, siga estes passos:

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie a pasta `Nintendo 3DS` da raiz do seu cartão SD para o seu computador
4. Exclua a pasta Nintendo 3DS do cartão SD
5. Reinsira o cartão SD no seu console
6. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
7. Pressione o botão (Home)
8. Selecione "Scripts..."
9. Selecione "finalize"
10. Aperte (A) para criar um backup da NAND
    - Isso pode demorar cerca de quinze minutos
11. Aperte (A) novamente
    - O console deve desligar automaticamente
12. Insira o cartão SD no seu computador
13. Copie os arquivos em `gm9/backups/` do seu SD para um local seguro no seu computador
14. Apague os arquivos `<date>_<serialnumber>_sysnand_##.bin` e `<date>_<serialnumber>_sysnand_##.bin.sha` do cartão SD
15. Copie a pasta `Nintendo 3DS` do seu computador para a raiz do seu cartão SD
16. Exclua a pasta `Nintendo 3DS` do seu computador

Agora que você tem seu backup da NAND em um lugar seguro:

1. Reinsira o cartão SD no seu console
2. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
3. Pressione o botão (Home)
4. Selecione "Scripts..."
5. Selecione "finalize"
6. Continue o script normalmente
   - O backup da NAND será ignorado automaticamente

:::

:::details Information #05: No title database

Aperte (A) para importar um title database, desbloqueie SysNAND apertando os botões na tela, e depois continue o script normalmente.

:::

:::details Error #06 ou "Error: Could not open directory" ao tentar fazer um backup da NAND

Certifique-se de que você tem pelo menos 1.3GB disponíveis no seu cartão SD. Se você não tem espaço suficiente, siga estes passos:

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie a pasta `Nintendo 3DS` da raiz do seu cartão SD para o seu computador
4. Exclua a pasta Nintendo 3DS do cartão SD
5. Reinsira o cartão SD no seu console
6. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
7. Faça um [backup da NAND](godmode9-usage#criating-a-nand-backup)
8. Copie os arquivos em `gm9/out` do seu SD para um local seguro no seu computador
9. Apague os arquivos `<date>_<serialnumber>_sysnand_##.bin` e `<date>_<serialnumber>_sysnand_##.bin.sha` do cartão SD, mantendo essential.exefs em `/gm9/out/`
10. Copie a pasta `Nintendo 3DS` do seu computador para a raiz do seu cartão SD
11. Exclua a pasta `Nintendo 3DS` do seu computador

Se você tiver espaço suficiente no seu cartão SD, seu SD pode estar corrompido ou com defeito. Verifique se há erros no seu cartão SD de acordo com o sistema operacional do seu computador: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)).

:::

:::details Error #12: Copy (file).db fail

Certifique-se de que seu cartão SD não esteja [bloqueado](/images/sdlock.png). Se o cartão SD não estiver bloqueado e você continuar a receber este erro, junte-se ao [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) para assistência.

:::

:::details Information #17: Duplicate NAND backup

O script detectou que a pasta Nintendo 3DS está faltando e que você já fez um backup da NAND antes. Se você pretende instalar o homebrew, você deve fazer o seguinte:

1. Aperte (B) para cancelar outro backup da NAND
2. Segure (R) e aperte (Start) ao mesmo tempo para desligar seu console
3. Copie os arquivos em `/gm9/backups/` do seu SD para um local seguro no seu computador
4. Apague `/gm9/backups/` do seu cartão SD
5. Se você moveu sua pasta Nintendo 3DS para fora do seu cartão SD para chegar a este ponto, copie-a de volta para o seu cartão SD
   - Se você não possuir uma pasta Nintendo 3DS, abra o Menu HOME pelo menos uma vez com o cartão SD inserido para criá-la automaticamente
6. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
7. Aperte (Home) para abrir o menu de ações
8. Selecione "Scripts..."
9. Selecione "finalize"
10. Siga as instruções no script, respondendo a quaisquer perguntas que lhe sejam feitas

:::

:::details Error #18a/18b: MSET9 detected

Você não removeu o MSET9 na página anterior. O script tentará remover o MSET9 para você; siga as instruções dadas pelo script.

:::

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Voltar para [Finalizando a instalação](finalizing-setup)

:::

<!--@include: ./_include/troubleshooting-return.md -->
