import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'communication-two-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'communication-two-app';
  now: Date = new Date();
  msg: string = '';
  ReceivedMsg: string = 'DEMO';
  msgs: Array<string> = [];
  windowObj = window;
  constructor() {
    window.addEventListener('message', this.receiveMessage.bind(this), false);
  }
  receiveMessage(event) {
    if (event.origin !== 'http://localhost:4200') return;
    var data = JSON.parse(event.data);
    if (data.id == 'app1') this.msgs.push(data.message);
  }
  sendMsg() {
    var msg = {
      id: 'app2',
      message: this.msg,
    };
    this.windowObj.postMessage(JSON.stringify(msg), '*');
    this.msg = '';
  }
}
