import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ConvertPipe } from './convert.pipe';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';
import { ElementsModule } from './elements/elements.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ConvertPipe,
    ClassDirective,
    TimesDirective,
  ],
  imports: [BrowserModule, ElementsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
