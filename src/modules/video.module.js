import { Module } from '../core/module';
import { BackgroundModule } from './background.module';

export class VideoModule extends Module {
   constructor(type, text) {
      super(type, text);
      this.backgroundModule = new BackgroundModule(type, text);
   }

   trigger() {
      const VideoModule = document.querySelector(`[data-type='${this.type}']`);
      VideoModule.addEventListener('click', () => {
         this.#gifCreator();
         this.#mediaPlayer();
         this.#gifMoving();
      });
   }

   #mediaPlayer() {
      const audioSrc = 'src/assets/pedro-audio.mp3';
      this.audio = new Audio(audioSrc);
      this.audio.play();
      this.#startTimer();
      this.backgroundModule.trigger();
   }

   #gifCreator() {
      const gifSrc = 'src/assets/pedro.gif';
      this.img = document.createElement('img');
      this.img.id = 'gif';
      this.img.src = gifSrc;
      this.img.width = 300;
      this.img.height = 300;
      this.img.style.borderRadius = '50%';
      document.body.appendChild(this.img);
   }

   #startTimer() {
      let count = 0;
      const interval = setInterval(() => {
         count++;
         this.backgroundModule.setBackground();
         if (count >= 64) {
            clearInterval(interval);
            this.#removeGif();
         }
      }, 500);
   }

   #removeGif() {
      if (this.img && this.img.parentNode) {
         this.img.parentNode.removeChild(this.img);
      }
   }

   #gifMoving() {
      const maxX = window.innerWidth - this.img.width;
      const maxY = window.innerHeight - this.img.height;

      const getRandomCoordinate = (max) => Math.floor(Math.random() * max);

      let x = getRandomCoordinate(maxX);
      let y = getRandomCoordinate(maxY);

      this.img.style.transition = 'transform 1s linear';

      const moveGif = () => {
         x = getRandomCoordinate(maxX);
         y = getRandomCoordinate(maxY);
         this.img.style.transform = `translate(${x}px, ${y}px)`;
      };

      const interval = setInterval(moveGif, 1000);

      setTimeout(() => {
         clearInterval(interval);
      }, 32000);
   }
}
