import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { TopBarOrchestrator } from '../../state/top-bar/top-bar.orchestrator';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TextRangeValidator } from 'app/shows/custom-form-validators';

@Component({
    selector: 'search',
    styleUrls: [ 'search.component.scss' ],
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
    @Input() criteria: string;
    formGroup: FormGroup;

    @Output()
    criteriaChanged: EventEmitter<string> = new EventEmitter<string>();

    constructor(public topBarOrchestrator: TopBarOrchestrator,
                private formBuilder: FormBuilder) {
    }

    get searchHasErrors() : boolean {
        return !!this.formGroup.controls['search'].errors;
    }

    get textRangeErrors() : string{
        return this.formGroup.controls['search'].errors['textRange'];
    }

    get searchErrors() : any {
        return this.formGroup.controls['search'].errors;
    }



    ngOnInit() {
        this.criteria = this.topBarOrchestrator.store.criteria;
        this.formGroup = this.formBuilder.group({
            'search': new FormControl('',
                [ Validators.required, TextRangeValidator(3, 100) ])
        });

    }

    doSearch() {
        if (this.formGroup.valid) {
            this.topBarOrchestrator.store.setCriteria(this.criteria);
            this.criteriaChanged.emit();
        }
    }

}
