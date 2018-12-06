import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes.ts';

import {BalanceModule} from './balance/index.ts';
import {TopupModule} from './topup/index.ts';
import {LinksModule} from './links/index.ts';

import {MainComponent} from './main.ts';
import {HeaderComponent} from './header.ts';
import {FooterComponent} from './footer.ts';

@NgModule({
  imports: [
    BrowserModule,
    BalanceModule,
    TopupModule,
    LinksModule,
    routing,
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
