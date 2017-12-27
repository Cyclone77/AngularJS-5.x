import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { HttpHeaders } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  ELEMENT_DATA: Person[] = [];
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'option'];
  dataSource = new MatTableDataSource();
  psnData: Person = {} as Person;
  myHttpHead = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loadPsnData();
  }

  loadPsnData() {
    this.http.get('http://192.168.0.140:5000/api/Person').subscribe(data => {
      // Read the result field from the JSON response.
      this.dataSource = new MatTableDataSource<Person>(data as Person[]);
      // console.log(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  addPsnData(form) {
    this.psnData =  {} as Person;
  }

  editData(e, that) {
    Object.assign(this.psnData, that);
  }

  saveData(form) {
    if (this.psnData && this.psnData['PersonID']) {
      this.http.put('http://192.168.0.140:5000/api/Person', JSON.stringify(this.psnData), this.myHttpHead).subscribe(
        data => {
          this.loadPsnData();
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      if (form.value) {
        this.http.post('http://192.168.0.140:5000/api/Person', JSON.stringify(this.psnData), this.myHttpHead).subscribe(
          data => {
            this.loadPsnData();
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
      }
    }
  }

  delData(e, that, form) {
    const id = that.PersonID;
    if (id === '') { return; }
    this.http.delete('http://192.168.0.140:5000/api/Person/' + id, this.myHttpHead).subscribe(
        data => {
          this.loadPsnData();
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }
}

export interface Person {
  A0101: string;
  A0107: string;
  A0177: string;
  DispOrder: number;
  PersonID: string;
}
