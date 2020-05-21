import Heroe from './heroe.js';

var heroes = [];

async function getVersion() {
	const response = await fetch('/api/version/');
	const data = await response.text();
	version.innerHTML = data;
}

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
		var c_id = 'c' + i;
		heroe_info.id = c_id;

		const h_character = document.createElement('h5');
		h_character.innerText = heroes[i].character;
		const h_nombre = document.createElement('h6');
		h_nombre.innerText =
			'Nombre: ' +
			heroes[i].nombre +
			'\nNivel: ' +
			heroes[i].lv +
			'\nGénero: ' +
			heroes[i].genre +
			'\nEspecie: ' +
			heroes[i].especie;

		heroe_info.append(h_character, h_nombre);
		album.append(heroe_info);
	}
	for (var i = 0; i < heroes.length; i++) {
		var c_id = 'c' + i;
		document.getElementById(c_id).style.background = heroes[i].color;
	}
};

getVersion();
getHeroes();
