import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  private tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
  }];
  constructor() { }

  ngOnInit() {
  }

  handle(ref: any): void {
    // console.log(ref.index)
    // console.log(ref.rowData)
    // console.log(ref.innerHTML)
    ref.destroy();
  }

}
