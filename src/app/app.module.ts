import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component'
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';
import { OrderModule } from 'ngx-order-pipe';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent,
    RegisterComponent,
    SearchComponent,
    SortComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
