const messageLog = document.querySelector("#messageLog");
const printH2 = document.querySelector("#printH2");
const sum = document.querySelector("#sum");
const sumResult = document.querySelector("#sumResult");
const otherSum = document.querySelector("#otherSum");
const userNameInput = document.querySelector("#userNameInput");
const inputValue = document.querySelector("#inputValue");

messageLog.addEventListener("click", (e) => {
  console.log("hai cliccato");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

printH2.addEventListener("click", (e) => {
  console.log(e.target);
  const empty = document.querySelector("#empty");
  empty.textContent = "sono generato da JavaScript";
});
sum.addEventListener("click", (e) => {
  sumNumbers(8, 12, e);
  firstLog();
  secondLog();
});

function sumNumbers(num1, num2, event = Event) {
  let resultSum = num1 + num2;
  if (event.type === "click") {
    sumResult.textContent = `Ho scritto in sumResult questo risultato: ${resultSum}`;
    otherSum.textContent = " ";
  } else {
    otherSum.textContent = `Ho scritto in otherSum questo risultato: ${resultSum}`;
  }
}

sumNumbers(4, 9);

const firstLog = () => {
  console.log("primo log");
};

const secondLog = () => {
  console.log("secondo log");
};

userNameInput.addEventListener("input", (e) => {
  inputNameValue.textContent = e.target.value;
});
