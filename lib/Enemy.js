const Potion = require("./Potion");
const Character = require("./Character");

// class Enemy extends Character {
class Enemy extends Character {
	constructor(name, weapon) {
		// call parent constructor here:
		super(name);

		// this.name = name;
		this.weapon = weapon;
		this.potion = new Potion();

		// this.health = Math.floor(Math.random() * 10 + 95);
		// this.strength = Math.floor(Math.random() * 5 + 7);
		// this.agility = Math.floor(Math.random() * 5 + 7);
	}

	getDescription() {
		return [`A ${this.name} holding a ${this.weapon} has appeared!`];
	}
}

module.exports = Enemy;

// module.exports = Enemy;

// function Enemy(name, weapon) {
// 	this.name = name;
// 	this.weapon = weapon;
// 	this.potion = new Potion();

// 	this.health = Math.floor(Math.random() * 10 + 85);
// 	this.strength = Math.floor(Math.random() * 5 + 5);
// 	this.agility = Math.floor(Math.random() * 5 + 5);
// }

// // inherit prototype methods from Character here:
// Enemy.prototype = Object.create(Character.prototype);

// Enemy.prototype.getDescription = function () {
// 	return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };
