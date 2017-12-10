import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TopBarOrchestrator } from '../state/top-bar/top-bar.orchestrator';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShowActivator implements CanActivate {

    constructor(private topBarOrchestrator: TopBarOrchestrator) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | boolean {

        this.topBarOrchestrator.store.setIsBlocked(!this.topBarOrchestrator.store.isLoggedIn);
         const result = this.topBarOrchestrator.store.isLoggedIn;

         console.log('can activate', result);
        return result;
    }

}
