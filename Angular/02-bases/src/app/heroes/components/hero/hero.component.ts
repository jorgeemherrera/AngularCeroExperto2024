import { Component } from '@angular/core';

@Component({
	selector: 'app-heroes-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

	public name: string = 'ironman';
	public age: number = 45;

	get capitalizeName(): string {
		return this.name.toUpperCase();
	}

	getHeroDescription(): string {
		return `Hero name: ${this.name} - Hero age: ${this.age}`;
	}

	changeHero(): void {
		this.name = 'Spiderman';
	}

	changeAge(): void {
		this.age = 50;
	}

	resetValues(): void {
		this.name = 'ironman';
		this.age = 45;
	}
}
