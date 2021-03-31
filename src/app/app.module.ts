import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';
import { DefaultContainerComponent } from './default/default-container/default-container.component';
import { DefaultComponent } from './default/default.component';
import { OnpushContainerComponent } from './onpush/onpush-container/onpush-container.component';
import { OnpushComponent } from './onpush/onpush.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    OnpushComponent,
    OnpushContainerComponent,
    DefaultContainerComponent,
    ControlsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
