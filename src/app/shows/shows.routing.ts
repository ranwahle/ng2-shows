import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowListComponent } from 'app/shows/show-list/show-list.component';
import { ShowDetailsComponent } from 'app/shows/show-details/show-details.component';
import { ShowResolver } from 'app/shows/resolvers/show.resolver';
import { ShowActivator } from 'app/resolvers/show.activator';
import { CanDeactivateList } from 'app/resolvers/can-deactivate-liste';


const routes: Routes = [
    {
        path: '',
        canDeactivate: [ CanDeactivateList ],
        component: ShowListComponent,
        children: [ {
            path: 'show/:showId',
            component: ShowDetailsComponent,
            canActivate: [ ShowActivator ],
            resolve: {
                show: ShowResolver
            }
        } ]
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
