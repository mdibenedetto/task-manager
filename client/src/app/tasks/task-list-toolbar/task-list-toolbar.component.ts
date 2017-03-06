import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-list-toolbar',
  templateUrl: './task-list-toolbar.component.html',
  styleUrls: ['./task-list-toolbar.component.css'],
  styles: [':host{display:block}']
})
export class TaskListToolbarComponent {
  @Output() onDelete = new EventEmitter();
  @Output() onSearch = new EventEmitter();
  @Input() selectedId: number = -1;
  delete() {
    this.onDelete.emit();
  }
  search() {
    this.onSearch.emit();
  }
}
