import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/core';
const routes: Routes = [
  { path: '', redirectTo: 'lista-ex/ex1', pathMatch: 'full' },
  {
    path: 'lista-ex',
    loadChildren: () => import('./lista-ex/lista-ex-module').then(m => m.ListaExModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
