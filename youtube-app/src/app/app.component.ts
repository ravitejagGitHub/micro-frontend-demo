import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'youtube-app';
  apiKey: string = 'AIzaSyBCnKXDJl3SLRxPj3ib1WH0s2U6hxM8rdY';
  searchData: string = 'trend';
  maxResult: any = 10;
  items: any;
  getData() {
    return this.http.get(
      `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=${this.maxResult}&q=${this.searchData}`
    );
  }
  fetchData() {
    if (this.searchData != null)
      this.getData().subscribe((data) => {
        console.log(data);
        this.items = data['items'];
      });
  }
  ngOnInit() {
    this.fetchData();
    this.searchData = null;
  }
}
