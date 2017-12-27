import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indirectives',
  templateUrl: './indirectives.component.html',
  styleUrls: ['./indirectives.component.css']
})
export class IndirectivesComponent implements OnInit {

  isSpecial: boolean;
  canSave: boolean;
  isUnchanged: boolean;
  currentClasses: any;
  constructor(
    xx: number
  ) {
    this.isSpecial = true;
    this.isUnchanged = this.isSpecial;
    this.canSave = this.isSpecial;
    this.currentClasses = {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special':  this.isSpecial
    };
  }

  ngOnInit() { }

}
