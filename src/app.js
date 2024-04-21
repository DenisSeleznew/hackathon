import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import { VideoModule } from './modules/video.module';

import { Message } from './modules/message.module';
class App {
	#contextMenu;
	#backgroundModule;
	#clicksModule;
	#shapeModule;
	#messageModule;
	#videoModule;

	constructor() {
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
		this.#clicksModule = new ClicksModule(
			'ClicksModule',
			'Счетчик кликов',
			document.body,
			document.body,
			5
		);
		this.#videoModule = new VideoModule('video', 'Открыть Pedro-енота');
		this.#contextMenu = new ContextMenu('.menu', [
			this.#backgroundModule,
			this.#clicksModule,
			this.#shapeModule,
			this.#messageModule,
			this.#videoModule,
		]);
	}

	run() {
		this.#contextMenu.open();
		this.#contextMenu.add();
	}
}

const app = new App();
app.run();
