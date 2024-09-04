function classAdd(elem: HTMLElement, classA: string): void {
	elem.classList.add(classA);
}

function classRemove(elem: HTMLElement, classA: string): void {
	elem.classList.remove(classA);
}

function classToggle(elem: HTMLElement, classA: string): void {
	elem.classList.toggle(classA);
}

function spoilerToggle(elem: HTMLElement): void {
	classToggle(elem, 'blur');
}

function classSwap(elem: HTMLElement, classA: string, classB: string): void {
	if (elem.classList.contains(classA)) {
		elem.classList.remove(classA);
		elem.classList.add(classB);
	} else {
		elem.classList.remove(classB);
		elem.classList.add(classA);
	}
}

function displayToggle(elem: string): void {
	const element = document.getElementById(elem) as HTMLInputElement;
	const classesToCheck = ['hidden', 'desktop-only', 'mobile-only'];
	const hasAnyClass = classesToCheck.some((className) =>
		element.classList.contains(className)
	);
	if (hasAnyClass) {
		unhide(elem);
	} else {
		hide(elem);
	}
}

function unhide(elem: string): void {
	const element = document.getElementById(elem) as HTMLInputElement;
	if (element.classList.contains('hidden')) {
		element.classList.remove('hidden');
	}

	if (element.classList.contains('mobile-only')) {
		element.classList.remove('mobile-only');
		element.classList.add('mobile-only-off');
	}

	if (element.classList.contains('desktop-only')) {
		element.classList.remove('desktop-only');
		element.classList.add('desktop-only-off');
	}
}

function hide(elem: string): void {
	const element = document.getElementById(elem) as HTMLInputElement;
	if (element.classList.contains('mobile-only-off')) {
		element.classList.remove('mobile-only-off');
		element.classList.add('mobile-only');
	} else if (element.classList.contains('desktop-only-off')) {
		element.classList.remove('desktop-only-off');
		element.classList.add('desktop-only');
	} else {
		element.classList.add('hidden');
	}
}

function clear(elem: string): void {
	(document.getElementById(elem) as HTMLInputElement).innerHTML = '';
}

function indexDictExtract(
	indexes: (number | string)[],
	dict: { [key: string]: any }
): { [key: string]: any } {
	const output: { [key: string]: any } = {};

	let i = 0;
	for (const [key, value] of Object.entries(dict)) {
		if (indexes[i]) {
			output[key] = value;
		}

		if (dict[i]) {
			output[key] = value;
		}
		i++;
	}

	return output;
}

function swapElems(
	elem1: string | HTMLElement,
	elem2: string | HTMLElement,
	animate?: boolean
): void {
	const div1 =
		typeof elem1 === 'string' ? document.getElementById(elem1) : elem1;
	const div2 =
		typeof elem2 === 'string' ? document.getElementById(elem2) : elem2;

	if (div1 && div2) {
		const tempContent = div1.innerHTML;
		div1.innerHTML = div2.innerHTML;
		div2.innerHTML = tempContent;

		if (animate) {
			div1.classList.add('slide-in-right');
			div2.classList.add('slide-in-left');

			setTimeout(() => {
				div1.classList.remove('slide-in-right');
				div2.classList.remove('slide-in-left');
			}, 500);
		}
	}
}

function findElemFromRoot(
	root: string | HTMLElement,
	targetClass: string
): HTMLElement | null {
	const rootDiv =
		typeof root === 'string'
			? (document.getElementById(root) as HTMLElement)
			: root;
	return rootDiv?.querySelector(`.${targetClass}`) as HTMLElement;
}
