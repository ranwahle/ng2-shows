import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';
import { ActorDetailsComponent } from './actor-details/actor-details.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'showlist', pathMatch: 'full'},
    {
        path: 'showlist',
        loadChildren: './shows/shows.module#ShowsModule'

    },
    {
        path: 'show/:id',
        loadChildren: './shows/shows.module#ShowsModule'
    },
    {
        path: 'actor/:id',
        component: ActorDetailsComponent
    },
    {
        path: '**',
        redirectTo: 'showlist'
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
