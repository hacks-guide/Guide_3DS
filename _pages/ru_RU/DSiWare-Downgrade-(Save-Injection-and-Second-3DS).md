* * *

title: "DSiWare Downgrade (Save Injection and Second 3DS)" permalink: /dsiware-downgrade-(save-injection-and-second-3ds).html lang: en_US ref: dsiware-downgrade-(save-injection-and-second-3ds)

* * *

**Это инструкция полезна только тем, у кого есть купленные "Fieldrunners", "Legends of Exidia", "Guitar Rock Tour", или "The Legend of Zelda: Four Swords (Anniversary Edition)" на исходной 3DS. Каждая из этих игр уже удалена из eShop, именно поэтому для продолжения игра должна быть уже купленной.** {: .notice--primary}

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

#### Что вам нужно:

* Две приставки 
  * **Исходная 3DS**: 3DS с кастомной прошивкой (arm9loaderhax, либо прошивка с EmuNAND/RedNAND) *с последней версией системного ПО*. Убедитесь, что помните пароль от Nintendo Network, без него вы не сможете сделать перенос данных;
  * **Целевая 3DS**: 3DS с официальной прошивкой *(в диапазоне между 11.0.0 и 11.2.0)*.
* Купленная и установленная DSiWare игра из списка ниже (пиратская копия **не** будет работать) на **исходной 3DS** 
  * **Fieldrunners;**
  * **Legends of Exidia;**
  * **Guitar Rock Tour;** 
  * **The Legend of Zelda: Four Swords (Anniversary Edition).** 
