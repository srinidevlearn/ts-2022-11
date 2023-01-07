import { ICalc, ICALCSTATE } from "./calc.interface";

let arr = [
  [1, 2, "➕"],
  [3, 4, "➖"],
  [5, 6, "✖️"],
  [7, 8, "➗"],
  [9, 0, "⬆️"],
];

let calc: ICalc = {
  input1: "",
  input2: "",
  state: "input1",
  result: 0,
  add: function () {
    console.log("add");
    this.result = Number(this.input1) + Number(this.input2);
  },
  mul: function () {
    this.result = Number(this.input1) * Number(this.input2);
  },
  sub: function () {
    this.result = Number(this.input1) - Number(this.input2);
  },
  div: function () {
    this.result = Number(this.input1) / Number(this.input2);
  },
};
window.addEventListener("DOMContentLoaded", () => {
  let d: any = document.querySelector("#calc");
  let temp = `<div class="row row-cols-3 g-0">`;
  for (let item of arr) {
    for (let itm2 of item) temp += button(itm2);
  }
  temp += "</div>";

  d.innerHTML = temp;
});

function button(values: string | number) {
  return `<div class="col"><button type="button" class="btn btn-primary w-100" onClick="handleButtonClick(event)">${values}</button></div>`;
}

function handleButtonClick(event: any) {
  let key = event.target.innerText;
  let excludableKeys = ["➕", "➖", "✖️", "➗"];
  calc.input1 = calc.input1.replace(/⬆️/g, "");
  calc.input2 = calc.input2.replace(/⬆️/g, "");
  if (key === "⬆️") {
    calc.state = calc.state === "input2" ? "input1" : "input2";
  }
  if (!excludableKeys.includes(key)) {
    let state: ICALCSTATE = calc.state;
    calc[state] = calc[state] + key;
  }
  switch (true) {
    case key === "➕": {
      console.log("add");
      calc.add();
      break;
    }

    case key === "➖":
      calc.sub();
      break;

    case key === "✖️":
      calc.mul();
      break;

    case key === "➗":
      calc.div();
      break;

    default:
      console.log(key);
  }

  render();
  console.log(calc);
}

function render() {
  (document.querySelector("#input1 input") as HTMLInputElement).setAttribute(
    "value",
    calc.input1
  );
  let input1: HTMLInputElement | unknown =
    document.querySelector("#input1 input");
  let input2: HTMLInputElement | unknown =
    document.querySelector("#input2 input");
  let result: HTMLInputElement | unknown =
    document.querySelector("#result input");
  if (input2 instanceof HTMLInputElement)
    input2.setAttribute("value", calc.input2);
  if (result instanceof HTMLInputElement) result.value = calc.result.toString();

}
