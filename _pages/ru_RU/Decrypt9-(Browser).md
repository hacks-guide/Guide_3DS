* * *

title: "Decrypt9 (Browser)" permalink: /decrypt9-(browser).html lang: en_US ref: decrypt9-(browser)

* * *

Нам необходимо запустить Decrypt9, многоцелевую утилиту, необходимую, чтобы установить прошивку версии 2.1.0 на нашу консоль. В этой прошивке содержатся ряд критических уязвимостей, которые помогут нам продолжить взлом приставки. {: .notice}

Если у вас уже есть взломанная приставка с EmuNAND, то все равно следуйте всем инструкциям, так как гайд имеет дело исключительно с SysNAND. Помните, что EmuNAND и RedNAND - всего лишь две разных реализации одного и того же метода [перенаправления NAND](http://3dbrew.org/wiki/NAND_Redirection). {: .notice--info}

#### Что нужно:

* Свежая версия [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/).

#### Что делать:

  1. Создайте папку `files9` в корне карты памяти.
  2. Скопируйте `Launcher.dat` и `Decrypt9WIP.dat` из `zip-архива` Decrypt9WIP в корень карты памяти.
  3. Вставьте карту памяти в 3DS.
  4. Откройте браузер и перейдите по одно из этих ссылок: 
    * `https://goo.gl/XGez65 или https://dukesrg.github.io/?Decrypt9WIP.dat`
    * `https://goo.gl/f8GbSf или http://go.gateway-3ds.com/`
    * `https://goo.gl/ASCLSV или http://www.reboot.ms/3ds/load.html?Launcher.dat`
    * `https://goo.gl/etmY59 или http://dukesrg.dynu.net/3ds/rop?GW17567.dat&Launcher.dat`
    * Если не работает первая ссылка, пробуйте следующую, и т.п. На некоторых консолях первая может не сработать, зато сработать одна из трех последних, либо наоборот.
    * Если выскакивает ошибка, обратитесь к разделу с [проблемами и их решениями](troubleshooting#ts_browser).
  5. Если все прошло хорошо, то вы загрузитесь прямо в Decrypt9.

Теперь переходим к [2.1.0 ctrtransfer](2.1.0-ctrtransfer).