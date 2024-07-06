import { Injectable, signal } from '@angular/core';
import { Recipe } from '../models/Recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor() {}

  recipes = signal([
    {
      id: 1,
      titulo: 'Ensalada César',
      intro: 'Una clásica ensalada fresca y crujiente.',
      tiempoTotal: 15,
      preparacion: 10,
      coccion: 5,
      imagen:
        'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instrucciones: [
        'Lava y seca la lechuga.',
        'Corta y mezcla con crutones y queso.',
        'Añade el aderezo y mezcla bien.',
      ],
      ingredientes: [
        '1 lechuga romana',
        '1 taza de crutones',
        '1/4 taza de queso parmesano',
        '2 dientes de ajo',
        '2 filetes de anchoa',
        '1 cucharadita de mostaza',
        '1 cucharada de limón',
        '1 cucharada de vinagre',
        '1/2 taza de mayonesa',
        '1/4 taza de aceite de oliva',
      ],
      valoresNutricionales: {
        calorias: 180,
        carbohidratos: 12,
        proteinas: 4,
        grasas: 14,
      },
    },
    {
      id: 2,
      titulo: 'Tarta de Manzana',
      intro: 'Postre clásico con manzanas y canela.',
      tiempoTotal: 60,
      preparacion: 20,
      coccion: 40,
      imagen:
        'https://images.unsplash.com/photo-1601000938365-f182c5ec2f77?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instrucciones: [
        'Precalienta el horno.',
        'Prepara las manzanas.',
        'Extiende la masa y rellena.',
        'Hornea hasta dorar.',
      ],
      ingredientes: [
        '5 manzanas',
        '1 taza de azúcar',
        '1 cucharadita de canela',
        '1 paquete de masa',
      ],
      valoresNutricionales: {
        calorias: 300,
        carbohidratos: 45,
        proteinas: 3,
        grasas: 12,
      },
    },
    {
      id: 3,
      titulo: 'Sopa de Tomate',
      intro: 'Reconfortante y saludable sopa de tomate.',
      tiempoTotal: 30,
      preparacion: 10,
      coccion: 20,
      imagen:
        'https://images.unsplash.com/photo-1629978448078-c94a0ab6500f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instrucciones: [
        'Pica los ingredientes.',
        'Sofríe cebolla y ajo.',
        'Añade tomates y caldo.',
        'Cocina y tritura.',
      ],
      ingredientes: [
        '6 tomates',
        '1 cebolla',
        '2 dientes de ajo',
        '4 tazas de caldo de verduras',
        '2 cucharadas de aceite de oliva',
      ],
      valoresNutricionales: {
        calorias: 120,
        carbohidratos: 20,
        proteinas: 4,
        grasas: 4,
      },
    },
    {
      id: 4,
      titulo: 'Pollo al Curry',
      intro: 'Sabor exótico con especias intensas.',
      tiempoTotal: 45,
      preparacion: 15,
      coccion: 30,
      imagen:
        'https://images.unsplash.com/photo-1697155406127-76096502d69d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      instrucciones: [
        'Corta el pollo.',
        'Sofríe cebolla y ajo.',
        'Añade pollo y pasta de curry.',
        'Agrega leche de coco y cocina.',
      ],
      ingredientes: [
        '500g de pechuga de pollo',
        '1 cebolla',
        '2 dientes de ajo',
        '2 cucharadas de pasta de curry',
        '1 lata de leche de coco',
      ],
      valoresNutricionales: {
        calorias: 350,
        carbohidratos: 10,
        proteinas: 28,
        grasas: 22,
      },
    },
    {
      id: 5,
      titulo: 'Panqueques de Avena',
      intro: 'Desayuno saludable con avena.',
      tiempoTotal: 20,
      preparacion: 10,
      coccion: 10,
      imagen:
        'https://sabor.eluniverso.com/wp-content/uploads/2023/10/shutterstock_1916171950-scaled.jpg',
      instrucciones: [
        'Mezcla los ingredientes secos.',
        'Añade huevos y leche.',
        'Cocina los panqueques en una sartén.',
      ],
      ingredientes: [
        '1 taza de avena',
        '1 cucharadita de polvo de hornear',
        '1 pizca de sal',
        '1 cucharadita de canela',
        '2 huevos',
        '1 taza de leche',
      ],
      valoresNutricionales: {
        calorias: 200,
        carbohidratos: 30,
        proteinas: 6,
        grasas: 6,
      },
    },
    {
      id: 6,
      titulo: 'Guacamole',
      intro: 'Dip cremoso y lleno de sabor.',
      tiempoTotal: 10,
      preparacion: 10,
      coccion: 0,
      imagen:
        'https://danzadefogones.com/wp-content/uploads/2023/11/guacamole-casero.jpg',
      instrucciones: [
        'Pela y machaca los aguacates.',
        'Añade tomate, cebolla y cilantro.',
        'Condimenta con sal, limón y chile.',
      ],
      ingredientes: [
        '2 aguacates',
        '1 tomate',
        '1/2 cebolla',
        'Cilantro',
        'Sal',
        'Jugo de limón',
        'Chile opcional',
      ],
      valoresNutricionales: {
        calorias: 150,
        carbohidratos: 10,
        proteinas: 2,
        grasas: 12,
      },
    },
    {
      id: 7,
      titulo: 'Pasta Alfredo',
      intro: 'Pasta cremosa y deliciosa.',
      tiempoTotal: 25,
      preparacion: 10,
      coccion: 15,
      imagen:
        'https://www.budgetbytes.com/wp-content/uploads/2022/01/Shrimp-Alfredo-Pasta-bowl2-500x500.jpg',
      instrucciones: [
        'Cocina la pasta.',
        'Prepara la salsa con mantequilla, crema y queso.',
        'Mezcla la pasta con la salsa.',
      ],
      ingredientes: [
        '200g de pasta',
        '1/2 taza de crema',
        '1/4 taza de queso parmesano',
        '2 cucharadas de mantequilla',
      ],
      valoresNutricionales: {
        calorias: 400,
        carbohidratos: 50,
        proteinas: 10,
        grasas: 18,
      },
    },
    {
      id: 8,
      titulo: 'Batido de Fresas',
      intro:
        'Bebida refrescante y nutritiva, perfecta para cualquier momento del día.',
      tiempoTotal: 5,
      preparacion: 5,
      coccion: 0,
      imagen:
        'https://www.pequerecetas.com/wp-content/uploads/2021/04/batido-de-fresa-casero.jpeg',
      instrucciones: [
        'Lava y corta las fresas.',
        'Coloca las fresas, la leche y el yogur en una licuadora.',
        'Añade miel y extracto de vainilla.',
        'Licúa hasta obtener una mezcla homogénea.',
        'Sirve inmediatamente y disfruta.',
      ],
      ingredientes: [
        '1 taza de fresas frescas',
        '1 taza de leche',
        '1/2 taza de yogur natural',
        '1 cucharada de miel',
        '1 cucharadita de extracto de vainilla',
      ],
      valoresNutricionales: {
        calorias: 150,
        carbohidratos: 25,
        proteinas: 6,
        grasas: 3,
      },
    },
  ]);

  getOnerecipeById(id: number) {
    const recipe = this.recipes().find((recipe: Recipe) => recipe.id === id);
    if (recipe !== undefined) {
      return recipe;
    } else {
      return null;
    }
  }

  createRecipe(recipe: Recipe) {
    this.recipes.update(function (state) {
      return [...state, recipe];
    });
  }
}
