import { Module } from "../core/module";

export class Message extends Module {
    constructor(name, content) {
        super();
        this.name = name; 
        this.content = content; 
        this.setup();
    }

    setup() {
        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'message';

        const $messageBox = document.createElement('div');
        $messageBox.className = 'random_message'; 
        $messageBox.textContent = Message.randomMessage(); 
        this.$rootElement.appendChild($messageBox);

        setTimeout(() => {
            $messageBox.remove();
        }, 5000);
    }

    trigger() {
        const clickModule = document.querySelector('.random_message'); 
        clickModule.addEventListener('click', (event) => {
            this.showRandomMessage();
        });
    }

    showRandomMessage() {
        console.log(Message.randomMessage());       
    }

    static randomMessage() {
        const message = [
            'Почему кот любит изучать JavaScript? Потому что он хочет научиться ловить мышей... с помощью кода!',
            'Как кот реагирует на ошибки в JavaScript? Он просто мяукает и пытается исправить их с помощью try-catch блоков!',
            'Как кот называет функцию в JavaScript? "Муррр-етод"!',
            'Почему кот любит использовать стрелочные функции в JavaScript? Потому что они не требуют ключевого слова function, а это значит - меньше работы лапами!',
            'Как кот объявляет переменную в JavaScript? let мояЛапа = "подушка"!',
            'Как кот называет свой объект в JavaScript? "МояКошачьяЖизнь"!',
            'Почему кот любит изучать асинхронное программирование? Потому что он может делать несколько вещей одновременно, не теряя своего сна!',
            'Как кот перебирает массив в JavaScript? Он использует цикл for (var мояЛапа of массив) и мурлычет на каждом элементе!',
            'Почему коту нравится работать с обещаниями (Promises) в JavaScript? Потому что обещание получить рыбку всегда держится!',
            'Как кот заканчивает свой код в JavaScript? Он добавляет console.log("Мур!"), чтобы подтвердить, что все работает, как надо!'
        ];

        const randomIndex = Math.floor(Math.random() * message.length);
        return message[randomIndex];
    }
}




