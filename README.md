<h1 id="home">Homework :clipboard:</h1>

## goit-js-hw-05.1


* 🇺🇸 [English](#en)
* 🇺🇦 [Ukrainian](#uk)
* 🇷🇺 [Russian](#ru)

--- 

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- Repository created `goit-js-hw-05.1`
- When submitting homework there is a link to the source files in the repository
- Each task is executed in a separate file named `task-task_number.js`. Use `<script type="module">`
  to close the job code in a separate scope and avoid identifier name conflicts.
- Variable names are clear and descriptive
- Code formatted using Prettier

# ТЗ

Write functions that use array iterating methods (no `for`, `splice`, etc.) perform the following
operations on an array of user objects from the file [users.js](./users.js).

# Task 1

Get an array of names of all users (field `name`).

```js
const getUserNames = users => {
  // code
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
```

# Task 2

Get an array of user objects by eye color (the `eyeColor` field).

```js
const getUsersWithEyeColor = (users, color) => {
  // code
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
```

# Task 3

Get an array of usernames by gender (field `gender`).

```js
const getUsersWithGender = (users, gender) => {
  // code
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
```

# Task 4

Get an array of only inactive users (field `isActive`).

```js
const getInactiveUsers = users => {
  // code
};

console.log(getInactiveUsers(users)); // [object Moore Hensley, object Ross Vazquez, object Blackburn Dotson]
```

# Task 5

Get the user (not an array) by `email` (field `email`, it is unique).

```js
const getUserWithEmail = (users, email) => {
  // code
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {object Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {object Elma Head}
```

# Task 6

Get an array of users falling into the age category from `min` to `max` years (field `age`).

```js
const getUsersWithAge = (users, min, max) => {
  // code
};

console.log(getUsersWithAge(users, 20, 30)); // [object Ross Vazquez, object Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [object Moore Hensley, object Sharlene Bush, object Blackburn Dotson, object Sheree Anthony]
```

# Task 7

Get the total balance (field `balance`) of all users.

```js
const calculateTotalBalance = users => {
  // code
};

console.log(calculateTotalBalance(users)); // 20916
```

# Task 8

An array of names of all users who have a friend with the specified name.

```js
const getUsersWithFriend = (users, friendName) => {
  // code
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
```

# Task 9

An array of names (field `name`) of people, sorted depending on the number of their friends (field
`friends`)

```js
const getNamesSortedByFriendsCount = users => {
  // code
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
```

# Task 10

Get an array of all skills of all users (field `skills`), and there should not be repeating skills
and they should be sorted alphabetically.

```js
const getSortedUniqueSkills = users => {
  // code
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
```

---
---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3> 			

# Критерії прийому

- Створено репозиторій `goit-js-hw-05.1`
- При здачі домашньої роботи є посилання на вихідні файли у репозиторії
- Всі завдання виконані в одному файлі, до якого імпортується масив користувачів.
- Імена змінних та функцій зрозумілі, описові
- Код відформатовано за допомогою Prettier

# ТЗ

Напиши функції які за допомогою методів масиву, що перебирають (ніяких `for`, `splice` і т. д.)
виконують такі операції над масивом об'єктів користувачів із файлу [users.js](./users.js).

# Завдання 1

Отримати масив імен всіх користувачів (поле `name`).

```js
const getUserNames = users => {
  // твій код
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
```

# Завдання 2

Отримати масив об'єктів користувачів за кольором очей (поле `eyeColor`).

```js
const getUsersWithEyeColor = (users, color) => {
  // твій код
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
```

# Завдання 3

Отримати масив імен користувачів за статтю (поле `gender`).

```js
const getUsersWithGender = (users, gender) => {
  // твій код
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
```

# Завдання 4

Отримати масив лише неактивних користувачів (поле `isActive`).

```js
const getInactiveUsers = users => {
  // твій код
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
```

# Завдання 5

Отримати користувача (не масив) по `email` (поле `email`, він унікальний).

```js
const getUserWithEmail = (users, email) => {
  // твій код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
```

# Завдання 6

Отримати масив користувачів які у вікову категорію від `min` до `max` років (поле `age`).

```js
const getUsersWithAge = (users, min, max) => {
  // твій код
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
```

# Завдання 7

Отримати загальну суму балансу (поле `balance`) всіх користувачів.

```js
const calculateTotalBalance = users => {
  // твій код
};

console.log(calculateTotalBalance(users)); // 20916
```

# Завдання 8

Масив імен всіх користувачів, у яких є один із зазначеним ім'ям.

```js
const getUsersWithFriend = (users, friendName) => {
  // твій код
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
```

# Завдання 9

Масив імен (поле `name`) людей, відсортованих залежно від кількості їхніх друзів (поле
`friends`)

```js
const getNamesSortedByFriendsCount = users => {
  // твій код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
```

# Завдання 10

Отримати масив усіх умінь всіх користувачів (поле `skills`), при цьому не повинно бути
повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

```js
const getSortedUniqueSkills = users => {
  // твій код
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
```

---
---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3> 

# Критерии приема

- Создан репозиторий `goit-js-hw-05.1`
- При сдаче домашней работы есть ссылка на исходные файлы в репозитории
- Все задания выполнены в одном файле, в который импортируется массив пользователей.
- Имена переменных и функций понятные, описательные
- Код отформатирован с помощью Prettier

# ТЗ

Напиши функции которые с помощью перебирающих методов массива (никаких `for`, `splice` и т. д.)
выполняют следующие операции над массивом объектов пользователей из файла [users.js](./users.js).

# Задание 1

Получить массив имен всех пользователей (поле `name`).

```js
const getUserNames = users => {
  // твой код
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
```

# Задание 2

Получить массив объектов пользователей по цвету глаз (поле `eyeColor`).

```js
const getUsersWithEyeColor = (users, color) => {
  // твой код
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
```

# Задание 3

Получить массив имен пользователей по полу (поле `gender`).

```js
const getUsersWithGender = (users, gender) => {
  // твой код
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
```

# Задание 4

Получить массив только неактивных пользователей (поле `isActive`).

```js
const getInactiveUsers = users => {
  // твой код
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
```

# Задание 5

Получить пользоваля (не массив) по `email` (поле `email`, он уникальный).

```js
const getUserWithEmail = (users, email) => {
  // твой код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
```

# Задание 6

Получить массив пользователей попадающих в возрастную категорию от `min` до `max` лет (поле `age`).

```js
const getUsersWithAge = (users, min, max) => {
  // твой код
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
```

# Задание 7

Получить общую сумму баланса (поле `balance`) всех пользователей.

```js
const calculateTotalBalance = users => {
  // твой код
};

console.log(calculateTotalBalance(users)); // 20916
```

# Задание 8

Массив имен всех пользователей у которых есть друг с указанным именем.

```js
const getUsersWithFriend = (users, friendName) => {
  // твой код
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
```

# Задание 9

Массив имен (поле `name`) людей, отсортированных в зависимости от количества их друзей (поле
`friends`)

```js
const getNamesSortedByFriendsCount = users => {
  // твой код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
```

# Задание 10

Получить массив всех умений всех пользователей (поле `skills`), при этом не должно быть
повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

```js
const getSortedUniqueSkills = users => {
  // твой код
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
```
