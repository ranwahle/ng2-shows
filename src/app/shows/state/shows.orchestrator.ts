import { Injectable } from '@angular/core';
import { ShowStore } from './shows.store';
import { ShowService } from './show.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ShowsOrchestrator {

    constructor(public store: ShowStore,
                public dataService: ShowService) {

    }

    getShows(name: string) {
        this.dataService.getShows(name)
            .subscribe(shows => this.store.setShows(shows));
    }

    getShowById(showId: number): Observable<any> {
        if (this.store.currentShow.id === showId) {
            return Observable.of(this.store.currentShow);
        }

        const showObservable = this.dataService.getShowById(showId);

        return showObservable.map(show => {
            this.store.setCurrentShow(show);
            return show;
        });
    }


}
