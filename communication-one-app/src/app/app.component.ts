import { Component } from '@angular/core';

@Component({
  selector: 'communication-one-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  windowObj = window;
  now: Date = new Date();
  title = 'communication-one-app';
  msg: string = '';
  msgs: Array<string> = [];
  constructor() {
    window.addEventListener('message', this.receiveMessage.bind(this), false);
  }
  receiveMessage(event) {
    if (event.origin !== 'http://localhost:4200') return;
    var data = JSON.parse(event.data);
    if (data.id == 'app2') this.msgs.push(data.message);
  }
  sendMsg() {
    var msg = {
      id: 'app1',
      message: this.msg,
    };
    this.windowObj.postMessage(JSON.stringify(msg), '*');
    this.msg = '';
  }
}
