* * *

title: "Troubleshooting" permalink: /troubleshooting.html lang: en_US ref: troubleshooting

* * *

Если Ваша приставка не загружается, то просмотрите варианты, перечисленные ниже, и воспользуйтесь советом, который там дан. После этого можете дальше следовать основной инструкции (гайд весьма обширен, рекомендуем пользовать поиск браузера - Ctrl+F). {: .notice--primary}

**Если решения Вашей проблемы здесь не оказалось, то соберите в одну кучу все *,log файлы, что найдете в корне карты памяти девайса и киньте их на [Gist](https://gist.github.com/), а затем уже просите о помощи. И не забудьте как можно детальнее описать свою проблему.** {: .notice--info}

## <a name="twl_broken" />Я закончил гайд, но DSi / DS игры не работают

#### Что нужно:

* TWL_FIRM `.cia` , соответствующие вашему устройству 
    * [`New_3DS TWL_FIRM - v9936.cia`](magnet:?xt=urn:btih:eab8558c97b18b1f329a2bfcc3c899b84c082a27&dn=New%5F3DS%20TWL%5FFIRM%20-%20v9936.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
    * [`Old_3DS TWL_FIRM - v8817.cia`](magnet:?xt=urn:btih:17511eadb6e6f3ff22d04f90644e37bd2d96ca43&dn=Old%5F3DS%20TWL%5FFIRM%20-%20v8817.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`TWL Version Data - v0.cia`](magnet:?xt=urn:btih:4a106681407fede5de95cc8bda635432481f6b5d&dn=TWL%20Version%20Data%20-%20v0.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`DS Internet - v2048.cia`](magnet:?xt=urn:btih:2b9df8496922f2546dfb0b01220068ce53c19d3d&dn=DS%20Internet%20-%20v2048.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`DS Download Play - v1024.cia`](magnet:?xt=urn:btih:b581d3c5d98f5e621fddfc1ce5704bb45bf05a8c&dn=DS%20Download%20Play%20-%20v1024.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`Nintendo DS Cart Whitelist - v11264.cia`](magnet:?xt=urn:btih:7b90d506ad032a581a00035616eaa17a68c48eff&dn=Nintendo%20DS%20Cart%20Whitelist%20-%20v11264.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)

#### Что делать:

##### Часть I - Подготовка

  1. Создайте папку `cias` в корне карты памяти.
  2. Скопируйте `TWL Version Data - v0.cia` в папку `/cias/` вашей карты памяти.
  3. Скопируйте `DS Download Play - v1024.cia` в папку `/cias/` вашей карты памяти.
  4. Скопируйте `DS Internet - v2048.cia` в папку `/cias/` вашей карты памяти.
  5. Скопируйте `Nintendo DS Cart Whitelist - v11264.cia` в папку `/cias/` вашей карты памяти.
  6. Скопируйте `New_3DS TWL_FIRM - v9936.cia` или `Old_3DS TWL_FIRM - v8817.cia` в папку `/cias/` вашей карты памяти.

##### Часть II - Установка

  1. Запустите FBI.
  2. Перейдите в папку "SD".
  3. Перейдите в папку "cias".
  4. Выберите "\<current directory>"
  5. Выберите "Install and delete all CIAs".
  6. Выйдите из FBI нажатием кнопки (HOME).

## <a name="rm_nnid" />Удаление NNID без форматирования устройства

#### Что нужно:

* Свежая версия [GodMode9](https://github.com/d0k3/GodMode9/releases/)

#### Что делать:

  1. Скопируйте `GodMode9.bin` из `.zip`-архива GodMode9 в папку `/luma/payloads/` в корне SD-карты и переименуйте `GodMode9.bin` в папке `/luma/payloads/` в `up_GodMode9.bin`.
  2. Перезагрузите приставку, удерживая (ВВЕРХ), чтобы запустить GodMode9.
  3. Перейдите в `SYSNAND CTRNAND` -> `data` -> (32-х-значный ID) -> `sysdata` -> `00010038`.
  4. Нажмите (X), удерживая (R) на файле `00000000`, чтобы переименовать его.
  5. Нажмите (ВВЕРХ), чтобы переименовать файл в `10000000`.
  6. Нажмите (A), чтобы сохранить изменения.
  7. Нажмите (A), чтобы разрешить запись в SysNAND и введите указанную комбинацию кнопок.
  8. Вернитесь в главное меню.
  9. Нажмите (START) для перезагрузки.

## <a name="gw_fbi" />Не выходит сделать инжект в Health & Safety после даунгрейда с помощью Gateway. 

Проблема часто встречается у тех, кто даунгрейдил при помощи Gateway. Суть в том, что метод даунгрейда гейта очень несовершенен. В ходе этой процедуры все системные приложения дублируются. Хоть они и не мешают работе, Decrypt9 спотыкается и не может понять в какой из H&S ему делать инжект, а в какой нет.

#### Что нужно:

* Свежая версия [GodMode9](https://github.com/d0k3/GodMode9/releases/)

#### Что делать:

  1. Скопируйте `GodMode9.bin` из `.zip`-архива GodMode9 в папку `/luma/payloads/` в корне SD-карты и переименуйте `GodMode9.bin` в папке `/luma/payloads/` в `up_GodMode9.bin`.
  2. Вставьте карту памяти в 3DS.
  3. Запустите GodMode9 из под arm9loaderhax, удерживая (ВВЕРХ) во время загрузки. 
  4. Перейдите в `SYSNAND CTRNAND` -> `title` -> `00040010`.
  5. Перейдите в папку, соответствующую вашей приставке и региону: 
    * **Old 3DS EUR**: `00022300` -> `content`
    * **Old 3DS JPN**: `00020300` -> `content`
    * **Old 3DS USA**: `00021300` -> `content`
    * **New 3DS EUR**: `20022300` -> `content`
    * **New 3DS JPN**: `20020300` -> `content`
    * **New 3DS USA**: `20021300` -> `content`
  6. Видите, здесь два типа *.app и *.tmd файлов? Первые написаны в капсе (`.TMD` и `.APP`), а вторые - нет (`.tmd` и ``app`).
  7. Удерживая (R), нажмите (Y), чтобы создать новую папку.
  8. Нажмите (А), чтобы подтвердить название новой папки - `newdir` (нам без разницы как она будет называться). 
  9. Нажмите (A), чтобы разрешить запись в SysNAND и введите указанную комбинацию кнопок.
 10. На каждом файле, разрешение которого написано в капсе (`.TMD` и `.APP`), нажмите (L), чтобы отметить его.
 11. Нажмите (Y), чтобы скопировать эти файлы.
 12. Перейдите в `newdir`.
 13. Нажмите (Y), чтобы переместить выбранные ранее файлы.
 14. Выберите "Move path(s)".
 15. Теперь файлы с капсом переместились в папку `newdir`.
 16. Нажмите (START) для перезагрузки
 17. Вернитесь к [установке A9LH](installing-arm9loaderhax) и попробуйте инжект FBI еще раз. 
 18. Если снова не получилось, то верните капснутые файлы назад в папку `content` и повторите операцию перемещения файлов в папку `newdir`, уже с файлами без капса (<0>.tmd</0> и <0>.app</0>), а затем вернитесь к [установке A9LH](installing-arm9loaderhax) и попробуйте инжект FBI еще раз. 

## <a name="ts_browser" />Почему не работает эксплойт, использующий браузер?

Эксплойты, базирующиеся на браузере (browserhax или 2xrsa, например) очень нестабильные и частенько крашатся, но иногда всего этого можно избежать, следуя рекомендациям, описанным ниже:

  1. Откройте браузер, затем настройки браузера (settings): 
      1. Пролистайте в самый низ и выберите "Удалить сохр. данные" (Initialize Savedata/Clear All Save Data).
      2. Попробуй запустить эксплойт еще раз.

## <a name="ts_safe_a9lh" />Приставка грузится в SafeA9LHInstaller

Вы просто скопировали не верный `arm9loaderhax.bin` на карту памяти.

  1. Используйте верный `arm9loaderhax.bin:` 
      1. Скопируйте `arm9loaderhax.bin` из `zip-архива` Luma3DS в корень своей карты памяти;
      2. Выключите приставку, зажмите (SELECT) и включите.

## <a name="ts_safe_a9lh_screen" />SafeA9LHInstaller показывает корявый экран

Такое часто бывает непонятно почему. Кнопки все равно работают.

  1. Просто следуйте инструкции как ни в чем не бывало: 
      1. Нажимайте (SELECT) до тех пор, пока консоль не выключится;
      2. Приставка выключится 
        * Если приставка не выключается, секунд через 10 просто отключите долгим нажатием кнопки включения.

## <a name="ts_steelhax" />После Переноса данных (System Transfering) steelhax на *целевой 3DS* крашится черным экраном

Все потому, что выбрана неверная версия в steelhax installer.

  1. Скачайте [otherapp payload](https://smealum.github.io/3ds/#otherapp) соответствующий **целевой 3DS.** 
    * Не той версии, на которую вы будете даунгрейдится;
    * А той, что сейчас показана в настройках.
  2. Переименуйте otherapp payload в `steelhax_payload.bin`.
  3. Скопируйте `steelhax_payload.bin` в корень карты памяти **целевой 3DS.** 
    * Согласитесь на перезапись.
  4. Удерживайте (В) во время запуска **Steel Diver: Sub Wars**.

## <a name="ts_dsiware" />После DSiWare-даунгрейда, взломанная игра не работает

  1. Перезагрузите **исходную 3DS**, удерживайте (START) во время загрузки устройства, чтобы запустить Hourglass9.
  2. Перейдите в SysNAND Backup/Restore и восстановите SysNAND из `NANDmin.bin` (который создавался до переноса системы).
  3. Если игры нет совсем, **к целевой 3DS **следует присоединить NNID, с которого была куплена игра и на **целевую же 3DS** перекачать игру заново 
    * Может понадобится удалить игру через "Управление данными" (Data Management) в системных настройках (System Settings);
    * Если на **целевой 3DS** не самая последняя версия ПО (без нее в eShop не зайти), используйте ctr-httpwn.
  4. На **исходной 3DS** выполните шаги с инжектом сейва, или `.app`, в зависимости от метода, который вы используете.
  5. На **исходной 3DS** перейдите в Системные настройки, Управление данными, DSiWare (System Settings, "Data Management", "DSiWare"), а затем скопируйте свою DSiWare игру на карту памяти.
  6. Поставьте КП от **исходной 3DS** в **целевую 3DS**, или просто переименуйте папку `Nintendo 3DS`на КП в **целевой 3DS** и скопируйте на нее папку `Nintendo 3DS` из КП от **исходной 3DS**.
  7. На **целевой 3DS** перейдите в Системные настройки, Управление данными, DSiWare (System Settings, "Data Management", "DSiWare") и скопируйте свою DSi игру обратно в систему. 
  8. Верните карты на свои места (если переименовывали папку, переименуйте обратно) и продолжайте DSiWare-даунгрейд.

## <a name="ts_d9_backup" />Decrypt9 или Hourglass9 не восстанавливают / не видят мой NAND-бекап.

  1. Убедитесь, что в **корне** КП нет папки "Decrypt9".
  2. Попробуйте сделать проверку файловой системы карточки с помощью [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), или [F3X (Mac)](f3x-(mac)).
  3. Сделайте бекап карты памяти и отформатируйте ее, затем верните все файлы на место.
  4. Попробуйте другую карту памяти.

## <a name="ts_sys_down" />Черный экран при загрузке SysNAND

  1. Попробуйте загрузиться без карты памяти, а затем верните ее в консоль. 
      1. Отключите приставку, зажав кнопку выключения.
      2. Достаньте КП.
      3. Включите 3DS.
      4. Когда появится Домашний экран, вставьте назад КП.
      5. Если сработало, то следует отчистить данные Домашнего экрана. Для этого удалите папку, соответствующую вашей системе и региону, в папке `/Nintendo 3DS/(32-значный ID)/(32-значный ID)/extdata/00000000/.` 
        * EUR регион: Удалите `00000098`;
        * JPN регион: Удалите `00000082`
        * USA регион: Удалите `0000008f`
        * KOR регион: Удалите `000000A9`
  2. Попробуйте загрузиться без картриджа (совсем).
  3. Если есть хардмод - восстановите бекап наверняка рабочего NAND в SysNAND.
  4. Загрузитесь в режим восстановления и обновите систему  
    *Почти наверняка не сработает на 3DS с прошивкой 2.1.0*  
    **НЕЛЬЗЯ делать на New 3DS с прошивкой 2.1.0 - гарантированный брик** 
      1. Отключите приставку, зажав кнопку выключения
      2. Удерживайте (L)+(R)+(A)+(ВВЕРХ)
      3. Включите 3DS
      4. Зайдя в режим восстановления, обновите свою 3DS.
  5. Может быть брик. За поддержкой обращайтесь на [#3dshacks on Rizon IRC](https://www.reddit.com/r/3dshacks/wiki/irc) или на [3DS Hacking on Discord](https://discord.gg/MWxPgEp).

## <a name="ts_sys_a9lh" />Black screen on SysNAND boot after installing arm9loaderhax

  1. Ensure you have a working payload. 
      1. Check for the existence of `arm9loaderhax.bin` in the root of your SD card.
  2. Try resetting Luma's config and fix options 
      1. Delete `/luma/config.bin` from your SD card
      2. Set your options when it boots
  3. Test booting Hourglass9 
      1. On Luma3DS, hold (Start) on boot
  4. Try deleting home menu's extdata 
      1. Clear Home Menu's extdata by navigating to the following folder on your SD card: `/Nintendo 3DS/(32 Character ID)/(32 Character ID)/extdata/00000000/` 
        * EUR Region: Delete `00000098`
        * JPN Region: Delete `00000082`
        * USA Region: Delete `0000008f`
        * KOR Region: Delete `000000A9`
  5. Try booting without any cartridges inserted (including flashcarts)
  6. If you previously downgraded with Gateway, ensure that you are using the latest Luma3DS version (v6.2.3 or higher, at the least)
  7. If your NAND is of a version between 3.0.0 and 4.5.0, do the following: 
    * Ensure that you are using the latest Luma3DS version (v6.6 or higher, at the least)
    * Download [this file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/00000056) and rename it to `firmware.bin`
    * Download [this file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/cetk)
    * Copy `firmware.bin` and `cetk` to the `/luma/` folder on your SD card
    * Delete both of these files after updating your 3DS
  8. Try following [9.2.0 ctrtransfer](9.2.0-ctrtransfer)
  9. Ask for help at [#3dshacks on Rizon IRC](https://www.reddit.com/r/3dshacks/wiki/irc) or [3DS Hacking on Discord](https://discord.gg/MWxPgEp).

## <a name="ts_sys_blue" />Blue screen on boot (bootrom error)

  1. Your 3DS is bricked
  2. You will need to get a [hardmod](https://gbatemp.net/threads/414498/) or repair / replace the device