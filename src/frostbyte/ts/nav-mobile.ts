const showMenu = (toggleId: string, navId: string) => {
	const toggle = document.getElementById(toggleId) as HTMLElement;
	const nav = document.getElementById(navId) as HTMLElement;
	nav.classList.toggle('show-menu');
	displayToggle(navId);
	toggle.classList.toggle('show-icon');
};
