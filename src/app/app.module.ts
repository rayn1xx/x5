import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoReelsComponent } from './components/video-reels/video-reels.component';
import { ScenarioCardComponent } from './components/scenario-card/scenario-card.component';
import { ComboSetsComponent } from './components/combo-sets/combo-sets.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { CartComponent } from './components/cart/cart.component';
import { X5ReadyServiceComponent } from './components/x5-ready-service/x5-ready-service.component';
import { PersonalizationComponent } from './components/personalization/personalization.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutModalComponent } from './components/checkout-modal/checkout-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoReelsComponent,
    ScenarioCardComponent,
    ComboSetsComponent,
    SubscriptionComponent,
    CartComponent,
    X5ReadyServiceComponent,
    PersonalizationComponent,
    FooterComponent,
    CheckoutModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
