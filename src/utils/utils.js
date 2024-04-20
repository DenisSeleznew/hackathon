export const makeElementHidden = target => {
	if (!target) {
		throw new Error(`Target path should not be empty`);
	}

	let elementHidden = target;

	if (!(target instanceof HTMLElement)) {
		elementHidden = document.querySelector(target);
	}

	if (!elementHidden.classList.contains('hidden')) {
		elementHidden.classList.add('hidden');
	}
};

export const makeElementVisible = target => {
	if (!target) {
		throw new Error(`Target path should not be empty`);
	}

	let elementUI = target;

	if (!(target instanceof HTMLElement)) {
		elementUI = document.querySelector(target);
	}

	if (elementUI.classList.contains('hidden')) {
		elementUI.classList.remove('hidden');
	}
};

export const getFormattedTime = quantitySeconds => {
	if (quantitySeconds < 10) {
		return `00:0${quantitySeconds}`;
	}

	if (quantitySeconds >= 60 && quantitySeconds < 600) {
		return `0${(quantitySeconds / 60).toFixed(0)}:${quantitySeconds % 60}`;
	}

	return `${quantitySeconds}`;
};
