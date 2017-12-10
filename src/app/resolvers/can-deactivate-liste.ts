import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ShowListComponent } from 'app/shows/show-list/show-list.component';
import { TopBarOrchestrator } from 'app/state/top-bar/top-bar.orchestrator';
import { Injectable } from '@angular/core';

@Injectable()
export class CanDeactivateList implements CanDeactivate<ShowListComponent> {
    canDeactivate(component: ShowListComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

       console.log('criteria', component.tempSearch);
        return !component.tempSearch;
    }

    constructor(private topBarOrchestrator: TopBarOrchestrator) {

    }

}
