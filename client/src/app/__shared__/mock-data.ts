import {
  InMemoryDbService,
  InMemoryBackendConfig,
  InMemoryBackendConfigArgs
} from "angular-in-memory-web-api";

import { getRandomInt } from './utilies';

import { ITask, ITaskType } from "./model/task";
import { IUser } from "./model/user";

export class MockData
  implements InMemoryDbService, InMemoryBackendConfig {

  MAX_USERS = 10;

  createDb() {
    const taskTypes = this.createDBTaskTypes();
    const tasks = this.createDBTask();
    const users = this.createDBUsers();
    const access = this.createDBAccess(users);

    return { access, tasks, taskTypes, users };
  }
  createDBAccess(users) {
    return [
      {
        login: users
      },
      {
        id: "logout",
        logout: [true]
      }
    ]
  }

  createDBUsers() {
    const users: IUser[] = [
      {
        id: -1,
        fullName: "Nick Fury",
        userName: "admin",
        passWord: "admin",
        isAdmin: true
      },
      {
        id: 1,
        userName: "Tony",
        fullName: "Tony stark",
        passWord: "dummy",
        isAdmin: false
      },
      {
        id: 2,
        userName: "Peter",
        fullName: "Peter Parker",
        passWord: "dummy",
        isAdmin: false
      }
    ];


    for (let i = users.length; i < this.MAX_USERS; i++) {
      users.push({
        id: i,
        fullName: "Dummy " + i,
        userName: "dummyUser-" + i,
        passWord: "pwd-" + i,
        isAdmin: false
      })
    }

    return users;
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
        categoryId: getRandomInt(0, 4),
        assigneeId: getRandomInt(1, this.MAX_USERS)
      };
      tasks.push(task);
    }

    return tasks;
  }

  createDBTaskTypes(): ITaskType[] {
    return [
      { id: 1, description: "Bug" },
      { id: 2, description: "Epic" },
      { id: 3, description: "Story" },
      { id: 4, description: "Improvement" }
    ];
  }
}
