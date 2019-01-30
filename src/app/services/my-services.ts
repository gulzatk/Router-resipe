import { Recipe } from '../models/recipe.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';


@Injectable()
export class MyServices {
  recipes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase){ 
  this.recipes = database.list('recipes');
  }

  getRecipe() {
    return this.recipes;
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
  }
  getRecipeById(recipeId: string){
    return this.database.object('recipes/' + recipeId)
  }

}

