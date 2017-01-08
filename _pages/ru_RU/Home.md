* * *

layout: splash permalink: / title: "Guide" header: overlay_color: "#5e616c" overlay_image: images/home-page-feature.jpg overlay_filter: 0.5 cta_label: "Get Started" cta_url: "/get-started" caption: excerpt: 'A complete guide to 3DS custom firmware,   
from stock to arm9loaderhax.  
' lang: en_US ref: home

* * *

{% capture notice-home %} **Это руководство применимо *только* для консолей, продающихся в рознице.  
Приставки, выдававшиеся по программе разработчиков Nintendo невозможно прошить по этому гайду. Воспользуйтесь [этой инструкцией](https://dev.3ds.guide), если у вас версия для разработчиков ("PANDA" или "SNAKE").** {% endcapture %}

<div class="notice--danger">{ notice-home | markdownify }</div>

**Гайду необходима *ваша* помощь. Пожалуйста помогите просидировать [эти](https://3ds.guide/rss.xml) файлы!** {: .notice--info}

**Для использования [magnet](https://en.wikipedia.org/wiki/Magnet_URI_scheme)-ссылок нужен torrent-клиент. Рекомендуемый клиент - [Deluge](http://dev.deluge-torrent.org/wiki/Download)** {: .notice--info}

**Перед началом работ следует прочитать инструкцию полностью, чтобы осознать весь фронт работ.** {: .notice--warning}

## Что такое Homebrew?

Под словом [**Homebrew**](https://en.wikipedia.org/wiki/List_of_homebrew_video_games) обычно подразумевают ПО не авторизованное Nintendo. В качестве примера можно привести эмуляторы консолей предыдущих поколений, различные программы для бекапа и редактирования сохранений, разные самописные игры.

В большинстве случаев, запуск хомбрю легален и не требует денежных вложений. Часто достаточно лишь встроенного в прошивку приложения Звуки Nintendo 3DS. Однако, существуют эксплойты, требующие наличия купленной коммерческой игры.

## Что такое кастомная прошивка (CFW)?

**Кастомная прошивка** ("CFW", "кастом") позволяет пользоваться всеми возможностями приставки и делать вещи не доступные простым пользователям хомбрю. Например, можно устанавливать неподписанное ПО и запускать его прямо с домашнего экрана.

Наиболее просто кастом ставится на консоли с прошивкой 11.2.0 и ниже. Остальным же придется сначала понизить прошивку.

## Так чему же учит этот гайд?

Конечная цель гайда - установка кастомной прошивки, базирующейся на arm9loaderhax на любую приставку с родной немодифицированной прошивкой. В некоторых случая мы используем хомбрю, как трамплин для достижения конечной цели - CFW.

arm9loaderhax - новейший и наилучший метод запуска кастомной прошивки. Благодаря ему можно получить практически неограниченный доступ к системе, а скорость загрузки будет сравнима с таковой на оригинальной прошивке.

arm9loaderhax имеет множество преимуществ перед другими методами запуска кастомных прошивок. Рекомендуется использовать именно этот гайд, поскольку он постоянно обновляется и не содержит устаревших программ и методов запуска кастомных прошивок (например, menuhax или rxTools).

## Что же можно делать на кастомной прошивке?

+ Играть во все игры, когда-либо выходившие на картриджах, или в цифровом виде вне зависимости от их региона.
+ Настраивать внешний вид домашнего экрана с помощью кастомных [темам](https://3dsthem.es/) и [жетонов](https://badges.3dsthem.es/).
+ Использовать патчи на легально купленных играх, например, любительские переводы и модификации. 
+ Делать скриншоты игр и приложений.
+ [Делать резервные копии, редактировать и восстанавливать](https://gbatemp.net/threads/release-jks-savemanager-homebrew-cia-save-manager.413143/) сохранения игр. 
+ Играть в игры от приставок предыдущих поколений с помощью эмуляторов (на New 3DS производительность выше).
+ Устанавливать хомбрю в память приставки, таким образом, чтобы их было видно на домашнем экране.
+ Дампить игры в формате CIA, который можно установить прямо в систему и играть]не используя картридж. 
+ Только New 3DS: стримить геймплей на компьютер по беспроводной сети с помощью NTR CFW.
+ Играть в игры от DS с помощью картриджей, которые заблокированы на 3DS, или вообще на ней не работали.
+ Безопасно обновляться до актуальных версий прошивок без боязни потерять доступ к хомбрю и кастому.

## Что нужно знать, перед тем, как начать?

+ **Перед тем, как начинать прошивку, следует осознать все сопутствующие риски. КАЖДЫЙ раз, модифицируя прошивку консоли, вы рискуете получить НЕВОССТАНОВИМЫЙ брик. Риск хоть и невысок, но он есть. Чем тщательней вы следуете инструкциям, тем ближе к нулю риск убить консоль. Удачи!**
+ If you have already hacked your 3DS before to get an EmuNAND setup, and would like to move the contents of your previous EmuNAND to your new SysNAND CFW, you should follow all instructions and restore your existing EmuNAND when prompted once you reach [Installing arm9loaderhax](installing-arm9loaderhax).
+ This guide will work on New 3DS, Old 3DS, and 2DS in all regions on firmware 11.2.0 or below *(except CHN / TWN)*.
+ If everything goes according to plan, you will lose no data and end up with everything that you started with (games, NNID, saves, etc will be preserved).
+ **Keep the device plugged in and charged throughout the entire process to avoid data loss or damage from an unexpected power-off!**
+ Your SD card should be [MBR, not GPT](http://www.howtogeek.com/245610/) (the SD card that comes with the device will be MBR by default).
+ If you need to format a brand new SD card, you can use [`guiformat`](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) and set to an Allocation Unit Size of 32K.
+ The 2DS is essentially identical to the Old 3DS in terms of software, and that any steps which say "Old 3DS" also apply to 2DS.