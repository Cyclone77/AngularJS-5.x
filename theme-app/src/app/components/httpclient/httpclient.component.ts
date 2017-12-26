import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {

  results: any;
  txtA0101: string;
  txtA0177: string;
  isShow: boolean;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  getData() {
    this.isShow = true;
    this.http.get('http://192.168.0.140:5000/api/Person/0070E8015F624BD092B0B5E461A3601C').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      setTimeout(() => {
        this.bindData();
      }, 1000);
    });
  }

  bindData() {
    this.txtA0101 = this.results.A0101;
    this.txtA0177 = this.results.A0177;
    this.isShow = false;
  }

}
