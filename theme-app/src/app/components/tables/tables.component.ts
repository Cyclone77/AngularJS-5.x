import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { HttpHeaders } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { NgForm } from '../../../../node_modules/_@angular_forms@5.1.2@@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  ELEMENT_DATA: Person[] = [];
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'option'];
  dataSource = new MatTableDataSource();
  psnData = { };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://192.168.0.140:5000/api/Person').subscribe(data => {
      // Read the result field from the JSON response.
      this.dataSource = new MatTableDataSource<Person>(data as Person[]);
      console.log(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  editData(e, that) {
    Object.assign(this.psnData, that);
  }

  saveData() {
    const myHttpHead = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    if (this.psnData && this.psnData['A0101']) {
      this.http.put('https://easy-mock.com/mock/59c37dc2e0dc663341b35a80/example/proxy', JSON.stringify(this.psnData), myHttpHead)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}

export interface Person {
  A0101: string;
  A0107: string;
  A0177: string;
  DispOrder: number;
  PersonID: string;
}
