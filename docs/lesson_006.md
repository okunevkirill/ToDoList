# Информация о выполнении ДЗ по уроку № 006

## Список задач и примечания по ним

Добавить права и авторизацию.

- [x] В проекте реализовать систему прав. Есть 3 вида пользователей: администраторы, разработчики, владельцы проектов
    - администраторы могут всё (при реализации назвал `Administrators`);
    - разработчики имеют все права на модель ToDo, могут просматривать модели Project и User (при реализации
      назвал`Developers`);
    - владельцы проектов имеют права на просмотр модели User и все права на модель Project и ToDo (при реализации
      назвал `Manager`).

> Поскольку нет информации о правах `AnonymousUser`, — полностью ограничил доступ
> для него (только указал возможные urls).

> Из формулировок задания и материалов к уроку сделал вывод о разграничение доступа через группы django.

> Т.к. наследовал модель пользователя от штатной модели, то в проекте есть дополнительная система прав:
> `is_superuser` (могут всё без явного присвоения прав и имеют доступ к административной панели),
> `is_staff` (имеют доступ к административной панели, но требует явного присвоение прав),
> `simple user` (без явного присвоения прав имеют доступ только на чтение).

> Для автоматизации добавления групп системы прав разработал
> скрипт `todolist/users/management/commands/create_groups.py`.

> Скрипт по добавлению заданного пользователя в нужную группу писать не стал - считаю
> излишнем (можно сделать через консоль или административную панель).

- [x] Добавить в проект базовую авторизацию.

> Для удобства добавил запросы через http клиент pycharm (`todolist/http_client/rest-api-basic-auth.http`).
> Необходимо запускать с окружением `BasicAuth`.

- [x] Добавить в проект авторизацию по токену.

> Дополнительно проверял работу через библиотеку `requests` (в другом вирт. окружении).

> Запрос token привёл в файле `todolist/http_client/rest-api-get-token.http`.

- [x] `(По желанию)` Добавить в проект авторизацию по JWT токену (с использованием библиотек).

> Запрос token привёл в файле `todolist/http_client/rest-api-get-jwt.http`.

> Для проверки авторизации через JWT использовал `todolist/http_client/rest-api-jwt-auth.http`.
> Необходимо запускать с окружением `JWT` (предварительно обновив для своего сеанса).

---

- [ ] `(По желанию, для лучшего понимания)` Добавить в проект авторизацию по JWT токену (без библиотек).

---

## Вспомогательная информация для скрипта по автоматизации добавления групп системы прав

### Объекты Permission

```
admin | запись в журнале | Can add log entry
admin | запись в журнале | Can change log entry
admin | запись в журнале | Can delete log entry
admin | запись в журнале | Can view log entry
auth | группа | Can add group
auth | группа | Can change group
auth | группа | Can delete group
auth | группа | Can view group
auth | право | Can add permission
auth | право | Can change permission
auth | право | Can delete permission
auth | право | Can view permission
contenttypes | тип содержимого | Can add content type
contenttypes | тип содержимого | Can change content type
contenttypes | тип содержимого | Can delete content type
contenttypes | тип содержимого | Can view content type
projects | проект | Can add project
projects | проект | Can change project
projects | проект | Can delete project
projects | проект | Can view project
projects | заметку | Can add to do
projects | заметку | Can change to do
projects | заметку | Can delete to do
projects | заметку | Can view to do
sessions | сессия | Can add session
sessions | сессия | Can change session
sessions | сессия | Can delete session
sessions | сессия | Can view session
users | пользователя | Can add user
users | пользователя | Can change user
users | пользователя | Can delete user
users | пользователя | Can view user
```