//1
alert('Привет! Это работа Уласика Павла Вячеславовича.');

//2
let planet = 'Earth';
let age = '37';
alert(age);
alert(planet);

//3
let firstName = 'Pavel';
let lastName = 'Ulasik';
alert(`Привет, меня зовут ${firstName} ${lastName}, мне ${age} лет`);

//4
let teacher = prompt("Имя преподавателя");
alert(`Мою работу проверяет ${teacher}`);

/*5.1) Чему будут равны переменные (a, b, c и d) в примере ниже?

let a = 1, b = 1;
let c = ++a;  с будет ровна 2 (++ стоит перед а => 1 прибавим к а в этом цикле )
let d = b++;  d будет ровна 1 (++ стоит после d => b будет + 1 в следующем  цикле )*/

/*5.2) Чему будут равны переменные (a, b, x, у) после исполнения кода в примере ниже?

let a = 3;
let b = 2;

let x = 1 + (a += 2); Ответ будет 6. Первым выполнятеся действие в скобках, затем по приоритету идет сложение (+)
и затем присвоение (=) => a(3) + 2 = 5 .После данного дествия
а уже не равно 3 , как было изначально , а преобретает значение 5. Далее 1 + 5 = 6

let у = 1 + (b *= 2); Ответ будет 6. Аналагично с примером выше с той лишь разницей , что b(2) мы умножаем на 2
и далее прибавляем 1 . И далее b уже будет иметь значение не 2 как было изначально, а 4.
*/

// 6

let year = prompt("Чемпионы англии по футболу");

if (year < 2011 ) {
  alert("Статистика еще не велась");
}
if (year == 2022) {
  alert("Сезон еще идет");
}
if (year > 2022) {
  alert("Все лучшее впереди!");
}
if (year == 2020) {
  alert("Победитель ФК Ливерпуль");
}
if (year == 2015 || year == 2017) {
  alert("Победитель ФК Челси");
}
if (year == 2012 || year == 2014 || year == 2018 || year == 2019 || year == 2021) {
  alert("Победитель ФК Манчестер Сити");
}
if (year == 2011 || year == 2013) {
  alert("Победитель ФК Манчестер Юнайтед");
}
if (year == 2020 ) {
  alert("Победитель ФК Ливерпуль");
}
if (year == 2016 ) {
  alert("Победитель ФК Лестер Сити");
}

// 7

let name = prompt ("Ваше имя?");

if (name === "Админ") {
  let password = prompt ("Пароль");
    if (password === "Я главный") {
      alert ("Здравствуйте");
    } else if (password == null) {
      alert ("Отменено");
    } else if (password !== "Я главный") {
      alert ("Не верный пароль");
    }
  }
  else if (name === "" || name == null) {
  alert ("Отменено");
  } else if (name !== "Админ") {
  alert ("Я вас не знаю");
  }

