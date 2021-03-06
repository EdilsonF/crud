import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './pages/header/header.component';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { EditComponent } from './pages/pessoas/edit/edit.component';
import { ListComponent } from './pages/pessoas/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
