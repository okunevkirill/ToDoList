# Информация о выполнении ДЗ по уроку № 003

## Список задач и примечания по ним

Создание моделей Project и ToDo. Формирование и настройка API для этих моделей.

- [x] В проекте создать новое приложение для работы с TODO.

> По сколько по ТЗ ToDo заметки относятся только к сущностям `проект`, приложение назвал `projects`

- [x] Добавить модель Project. Это проект, для которого записаны TODO. У него есть название, может быть ссылка на
  репозиторий и набор пользователей, которые работают с этим проектом. Создать модель, выбрать подходящие типы полей и
  связей с другими моделями.
- [x] Добавить модель TODO. Это заметка. У ToDo есть проект, в котором сделана заметка, текст заметки, дата создания и
  обновления, пользователь, создавший заметку. Содержится и признак — активно TODO или закрыто. Выбрать подходящие типы
  полей и связей с другими моделями.
- [x] Создать API для моделей Projects и ToDo.
- [x] При сериализации моделей выбрать нужный вид для связанных моделей.

> Понятие `нужный вид` несколько растяжимо, — выбирал вид сериализатора на своё усмотрение.

- [x] Реализовать представление данных в виде camelCase

> Работа парсера наглядно видна при работе со списком пользователей