import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowsOrchestrator } from '../state/shows.orchestrator';
import { ActorOrchestrator } from '../../state/actors/actor.orchestrator';

@Component({
    selector: 'show-details',
    templateUrl: 'show-details.component.html',
    styleUrls: [ 'show-details.component.scss' ]
})
export class ShowDetailsComponent {

    constructor(private router: Router, private activatedRoute: ActivatedRoute,
                public showOrchestrator: ShowsOrchestrator,
                private actorOrchestrator: ActorOrchestrator) {
         this.activatedRoute.params.subscribe(params => {
             console.log('show id', params['id']);
         } )
    }

    navigate(castMember: any) {
        this.actorOrchestrator.store.setActor(castMember.person);
        this.router.navigate([ 'actor', castMember.person.id ]);
    }
}
