import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../models/models';
@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: Task[], filterBy: string): Task[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((task: Task) =>
      (task.title||'').toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
