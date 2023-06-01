import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorefrontComponent } from './storefront.component';

const routes: Routes = [{ path: '', component: StorefrontComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorefrontRoutingModule { }
