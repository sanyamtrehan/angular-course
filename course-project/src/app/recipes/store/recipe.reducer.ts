import { Recipe } from '../recipe.model';
import { FETCH_RECIPES, RecipeActions, SET_RECIPES } from './recipe.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [],
};

export function recipeReducer(
  state = initialState,
  action: RecipeActions
): State {
  switch (action.type) {
    case SET_RECIPES: {
      return { ...state, recipes: [...action.payload] };
    }
    case FETCH_RECIPES: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
