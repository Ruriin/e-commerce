import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    DividerModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
