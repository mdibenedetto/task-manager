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

    for (let _id = 1; _id < 11; _id++) {
      startDate.setDate(startDate.getDate() + _id);
      endDate.setDate(endDate.getDate() + _id + 1);

      let task: ITask = {
        id: _id,
        _id: _id,
        title: "title test - " + _id,
        description: "description test - " + _id,
        startDate: startDate,
        endDate: endDate,
        category: null,
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
