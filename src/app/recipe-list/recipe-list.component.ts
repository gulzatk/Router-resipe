import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { MyServices } from '../services/my-services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit {
  childRecipeList: Recipe[];

  constructor(private myServices: MyServices, private router: Router) {}

  edit(recipe: Recipe) {
    this.router.navigate(['edit', recipe.id]);
  }

  ngOnInit() {
    this.childRecipeList = this.myServices.listRecipies();
  }

    details(recipe: Recipe) {
      this.router.navigate(['recipies', recipe.id]);
    }
}
