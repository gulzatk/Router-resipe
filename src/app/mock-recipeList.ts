import { Recipe } from './models/recipe.model';

  export const masterRecipeList: Recipe[] = [
    new Recipe('Apple Pie', ['1/2 cup sugar',
       '1/2 cup packed brown sugar',
       '3 ts flour',
       '1 ts ground cinnamon',
       '1/4 ts ground ginger',
       '1/4 ts ground nutmeg'], 'In a small bowl, combine the sugars, flour and spices; set aside. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat. Line a 9-in. pie plate with bottom crust; trim even with edge. Fill with apple mixture; dot with butter. Roll remaining crust to fit top of pie; place over filling. Trim, seal and flute edges. Cut slits in crust. Beat egg white until foamy; brush over crust. Sprinkle with sugar. Cover edges loosely with foil. Bake at 375° for 25 minutes. Remove foil and bake until crust is golden brown and filling is bubbly, 20-25 minutes longer. Cool on a wire rack.', './assets/images/pie.jpg'),

    new Recipe('Banana Bread', ['2 cups flour','1 ts baking soda','1/4 ts salt','1/2 cup butter', '3/4 cup brown sugar','2 eggs, beaten','2 1/3 cups mashed overripe bananas'], 'Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x5 inch loaf pan. In a large bowl, combine flour, baking soda and salt. In a separate bowl, cream together butter and brown sugar. Stir in eggs and mashed bananas until well blended. Stir banana mixture into flour mixture; stir just to moisten. Pour batter into prepared loaf pan. Bake in preheated oven for 60 to 65 minutes, until a toothpick inserted into center of the loaf comes out clean. Let bread cool in pan for 10 minutes, then turn out onto a wire rack.', './assets/images/banana-bread.jpg')
  ];