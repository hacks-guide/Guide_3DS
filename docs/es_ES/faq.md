# Preguntas frecuentes (FAQ)

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

**Sí**, todavía puedes instalar firmware personalizado (CFW) en la 3DS, incluso después del cierre de la eShop.

:::

## Preguntas frecuentes sobre la pre-instalación

:::details Estoy en la última versión del sistema. ¿Puedo modificar mi consola sin ningún hardware externo o requisitos previos?

**¡Sí!** En los modelos New 3DS / New 3DS XL / New 2DS XL se puede con [super-skaterhax](installing-boot9strap-\(super-skaterhax\)), mientras que en modelos 3DS común / 3DS XL / 2DS se puede con [MSET9](installing-boot9strap-\(mset9\)).

:::

:::details ¿Con cuáles consolas es compatible esta guía?

Esta guía es compatible con todas las consolas de la familia Nintendo 3DS (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). Si la versión del sistema se muestra como "0.0.0-0", entonces podrías tener una unidad de desarrollador.

:::

:::details ¿Qué tan arriesgado es modificar mi consola?

Bricks are now effectively impossible unless you are purposely trying to brick your console.

:::

:::details ¿Puedo ejecutar Homebrew y emuladores increíbles con esto?

¡Sí! Esta guía instalará algunas aplicaciones homebrew útiles incluyendo [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest), que actúa como una tienda de aplicaciones homebrew.

:::

:::details ¿Puedo usar esto para jugar a juegos de otras regiones?

Sí; Luma3DS ignorará automáticamente la comprobación de región de cartuchos y títulos instalados. Algunos juegos podrían necesitar hacer uso de la [función de emulación de región (información en inglés)](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) de Luma para funcionar adecuadamente en consolas fuera de su región.

:::

:::details ¿Perderé alguna característica si instalo CFW?

No. Las consolas con custom firmware pueden descargar actualizaciones de juegos y ejecutar cartuchos físicos, como cualquier otra 3DS.

:::

:::details ¿Puedo mantener mi NNID, archivos de guardado, juegos digitales (etc.)?

Tu NNID (si tienes una) no se verá afectada por esta guía. Las consolas con región KOR, CHN o TWN no tienen funcionalidad NNID de por sí y por ello no se ven afectadas.

Esta guía por sí sola no debería causar pérdida de datos (archivos de guardado, juegos digitales, etc.), pero siempre existe la posibilidad de que la tarjeta SD se corrompa. Recomendamos que hagas una copia de seguridad de los contenidos de tu tarjeta SD si tienes datos importantes en ella.

:::

:::details Will my 3DS be banned for having CFW?

Los baneos ya no son posibles debido a que los servicios de Nintendo Network ya no están activos para ningún usuario.

:::

:::details ¿Puedo hacer esto sin una computadora (por ejemplo, con un teléfono Android)?

Generalmente, ¡sí! El exploit MSET9 (usado principalmente para el último firmware en Old 3DS) requiere ejecutar un script de Python o usar una aplicación de Android, mientras que los demás exploits solo requieren colocar archivos en la tarjeta SD.

Puede que necesites una computadora con Windows, macOS o Linux para formatear la tarjeta SD si es de 64GB o más.

:::

:::details ¿Qué tamaño de tarjeta SD puedo utilizar?

Necesitarás al menos 1,5 GB de espacio libre en la tarjeta SD para seguir esta guía en su totalidad. Si bien la 3DS es oficialmente compatible con tarjetas SD de hasta 32GB, se pueden usar tarjetas SD más grandes siempre y cuando sean reformateadas manualmente en formato FAT32. No se recomienda usar tarjetas SD de tamaño mayor a 128GB debido a problemas conocidos con gráficos en juegos de GBA y temas personalizados.

:::

:::details ¿Debería usar una tarjeta SD nueva, o la que ya tengo?