* Точка входа из части [Homebrew Launcher (SoundHax)](homebrew-launcher-(soundhax)) или [Homebrew Launcher (не используя браузер)](homebrew-launcher-(no-browser))
* [`4B51394A.zip`](images/4B51394A.zip)
* Свежая версия [3ds_dsiwarehax_installer](https://github.com/yellows8/3ds_dsiwarehax_installer/releases)
* Свежая версия [3DSident](https://github.com/joel16/3DSident/releases/latest)
* Свежая версия [FBI](https://github.com/Steveice10/FBI/releases/latest)
* Свежая версия [dgTool](https://github.com/Plailect/dgTool/releases/latest)
* NFIRM `.из архива` соответствующего версии **целевой 3DS**: 
  * [New 3DS 11.0.0](magnet:?xt=urn:btih:2d13a5ea1570f911bd5c6423e0c30e51d548837a&dn=11.0.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
  * [Old 3DS 11.0.0](magnet:?xt=urn:btih:72393bbd99bc285db84a9cabf39d9b3200058d6a&dn=11.0.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)  
    ~ 
  * [New 3DS 11.1.0](magnet:?xt=urn:btih:d7d60c27c18f53bd8508a194656a465f6448bedf&dn=11.1.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce) 
  * [Old 3DS 11.1.0](magnet:?xt=urn:btih:0caf9a948a2d8bf23606d641f6628e2baeb983bb&dn=11.1.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)  
    ~ 
  * [New 3DS 11.2.0](magnet:?xt=urn:btih:881388a552a1ce9a963d391bf1a023642270991c&dn=11.2.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce) 
  * [Old 3DS 11.2.0](magnet:?xt=urn:btih:a479e4ee55efbc18c181d426cd77a34815388151&dn=11.2.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce) 
* Если на **целевой 3DS** версия прошивки ниже, чем 11.2.0 *вам так же* придется воспользоваться 
  * свежей версией [ctr-httpwn](https://github.com/yellows8/ctr-httpwn/releases/latest).

#### Что делать:

##### Часть I - Подготовка

  1. Создайте папку `files9` в корне карты памяти **исходной 3DS**, если таковой не имеется.
  2. **Используйте [save manager](https://github.com/J-D-K/JKSM/releases/latest) для того, чтобы сделать резервные копии всех важных сейвов на целевой 3DS (приставка будет отформатирована)!**
  3. Скопируйте `public.sav` из папки `/dsiware/(8-значный ID)/` находящегося в архиве `3ds_dsiwarehax_installer,` в корень карты памяти **исходной 3DS**("8-ми значный ID", соответствующий каждой игре и региону описан ниже) 
  * **Fieldrunners USA Region**: `4b464445`
  * **Fieldrunners EUR Region**: `4b464456`
  * **Legends of Exidia USA Region**: `4b4c4545`
  * **Legends of Exidia EUR Region**: `4b4c4556`
  * **Legends of Exidia JPN Region**: `4b4c454a`
  * **Guitar Rock Tour EUR Region**: `4b475256`
  * **Guitar Rock Tour USA Region**: `4b475245`
  * **The Legend of Zelda: Four Swords (Anniversary Edition) EUR Region**: `4b513956` 
  * **The Legend of Zelda: Four Swords (Anniversary Edition) USA Region**: `4b513945` 
  * Если вы используете **The Legend of Zelda: Four Swords (Anniversary Edition) JPN Region**, скопируйте `public.sav` из папки `4B51394A` из архива `4B51394A.zip` в корень карты памяти.
  4. Вставьте карту памяти в **исходную 3DS**.
  5. На **исходной 3DS** удерживайте (START) во время загрузки приставки, чтобы попасть в Hourglass9.
  6. Перейдите в SysNAND Options, SysNAND Backup/Restore, затем сделайте бекап **(min size)** SysNAND в `NANDmin.bin`.
  7. Нажмите (SELECT) в главном меню, чтобы извлечь КП из **исходной 3DS**, а затем вставьте ее в ПК.
  8. Скопируйте `NANDmin.bin` и `NANDmin.bin.sha` из папки `/files9/` на карте памяти в надежное место 
  * Сделайте копии в нескольких местах или в облачном хранилище;
  * Этот бекап может спасти вам консоль, если что-то пойдет не так;
  * **Убедитесь, что размер вашего бекапа соответствует размеру указанному на [этой](nand-size) странице; если это не так, удалите бекап и создайте его заново!**
  9. Вставьте карту памяти из **целевой 3DS** в компьютер.
 10. **Сохраните файлы с обеих карт памяти в разные папки на компьютере (назовите папки таким образом, чтобы понимать какие файлы откуда)!**
 11. Верните обе карты памяти на места (не перепутайте).
 12. Нажмите (START) для перезагрузки.

##### Часть II - Резервное копирование DsiWare

После того, как вы окончите выполнение инструкций, созданная в этой части резервная копия может быть использована для восстановления сохранений DSiWare-игр. Удалите DSiWare-игры из системной памяти и восстановите их же из карты памяти. {: .notice--info}

Сделанный бекап может быть использован только на том NAND, на котором был создан. Если вы отформатируете 3DS, или восстановите другой NAND, (особенно если `movable.sed` был изменен), резервная копия станет бесполезной. {: .notice--info}

  1. Перейдите в "Системные настройки" (System Settings), "Управление данными" (Data Management), "DSiWare" на **исходной 3DS**.
  2. Скопируйте все DSiWare-игры , которые уже есть на КП в системную память.
  3. Скопируйте DSiWare-игру, которую планируете использовать, на карту памяти.
  4. Покиньте системное меню.

##### Часть III - Установка сохранения

  1. Запустите FBI на **исходной 3DS**.
  2. Перейдите в папку `SD`.
  3. Нажмите (A) на `public.sav` и скопируйте его.
  4. Нажмите (B), чтобы вернуться в главное меню.
  5. Перейдите в `TWL NAND` -> `title` -> `00030004`.
  6. Перейдите в папку, соответствующую вашей игре и региону: 
  * **Fieldrunners USA Region**: `4b464445`
  * **Fieldrunners EUR Region**: `4b464456`
  * **Legends of Exidia USA Region**: `4b4c4545`
  * **Legends of Exidia EUR Region**: `4b4c4556`
  * **Legends of Exidia JPN Region**: `4b4c454a`
  * **Guitar Rock Tour EUR Region**: `4b475256`
  * **Guitar Rock Tour USA Region**: `4b475245` 
  * **The Legend of Zelda: Four Swords (Anniversary Edition) EUR Region**: `4b513956` 
  * **The Legend of Zelda: Four Swords (Anniversary Edition) USA Region**: `4b513945` 
  7. Перейдите в папку `dta`.
  8. Нажмите (A) на существующем `public.sav` и удалите его.
  9. Нажмите (A) на строке `<current directory>` и вставьте <0>public.sav</0>.
 10. Нажмите (B), чтобы вернуться в главное меню.
 11. Нажмите (START) для выхода.
 12. Запустите DSiWare-игру на **исходной 3DS**.
 13. Проверьте, работает ли импортированное сохранение 
  * **Fieldrunners**: коснитесь кнопки 'Scores' в главном меню;
  * **Legends of Exidia**: после того, как нажмёте (A) или (Start) и пропустите два игровых экрана, выберите первый слот сохранения и нажмите "Continue";
  * **Guitar Rock Tour**: листайте вниз и перейдите в High-Scores -> Drums -> Easy; 
  * **The Legend of Zelda: Four Swords (Anniversary Edition)**: Просто начните игру.
  * Если игра падает с ошибкой, касающейся `boot.nds`, либо просто выскакиевает белый экран, **значит эксплойт работает и все в порядке**!
  * Если игра работает нормально безо всяких ошибок, значит вы где-то допустили оплошность и неверно установили файл сохранения.
  * Если выскакивает черный экран, обратитесь к разделу с [проблемами и их решениями](troubleshooting#twl_broken).

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
  7. Нажмите (START), чтобы открыть меню Homebrew launcher
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
  2. Выполните одно из следующих действий *(или ни одного, если вас не волнует отсутствие NNID на **исходной консоли**)*: + Продолжайте выполнять оставшуюся часть инструкции для **целевой 3DS**, а затем подождите неделю и выполните перенос данных уже с **целевой 3DS** на **исходную** *(помните, что вы не можете перенести данные с New 3DS на Old 3DS)*; + Позвоните в Nintendo и скажите им, что у вас больше нет доступа к устройству, к которому привязан ваш NNID (в нашем случае, это уже **целевая 3DS**) и вы бы хотели привязать аккаунт к новому устройству (в нашем случае, это **исходная 3DS**).
  3. Перезагрузите **исходную 3DS**, удерживайте (START) во время загрузки устройства, чтобы запустить Hourglass9.
  4. Перейдите в SysNAND Backup/Restore восстановите SysNAND из файла `NANDmin.bin`.

##### Часть VII - Резервное копирование прошивки целевой 3DS

  1. Скопируйте `boot.nds` от dgTools в корень карты памяти **целевой 3DS**.
  2. Создайте папку `dgTool` в корне карты памяти **целевой 3DS**, если таковой там нет.
  3. Скопируйте содержимое `zip-архива` с NFIRM (11.y.y_to_10.4.0_x3ds.zip) в папку `dgTool` в корне **целевой 3DS**.
  4. Запустите установленную DSiWare игру на **целевой 3DS**.
  5. Запустите dgTool, используя установленную DSiWare-игру 
  * **Fieldrunners**: коснитесь кнопки 'Scores' в главном меню;
  * **Legends of Exidia**: после того, как нажмёте (A) или (Start) и пропустите два игровых экрана, выберите первый слот сохранения и нажмите "Continue";
  * **Guitar Rock Tour**: листайте вниз и перейдите в High-Scores -> Drums -> Easy;
  * **The Legend of Zelda: Four Swords (Anniversary Edition)**: Просто начните игру.
  * Если у игры нет установленного хакнутого сохранения обратитесь к разделу с [проблемами и их решениями](troubleshooting#ts_dsiware).
  6. Выберите "Dump f0f1", чтобы сделать для **целевой 3DS**резервную копию NFIRM 
  * Процесс не быстрый, ожидайте.
  7. Запомните место положения бекапа NFIRM.
  8. Закройте dgTool 
  * При необходимости выключите приставку, удерживая кнопку питания.
  9. Вставьте КП в компьютер; скопируйте `F0F1_N3DS.bin` или `F0F1_O3DS.bin` (зависит от вашей модели) в надежное место 
  * Сделайте копии в нескольких местах или в облачном хранилище;
  * Этот бекап может спасти вам консоль, если что-то пойдет не так.

##### Часть VIII - Прошивка целевой 3DS

**НЕ понижайте прошивку с помощью dgTool на приставках с установленным arm9loaderhax. Это гарантированно приведет к брику!**

  1. Запустите установленную DSiWare игру на **целевой 3DS**.
  2. Запустите dgTool, используя установленную DSiWare-игру 
  * **Fieldrunners**: коснитесь кнопки 'Scores' в главном меню;
  * **Legends of Exidia**: после того, как нажмёте (A) или (Start) и пропустите два игровых экрана, выберите первый слот сохранения и нажмите "Continue";
  * **Guitar Rock Tour**: листайте вниз и перейдите в High-Scores -> Drums -> Easy;
  * **The Legend of Zelda: Four Swords (Anniversary Edition)**: Просто начните игру.
  3. Выберите "Downgrade FIRM to 10.4" и подтвердите установку файлов прошивки 10.4.0 в **целевую 3DS**.
  4. Закройте dgTool 
  * При необходимости выключите приставку, удерживая кнопку питания.
  5. Перезагрузите приставку.

##### Часть IX - Проверка эксплойта

  1. Скопируйте и объедините папку `3ds` из `zip-архива` 3DSident в корень карты памяти **целевой 3DS**.
  2. Верните карту памяти назад в **целевую 3DS**.
  3. 3. Запустите Homebrew launcher на **целевой 3DS** используя способы, описанные в [Homebrew Launcher (не используя браузер)](homebrew-launcher-(no-browser)).
  4. Запустите 3DSident.
  5. Убедитесь, что в программе следующие значения совпадают: 
  * **Kernel version**: 2.50-11
  * **FIRM version**: 2.50-11
  * Если у вас отображаются другие значения, значит вы где-то допустили ошибку. Проделайте все с самого начала. В первую очередь убедитесь, что использовали верные архивы с NFIRM. Попробуйте прошить NFIRM повторно.

Версия прошивки, указанная в настройках **целевой 3DS** *не* изменится. {: .notice--info}

Переходите к запуску [Decrypt9 (Homebrew Launcher)](decrypt9-(homebrew-launcher)) {: .notice--primary}