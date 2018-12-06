import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { TabsComponent } from './tabs.component';
import { CardFormComponent } from './cardform.component';
import { CodeFormComponent } from './codeform.component';

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
