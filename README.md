# Тестовое задание от компании Reactive Media на должность Frontend разработчика.

## Front-end `(ReactJS/React-Router/SCSS/React-Hook-Form/Yup/Webpack)`

## Описание приложения
Задание выполнено на ReactJS. Переход между шагами формы осуществляется при помощи `React-Router`.
Пользователь не может перейти на следующий шаг, если не заполнит требуемые поля. Возврат на предыдущий шаг возможен с любого старшего шага. При возврате на предыдущий шаг заполнять поля необязательно, их значения хранятся в глобальном стейте и заполняются автоматически.
Управление полями ввода осуществляется при помощи `React-Hook-Form` в связке с `Yup`, посредством которого можно задавать правила валидации полей.
Хранилище всех данных организовано в обычном state, но если понадобится, то можно добавить любой state-management. Проброска данных производится при помощи `React.createContext()` в props которого передатся занчение state. Внутри компонента, которому нужно получить/обновить значение state, вызывается custom hook `useData()`, возвращаюйщий значения переданные в props провайдера.
Адаптировано под различные разрешения экранов устройств.

## Запуск приложения
### Локально:
1. Скачайте файлы из репозитория;
2. Выполните команду npm install, затем npm/yarn start.
### Через github-pages
[Ссылка на проект](<https://vot-tot-voronov.github.io/reactive-test-task/#/>)
