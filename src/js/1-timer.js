import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/izitoast.min.css';


const inputTimer = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let userSelectedDate = '';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates.length > 0) {
            const selectedDate = selectedDates[0];
            userSelectedDate = selectedDate;

          
            if (selectedDate.getTime() > new Date().getTime()) {
                startButton.removeAttribute('disabled');
            } else {
                startButton.setAttribute('disabled', true);
                iziToast.error({ title: 'Error', message: 'Please choose a date in the future', position:'topRight', backgroundColor: 'red', });
            }
        }
    }
       
};

flatpickr(inputTimer, options);



const addLeadingZero = (value) => String(value).padStart(2, '0');

const updateTimer = () => {
      const currentTime = new Date().getTime();
      const timeDifference = userSelectedDate.getTime() - currentTime;

      if (timeDifference <= 0) {
        
        clearInterval(timerInterval);
        startButton.removeAttribute('disabled');
      } else {
        const { days, hours, minutes, seconds } = convertMs(timeDifference);
        daysEl.textContent = addLeadingZero(days);
        hoursEl.textContent = addLeadingZero(hours);
        minutesEl.textContent = addLeadingZero(minutes);
        secondsEl.textContent = addLeadingZero(seconds);
      }
};
    
const convertMs = (ms) => {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(ms / day);
      const hours = Math.floor((ms % day) / hour);
      const minutes = Math.floor(((ms % day) % hour) / minute);
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      return { days, hours, minutes, seconds };
};
    let timerInterval;

    startButton.addEventListener('click', () => {
      startButton.setAttribute('disabled', true);
      timerInterval = setInterval(updateTimer, 1000);
      updateTimer();
    });
