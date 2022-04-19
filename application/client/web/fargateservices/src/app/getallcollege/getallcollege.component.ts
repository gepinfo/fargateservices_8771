import { Component, OnInit } from '@angular/core';
import { GetallcollegeService } from './getallcollege.service';

@Component({
  selector: 'app-getallcollege',
  templateUrl: './getallcollege.component.html',
  styleUrls: ['./getallcollege.component.scss'],
})

export class GetallcollegeComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'email', field: 'email'  },{ headerName: 'age', field: 'age'  },];
    public collegedetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
        age: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private getallcollegeService: GetallcollegeService,
    ) { }

    ngOnInit() {
        this.collegedetails.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallcollegeService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}