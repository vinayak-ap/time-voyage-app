import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Operator, FilterOptions } from '../../helper/timeline-event.helper';

@Component({
    selector: 'app-event-filter',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './event-filter.component.html',
    styleUrl: './event-filter.component.css'
})
export class EventFilterComponent {

    filterForm!: FormGroup;
    options: Array<Operator> = [Operator.equal, Operator.before, Operator.after, Operator.between];

    @Output() onsubmit = new EventEmitter<FilterOptions>();

    constructor(private formBuilder: FormBuilder, public modalRef: BsModalRef) { }

    ngOnInit(): void {
        this.filterForm = this.formBuilder.group({
            operator: [Operator.between],
            date: [null, []],
            startDate: [null, [Validators.max(this.filterForm?.get('endDate')?.value)]],
            endDate: [null, [Validators.min(this.filterForm?.get('startDate')?.value)]],
        });
    }

    onSubmit() {
        if (this.filterForm.invalid) {
            return;
        }
        this.closeModal();
        this.onsubmit.emit(this.filterForm.value);
    }

    closeModal() {
        this.modalRef.hide();
    }


    get controls(): { [p: string]: AbstractControl } {
        return this.filterForm.controls;
    }

}
