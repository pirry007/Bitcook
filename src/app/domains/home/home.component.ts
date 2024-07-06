import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLinkWithHref } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { CardRecipeComponent } from '../../components/card-recipe/card-recipe.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardRecipeComponent,HeaderComponent, FooterComponent, RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private recipesService = inject(RecipesService);

  recipes = this.recipesService.recipes;
}
