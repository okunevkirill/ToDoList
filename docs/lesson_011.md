# Информация о выполнении ДЗ по уроку № 011

## Список задач и примечания по ним

Поработать с формами на React без использования библиотек.

> Насколько понял логику, приложение на фронте делаем целенаправленно с одним местом
> хранения состояний (на мой взгляд это не совсем корректно), поэтому
> перестроил приложение согласно данному решению (также поправил `naming`).

> С чистых `fetch` запросов решил перейти к `axios` - на уроках используется
> именно данная библиотека (на мой взгляд правильнее было бы использовать `ku`).

- [x] В проекте добавить возможность создавать и удалять проекты.

> По сколько в заданиях (в том числе и ранее сделанных) не говорилось
> об удалении проекта через выставку флага активности,
> решил удалять проекты из БД полностью.

- [x] Добавить возможность создавать и удалять ToDo.

> По сколько заметки удаляются через выставку флага активности, откорректировал
> представление для выборки только активных заметок (`todolist/projects/views.py`).

> Автор заметки добавляется через представление из `request`.

- [x] Добавить поиск по части названия проекта.

> Реализовал поиск на стороне `frontend`.

- [x] Все запросы на сервер рекомендуется делать в главном приложении.
- [x] Для взаимодействия с главным приложением передавать callback.
- [ ] `(По желанию)` Добавить возможность изменять проекты.
