import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/pessoas/edit/edit.component';
import { ListComponent } from './pages/pessoas/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/addPessoa', pathMatch: 'full' },
  { path: 'addPessoa', component: EditComponent },
  { path: 'listaPessoa', component: ListComponent }
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
