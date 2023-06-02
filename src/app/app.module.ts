import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RippleModule } from 'primeng/ripple';
import { LayoutModule } from './components/layout/layout.module';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RippleModule,
    LayoutModule,
    StyleClassModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
