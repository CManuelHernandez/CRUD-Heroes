import { Hero, Publisher } from './../../interfaces/hero.interface';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
})
export class NewPageComponent {
  public herForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(private heroesServices: HeroesService) {}

  get currentHero(): Hero {
    const hero = this.herForm.value as Hero;

    return hero;
  }

  onSubmit() {
    if (this.herForm.invalid) return;

    /* this.heroesServices.updateHero() */
  }
}
