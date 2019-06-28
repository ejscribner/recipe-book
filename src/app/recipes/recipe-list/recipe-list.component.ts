import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This recipe is a test of the app',
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'),
    new Recipe('Test Recipe 2', 'This is another test recipe',
      'https://cdn1.medicalnewstoday.com/content/images/articles/324/324956/close-up-of-a-plate-of-food.jpg')
  ];

  constructor() {
    console.log(this.recipes);
  }

  ngOnInit() {
  }

}
