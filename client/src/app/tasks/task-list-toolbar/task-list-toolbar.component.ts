import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task-list-toolbar',
  templateUrl: './task-list-toolbar.component.html',
  styleUrls: ['./task-list-toolbar.component.css'],
  styles: [':host{display:block}']
})
export class TaskListToolbarComponent implements OnInit {
  @Input() selectedRow: number = -1;
  @Input() selectedId: number = -1;
  
  
  constructor() {}

  ngOnInit() {}

}
