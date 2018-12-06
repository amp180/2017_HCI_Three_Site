import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {LinksComponent} from './links.component.ts';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    LinksComponent,
  ],
  exports: [
    LinksComponent,
  ]
})
export class LinksModule {}
