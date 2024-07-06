import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/Recipe.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private router: Router) {}
  private recipesService = inject(RecipesService);

  recipeForm = new FormGroup({
    titulo: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    intro: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    tiempoTotal: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    preparacion: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    coccion: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    imagen: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    instrucciones: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    ingredientes: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    calorias: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    carbohidratos: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    proteinas: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    grasas: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  get titulo() {
    return this.recipeForm.get('titulo');
  }

  get intro() {
    return this.recipeForm.get('intro');
  }

  get tiempoTotal() {
    return this.recipeForm.get('tiempoTotal');
  }

  get preparacion() {
    return this.recipeForm.get('preparacion');
  }

  get coccion() {
    return this.recipeForm.get('coccion');
  }

  get imagen() {
    return this.recipeForm.get('imagen');
  }

  get instrucciones() {
    return this.recipeForm.get('instrucciones');
  }

  get ingredientes() {
    return this.recipeForm.get('ingredientes');
  }

  get calorias() {
    return this.recipeForm.get('calorias');
  }

  get carbohidratos() {
    return this.recipeForm.get('carbohidratos');
  }

  get proteinas() {
    return this.recipeForm.get('proteinas');
  }

  get grasas() {
    return this.recipeForm.get('grasas');
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      console.log('Se envio la info del form');
      const finalRecipe = {
        id: Date.now(),
        titulo: this.recipeForm.value.titulo,
        intro: this.recipeForm.value.intro,
        tiempoTotal: this.recipeForm.value.tiempoTotal,
        preparacion: this.recipeForm.value.preparacion,
        coccion: this.recipeForm.value.coccion,
        imagen: this.recipeForm.value.imagen,
        instrucciones: this.recipeForm.value.instrucciones?.split('\n'),
        ingredientes: this.recipeForm.value.ingredientes?.split('\n'),
        valoresNutricionales: {
          calorias: this.recipeForm.value.calorias,
          carbohidratos: this.recipeForm.value.carbohidratos,
          proteinas: this.recipeForm.value.proteinas,
          grasas: this.recipeForm.value.grasas,
        },
      };
      this.recipesService.createRecipe(finalRecipe);

      this.router.navigate(['/']);
    } else {
      alert("Campo invalido");
    }
  }
}
