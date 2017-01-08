* * *

title: "Decrypt9 (Homebrew Launcher)" permalink: /decrypt9-(homebrew-launcher).html lang: en_US ref: decrypt9-(homebrew-launcher)

* * *

Из-за странного бага, safehax для работы требует рабочий картридж, вставленный в приставку (от 3DS, NDS, флеш-картридж - все равно). В качестве альтернативного решения, всем пользователям прошивки 9.2.0 или ниже, рекомендуется скопировать `Decrypt9WIP.3dsx` в папку `/3ds/` и запустить его из HBL вообще безо всяких хаков. {: .notice--info}

#### Что нужно:

* Свежая версия [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/latest/).
* Свежий форк [safehax+fasthax](https://gbatemp.net/attachments/safehax-fasthax-cb6a1bc-zip.73592/).

#### Что делать:

  1. Создайте папку `files9` в корне карты памяти.
  2. Скопируйте с заменой содержимое `zip-архива` с safehax+fasthax в корень карты памяти.
  3. Скопируйте `Decrypt9WIP.bin` из `zip-архива` с Decrypt9WIP в корень карты памяти и переименуйте `Decrypt9WIP.bin` в `arm9.bin`.
  4. Вставьте карту памяти в приставку.
  5. Запустите Homebrew launcher.
  6. Запустите safehax.
  7. Если эксплойт сработал верно, запустится Decrypt9.

Переходите к [2.1.0 ctrtransfer](2.1.0-ctrtransfer)  
{: .notice--primary}