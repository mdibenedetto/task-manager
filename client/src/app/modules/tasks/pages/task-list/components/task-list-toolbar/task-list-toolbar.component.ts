import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'task-list-toolbar',
  templateUrl: './task-list-toolbar.component.html',
  styleUrls: ['./task-list-toolbar.component.css'],
  styles: [':host{ display:block }']
})
export class TaskListToolbarComponent {

  @Output() onDelete = new EventEmitter();
  @Output() onSearch = new EventEmitter();
  @Input() selectedId = -1;

  delete(): void {
    this.onDelete.emit();
  }

  search(): void {
    this.onSearch.emit();
  }
}
