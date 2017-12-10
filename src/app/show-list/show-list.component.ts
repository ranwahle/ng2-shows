import {Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import {ShowListService} from './show-list.service';
import {Observable} from 'rxjs/observable';
import {Subscription} from 'rxjs/Rx';


@Component({
  selector: 'app-show-list',
  templateUrl: 'show-list.component.html',
  styleUrls: ['show-list.component.scss']
})
export class ShowListComponent implements OnInit, OnDestroy {
  shows$: Observable< any[]>;
  shows: any[];
  private componentSubscriptions: Subscription;

  ngOnDestroy() {
      if (this.componentSubscriptions) {
          this.componentSubscriptions.unsubscribe();
      }
  }

  ngOnInit() {
      this.shows$ = this.showList.shows;
      // this.cd.detectChanges()
     this.componentSubscriptions = this.shows$.subscribe(shows => this.shows = shows);
  }

  constructor(private showList: ShowListService, private cd: ChangeDetectorRef) {
 //   this.shows = data.map(item => item.show);
  }

  navigate(show) {
      console.log(`selected show: ${show.name}`);
  }

}
