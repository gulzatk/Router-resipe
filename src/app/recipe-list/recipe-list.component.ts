import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { MyServices } from '../services/my-services';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [MyServices]
})
export class RecipeListComponent  implements OnInit {
  recipes: FirebaseListObservable<any[]>;

  constructor(private myServices: MyServices, private router: Router) {}

  edit(recipe: Recipe) {
    // this.router.navigate(['edit', recipe.id]);
  }

  ngOnInit() {
    this.recipes = this.myServices.getRecipe();
  }

    details(clickedRecipe) {
       this.router.navigate(['recipies', clickedRecipe.$key]);
    }

  
}
