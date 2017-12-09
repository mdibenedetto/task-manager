import {
  InMemoryDbService,
  InMemoryBackendConfig,
  InMemoryBackendConfigArgs
} from "angular-in-memory-web-api";

import { ITask } from "../tasks/task";
import { IUser } from "../user/user";

export class MockData implements InMemoryDbService, InMemoryBackendConfig {
  createDb() {
    let tasks: ITask[] = [];
    let startDate = new Date();
    let endDate = new Date();

    for (let id = 1; id < 11; id++) {
      startDate.setDate(startDate.getDate() + id);
      endDate.setDate(endDate.getDate() + id + 1);

      let task: ITask = {
        id,
        title: "title test - " + id,
        description: "description test - " + id,
        startDate,
        endDate,
        categoryId: null,
        assigneId: null
      };
      tasks.push(task);
    }

    let login = [
      { userName: "Mario", passWord: "m", id: 1, isAdmin: false },
      { userName: "Marco", passWord: "m", id: 2, isAdmin: false },
      {
        userName: "admin",
        passWord: "admin",
        id: function () {
          debugger
          return 0;
        },
        isAdmin: false
      }
    ];

    (value, index, array) => {
      return array;
    };

    let logout: any[] = [true];
    console.log(tasks);
    return { login, logout, tasks };
  }
}
