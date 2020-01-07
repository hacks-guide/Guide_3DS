import os

def delLuma(filePath):
    with open(filePath, "r+") as f:
        d = f.readlines()
        f.seek(0)
        for i in d:
            if not("(https://github.com/fincs/new-hbmenu/releases/latest)" in i):
                f.write(i)
        f.truncate()


pages = os.listdir()
for page in pages:
    if page == "delLuma3dsDownloadLink.py":
        continue
    if "installing-boot9strap-" in page:
        #print(lang+"/"+page)
        try:
            delLuma(page)
        except:
            print("Error at "+page)
