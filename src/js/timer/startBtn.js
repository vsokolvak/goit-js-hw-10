import { startTimer } from "./startTimer";

let timerTime = 0
const startBtn = document.querySelector('[data-start]')
startBtn.addEventListener('click', btnEl => {
    disableStartBtn();
    startTimer(timerTime);
});

export const enableStartBtn = (time) => {
    startBtn.classList.add('isActive');
    startBtn.disabled = false;
    timerTime = time - Date.now();
}

export const disableStartBtn = () => {
    startBtn.classList.remove('isActive');
    startBtn.disabled = true
}
