import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
 
formEl.addEventListener('submit', (event) => {
     event.preventDefault();
    const delayEl = formEl.querySelector('input');
    const stateElements = formEl.querySelectorAll('[name="state"]');
    const delay = parseInt(delayEl.value);
    const selectedState = Array.from(stateElements).find(input => input.checked);

    if (!isNaN(delay) && selectedState) {
        const promise = new Promise((resolve, reject) => {
            if (selectedState.value === 'fulfilled') {
                setTimeout(() => { resolve(delay) }, delay)
            } else {
                setTimeout(() => { reject(delay) }, delay)
            }
        });
        promise
            .then(
            (value) => {
                    iziToast.success({
                        messageColor: 'rgb(255, 255, 255)',
                        backgroundColor: 'green',
                        timeout:'20000',
                        message: ` Fulfilled promise in ${value}ms`,
                        position: 'topRight',
                });
            }
        )
            .catch(
                (error) => {
                    iziToast.error({
                        messageColor: 'rgb(255, 255, 255)',
                        backgroundColor: 'red',
                        timeout:'20000',
                        message: ` Rejected promise in ${error}ms`,
                        position: 'topRight',
                });
            }
        )
    }
    formEl.reset();
})
