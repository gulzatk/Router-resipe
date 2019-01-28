import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RecipeListComponent
  },
  {
    path: 'new',
    component: NewRecipeComponent
  },
  {
    path: 'recipies/:id',
   component: RecipeDetailsComponent
 },
 {
   path: 'edit/:id',
  component: EditRecipeComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
