import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from './app-routing-module';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaEx2 } from './lista-ex-2/lista-ex-2';

@NgModule({
  declarations: [App, ListaEx2],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
