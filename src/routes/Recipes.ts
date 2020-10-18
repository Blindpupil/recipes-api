import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import RecipeDao from '@daos/Recipes/RecipeDao.mock';
import { paramMissingError, IRequest } from '@shared/constants';
import { IngredientInterface, RecipeInterface } from '@entities/Recipes';


const router = Router();
const recipeDao = new RecipeDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

router.get('/', async (req: Request, res: Response) => {
  const recipes = await recipeDao.index();
  return res.status(OK).json(recipes);
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const recipe = await recipeDao.show(Number(id));
  return res.status(OK).json(recipe);
});

router.post('/', async (req: Request, res: Response) => {
  const { name, duration, ingredients } = req.body;
  if (!name) return res.status(BAD_REQUEST).json({
    error: paramMissingError,
    message: 'Missing name parameter',
  });
  const recipe: RecipeInterface = { id: 0, name, duration, ingredients };
  const createdRecipe:RecipeInterface = await recipeDao.create(recipe);

  return res.status(OK).json(createdRecipe);
});

export default router;