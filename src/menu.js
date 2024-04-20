import { Menu } from './core/menu';
import { Module } from './core/module';
import { makeElementHidden } from './utils';

export class ContextMenu extends Menu {
	#itemArr;
	constructor(selector, itemArr) {
		super(selector);
		this.#itemArr = itemArr;
	}

	open() {
		document.body.addEventListener('contextmenu', event => {
			event.preventDefault();
			this.el.style.top = `${event.pageY}px`;
			this.el.style.left = `${event.pageX}px`;
			this.el.classList.add('open');
			makeElementHidden('.notice-block');
		});
	}

	close() {
		this.el.classList.remove('open');
	}
	add() {
		const li = document.querySelector('li');
		console.log(li);
		this.#itemArr.forEach(item => {
			if (item instanceof Module) {
				this.el.insertAdjacentHTML('beforeend', item.toHTML());
				item.trigger();
			}
		});
	}
}
