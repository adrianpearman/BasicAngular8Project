import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { RecipelistComponent } from './components/recipes/recipelist/recipelist.component';
import { RecipelistitemComponent } from './components/recipes/recipelist/recipelistitem/recipelistitem.component';
import { ShoppinglistitemComponent } from './components/shoppinglist/shoppinglistitem/shoppinglistitem.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingeditComponent } from './components/shoppingedit/shoppingedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    RecipelistComponent,
    RecipelistitemComponent,
    ShoppinglistitemComponent,
    RecipesComponent,
    ShoppingeditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
