import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modulesyntax',
  templateUrl: './modulesyntax.component.html',
  styleUrls: ['./modulesyntax.component.css']
})
export class ModulesyntaxComponent implements OnInit {
  isUnchanged = false;
  isSpecial = this.isUnchanged;
  hover = '鼠标提示效果';
  help = '测试attr';
  currentHero = {
    name: 'Mgsio'
  };
  constructor() { }

  ngOnInit() {
  }

  getVal() {
    return 2;
  }

  showmsg(e) {
    console.log('显示信息');
  }

  onSave(e) {
    console.log('执行了保存方法');
  }
}
