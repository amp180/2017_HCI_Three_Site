import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { TabsComponent } from './tabs.component.ts';
import { CardFormComponent } from './cardform.component.ts';
import { CodeFormComponent } from './codeform.component.ts';

@NgModule({
  imports: [
      CommonModule,
  ],
  declarations: [
    TabsComponent,
    CardFormComponent,
    CodeFormComponent,
  ],
  exports: [
    TabsComponent,
    CardFormComponent,
    CodeFormComponent,
  ]
})
export class TopupModule {}
