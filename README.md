#Базовые команды *git*


[git config](#cfg)
[git init](#init)
[git add](#add)
[git commit](#commit)
[git push](#push)
[git status](#stat)


# <a id="#cfg">git config</a>
## Настройка конфигурации git

```bash
git config user.name
git config user.email
git config remove_section
git config rename_section
git config alias
```
### *flags*
- --global
- --system
- --h


---
# <a id="#init">git init</a>
## Инициализация локального репозитория

```bash
git init
```

---
# <a id="add">git add</a>
## Добавление изменений в index

```bash
git add someFile
git add .
git add someDirectory
```

---
# <a id="commit">git commit</a>
## Коммит(утверждение) изменений

```bash
git commit
git commit someFile
```
### *flags*
- -m
- -a


---
# <a id="push">git push</a>
## Отправление коммита в удаленный репозиторий

```bash
git push origin "..."
```

### *flags*
- -u


---
# <a id="stat">git status</a>
## Статус репозитория

```bash
git status
```