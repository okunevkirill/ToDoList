# Информация о выполнении ДЗ по уроку № 010

## Список задач и примечания по ним

Создание GraphQL-схемы

> Для модели `ToDo` предусмотрено related_name для поля `author`.

- [x] С помощью `GraphQL` создать схему, которая позволит одновременно получать ToDo, проекты и пользователей, связанных
  с проектом.

> Пример схемы запроса:

```
{
  getTodos{
    project{
      id
      name
      href
      users{
        uid
        username
        email
        firstName
        lastName
        isActive
        isSuperuser
        isStaff
        dateJoined
        lastLogin
      }
    }
    text
    isActive
    createdAt
    updatedAt
    author{
      uid
      username
      email
      firstName
      lastName
      isActive
      isSuperuser
      isStaff
      dateJoined
      lastLogin
    }
  }
}
```

> Пример результата запроса:

```
"data": {
    "getTodos": [
      {
        "project": {
          "id": "14",
          "name": "ok-kir.ru",
          "href": "https://github.com/",
          "users": [
            {
              "uid": "98dbec6a-1351-4bfa-961f-f882fef45116",
              "username": "test2",
              "email": "test2@gmail.com",
              "firstName": "",
              "lastName": "",
              "isActive": true,
              "isSuperuser": false,
              "isStaff": false,
              "dateJoined": "2022-03-05T14:25:12+00:00",
              "lastLogin": "2022-03-23T13:45:47+00:00"
            },
            {
              "uid": "b5ddae76-a189-4df8-9a36-ff5dbf76e001",
              "username": "test1",
              "email": "test1@gmail.com",
              "firstName": "Имя",
              "lastName": "Фамилия",
              "isActive": true,
              "isSuperuser": false,
              "isStaff": false,
              "dateJoined": "2022-03-05T14:25:12+00:00",
              "lastLogin": "2022-03-24T13:13:28.610259+00:00"
            },
            {
              "uid": "3b2f1ba1-cae1-44d6-8131-a3b188ef6f02",
              "username": "admin",
              "email": "admin@gmail.com",
              "firstName": "",
              "lastName": "",
              "isActive": true,
              "isSuperuser": true,
              "isStaff": true,
              "dateJoined": "2022-03-05T14:25:11.978630+00:00",
              "lastLogin": "2022-04-06T10:55:10.364847+00:00"
            }
          ]
        },
        "text": "zsdfxzdf",
        "isActive": true,
        "createdAt": "2022-03-31T20:06:07.220281+00:00",
        "updatedAt": "2022-03-31T20:06:07.220305+00:00",
        "author": {
          "uid": "3b2f1ba1-cae1-44d6-8131-a3b188ef6f02",
          "username": "admin",
          "email": "admin@gmail.com",
          "firstName": "",
          "lastName": "",
          "isActive": true,
          "isSuperuser": true,
          "isStaff": true,
          "dateJoined": "2022-03-05T14:25:11.978630+00:00",
          "lastLogin": "2022-04-06T10:55:10.364847+00:00"
        }
      },
      
      ...
      
    }
```

- [x] Подумать, какие ещё гибкие запросы могут быть полезны для этой системы, реализовать некоторые из них с помощью
  `GraphQL`.

> Для гибкости добавил сортировку в запросы получения общего списка (пользователей, заметок и проектов).

> На мой взгляд слишком размытое задание - реализовал несколько запросов с фильтрами и несколько мутационных запросов.
