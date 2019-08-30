import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Recipe-Soup-Noodle-Curried-Spicy-Chicken-Khaosoi-2344152.jpg',
      [
        new Ingredient('Stuff', 1),
        new Ingredient('Other Stuff', 2)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is simply another test',
      'https://www.maxpixel.net/static/photo/1x/Burger-Bbq-Bun-Barbeque-Hamburger-Beef-1238246',
      [
        new Ingredient('Things', 3),
        new Ingredient('Other Things', 7000)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}