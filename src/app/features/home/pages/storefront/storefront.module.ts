import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorefrontRoutingModule } from './storefront-routing.module';
import { StorefrontComponent } from './storefront.component';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [StorefrontComponent],
  imports: [
    CommonModule,
    StorefrontRoutingModule,
    RippleModule,
  ]
})
export class StorefrontModule { }
