# F3 (Linux)

## Required Reading

Esta é uma seção adicional para verificar erros no seu cartão SD usando F3.

Dependendo do tamanho do seu cartão SD e da velocidade do seu computador, este processo pode demorar até várias horas!

Esta página é destinada apenas a usuários do Linux. Se você não está no Linux, confira as páginas [H2testw (Windows)](h2testw-\(windows\)) ou [F3XSwift (Mac)](f3xswift-\(mac\)) pages.

## What You Need

- The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instructions

1. Descompacte o arquivo `.zip` do f3
2. `cd` para o diretório f3
3. Execute `make` para compilar o F3
4. Insira o cartão SD no seu computador
5. Monte o cartão SD
6. Execute `./f3write <ponto de montagem do seu cartão SD>`
7. Aguarde até que o processo seja concluído. Veja abaixo um exemplo de saída.

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Execute `./f3read <endereço de montagem do seu cartão sd>`
2. Aguarde até que o processo seja concluído. Veja abaixo um exemplo de saída.

```bash
$ ./f3read /media/michel/6135-3363/
									SECTORS      ok/corrupted/changed/overwritten
Validating file 1.h2w ... 2097152/        0/      0/      0
...
Validating file 30.h2w ... 1491904/        0/      0/      0

	Data OK: 29.71 GB (62309312 sectors)
Data LOST: 0.00 Byte (0 sectors)
					Corrupted: 0.00 Byte (0 sectors)
	Slightly changed: 0.00 Byte (0 sectors)
				Overwritten: 0.00 Byte (0 sectors)
Average Reading speed: 9.42 MB/s
```

___

::: tip

Se o teste mostrar o resultado `Data LOST: 0.00 Byte (0 sectors)`, seu cartão SD está em boas condições e você pode deletar todos os arquivos `.h2w` do seu cartão SD.

:::

::: danger

Se o teste mostrar outros resultados, o cartão SD pode estar corrompido ou danificado e você pode ter que substituí-lo!

:::

::: tip

Return to [Get Started](get-started)

:::
