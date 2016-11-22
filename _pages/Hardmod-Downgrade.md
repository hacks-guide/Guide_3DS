---
title: "Hardmod Downgrade"
permalink: /hardmod-downgrade.html
---

**If you are on 11.0.0 or 11.1.0, do NOT update to 11.2.0. A new update will be coming soon that allows for DSiWare NFIRM Downgrading _without_ a second 3DS or hardmod for versions under 11.2.0.**
{: .notice--primary}

The version of autofirm used in this guide was modified from [Reboot.ms](https://www.reboot.ms/forum/threads/2403/)'s autofirm which was modified from '[Raugo](https://gbatemp.net/members/356694/)'s original autofirm ([with permission](http://archive.is/KOrWp)).
{: .notice}  

An excellent guide to getting a hardmod can be found [here](https://gbatemp.net/threads/414498/). If you are on a New 3DS, read [this](https://github.com/Plailect/Guide/issues/681) before hardmodding.
{: .notice--info}

This is a currently working implementation of the "FIRM partitions known-plaintext" exploit detailed [here](https://www.3dbrew.org/wiki/3DS_System_Flaws).
{: .notice--info}

This will work on New 3DS, Old 3DS, and 2DS.
{: .notice--success}

#### What you need

* Your NAND image extracted using your [hardmod](https://gbatemp.net/threads/414498/)
* The latest version of [autofirm](https://github.com/Plailect/autofirm/archive/master.zip)
* The latest release of [3DSident](https://github.com/joel16/3DSident/releases/latest)
* The NFIRM zip corresponding to your device and version:
    + [New 3DS 11.0.0 to 10.4.0](torrents/11.0.0_to_10.4.0_n3ds.torrent) - <code class="highlighterrouge"><a href="magnet:?xt=urn:btih:2d13a5ea1570f911bd5c6423e0c30e51d548837a&tr=http%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=http%3a%2f%2ftracker1.wasabii.com.tw%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=http%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.filetracker.pl%3a8089%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.yoshi210.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.baravik.org%3a6970%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=udp%3a%2f%2fzer0day.ch%3a1337%2fannounce&tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&tr=http%3a%2f%2ftorrent.gresille.org%2fannounce&tr=http%3a%2f%2ftracker.tfile.me%2fannounce&tr=http%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce"><i class="fa fa-magnet" aria-hidden="true"></i></a></code>
    + [Old 3DS 11.0.0 to 10.4.0](torrents/11.0.0_to_10.4.0_o3ds.torrent) - <code class="highlighterrouge"><a href="magnet:?xt=urn:btih:72393bbd99bc285db84a9cabf39d9b3200058d6a&tr=http%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=http%3a%2f%2ftracker1.wasabii.com.tw%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=http%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.filetracker.pl%3a8089%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.yoshi210.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.baravik.org%3a6970%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=udp%3a%2f%2fzer0day.ch%3a1337%2fannounce&tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&tr=http%3a%2f%2ftorrent.gresille.org%2fannounce&tr=http%3a%2f%2ftracker.tfile.me%2fannounce&tr=http%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce"><i class="fa fa-magnet" aria-hidden="true"></i></a></code>     
    ~    
    + [New 3DS 11.1.0 to 10.4.0](torrents/11.1.0_to_10.4.0_n3ds.torrent) - <code class="highlighterrouge"><a href="magnet:?xt=urn:btih:d7d60c27c18f53bd8508a194656a465f6448bedf&tr=http%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=http%3a%2f%2ftracker1.wasabii.com.tw%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=http%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.filetracker.pl%3a8089%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.yoshi210.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.baravik.org%3a6970%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=udp%3a%2f%2fzer0day.ch%3a1337%2fannounce&tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&tr=http%3a%2f%2ftorrent.gresille.org%2fannounce&tr=http%3a%2f%2ftracker.tfile.me%2fannounce&tr=http%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce"><i class="fa fa-magnet" aria-hidden="true"></i></a></code>     
    + [Old 3DS 11.1.0 to 10.4.0](torrents/11.1.0_to_10.4.0_o3ds.torrent) - <code class="highlighterrouge"><a href="magnet:?xt=urn:btih:0caf9a948a2d8bf23606d641f6628e2baeb983bb&tr=http%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=http%3a%2f%2ftracker1.wasabii.com.tw%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=http%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.filetracker.pl%3a8089%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.yoshi210.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.baravik.org%3a6970%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=udp%3a%2f%2fzer0day.ch%3a1337%2fannounce&tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&tr=http%3a%2f%2ftorrent.gresille.org%2fannounce&tr=http%3a%2f%2ftracker.tfile.me%2fannounce&tr=http%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce"><i class="fa fa-magnet" aria-hidden="true"></i></a></code>     
    ~        
    + [New 3DS 11.2.0 to 10.4.0](torrents/11.2.0_to_10.4.0_n3ds.torrent) - <code class="highlighterrouge"><a href="magnet:?xt=urn:btih:881388a552a1ce9a963d391bf1a023642270991c&tr=http%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=http%3a%2f%2ftracker1.wasabii.com.tw%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=http%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.filetracker.pl%3a8089%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.yoshi210.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.baravik.org%3a6970%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=udp%3a%2f%2fzer0day.ch%3a1337%2fannounce&tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&tr=http%3a%2f%2ftorrent.gresille.org%2fannounce&tr=http%3a%2f%2ftracker.tfile.me%2fannounce&tr=http%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce"><i class="fa fa-magnet" aria-hidden="true"></i></a></code>     
    + [Old 3DS 11.2.0 to 10.4.0](torrents/11.2.0_to_10.4.0_o3ds.torrent) - <code class="highlighterrouge"><a href="magnet:?xt=urn:btih:a479e4ee55efbc18c181d426cd77a34815388151&tr=http%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=http%3a%2f%2ftracker1.wasabii.com.tw%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=http%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.filetracker.pl%3a8089%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.yoshi210.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.baravik.org%3a6970%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=udp%3a%2f%2fzer0day.ch%3a1337%2fannounce&tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&tr=http%3a%2f%2ftorrent.gresille.org%2fannounce&tr=http%3a%2f%2ftracker.tfile.me%2fannounce&tr=http%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce"><i class="fa fa-magnet" aria-hidden="true"></i></a></code>     

#### Instructions_

##### Section I - NAND modification

1. Extract the autofirm zip to a folder called `autofirm`
2. Place a copy of your NAND backup (named `nand.bin`) in `/autofirm/` folder
3. Copy the contents of the NFIRM zip to the `/autofirm/source/firmwares/` folder
4. Run `autofirm.bat` and select which device and version the NAND backup is for
5. Wait while the script runs
6. If everything worked, then your original NAND will have been renamed to `backup_nand.bin` and you will have a modified `nand.bin` containing the 10.4.0 NATIVE_FIRM
7. Flash this `nand.bin` to your device with your hardmod

##### Section II - Exploit verification

1. Copy and merge the `3ds` folder from the 3DSident zip to your device's SD card
2. Reinsert your SD card into your 3DS
3. Use [Homebrew Launcher (No Browser)](homebrew-launcher-(no-browser)) to launch the homebrew launcher on the device
4. Launch 3DSident
5. Verify that the following:
  + **Kernel version**: 2.50-11
  + **FIRM version**: 2.50-11
  + If either of these do not display the versions above, something has gone wrong and you should try again from the beginning

Your version number will *not* have changed in the settings.
{: .notice--info}

Continue to [Homebrew Launcher (No Browser)](homebrew-launcher-(no-browser)).
{: .notice--primary}
