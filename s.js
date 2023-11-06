// Жёлтый бутер

let cookingTime = +prompt('Введите вермя приготовления бутерброда');
function getPoint(cookingTime) {
  let point = 0;
  const pointInOneSec = 1;
  if (cookingTime >= 100 && cookingTime <= 120) {
    point = 100;
  }
  if (cookingTime < 100) {
    point = cookingTime * pointInOneSec;
  }
  return Math.floor(point);
}

const point = getPoint(cookingTime);

console.log(`Вкусность на ${point} балов`);

// Орёл или решка

const user = {
  tugriks: 100,
  plusTugriks: function (value) {
    return (this.tugriks += value);
  },
  minusTugriks: function (value) {
    return (this.tugriks -= value);
  },
};

const bot = {
  tugriks: 100,
  plusTugriks: function (value) {
    return (this.tugriks += value);
  },
  minusTugriks: function (value) {
    return (this.tugriks -= value);
  },
};

function getHeadOrTails() {
  const headOrTails = prompt('Орел или решка?').toLowerCase();
  const answerVariable = {
    орел: 0,
    решка: 1,
  };

  const randomSize = Math.floor(Math.random() * 2);

  const result = answerVariable[headOrTails] === randomSize;

  return result;
}

function tossCoin() {
  const bet = +prompt('Ваши ставка');
  const gameResult = getHeadOrTails(); // true or false
  console.log(gameResult);
  return { bet: bet, result: gameResult };
}

while (user.tugriks > 0 && bot.tugriks > 0) {
  const result = tossCoin();
  if (result.result) {
    user.plusTugriks(result.bet);
    bot.minusTugriks(result.bet);
  } else {
    bot.plusTugriks(result.bet);
    user.minusTugriks(result.bet);
  }
}
const winner = user.tugriks > 0 ? 'Пользовтаель' : 'Компьютер';
alert(`Победил ${winner}`);

// Ход ладьи

const a1 = prompt('вертикаль 1');
const b1 = prompt('горизонталь 1');
const a2 = prompt('вертикаль 2');
const b2 = prompt('горизонталь 2');

function getOptimalWay(a1, b1, a2, b2) {
  if (a1 === a2 || b1 === b2) {
    return { result: `${a1}${b1} - ${a2}${b2}` };
  }

  return { result: `${a1}${b1} - ${a1}${b2} - ${a2}${b2}` };
}

console.log(getOptimalWay(a1, b1, a2, b2));

// Ценный мех

const value = +prompt('Кол-во кроликов');

let currentYear = 2;
let secondYear = 3;
let counter = 1;

while (value > currentYear) {
  [currentYear, secondYear] = [secondYear, currentYear + secondYear];
  counter += 1;
}

console.log(counter);

//  Ахилесс - недогоняка;

function ahilessNedogonyaka( ) {
  const achillesSpeed = +prompt('Скорость Ахилесса');
  const turtlesSpeed = +prompt('Скорость черепахи');
  let distance = +prompt('Дистанция между черепахой и Ахилесом');
  const newDistance = +prompt('Ведите новое растояние'); // растояние до которого нужно постараться приблизится
  if (turtlesSpeed >= achillesSpeed) return Infinity;
  let counter = 0;
  while (distance > newDistance) {
    const achillesTime = distance / achillesSpeed; // время за которое ахилес пробежит дистанцию
    distance = achillesTime * turtlesSpeed;
    counter += 1;
  }

  return counter;

}

console.log(ahilessNedogonyaka());
