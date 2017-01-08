* * *

title: "DSiWare Downgrade (App Injection and Second 3DS)" permalink: /dsiware-downgrade-(app-injection-and-second-3ds).html lang: en_US ref: dsiware-downgrade-(app-injection-and-second-3ds)

* * *

Если ваша прошивка 11.0.0, 11.1.0, или 11.2.0, то вы можете понизить версию NATIVE_FIRM, используя DSiWare и вторую 3DS с установленной кастомной прошивкой. {: .notice}

Если на любой из консолей у вас прошивка ниже, чем 11.2.0, то следует пройти шаги с ctr-httpwn на каждом девайсе с такой прошивкой, чтобы заработала Передача данных (System Transfer). {: .notice--info}

Этот метод использует уязвимость, которая позволяет DSiWare-приложениям писать и читать в любом месте NAND. {: .notice--info}

Это рабочая реализация "FIRM partitions known-plaintext"-эксплойта. Подробнее о нем [здесь](https://www.3dbrew.org/wiki/3DS_System_Flaws). {: .notice--info}

Гайд предполагает наличие прошитой arm9loaderhax 3DS с кастомной прошивкой, настроенной по этому же гайду, однако, все нижесказанное заработает и с EmuNAND (правда, с небольшими правками: просто делайте все пункты не в SysNAND, а в EmuNAND). Помните, что RedNAND и EmuNAND - слегка разные реализации одного и того же [концепта](http://3dbrew.org/wiki/NAND_Redirection). {: .notice--info}

Ваше DSiWare-сохранение будет скопировано перед тем, как будет заменено взломанным сохранением. {: .notice--info}

{% capture notice-4 %} Этот метод требует от вас произвести Передачу данных системы ([System Transfer](http://en-americas-support.nintendo.com/app/answers/detail/a_id/13996/)) из приставки с кастомной прошивкой на приставку со стоковой прошивкой. Перенос данных будет работать *только* в одном из следующих направлений:   
+ New 3DS -> New 3DS  
+ Old 3DS or 2DS -> Old 3DS or 2DS  
+ Old 3DS or 2DS -> New 3DS   
{% endcapture %}

<div class="notice--warning">{ notice-4 | markdownify }</div>

Обе приставки должны быть одного региона. {: .notice--warning}

**Вы лишитесь всех данных на *целевой 3DS*!** Заранее озаботьтесь резервными копиями, если в этом есть необходимость. {: .notice--danger}

NNID из исходной 3DS будет находится в целевой 3DS до тех пор, пока вы не перенесете его назад в исходную консоль, либо не позвоните в Nintendo (подробности в инструкции). {: .notice--danger}

Перенос системы можно делать лишь раз в неделю для одного NNID. {: .notice--danger}

#### Что нужно:

* Две приставки 
  * **Исходная 3DS**: 3DS с кастомной прошивкой (arm9loaderhax, либо прошивка с EmuNAND/RedNAND) *с последней версией системного ПО*. Убедитесь, что помните пароль от Nintendo Network, без него вы не сможете сделать перенос данных.
  * **Целевая 3DS**: 3DS с официальной прошивкой *(в диапазоне между 11.0.0 и 11.2.0)*.
* Купленная в eShop DSiWare-игра, установленная на **исходной 3DS** 
  * Пиратская копия игры **НЕ** будет работать;
  * [Список совместимых DSiWare-игр](dsiware-list).
* Точка входа из части [Homebrew Launcher (SoundHax)](homebrew-launcher-(soundhax)) или [Homebrew Launcher (не используя браузер)](homebrew-launcher-(no-browser)).
* Версия для инжекта эксплойта `из архива` для вашего региона: 
  * [`DSiWare_usa_sudokuhax_injection.zip;`](magnet:?xt=urn:btih:7ed7fee15c900ed02b5e2cb3c8e7a0363f4d9354&dn=DSiWare_usa_sudokuhax_injection.zip&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce)
  * [`DSiWare_eur_exidiahax_injection.zip;`](magnet:?xt=urn:btih:046bb8023bc40b9a95a8a339c85a9ef18cf60db6&dn=DSiWare_eur_exidiahax_injection.zip&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce)
  * [`DSiWare_jpn_4swordshax_injection.zip`](magnet:?xt=urn:btih:1bcc90c93da91c9876671f6218084207def90db9&dn=DSiWare_jpn_4swordshax_injection.zip&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce)
* Свежая версия [GodMode9](https://github.com/d0k3/GodMode9/releases/latest).
* Свежая версия [3DSident](https://github.com/joel16/3DSident/releases/latest).
* Свежая версия [dgTool](https://github.com/Plailect/dgTool/releases/latest).
* The Homebrew [Starter Kit](http://smealum.github.io/ninjhax2/starter.zip).
* NFIRM `из архива` соответствующего версии **целевой 3DS** 
  * [New 3DS 11.0.0](magnet:?xt=urn:btih:2d13a5ea1570f911bd5c6423e0c30e51d548837a&dn=11.0.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
  * [Old 3DS 11.0.0](magnet:?xt=urn:btih:72393bbd99bc285db84a9cabf39d9b3200058d6a&dn=11.0.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)  
    ~ 
  * [New 3DS 11.1.0](magnet:?xt=urn:btih:d7d60c27c18f53bd8508a194656a465f6448bedf&dn=11.1.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce) 
  * [Old 3DS 11.1.0](magnet:?xt=urn:btih:0caf9a948a2d8bf23606d641f6628e2baeb983bb&dn=11.1.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)  
    ~ 
  * [New 3DS 11.2.0](magnet:?xt=urn:btih:881388a552a1ce9a963d391bf1a023642270991c&dn=11.2.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce) 
  * [Old 3DS 11.2.0](magnet:?xt=urn:btih:a479e4ee55efbc18c181d426cd77a34815388151&dn=11.2.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce) 
* Если версия системного ПО на **целевой 3DS** ниже, чем 11.2.0, *вам так же* придется воспользоваться 
  * свежей версией [ctr-httpwn](https://github.com/yellows8/ctr-httpwn/releases/latest)

#### Что делать:

##### Часть I - Подготовка

Используйте [save manager](https://github.com/J-D-K/JKSM/releases/latest)для того, чтобы сделать резервные копии всех важных сейвов на целевой 3DS (приставка будет отформатирована)! {: .notice--warning}

  1. Создайте папку `files9` в корне карты памяти **исходной 3DS**, если таковой не имеется.
  2. Скопируйте `GodMode9.bin` из `zip-архива` GodMode9 в папку `/luma/payloads/` в корне КП **исходной 3DS** и переименуйте `GodMode9.bin` в `up_GodMode9.bin`.
  3. Скопируйте `.app` из `zip-архива` с эксплойтом для инжекта, соответствующего региону консоли в корень КП **исходной 3DS**.
  4. Скопируйте папку `savedata` из `zip-архива` с файлами для инжекта DSiWare в корень КП **исходной 3DS**.
  5. Вставьте карту памяти в **исходную 3DS**.
  6. На **исходной 3DS** удерживайте (START) во время загрузки приставки, чтобы попасть в Hourglass9.
  7. Перейдите в SysNAND Options, SysNAND Backup/Restore, затем сделайте бекап **(min size)** SysNAND в `NANDmin.bin`.
  8. Нажмите (SELECT) в главном меню, чтобы извлечь КП из **исходной 3DS**, а затем вставьте ее в ПК.
  9. Скопируйте `NANDmin.bin` и `NANDmin.bin.sha` из папки `/files9/` на карте памяти в надежное место 
  * Сделайте копии в нескольких местах или в облачном хранилище;
  * Этот бекап может спасти вам консоль, если что-то пойдет не так;
  * **Убедитесь, что размер вашего бекапа соответствует размеру указанному на [этой](nand-size) странице; если это не так, удалите бекап и создайте его заново!**
 10. Вставьте карту памяти из **целевой 3DS** в компьютер.
 11. **Сохраните файлы с обеих карт памяти в разные папки на компьютере (назовите папки таким образом, чтобы понимать какие файлы откуда)!**
 12. Верните обе карты памяти на места (не перепутайте).
 13. Нажмите (START) для перезагрузки.

##### Часть II - Резервное копирование DsiWare

После того, как вы окончите выполнение инструкций, созданная в этой части резервная копия может быть использована для восстановления сохранений DSiWare-игр. Удалите DSiWare-игры из системной памяти и восстановите их же из карты памяти. {: .notice--info}

Сделанный бекап может быть использован только на том NAND, на котором был создан. Если вы отформатируете 3DS, или восстановите другой NAND, (особенно если `movable.sed` был изменен), резервная копия станет бесполезной. {: .notice--info}

  1. Перейдите в "Системные настройки" (System Settings), "Управление данными" (Data Management), "DSiWare" на **исходной 3DS**.
  2. Скопируйте все DSiWare-игры , которые уже есть на КП в системную память.
  3. Скопируйте DSiWare-игру, которую планируете использовать, на карту памяти.
  4. Покиньте системное меню.

##### Часть III - Установка сохранения

  1. Запустите GodMode9 из под arm9loaderhax, удерживая (ВВЕРХ) во время загрузки.
  2. Выберите пункт `SDCARD`.
  3. Нажмите (Y) на `.app`-файле из архива с файлами для инжекта DSiWare, который вы скопировали на КП ранее.
  4. Нажмите (B), чтобы вернуться в главное меню
  5. Перейдите в `SYSNAND TWLN` -> `title` -> `00030004` -> `(8-ми значный ID)` 
  * 8-ми значный ID берите в [списке совместимых DSiWare-игр](dsiware-list), напротив выбранной вами игры.
  6. Выберите пункт `content`.
  7. Нажмите (A) на `.app`-файле, находящемся в этой папке.
  8. Выберите "Inject data @offset".
  9. Нажмите (A), чтобы выбрать смещение `00000000`.
 10. Нажмите (A), чтобы разрешить запись в SysNAND и введите указанную комбинацию кнопок.
 11. Нажмите (B), чтобы вернуться в главное меню программы.
 12. Перейдите в `SYSNAND TWLN` -> `title` -> `00030004` -> `(8-ми значный ID)` 
  * 8-ми значный ID берите в [списке совместимых DSiWare-игр](dsiware-list), напротив выбранной вами игры.
 13. Перейдите в `data`.
 14. Нажмите (A) на `public.sav`.
 15. Выберите "Mount as FAT image" 
  * If you do not see this option, ensure you are running the latest GodMode9 release
  * Если вы не видите этой опции, [напишите об этом репорт](https://github.com/d0k3/GodMode9/issues).
 16. Вы попадете в главное меню.
 17. Перейдите в `SDCARD`.
 18. Нажмите (Y) на файле(ах) в папке `savedata,` чтобы скопировать их. 
  * Если в папке `savedata` уже есть папка `savedata` , не считайте это ошибкой! В таком случае копируйте вложенную папку `savedata`, а не файлы в ней.
 19. Нажмите (B), чтобы вернуться в главное меню программы.
 20. Перейдите в `FAT IMAGE`.
 21. C помощью кнопки (X) удалите все содержимое папки `FAT IMAGE`.
 22. Нажмите (Y), чтобы вставить **содержимое** папки `savedata`.
 23. Выберите "Copy path(s)".
 24. Нажмите (A), чтобы разрешить запись в SysNAND и введите указанную комбинацию кнопок.
 25. Нажмите (START) для перезагрузки.
 26. Запустите DSiWare-игру на **исходной 3DS**.
 27. Проверьте, работает ли импортированное сохранение, нажав на экран, либо на какую-либо кнопку 
  * Если вы используете файлы для региона EUR (**Legends of Exidia**), после нажатия (A), либо (START) на двух первых экранах, выберите первый слот и нажмите "continue";
  * Если игра падает с ошибкой, касающейся `boot.nds`, либо просто выскакиевает белый экран, **значит эксплойт работает и все в порядке**!
  * Если игра жалуется на поврежденный или неверный сейв (corrupted or inaccessible), убедитесь, что скопировали именно **содержимое** папки `savedata`, а не саму папку.
  * Если игра работает нормально безо всяких ошибок, значит вы где-то допустили оплошность и неверно установили файл сохранения. 
  * Если выскакивает черный экран, обратитесь к разделу с [проблемами и их решениями](troubleshooting#twl_broken).
  * Если игра пропала из **целевой 3DS**, либо выскакивает ошибка сообщающая о повреждении, либо недоступности файла сохранения, [обратитесь к части с проблемами и их решениями](troubleshooting#ts_dsiware).

##### Часть IV - ctr-httpwn

**Эта часть нужна только в том случае, если прошивка *целевой 3DS* ниже, чем 11.2.0. **

**Эта часть позволит провести перенос системы, даже в том случае, если ваша прошивка ниже последней.**

  1. Скопируйте и объедините папку `3ds` из `zip-архива` ctr-httpwn в корень карты памяти **целевой 3DS**.
  2. Верните карту памяти назад в **целевую 3DS**.
  3. Запустите Homebrew launcher на устройстве используя способы, описанные в [Homebrew Launcher (не используя браузер)](homebrew-launcher-(no-browser)) 
  * **На New 3DSs с версией системного ПО 10.7.0 и 11.0.0 можете для этого использовать [Homebrew Launcher (используя браузер)](homebrew-launcher-(browser));**
  * **Убедитесь, что в системе не установлен menuhax, иначе вы не сможете вернуться на домашний экран из Homebrew launcher.**
  4. Запустите ctr-httpwn на **целевой 3DS**.
  5. Нажмите (A), чтобы продолжить.
  6. Нажмите (START), чтобы выйти из ctr-httpwn.
  7. Нажмите (START), чтобы открыть меню Homebrew launcher.
  8. Нажмите (X), чтобы вернуться на домашний экран без перезагрузки 
  * Может выскочить ошибка "Произошла ошибка" (Error has occurred). Так бывает, просто нажмите (A), чтобы продолжить.
  9. Переходите к следующей части **без перезагрузки** 
  * **Целевая 3DS** временно пропатчена для доступа к сетевым функциям без проверки номера установленной прошивки;
  * Помните, что выход из Системных настроек перезагружает приставку;
  * Если вы перезагрузили приставку, то следует повторно запустить ctr-httpwn, иначе Перенос системы не будет работать.

##### Часть V - Перенос системы

  1. **Сохраните файлы с обеих карт памяти в разные папки на компьютере (назовите папки таким образом, чтобы понимать какие файлы откуда)!**
  2. Верните обе карты памяти на места (не перепутайте).
  3. Если на **целевой 3DS** есть Nintendo Network ID, отформатируйте приставку, используя Системные настройки: 
  * Перейдите на последнюю вкладку меню "Прочие настройки" (Other Settings), выберите пункт "Форматировать" (Format System Memory), следуйте инструкциям на экране.
  4. Прочитайте внимательно: 
  * Ваша 3DS с CFW = "Исходная система";
  * Ваша 3DS с официальной прошивкой = "Целевая система";
  * **Переместите DSiWare по запросу!**
  * **НЕ** удаляйте содержимое карты памяти на исходной системе, даже по запросу;
  * Убедитесь, что обе приставки заряжены и батарея не сядет ни у одной из них во время передачи данных;
  * При запросе на выбор метода переноса данных с карты памяти в случае переноса данных с 2DS/Old 3DS (исходная) на New 3DS (целевая): 
    * **НЕ** выбирайте "Low-Capacity microSD Card Transfer" (опция 2), при таком варианте перенесутся только тикеты, а DSiWare-игры и, что важно, их сохранения - нет. 
    * Быстрый способ: Выберите "PC-Based Transfer" (опция 3) и по запросу на экране приставке, скопировать содержимое карты памяти из исходной консоли на карту памяти целевой приставки (если у вас на old3ds\2ds стоит micro SD с переходником, можно просто переставить карту).
    * Медленный способ: Выберите "Wireless Transfer" (опция 1) для долгого переноса **полного** содержимого карты памяти в целевую приставку по воздуху.
  5. Перейдите по [этой ссылке](http://en-americas-support.nintendo.com/app/answers/detail/a_id/227/) и следуйте официальным инструкциям от Nintendo, держа в голове то, что вы прочитали чуть выше.

##### Часть VI - Восстановление исходной 3DS

  1. На **исходной 3DS**, завершите первоначальную настройку.
  2. Выполните одно из следующих действий: + Продолжайте выполнять оставшуюся часть инструкции для **целевой 3DS**, а затем подождите неделю и выполните перенос данных уже с **целевой 3DS** на **исходную** *(помните, что вы не можете перенести данные с New 3DS на Old 3DS)*; + Позвоните в Nintendo и скажите им, что у вас больше нет доступа к устройству, к которому привязан ваш NNID (в нашем случае, это уже **целевая 3DS**) и вы бы хотели привязать аккаунт к новому устройству (в нашем случае, это **исходная 3DS**); + Можете просто [удалить NNID](https://3ds.guide/troubleshooting#rm_nnid) из **исходной 3DS**, чтобы оставить его на **целевой 3DS**.
  3. Перезагрузите **исходную 3DS**, удерживайте (START) во время загрузки устройства, чтобы запустить Hourglass9.
  4. Перейдите в SysNAND Backup/Restore восстановите SysNAND из файла `NANDmin.bin`.

##### Часть VII - Резервное копирование прошивки целевой 3DS

  1. Скопируйте `boot.nds` от dgTools в корень карты памяти **целевой 3DS**.
  2. Создайте папку `dgTool` в корне карты памяти **целевой 3DS**, если таковой там нет.
  3. Скопируйте содержимое `zip-архива` с NFIRM (11.y.y_to_10.4.0_x3ds.zip) в папку `dgTool` в корне **целевой 3DS**.
  4. Верните карту памяти в **целевую 3DS**.
  5. Запустите установленную DSiWare игру на целевой 3DS, чтобы войти в dgTool 
  * Если игра не запускает dgTool, или игры нет, [следуйте инструкциям из части с проблемами и их решениями](troubleshooting#ts_dsiware).
  6. Выберите "Dump f0f1", чтобы сделать для **целевой 3DS**резервную копию NFIRM 
  * Процесс не быстрый, ожидайте.
  7. Запомните место положения бекапа NFIRM.
  8. Закройте dgTool 
  * При необходимости выключите приставку, удерживая кнопку питания.
  9. Вставьте КП в компьютер; скопируйте `F0F1_N3DS.bin` или `F0F1_O3DS.bin` (зависит от вашей модели) в надежное место. 
  * Сделайте копии в нескольких местах или в облачном хранилище;
  * Этот бекап может спасти вам консоль, если что-то пойдет не так.

##### Часть VIII - Прошивка целевой 3DS

**НЕ понижайте прошивку с помощью dgTool на приставках с установленным arm9loaderhax. Это гарантированно приведет к брику!**

  1. Запустите установленную DSiWare игру на **целевой 3DS**.
  2. Запустите dgTool, используя установленную DSiWare-игру.
  3. Выберите "Downgrade FIRM to 10.4" и подтвердите установку файлов прошивки 10.4.0 в **целевую 3DS**.
  4. Закройте dgTool 
  * При необходимости выключите приставку, удерживая кнопку питания.
  5. Перезагрузите приставку.

##### Часть IX - Проверка эксплойта

  1. Скопируйте и объедините папку `3ds` из `zip-архива` 3DSident в корень карты памяти **целевой 3DS**.
  2. Верните карту памяти назад в **целевую 3DS**.
  3. Запустите Homebrew launcher на **целевой 3DS** используя удобную для вас точку входа.
  4. Запустите 3DSident.
  5. Убедитесь, что в программе следующие значения совпадают: 
  * **Kernel version**: 2.50-11
  * **FIRM version**: 2.50-11
  * Если у вас отображаются другие значения, значит вы где-то допустили ошибку. Проделайте все с самого начала. В первую очередь убедитесь, что использовали верные архивы с NFIRM. Попробуйте прошить NFIRM повторно.

Версия прошивки, указанная в настройках **целевой 3DS** *не* изменится. {: .notice--info}

Переходите к запуску [Decrypt9 (Homebrew Launcher)](decrypt9-(homebrew-launcher)).