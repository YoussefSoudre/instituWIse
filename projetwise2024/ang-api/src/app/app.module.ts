import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsService } from './contacts.service';
import { AuthModule } from './components/auth/auth.module';
import { LayoutComponent } from './component/layout/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ FormsModule} from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ContactsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
