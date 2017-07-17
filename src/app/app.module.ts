import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
