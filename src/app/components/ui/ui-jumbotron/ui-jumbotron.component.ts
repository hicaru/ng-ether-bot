import { Component, OnInit, Input } from '@angular/core';


export interface IJumbotron {
  h1?: string | number;
  p?: string | number;
  hr?: boolean;
  a?: { url: string, p: string | number };
}

@Component({
  selector: 'app-ui-jumbotron',
  templateUrl: './ui-jumbotron.component.html',
  styleUrls: ['./ui-jumbotron.component.scss']
})
export class UiJumbotronComponent implements OnInit {

  @Input() data: IJumbotron;

  constructor() { }

  ngOnInit() {
  }

}
