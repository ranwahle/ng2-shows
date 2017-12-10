import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowsOrchestrator } from '../state/shows.orchestrator';
import { TopBarOrchestrator } from '../../state/top-bar/top-bar.orchestrator';

@Component({
    selector: 'show',
    templateUrl: 'show-list.component.html',
    styleUrls: [ 'show-list.component.scss' ],
})
export class ShowListComponent implements OnInit {

    tempSearch: string;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private showOrchestrator: ShowsOrchestrator,
                private topBarOrchestrator: TopBarOrchestrator) {
    }

    ngOnInit() {
        if (this.topBarOrchestrator.store.criteria !== '') {
            this.showOrchestrator.getShows(this.topBarOrchestrator.store.criteria);
        }
    }

    navigate(show: any) {

        this.router.navigate(
            [ 'show', show.id ],
            {relativeTo: this.activatedRoute});
    }

    doSearch() {
        this.topBarOrchestrator.store.setIsBlocked(false);
        this.showOrchestrator.getShows(this.topBarOrchestrator.store.criteria);
    }

    setLoggedIn(state) {
        this.topBarOrchestrator.store.setLoggedInState(state);
    }
}
