import { Recipe } from '../models/recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MyServices } from '../services/my-services';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})

export class EditRecipeComponent implements OnInit{
  recipeId: number = null;
  recipe: Recipe = null;

  constructor(private myServices: MyServices, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.recipeId = parseInt(urlParameters['id']);
    });

 
  }

}
