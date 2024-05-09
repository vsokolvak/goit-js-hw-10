import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createiziToastMsg } from './snackbar/izitoastConfig';

const form = document.querySelector('.form');

form.addEventListener('submit', createPromis);

function createPromis(e) {
    e.preventDefault()
    
    const timeOut = e.target.delay.value
    const promiseStatus = e.target.state.value

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promiseStatus === 'fulfilled') resolve({ time: timeOut, status: true });
      else reject({ time: timeOut, status: false });
    }, timeOut);
  });

  promise
    .then(res => {
      iziToast.show(createiziToastMsg(res.time, res.status));
    })
    .catch(res => iziToast.show(createiziToastMsg(res.time, res.status)));

    e.target.reset()
}
