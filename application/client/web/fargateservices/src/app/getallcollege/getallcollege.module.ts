import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetallcollegeComponent } from './getallcollege.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        AgGridModule,
        RouterModule.forChild([
            { path: '', component: GetallcollegeComponent },
        ])
    ],
    declarations: [
        GetallcollegeComponent,
    ]
})
export class GetallcollegeModule { }