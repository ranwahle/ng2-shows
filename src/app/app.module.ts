import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { ShowsCommonModule } from './common/common.module';
import { ShowResolver } from './shows/resolvers/show.resolver';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import { ShowActivator } from './resolvers/show.activator';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
    declarations: [
        AppComponent,
        ActorDetailsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        MobxAngularModule,
        NgPipesModule,
        ShowsCommonModule,
        ROUTING
    ],

    bootstrap: [ AppComponent ]
})
export class AppModule {
}
