import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://i.etsystatic.com/10591113/r/il/e614eb/720407533/il_570xN.720407533_cfek.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
