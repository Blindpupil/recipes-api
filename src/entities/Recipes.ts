export interface IngredientInterface {
  name: string;
  quantity: number;
}

export interface RecipeInterface {
  id: number;
  name: string;
  duration: string;
  ingredients: IngredientInterface[]
}

class Recipe implements RecipeInterface {

  public id: number;
  public name: string;
  public duration: string;
  public ingredients: IngredientInterface[];

  constructor(nameOrRecipe: string | Recipe, duration?: string, ingredients?: IngredientInterface[], id?: number) {
    if (typeof nameOrRecipe === 'string') {
      this.name = nameOrRecipe;
      this.duration = duration || '';
      this.ingredients = ingredients || [];
      this.id = id || 0;
    } else {
      this.name = nameOrRecipe.name;
      this.duration = nameOrRecipe.duration;
      this.id = nameOrRecipe.id;
      this.ingredients = nameOrRecipe.ingredients;
    }
  }
}

export default Recipe;