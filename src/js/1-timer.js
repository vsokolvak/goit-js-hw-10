import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import '../css/timer.css'
import { disableStartBtn, enableStartBtn } from "./timer/startBtn";

const flatpickrOptions = {
  minDate: Date.now(),
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onCloseCalendar(selectedDates);
  },
};

const selectDate = flatpickr('#datetime-picker', flatpickrOptions);

function onCloseCalendar(selectedDates) {
  console.log(selectedDates[0]);
  if (selectedDates[0] < Date.now()) {

    iziToast.show({
      message: 'Please choose a date in the future',
      class: 'alert',
      close: false,
      closeOnEscape: !false,
      closeOnClick: !false,
      position: 'topRight',
      image:
        'https://static.vecteezy.com/system/resources/previews/018/887/460/original/signs-close-icon-png.png',
      timeout: 5000,
    });

    disableStartBtn()
    return
  }
  enableStartBtn(selectedDates[0]);
}