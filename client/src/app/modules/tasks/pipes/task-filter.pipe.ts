import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from 'src/app/__shared__/model';
@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: ITask[], filterBy: string): ITask[] {

    const filterValue = filterBy
      ? filterBy.toLocaleLowerCase()
      : null

    return filterValue
      ? value.filter((task: ITask) =>
        (task.title || '').toLocaleLowerCase().indexOf(filterValue) !== -1)
      : value;
  }

}
