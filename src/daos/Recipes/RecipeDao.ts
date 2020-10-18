import { RecipeInterface } from '@entities/Recipes';

export interface RecipeDaoInterface {
  show: (id: number) => Promise<RecipeInterface | null>;
  index: () => Promise<RecipeInterface[]>;
  // create: (Recipe: RecipeDaoInterface) => Promise<RecipeDaoInterface>;
}

class RecipeDao implements RecipeDaoInterface {

  public index(): Promise<RecipeInterface[]> {
    // TODO
    return Promise.resolve([]);
  }

  public show(id: number): Promise<RecipeInterface | null> {
    // TODO
    return Promise.resolve(null);
  }
}