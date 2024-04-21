import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ShapeModule } from './modules/shape.module';
import { VideoModule } from './modules/video.module';

import { SecondsClickModule } from './modules/newClick';

import { Message } from './modules/message.module';

class App {
	#contextMenu;
	#backgroundModule;
	#shapeModule;
	#messageModule;
	#videoModule;
	#secondsClickModule;

	constructor() {
		this.#secondsClickModule = new SecondsClickModule(
			'clicker',
			'Счетчик кликов'
		);
		this.#messageModule = new Message('Message', 'Рандомное сообщение');
		this.#shapeModule = new ShapeModule(
			'ShapeModule',
			'Генератор фигур',
			document.body
		);
		this.#backgroundModule = new BackgroundModule(
			'background',
			'Поменять цвет фона'
		);

		this.#videoModule = new VideoModule('video', 'Открыть Pedro-енота');
		this.#contextMenu = new ContextMenu('.menu', [
			this.#backgroundModule,
			this.#shapeModule,
			this.#messageModule,
			this.#videoModule,
			this.#secondsClickModule,
		]);
	}

	run() {
		this.#contextMenu.open();
		this.#contextMenu.add();
	}
}

const app = new App();
app.run();
