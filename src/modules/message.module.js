import { Module } from '../core/module';

export class Message extends Module {
	constructor(type, text, container) {
	  super(type, text);
	  this.container = container || document.body;	  
	}
  
	trigger() {
	const messageModule = document?.querySelector(`[data-type="${this.type}"]`);
		messageModule.addEventListener('click', () => {
		this.showRandomMessage()
		  
		});
	  }
	  showRandomMessage() {
		const messageBox = document.createElement('div');
        messageBox.className = 'random_message';
        messageBox.textContent = this.randomMessage();
        this.container.appendChild(messageBox);
    
    setTimeout(() => {
      messageBox.remove();
    }, 5000);
  }

		
		randomMessage() {
			const messages = [
				'Почему кот любит изучать JavaScript? Потому что он хочет научиться ловить мышей... с помощью кода!',
				'Как кот реагирует на ошибки в JavaScript? Он просто мяукает и пытается исправить их с помощью try-catch блоков!',
				'Как кот называет функцию в JavaScript? "Муррр-етод"!',
				'Почему кот любит использовать стрелочные функции в JavaScript? Потому что они не требуют ключевого слова function, а это значит - меньше работы лапами!',
				'Как кот объявляет переменную в JavaScript? let мояЛапа = "подушка"!',
				'Как кот называет свой объект в JavaScript? "МояКошачьяЖизнь"!',
				'Почему кот любит изучать асинхронное программирование? Потому что он может делать несколько вещей одновременно, не теряя своего сна!',
				'Как кот перебирает массив в JavaScript? Он использует цикл for (let мояЛапа of массив) и мурлычет на каждом элементе!',
				'Почему коту нравится работать с обещаниями (Promises) в JavaScript? Потому что обещание получить рыбку всегда держится!',
				'Как кот заканчивает свой код в JavaScript? Он добавляет console.log("Мур!"), чтобы подтвердить, что все работает, как надо!'
			];
		
			const randomIndex = Math.floor(Math.random() * messages.length);
			return messages[randomIndex];
		} 

		toHTML() {
			return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
		}
	



	}
	
