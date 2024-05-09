import { startTimer } from "./startTimer";

const startBtn = document.querySelector('[data-start]')

const clickBtn = btnEl => {
    disableStartBtn();
    startTimer(btnEl.currentTarget.dataset.time);
}

export const enableStartBtn = (time) => {
    startBtn.classList.add('isActive');
    startBtn.disabled = false;
    startBtn.dataset.time = time - Date.now();
    startBtn.addEventListener('click', clickBtn);
}

export const disableStartBtn = () => {
    startBtn.classList.remove('isActive');
    startBtn.removeEventListener('click', clickBtn);
    startBtn.disabled = true
}
