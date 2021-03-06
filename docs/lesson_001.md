# Информация о выполнении ДЗ по уроку № 001

## Список задач и примечания по ним

- [x] Создать новый проект на github или gitlab.
- [x] Создать django-проект.
- [x] Установить DRF и подключить его к django-проекту.
- [x] Создать приложение для работы с пользователем.
- [x] Создать свою модель пользователя.

> В модели пользователя не стал указывать поле для года рождения (для
> разрабатываемого приложения бессмысленно). Если не прав скажите - добавлю.

- [x] В ней поле email сделать уникальным.
- [x] Сделать для неё базовое API — по аналогии модели Author. В качестве полей выбрать username, firstname, lastname,
  email.
- [x] Подключить стандартную админку.
- [x] Создать суперпользователя.
- [x] Создать management command — скрипт для запуска через manage.py для автоматического создания суперпользователя и
  нескольких тестовых пользователей.

> Скрипт можно запускать либо с указанием одного позиционного
> аргумента (количество всего создаваемых пользователей), либо без
> аргументов (при этом создастся 3 пользователя из которых один суперпользователь).
> Команда для запуска `python3 manage.py creating_test_users`.   
> Для тестового суперпользователя креды: `username='admin', password='admin123'`