Con una 3DS deberías usar solamente una tarjeta SD a la vez. Si usas otra tarjeta SD para modificar tu consola, se creará otro "perfil" para tu software modificado, el cual será inaccesible en tu tarjeta SD anterior. Sin embargo, **tu consola permanecerá modificada**, ya que la modificación se instala a la memoria interna (no en la tarjeta SD).

Si has comprado una nueva tarjeta SD para usar con tu consola, deberías formatear la nueva tarjeta SD ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))), y luego copiar y pegar todos los archivos de tu antigua tarjeta SD a la nueva tarjeta SD. Puedes hacer esto antes o después de modificar la consola.

:::

:::details He oído hablar de esto por lo que tengo que pagar (Gateway, Sky3DS, ntrboot, R4, etc.). ¿Es eso algo que necesito?

No. Aunque un flashcart de DS se puede utlizar para modificar una 3DS utilizando [ntrboot](ntrboot), hoy en día hay un método por software gratuito disponible para la mayoría de consolas.

3DS-mode flashcarts like Gateway and Sky3DS are not recommended because they are obsolete and may carry brick risk.

:::

:::details ¿Cuál es la diferencia entre custom firmware y homebrew?

Por definición, custom firmware se refiere a una modificación del software del sistema de la 3DS para que pueda hacer cosas que normalmente no es capaz de hacer. Homebrew se refiere generalmente al software creado fuera de fuentes oficiales (es decir, no distribuido por eShop o cartuchos).

Históricamente, la 3DS solía tener acceso a homebrew en espacio de usuario a través de vulnerabilidades más antiguas como ninjhax, cuál la gente a veces llamaba solamente "homebrew". El nivel de acceso al sistema que estos métodos otorgaban con el espacio de usuario permitía ejecutar aplicaciones homebrew simples y emuladores, pero no permitía (de manera sencilla) modificar juegos o volcar cartuchos. También era muy inestable, a menudo sucediendo que el homebrew se crasheaba y requería apagar y encender la consola. El custom firmware otorga un nivel mucho mayor de acceso al sistema, al mismo tiempo que es más estable que los puntos de entrada por homebrew.

:::

## Post-Installation FAQ

:::details ¿Es seguro actualizar mi 3DS a la última versión con CFW?

Si estás usando Luma3DS, el cargador de custom frimware (boot9strap) _nunca_ será eliminado al realizar una actualización del sistema. Ha habido actualizaciones en el pasado que han causado que Luma3DS de error al iniciar, por lo que es buena idea esperar un par de horas para asegurarse de que la última actualización no haga que la consola no se pueda utilizar temporalmente hasta que Luma3DS sea actualizado. Las actualizaciones del sistema se pueden realizar de la misma manera que en una 3DS sin modificar: a través de la configuración de la consola, del modo seguro, o del aviso de actualización que aparece cuando se descarga automáticamente.

:::

:::details ¿Cómo puedo actualizar mi tarjeta SD?

Copia y pega el contenido de tu tarjeta SD en una nueva tarjeta SD formateada en formato FAT32. Para tarjetas de 128 GB se recomienda un tamaño de asignación de 65536 bytes. Las tarjetas SD de tamaño mayor a 128GB no se recomiendan debido a problemas conocidos con gráficos en juegos de GBA y temas personalizados. Puedes encontrar las instrucciones específicas de formateo aquí: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)).

:::

:::details ¿Puedo realizar una transferencia del sistema teniendo CFW?

