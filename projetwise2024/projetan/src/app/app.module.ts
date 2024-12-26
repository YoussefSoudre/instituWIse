import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { BarNavigationComponent } from './bar-navigation/bar-navigation.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListeComponent,
    DetailsComponent,
    BarNavigationComponent,
    PageNotFoundComponentComponent,
    AjouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
