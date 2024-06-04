import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'dbz-add-character',
	templateUrl: './add-character.component.html',
	styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent {
	@Output()
	public onNewCharacter: EventEmitter<Character> = new EventEmitter();

	public character: Character = {
		name: '',
		power: 0
	}

	addCharacter(): void {
		if (this.addCharacter.name.length === 0) return;

		this.onNewCharacter.emit(this.character);

		this.character = {
			name: '',
			power: 0
		}
	}
}
