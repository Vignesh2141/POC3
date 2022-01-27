import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';
import { UpdateComponent } from './update/update.component';
import { UserDisplayComponent } from './user-display/user-display.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"register",component:RegisterComponent},
  {path:"search",component:SearchComponent},
  {path:"display",component:UserDisplayComponent},
  {path:"sort",component:SortComponent},
  {path:"update/:id",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
