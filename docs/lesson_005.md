# Информация о выполнении ДЗ по уроку № 005

## Список задач и примечания по ним

Добавить маршрутизацию и новые страницы к приложению на React.

- [x] Сделать переходы между тремя страницами: список пользователей, список проектов, список ToDo.

> По сколько в задании не указана необходимость кеширования данных,
> решил реализовать непосредственно с загрузкой с сервера.

- [x] Добавить компоненты для новых страниц (список проектов и список ToDo) и загрузку данных с back-end.
- [x] При необходимости перенастроить сериализацию на стороне back-end.

> Исправил сериализатор для `ProjectSerializer` для лучшего ознакомления с React при работе с id.

- [x] По желанию можно добавить любые другие страницы.
- [x] Реализовать страницу с информацией для одного проекта. Переход на неё осуществляется по нажатию на проект из
  списка.

----

## Пример json форматов

### Список пользователей

```
{
  "count": 150,
  "next": "http://127.0.0.1:8000/users/?format=json&limit=3&offset=3",
  "previous": null,
  "results": [
    {
      "url": "http://127.0.0.1:8000/users/363617f9-90a5-43d4-9968-5c686beef160/?format=json",
      "username": "test149",
      "firstName": "",
      "lastName": "",
      "email": "test149@gmail.com"
    },
    {
      "url": "http://127.0.0.1:8000/users/ccb9484a-ffca-47e9-bdf9-b22e71ee7859/?format=json",
      "username": "test148",
      "firstName": "",
      "lastName": "",
      "email": "test148@gmail.com"
    },
    {
      "url": "http://127.0.0.1:8000/users/d5843368-3de8-4882-bab5-8718d676b10e/?format=json",
      "username": "test147",
      "firstName": "",
      "lastName": "",
      "email": "test147@gmail.com"
    }
  ]
}
```

### Список проектов

```
{
  "count": 22,
  "next": "http://127.0.0.1:8000/projects/?format=json&limit=3&offset=3",
  "previous": null,
  "results": [
    {
    "id": 32,
    "users": [
      "TEST1"
    ],
    "name": "ТЕСТОВАЯ работа",
    "href": "http://127.0.0.1:8000/admin/projects/project/add/"
    },
    {
    "id": 31,
    "users": [
      "test4",
      "admin"
    ],
    "name": "sssssssssssssss",
    "href": "http://127.0.0.1:8000/admin/projects/project/add/"
    },
    {
    "id": 30,
    "users": [
      "test2",
      "TEST1",
      "admin"
    ],
    "name": "15",
    "href": "https://github.com/"
    }
  ]
}
```

### Страница с информацией о проекте

```
{
  "id": 22,
  "users": [
    "TEST1"
  ],
  "name": "7",
  "href": "https://github.com/"
}
```

### Список ToDo

```
{
  "count": 26,
  "next": "http://127.0.0.1:8000/todos/?format=json&limit=3&offset=3",
  "previous": null,
  "results": [
    {
      "url": "http://127.0.0.1:8000/todos/38/?format=json",
      "author": {
      "url": "http://127.0.0.1:8000/users/3b2f1ba1-cae1-44d6-8131-a3b188ef6f02/?format=json",
      "username": "admin",
      "firstName": "",
      "lastName": "",
      "email": "admin@gmail.com"
    },
    "isActive": true,
    "text": "Заметка 100",
    "createdAt": "2022-03-13T14:28:04.243910+03:00",
    "updatedAt": "2022-03-13T14:28:04.243929+03:00",
    "project": "http://127.0.0.1:8000/projects/32/?format=json"
    },
    {
      "url": "http://127.0.0.1:8000/todos/37/?format=json",
      "author": {
      "url": "http://127.0.0.1:8000/users/3b2f1ba1-cae1-44d6-8131-a3b188ef6f02/?format=json",
      "username": "admin",
      "firstName": "",
      "lastName": "",
      "email": "admin@gmail.com"
    },
    "isActive": true,
    "text": "2022_03_13 Заметка 00",
    "createdAt": "2022-03-13T14:25:00.033065+03:00",
    "updatedAt": "2022-03-13T14:25:00.033093+03:00",
    "project": "http://127.0.0.1:8000/projects/32/?format=json"
    },
    {
      "url": "http://127.0.0.1:8000/todos/36/?format=json",
      "author": {
      "url": "http://127.0.0.1:8000/users/3b2f1ba1-cae1-44d6-8131-a3b188ef6f02/?format=json",
      "username": "admin",
      "firstName": "",
      "lastName": "",
      "email": "admin@gmail.com"
    },
    "isActive": true,
    "text": "2022_03_13 Заметка",
    "createdAt": "2022-03-13T14:21:18.925098+03:00",
    "updatedAt": "2022-03-13T14:21:18.925121+03:00",
    "project": "http://127.0.0.1:8000/projects/32/?format=json"
    }
  ]
}
```
