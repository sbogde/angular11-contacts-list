import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular11-contacts-list';
  rows = [...Array(10).keys()];

  ngOnInit(){
    console.log(this.rows)
  }
}
