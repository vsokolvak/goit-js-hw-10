import { convertMsToDate } from "./timer";

const values = document.querySelectorAll('.value')
let timerValues = []
console.log(values)

export function startTimer(timerTime) {

    document.querySelector('#datetime-picker').disabled = true;
    document.querySelector('#datetime-picker').classList.remove('isActive')

  const timerID = setInterval(() => {

    if(timerTime <= 1000) {
        clearInterval(timerID)
        document.querySelector('#datetime-picker').disabled = false;
        document.querySelector('#datetime-picker').classList.add('isActive');
        return
    }
    timerValues = convertMsToDate.convert((timerTime -= 1000));
    console.log(timerValues);

    timerValues.map((el, i) => {
      values[i].innerHTML = timerValues[i];
    });

  }, 1000);

}