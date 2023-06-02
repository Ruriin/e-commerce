import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorefrontRoutingModule } from './storefront-routing.module';
import { StorefrontComponent } from './storefront.component';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [StorefrontComponent],
  imports: [
    CommonModule,
    StorefrontRoutingModule,
    DividerModule,
  ]
})
export class StorefrontModule { }
