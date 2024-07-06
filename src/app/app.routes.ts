import { Routes } from '@angular/router';
import { HomeComponent } from './domains/home/home.component';
import { RecipePageComponent } from './domains/recipe-page/recipe-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipe-page/:id', component: RecipePageComponent},
];
