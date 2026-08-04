import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ListComponent {
	public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor']
	public deletedHero?: string = '';
	
	deleteLastHero() {
		this.deletedHero = this.heroNames.pop()
	}
}
