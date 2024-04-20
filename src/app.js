import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
class App {
	#contextMenu;
	#backgroundModule;
	#clicksModule;
	#shapeModule;

	constructor() {
		this.#shapeModule = new ShapeModule(
			'ShapeModule',
			'Create figure',
			document.body
		);
		this.#backgroundModule = new BackgroundModule(
			'background',
			'Поменять цвет фона'
		);
		this.#clicksModule = new ClicksModule(
			'ClicksModule',
			'Click',
			document.body,
			document.body,
			5
		);
		this.#contextMenu = new ContextMenu('.menu', [
			this.#backgroundModule,
			this.#clicksModule,
			this.#shapeModule,
		]);
	}

	run() {
		this.#contextMenu.open();
		this.#contextMenu.add();
	}
}

const app = new App();
app.run();
