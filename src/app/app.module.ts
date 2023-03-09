import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ConvertPipe } from './convert.pipe';
import { ClassDirective } from './class.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ConvertPipe,
    ClassDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
