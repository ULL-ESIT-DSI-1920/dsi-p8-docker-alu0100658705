import Heroe from './heroe.js';

var heroes = [];

async function getHeroes() {
	const response = await fetch('/api/');
	const data = await response.json();
	for (var i = 0; i < data.length; i++) {
		const heroe = await new Heroe(data[i]);
		heroes.push(heroe);
	}
	await set_cartas();
}

const set_cartas = async () => {
	for (var i = 0; i < heroes.length; i++) {
		const heroe_info = document.createElement('div');
		heroe_info.classList.add('carta');

		const h_character = document.createElement('h5');
		h_character.innerText = heroes[i].character;
		const h_nombre = document.createElement('h6');
		h_nombre.innerText = heroes[i].nombre;

		heroe_info.append(h_character, h_nombre);
		album.append(heroe_info);
	}
	document.querySelector('.carta').style.backgroundColor = heroes[0].color;
};

getHeroes();
