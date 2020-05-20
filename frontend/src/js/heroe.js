export default class Heroe {
	constructor(hero_data) {
		this.character = hero_data.character;
		this.nombre = hero_data.name;
		this.lv = hero_data.level;
		this.genre = hero_data.genre;
		this.especie = hero_data.specie;
		this.color = hero_data.color;
	}
}
