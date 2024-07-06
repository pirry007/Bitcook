import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-recipe',
  standalone: true,
  imports: [],
  templateUrl: './card-recipe.component.html',
  styleUrl: './card-recipe.component.css'
})
export class CardRecipeComponent {
  @Input() titulo: string = '';
  @Input() tiempoTotal: string = '';
  @Input() preparacion: string = '';
  @Input() coccion: string = '';
  @Input() imagen: string = '';
}
