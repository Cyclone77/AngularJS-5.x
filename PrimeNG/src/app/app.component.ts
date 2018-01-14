import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { TreeModule, TreeNode } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeData: TreeNode[];

  date: Date;

  dataList = [{
      name: 'a0101',
      sys: false
  }, {
    name: 'a0102',
    sys: true
},{
    name: 'a0103',
    sys: false
},{
    name: 'a0104',
    sys: true
}];

  ngOnInit() {
    this.date = new Date();
    this.treeData = [
      {
          "label": "Documents",
          "data": "Documents Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [{
                  "label": "Work",
                  "data": "Work Folder",
                  "expandedIcon": "fa-folder-open",
                  "collapsedIcon": "fa-folder",
                  "children": [{"label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document"}]
              },
              {
                  "label": "Home",
                  "data": "Home Folder",
                  "expandedIcon": "fa-folder-open",
                  "collapsedIcon": "fa-folder",
                  "children": [{"label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month"}]
              }]
      },
      {
          "label": "Pictures",
          "data": "Pictures Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [
              {"label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo"},
              {"label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo"},
              {"label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo"}]
      },
      {
          "label": "Movies",
          "data": "Movies Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [{
                  "label": "Al Pacino",
                  "data": "Pacino Movies",
                  "children": [{"label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie"}]
              },
              {
                  "label": "Robert De Niro",
                  "data": "De Niro Movies",
                  "children": [{"label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie"}]
              }]
      }
    ];
  }
}