Sí, las transferencias del sistema se pueden realizar a través de la función oficial de Transferencia del Sistema a otras consolas con CFW (puedes encontrarte con inconsistencias si la consola de destino no tiene CFW). Los tickets para títulos ilegítimos (homebrew) no se transferirán, causando que no aparezcan en el menú, pero se pueden restaurar con [faketik](https://github.com/ihaveamac/faketik/releases/latest). Asegúrate de no realizar una transferencia inalámbrica, ya que esto eliminará los títulos ilegítimos en sí. El CFW permanecerá en ambas consolas.

:::

:::details ¿Cómo puedo cambiar el idioma de una 3DS japonesa?

La única manera de cambiar el idioma de una 3DS japonesa a un idioma distinto del japonés es realizando un [Cambio de Región](region-changing). Ten en cuenta que es muy probable que esto deje la Nintendo eShop de tu consola inutilizable, lo que significa que no podrás actualizar tus juegos ya sean o no de tu región. Tampoco podrás acceder al Banco de Pokémon (si lo tienes instalado), ya que necesita acceso a la eShop para funcionar.

:::

:::details ¿Cómo actualizo las aplicaciones homebrew?

Depende del formato de la aplicación homebrew. En general:

- El Homebrew en **formato CIA** se puede actualizar instalando el CIA nuevo, que usualmente sobrescribirá el antiguo. Si la aplicación antigua no es sobreescrita, puedes borrarla desde Gestión de Datos como harías con cualquier otro título de 3DS.
- El Homebrew en **formato 3DSX** puede ser actualizado reemplazando el archivo 3DSX en `/3ds/` con la nueva versión. Si la aplicación homebrew incluye archivos adicionales, puede que necesites colocarlos en otro lugar. Ante la duda, consulta la documentación de la aplicación.
- Para actualizar Luma3DS, consulta [esta página](restoring-updating-cfw). Para actualizar GodMode9, lee [esta página](godmode9-usage#updating-godmode9).

:::

:::details ¿Cómo actualizo mis juegos?

Puedes seguir descargando actualizaciones de juegos desde la Nintendo eShop, a pesar de que ya no se pueda comprar en esta.

Si el juego no es de la misma región que la consola, necesitarás [volcar las actualizaciones](dumping-titles-and-game-cartridges) de una 3DS que tenga las actualizaciones instaladas. La Nintendo eShop solo tiene actualizaciones para la región de la consola (por ejemplo, una 3DS japonesa solo tendrá actualizaciones para juegos japoneses).

:::

:::details ¡Ayuda! Algo malo sucedió y mi 3DS no arranca al Menú HOME...

Por favor, mira la [guía de resolución de problemas](troubleshooting-post-install). **Uninstalling CFW when your console is in an unbootable state is not recommended, as it is very likely to lead to a brick**.

:::

## Preguntas frecuentes sobre menuhax / A9LH / Gateway

:::details Modifiqué mi consola hace (x) años, así que ya tiene algún tipo de homebrew. ¿Qué debería hacer?

Se recomienda que actualices tu instalación a una moderna, basada en boot9strap. Sigue la guía de [Comprobación de CFW](checking-for-cfw) para ver cómo actualizar tu instalación.

:::

:::details Mi instalación funciona para mí. ¿Por qué debería actualizarla?

La gran mayoría de los homebrew modernos (como Checkpoint y BootNTR Selector) solo han sido probados en instalaciones modernas basadas en boot9strap y pueden directamente no funcionar en instalaciones antiguas basadas en menuhax, A9LH o Gateway. Además, dependiendo de tu instalación, es posible que no puedas actualizar con seguridad a la última versión del sistema. Las instalaciones modernas basadas en boot9strap permiten un mayor nivel de acceso al sistema que las anteriores, incluyendo la posibilidad de volcar el archivo de arranque de la consola.

:::

:::details ¿Perderé algo si actualizo mi instalación?

Su instalación antigua (incluyendo su EmuNAND, si tiene una) generalmente puede migrarse directamente a boot9strap sin pérdida de datos. Si tienes datos que son especialmente importantes para ti, sería una buena idea hacer un respaldo de tus datos de guardado desencriptados antes de actualizar tu instalación, por medio de una herramienta como [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).

:::

:::details ¿Cómo puedo mover los datos guardados de una configuración de Gateway existente a una configuración más moderna?

Echa un vistazo a [este hilo](https://gbatemp.net/threads/425743/) (_en inglés_).

:::
