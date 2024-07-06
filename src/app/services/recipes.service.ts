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
    titulo: "Pasta Carbonara",
    intro: "Una deliciosa pasta cremosa con panceta y queso parmesano.",
    tiempoTotal: 30,
    preparacion: 10,
    coccion: 20,
    imagen: "https://images.unsplash.com/photo-1574885014162-92e4f12928db?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instrucciones: [
      "Cocina la pasta en agua con sal hasta que esté al dente.",
      "Mientras tanto, cocina la panceta en una sartén grande hasta que esté crujiente.",
      "En un tazón aparte, mezcla los huevos, el queso parmesano rallado y la pimienta negra.",
      "Escurre la pasta, reserval el agua de cocción.",
      "Añade la pasta a la sartén con la panceta y mezcla bien.",
      "Retira la sartén del fuego y agrega la mezcla de huevo y queso, revolviendo rápidamente para que la salsa se mezcle y no se cocine demasiado.",
      "Si es necesario, agrega un poco de agua de cocción reservada para ajustar la consistencia de la salsa.",
      "Sirve caliente y espolvorea con más queso parmesano si lo deseas."
    ],
    ingredientes: [
      "400g de pasta (espaguetis o linguini)",
      "150g de panceta o tocino ahumado, cortado en trozos pequeños",
      "2 huevos grandes",
      "100g de queso parmesano rallado",
      "Pimienta negra recién molida, al gusto"
    ],
    valoresNutricionales: {
      calorias: 550,
      carbohidratos: 45,
      proteinas: 25,
      grasas: 30
    }
  },
  {
    id: 2,
    titulo: "Ensalada César",
    intro: "Una ensalada clásica con crutones, pollo a la parrilla y aderezo cremoso.",
    tiempoTotal: 25,
    preparacion: 15,
    coccion: 10,
    imagen: "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instrucciones: [
      "Prepara los crutones: corta pan en cubos, mezcla con aceite de oliva, ajo en polvo y sal. Hornea hasta que estén dorados y crujientes.",
      "Cocina el pollo a la parrilla hasta que esté completamente cocido. Corta en tiras.",
      "Lava y seca la lechuga romana. Corta en trozos pequeños y coloca en un bol grande.",
      "Añade los crutones y el pollo a la lechuga.",
      "Prepara el aderezo César: mezcla mayonesa, ajo picado, jugo de limón, salsa Worcestershire, anchoas picadas, queso parmesano rallado y pimienta negra en un tazón.",
      "Vierte el aderezo sobre la ensalada y mezcla bien para cubrir todos los ingredientes.",
      "Sirve la ensalada en platos individuales y espolvorea con más queso parmesano si lo deseas."
    ],
    ingredientes: [
      "1 lechuga romana grande, lavada y cortada",
      "2 pechugas de pollo",
      "Pan duro cortado en cubos para crutones",
      "Aceite de oliva",
      "2 dientes de ajo, picados",
      "Mayonesa",
      "Jugo de limón",
      "Salsa Worcestershire",
      "Anchoas en aceite, picadas",
      "Queso parmesano rallado",
      "Pimienta negra recién molida"
    ],
    valoresNutricionales: {
      calorias: 380,
      carbohidratos: 15,
      proteinas: 30,
      grasas: 20
    }
  },
  {
    id: 3,
    titulo: "Tacos de Carnitas",
    intro: "Tacos mexicanos con cerdo cocido lentamente y guarniciones frescas.",
    tiempoTotal: 180,
    preparacion: 30,
    coccion: 150,
    imagen: "https://images.unsplash.com/photo-1648437595587-e6a8b0cdf1f9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instrucciones: [
      "Cocina la carne de cerdo en una olla grande con agua, sal, ajo, cebolla y hojas de laurel durante varias horas hasta que esté tierna y desmenuzable.",
      "Calienta las tortillas de maíz en una sartén hasta que estén calientes y ligeramente tostadas.",
      "Desmenuza la carne de cerdo cocida y colócala en las tortillas calientes.",
      "Prepara las guarniciones: cilantro fresco picado, cebolla picada, salsa verde y limones cortados.",
      "Sirve los tacos de carnitas con las guarniciones preparadas y disfruta."
    ],
    ingredientes: [
      "1 kg de carne de cerdo (preferiblemente pierna o paleta)",
      "Tortillas de maíz",
      "Sal",
      "3 dientes de ajo",
      "1 cebolla grande, cortada en cuartos",
      "2 hojas de laurel",
      "Cilantro fresco",
      "Cebolla picada",
      "Salsa verde",
      "Limones"
    ],
    valoresNutricionales: {
      calorias: 450,
      carbohidratos: 25,
      proteinas: 35,
      grasas: 20
    }
  },
  {
    id: 4,
    titulo: "Sushi de Salmón",
    intro: "Rollos de sushi frescos con salmón y aguacate.",
    tiempoTotal: 45,
    preparacion: 30,
    coccion: 15,
    imagen: "https://images.unsplash.com/photo-1563612116625-3012372fccce?q=80&w=1341&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instrucciones: [
      "Cocina el arroz sushi según las instrucciones del paquete y deja enfriar.",
      "Corta el salmón en tiras delgadas y el aguacate en rodajas.",
      "Coloca una hoja de alga nori sobre una esterilla de bambú.",
      "Extiende una capa delgada de arroz sushi sobre el alga, dejando un borde libre en la parte superior.",
      "Coloca tiras de salmón y rodajas de aguacate en el centro del arroz.",
      "Usando la esterilla, enrolla el sushi firmemente.",
      "Con un cuchillo afilado, corta el rollo de sushi en rodajas de aproximadamente 2 cm de grosor.",
      "Sirve con salsa de soja y wasabi al gusto."
    ],
    ingredientes: [
      "200g de salmón fresco",
      "1 aguacate maduro",
      "Arroz sushi",
      "Algas nori",
      "Salsa de soja",
      "Wasabi"
    ],
    valoresNutricionales: {
      calorias: 320,
      carbohidratos: 30,
      proteinas: 25,
      grasas: 15
    }
  },
  {
    id: 5,
    titulo: "Pastel de Chocolate",
    intro: "Un pastel esponjoso y decadente con glaseado de chocolate.",
    tiempoTotal: 60,
    preparacion: 20,
    coccion: 40,
    imagen: "https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instrucciones: [
      "Precalienta el horno a 180°C y engrasa un molde para pastel.",
      "En un tazón grande, bate la mantequilla y el azúcar hasta que estén cremosos.",
      "Añade los huevos, uno a la vez, batiendo bien después de cada adición.",
      "Agrega la harina, el cacao en polvo, el polvo de hornear y la leche, y mezcla hasta obtener una masa suave.",
      "Vierte la masa en el molde preparado y hornea durante 40 minutos o hasta que al insertar un palillo en el centro salga limpio.",
      "Deja enfriar en el molde durante 10 minutos antes de transferir a una rejilla para que se enfríe completamente.",
      "Prepara el glaseado: derrite el chocolate y la mantequilla juntos hasta obtener una mezcla suave y brillante.",
      "Cubre el pastel con el glaseado y decora con chispas de chocolate si lo deseas."
    ],
    ingredientes: [
      "200g de mantequilla sin sal, a temperatura ambiente",
      "200g de azúcar",
      "4 huevos grandes",
      "200g de harina para todo uso",
      "50g de cacao en polvo",
      "1 cucharadita de polvo de hornear",
      "4 cucharadas de leche",
      "150g de chocolate negro",
      "50g de mantequilla"
    ],
    valoresNutricionales: {
      calorias: 380,
      carbohidratos: 45,
      proteinas: 5,
      grasas: 20
    }
  },
  {
    id: 6,
    titulo: "Risotto de Champiñones",
    intro: "Un plato cremoso de arroz con champiñones y queso parmesano.",
    tiempoTotal: 40,
    preparacion: 10,
    coccion: 30,
    imagen: "https://images.unsplash.com/photo-1609770424775-39ec362f2d94?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instrucciones: [
      "En una olla grande, derrite la mantequilla y saltea la cebolla y el ajo hasta que estén dorados.",
      "Añade los champiñones y cocina hasta que estén tiernos y dorados.",
      "Agrega el arroz Arborio y revuelve hasta que esté bien cubierto con la mantequilla y los jugos de los champiñones.",
      "Vierte el vino blanco y cocina hasta que se haya absorbido completamente.",
      "Añade el caldo de verduras, una cucharón a la vez, revolviendo constantemente y esperando a que se absorba antes de agregar más.",
      "Continúa este proceso hasta que el arroz esté tierno y cremoso, pero aún firme al morder.",
      "Retira del fuego y mezcla el queso parmesano rallado.",
      "Sirve caliente y espolvorea con perejil fresco si lo deseas."
    ],
    ingredientes: [
      "300g de arroz Arborio",
      "500g de champiñones frescos, cortados en rodajas",
      "1 cebolla grande, picada finamente",
      "2 dientes de ajo, picados",
      "50g de mantequilla",
      "1 vaso de vino blanco seco",
      "1L de caldo de verduras caliente",
      "100g de queso parmesano rallado",
      "Perejil fresco picado"
    ],
    valoresNutricionales: {
      calorias: 400,
      carbohidratos: 60,
      proteinas: 10,
      grasas: 15
    }
  }
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
