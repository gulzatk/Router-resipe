import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../models/recipe.model';
import { MyServices } from '../services/my-services';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeId: number = null;
  recipe: Recipe = null;

  constructor(private myServices: MyServices, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.recipeId = parseInt(urlParameters['id']);
    });

    this.recipe = this.myServices.getRecipe(this.recipeId);
  }
}
