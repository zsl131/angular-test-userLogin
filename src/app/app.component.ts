import {Component, OnInit} from '@angular/core';
import 'Rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  title = 'app';

  constructor(
    ) {

  }

}
