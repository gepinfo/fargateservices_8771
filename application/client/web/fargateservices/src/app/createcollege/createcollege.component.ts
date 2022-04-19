import { Component, OnInit } from '@angular/core';
import { CreatecollegeService } from './createcollege.service';

@Component({
  selector: 'app-createcollege',
  templateUrl: './createcollege.component.html',
  styleUrls: ['./createcollege.component.scss'],
})

export class CreatecollegeComponent implements OnInit {
    public collegedetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
        age: '',
    }

    constructor (
        private createcollegeService: CreatecollegeService,
    ) { }

    ngOnInit() {
        this.collegedetails.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createcollegeService.GpCreate(this.collegedetails).subscribe(data => {
            this.collegedetails.name = ''
 	 	this.collegedetails.email = ''
 	 	this.collegedetails.age = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}