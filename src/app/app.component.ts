import {Component} from '@angular/core';
import {Router} from '@angular/router';
// import {useStrict} from 'mobx';

// useStrict(true);

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    constructor(private router: Router) {
    }

}
