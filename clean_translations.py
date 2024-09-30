import os


files_in_main = []
files_in_main_include = []


for i in os.listdir("docs"):
    if i.endswith(".md"):
        files_in_main.append(i)

for i in os.listdir("docs/_include"):
    if i.endswith(".md"):
        files_in_main_include.append(i)

for i in os.listdir("docs"):
    if not os.path.isdir(f"docs/{i}"):
        continue
    if i in [".vitepress", "public", "_include", "_internal"]:
        continue
    for j in os.listdir(f"docs/{i}"):
        if j == "_include": 
            for k in os.listdir(f"docs/{i}/_include"):
                if k not in files_in_main_include:
                    print(f"Deleting docs/{i}/_include/{k}")
                    os.remove(f"docs/{i}/_include/{k}")
        elif j not in files_in_main:
            print(f"Deleting docs/{i}/{j}")
            os.remove(f"docs/{i}/{j}")
