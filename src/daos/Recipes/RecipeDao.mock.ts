import MockDaoMock from "@daos/MockDb/MockDao.mock";
import { RecipeInterface } from "@entities/Recipes";
import { getRandomInt } from "@shared/functions";
import { RecipeDaoInterface } from "./RecipeDao";



export default class RecipeDao extends MockDaoMock implements RecipeDaoInterface {
  
  public async show(id: number): Promise<RecipeInterface | null> {
    const db = await super.openDb();
    for (const recipe of db.recipes) {
      if (recipe.id === id) return recipe;
    }
    return null;
  }

  public async index(): Promise<RecipeInterface[]> {
    const db = await super.openDb();
    return db.recipes;
  }

  public async create(recipe: RecipeInterface): Promise<RecipeInterface> {
    const db = await super.openDb();
    recipe.id = getRandomInt();
    db.recipes.push(recipe);
    await super.saveDb(db);

    return recipe;
  }
}