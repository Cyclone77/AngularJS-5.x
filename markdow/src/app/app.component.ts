import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('container') containerEl;

  onlinePrint() {
    const NONE = 'none',
          win = window;
    const chart = { isPrinting: false },
      container = this.containerEl.nativeElement,
      origDisplay = [],
      origParent = container.parentNode,
      body = document.body,
      childNodes = body.childNodes;

    chart.isPrinting = true;
    Array.prototype.forEach.call(childNodes, function (node, i) {
      if (node.nodeType === 1) {
        origDisplay[i] = node.style.display;
        node.style.display = NONE;
      }
    });
    // pull out the chart
    body.appendChild(container);
    // print
    win.focus();
    win.print();

    // allow the browser to prepare before reverting
    setTimeout(function () {

      // put the chart back in
      origParent.appendChild(container);

      // restore all body content
      Array.prototype.forEach.call(childNodes, function (node, i) {
        if (node.nodeType === 1) {
          node.style.display = origDisplay[i];
        }
      });

      chart.isPrinting = false;

    }, 500);
  }
}
