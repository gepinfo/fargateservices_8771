import { Component, OnInit } from '@angular/core';
import { GetallstudentService } from './getallstudent.service';

@Component({
  selector: 'app-getallstudent',
  templateUrl: './getallstudent.component.html',
  styleUrls: ['./getallstudent.component.scss'],
})

export class GetallstudentComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'age', field: 'age'  },];
    public studentdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        age: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private getallstudentService: GetallstudentService,
    ) { }

    ngOnInit() {
        this.studentdetails.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallstudentService.GpGetAllValues().subscribe(data => {
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