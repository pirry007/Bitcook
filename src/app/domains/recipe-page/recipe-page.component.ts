import { Component, inject, Input, signal } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/Recipe.model';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css',
})
export class RecipePageComponent {
  @Input() id?: number;
  private recipesService = inject(RecipesService);

  recipe = signal<null | Recipe>(null);

  ngOnInit(){
    console.log(this.recipe())
    if (this.id !== undefined){
      this.recipe.set(this.recipesService.getOnerecipeById(Number(this.id)))
      console.log(this.recipe())
    }
  }
}
