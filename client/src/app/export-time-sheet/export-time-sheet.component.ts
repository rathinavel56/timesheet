import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-export-time-sheet',
  templateUrl: './export-time-sheet.component.html',
  styleUrls: ['./export-time-sheet.component.scss'],
  animations: [ routerTransition() ]
})
export class ExportTimeSheetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
