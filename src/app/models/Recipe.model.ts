export interface Recipe {
  id: number;
  titulo: string;
  intro: string;
  tiempoTotal: number;
  preparacion: number;
  coccion: number;
  imagen: string;
  instrucciones: string[];
  ingredientes: string[];
  valoresNutricionales: {
    calorias: number;
    carbohidratos: number;
    proteinas: number;
    grasas: number;
  };
}
