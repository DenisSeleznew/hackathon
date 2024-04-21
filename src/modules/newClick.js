import { Module } from '../core/module';

export class SecondsClickModule extends Module {
   constructor(type, text) {
      super(type, text);
   }

   trigger() {
      const clickModule = document.querySelector(`[data-type='${this.type}']`);
      clickModule.addEventListener('click', () => {
         this.#askSecondsForm();
      });
   }

   #askSecondsForm() {
      const existingForm = document.querySelector('.seconds-form');
      if (existingForm) {
         alert('Форма уже отображается, пожалуйста, дождитесь ее завершения.');
         return;
      }
      const secondsForm = document.createElement('form');
      secondsForm.classList.add('seconds-form');
      secondsForm.style.textAlign = 'center';

      const secondsInput = document.createElement('input');
      secondsInput.classList.add('seconds-input');
      secondsInput.type = 'number';
      secondsInput.placeholder = 'Введите кол-во секунд';
      secondsInput.style.marginBottom = '10px';

      const submitButton = document.createElement('button');
      submitButton.classList.add('submit-button');
      submitButton.textContent = 'Подтвердить';

      secondsForm.appendChild(secondsInput);
      secondsForm.appendChild(document.createElement('br'));
      secondsForm.appendChild(submitButton);

      document.body.appendChild(secondsForm);

      secondsForm.addEventListener('submit', (event) => {
         event.preventDefault();
         const seconds = parseInt(secondsInput.value);
         if (isNaN(seconds) || seconds <= 0) {
            alert('Пожалуйста, введите корректное положительное число секунд.');
            return;
         }
         secondsForm.remove();

         this.#startTimer(seconds);
      });
   }

   #startTimer(seconds) {
      const secondsContainer = document.createElement('div');
      secondsContainer.classList.add('seconds-container');
      secondsContainer.textContent = seconds;

      secondsContainer.style.setProperty('--animation-duration', `${seconds}s`);

      document.body.appendChild(secondsContainer);

      let remainingSeconds = seconds;
      let clickCount = 0;
      const countdownInterval = setInterval(() => {
         remainingSeconds--;
         secondsContainer.textContent = remainingSeconds;

         if (remainingSeconds <= 0) {
            clearInterval(countdownInterval);
            secondsContainer.remove();
            alert(`Вы сделали ${clickCount} кликов за ${seconds} секунд.`);
         }
      }, 1000);

      const clickHandler = () => {
         clickCount++;
      };
      document.body.addEventListener('click', clickHandler);

      countdownInterval.onend = () => {
         document.body.removeEventListener('click', clickHandler);
      };
   }
}
