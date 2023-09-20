import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlumerVidComponent } from './blumer-vid/blumer-vid.component';
import { HlsComponent } from './hls/hls.component';

@NgModule({
  declarations: [
    AppComponent,
    BlumerVidComponent,
    HlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
