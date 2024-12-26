import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { BarNavigationComponent } from './bar-navigation/bar-navigation.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AjouterComponent } from './ajouter/ajouter.component';
const routes: Routes = [
  {path: "", component:ListeComponent},
  {path:"details/:id", component:DetailsComponent},
  {path:"ajouter", component:AjouterComponent},
  {path:"**",component:PageNotFoundComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
