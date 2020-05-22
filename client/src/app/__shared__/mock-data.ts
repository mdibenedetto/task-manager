import {
  InMemoryDbService,
  InMemoryBackendConfig,
  InMemoryBackendConfigArgs
} from "angular-in-memory-web-api";

import { ITask } from "../modules/tasks/task";
import { IUser } from "../modules/user/user";

export class MockData implements InMemoryDbService, InMemoryBackendConfig {
  createDb() {
    const tasks = this.createDBTask();
    const login = this.createDBLogin();
    const users = this.createDBUsers();
 
    let logout: any[] = [true];

    console.log(tasks);
    return { login, logout, tasks, users };
  }

  createDBUsers() {
    const users: IUser[] = [];

    for (let i = 1; i < 5; i++) {
      users.push({
        id: i,
        fullName: "Dummy " + i,
        userName: "dummyUser-" + i,
        passWord: "pwd-" + i,
        isAdmin: i === 0
      })
    }

    return users;
  }

  createDBLogin(): any {
    let login = [
      { userName: "Mario", passWord: "m", id: 1, isAdmin: false },
      { userName: "Marco", passWord: "m", id: 2, isAdmin: false },
      {
        userName: "admin",
        passWord: "admin",
        id: () => 0,
        isAdmin: false
      }
    ];
    return login;
  }

  createDBTask(): ITask[] {
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
        assigneeId: null
      };
      tasks.push(task);
    }

    return tasks;
  }
}
