import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'lista-ex-2/ex1', pathMatch: 'full' },
  {
    path: 'lista-ex-2',
    loadChildren: () => import('./lista-ex-2/lista-ex-2-module').then(m => m.ListaEx2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
