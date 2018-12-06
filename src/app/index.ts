import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {BalanceModule} from './balance';
import {TopupModule} from './topup';
import {LinksModule} from './links';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    BalanceModule,
    TopupModule,
    LinksModule,
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
