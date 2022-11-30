function showMessage() {
  let userName = prompt("Напиши свое имя");
  let message = "Привет, " + userName + "!";
  alert(message);
}

function calcSum() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = +a + +b;
  let message = "Сумма равна " + c;

  alert(message);
}

function calcSubt() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = a - b;
  let message = "Разность равна " + c;
  alert(message);
}
function calcMult() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = a * b;
  let message = "Произведение равно " + c;
  alert(message);
}
function calcQuot() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = a / b;
  let message = "Частное от деления равно " + c;
  alert(message);
}
