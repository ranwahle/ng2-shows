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
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ROUTING,
        ShowsCommonModule,
        MobxAngularModule,
        NgPipesModule,
        FormsModule
    ],
    providers: [ ShowService ],
    declarations: [ShowListComponent, ShowDetailsComponent, SearchComponent]
})
export class ShowsModule {
}
