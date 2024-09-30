# F3 (Linux)

## 중요

이 섹션은 F3를 사용해 SD 카드의 오류를 확인하는 추가 섹션입니다.

SD 카드의 용량과 컴퓨터의 속도에 따라 최대 몇 시간이 걸릴 수 있습니다!

이 페이지는 Linux 사용자를 위한 페이지입니다. Linux 사용자가 아니라면 [H2testw (windows)](h2testw-\(windows\)) 또는 [F3XSwift (Mac)](f3xswift-\(mac\)) 페이지를 참고해 주세요.

## 준비물

- 최신 버전의 [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## 진행 방법

1. f3 `.zip`의 압축을 풀어 주세요
2. `cd`를 입력해 f3 디렉터리로 이동해 주세요
3. `make` 명령을 실행해 F3를 컴파일해 주세요
4. SD 카드를 컴퓨터에 삽입해 주세요
5. SD 카드를 마운트해 주세요
6. `./f3write <SD 카드 마운트 포인트>` 명령을 실행해 주세요
7. 완료될 때까지 기다려 주세요. 예시 결과는 아래를 참고해 주세요

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. `./f3read <SD 카드 마운트 포인트>` 명령을 실행해 주세요
2. 완료될 때까지 기다려 주세요. 예시 결과는 아래를 참고해 주세요

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

시험 결과가 `Data LOST: 0.00 Byte (0 sectors)`로 나온다면, SD 카드는 정상이며 SD 카드의 모든 `.h2w`파일을 삭제해도 됩니다.

:::

::: danger

시험에서 다른 결과가 나타나면 SD 카드가 손상되었을 수도 있으므로 교체해야 할 수도 있습니다!

:::

::: tip

[시작하기](get-started) 로 돌아갑니다

:::
