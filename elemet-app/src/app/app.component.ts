import { Component, Inject, forwardRef } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  value: string;
  foods = [
    { value: '选项1', label: '黄金糕' },
    { value: '选项2', label: '双皮奶' },
    { disabled: true, value: '选项3', label: '蚵仔煎' },
    { value: '选项4', label: '龙须面' },
    { value: '选项5', label: '北京烤鸭' }
  ];

  constructor(
    private router: Router
  ) { }

  clear(): void {
    this.value = null;
  }

  handle(path: string): void {
    this.router.navigate([path]);
  }

}
