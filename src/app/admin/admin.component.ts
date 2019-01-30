import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { MyServices } from '../services/my-services';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MyServices]
})
export class AdminComponent implements OnInit {

  constructor(private myServices: MyServices) { }

  ngOnInit() {
  }

  submitForm(title: string, ingredients: string, direction: string) {
    var newRecipe: Recipe = new Recipe(title, [ingredients], direction, "");
    this.myServices.addRecipe(newRecipe);
  }

}
