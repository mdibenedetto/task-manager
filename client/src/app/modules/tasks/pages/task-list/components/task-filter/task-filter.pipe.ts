import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../../../../../../__shared__/model/task';
@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: ITask[], filterBy: string): ITask[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((task: ITask) =>
      (task.title||'').toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
