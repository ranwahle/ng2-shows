import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowService } from 'app/shows/state/show.service';
import { ROUTING } from 'app/shows/shows.routing';
import { ShowListComponent } from 'app/shows/show-list/show-list.component';
import { ShowDetailsComponent } from 'app/shows/show-details/show-details.component';
import { SearchComponent } from 'app/shows/search/search.component';
import { ShowsCommonModule } from 'app/common/common.module';
import { MobxAngularModule } from 'mobx-angular';
import { NgPipesModule } from 'ngx-pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowActivator } from 'app/resolvers/show.activator';
import { ShowResolver } from 'app/shows/resolvers/show.resolver';


@NgModule({
    imports: [
        CommonModule,
        ROUTING,
        ShowsCommonModule,
        MobxAngularModule,
        NgPipesModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ ShowService, ShowActivator, ShowResolver ],
    declarations: [ ShowListComponent, ShowDetailsComponent, SearchComponent ]
})
export class ShowsModule {
}
