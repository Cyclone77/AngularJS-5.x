import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watchtext',
  templateUrl: './watchtext.component.html',
  styleUrls: ['./watchtext.component.css']
})
export class WatchtextComponent implements OnInit {
  private _name = '';

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this._name; }
  constructor() { }

  ngOnInit() {
  }

}
