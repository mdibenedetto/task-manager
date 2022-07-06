import { InMemoryDbService, ParsedRequestUrl, RequestInfoUtilities } from 'angular-in-memory-web-api';
import { ITask, ITaskType, IUser } from '../../model';
import { getRandomInt } from '../../utilies';

export class MockInMemoryDbService
  implements InMemoryDbService {
  MAX_USERS = 10;

  public parseRequestUrl(url: string, requestInfoUtils: RequestInfoUtilities): ParsedRequestUrl {

    // {apiBase: "api/", collectionName: "access", id: "login", query: Map(0), resourceUrl: "api/access/"}

    const req = requestInfoUtils.parseRequestUrl(url);

    const parsedRequest = (collectionName: string) => (
      {
        apiBase: req.apiBase,
        collectionName,
        id: undefined,
        query: undefined,
        resourceUrl: req.apiBase + collectionName + '/'
      } as unknown as ParsedRequestUrl
    );

    if (req.id === 'login') {
      return parsedRequest('login');
    }
    else if (req.id === 'logout') {
      return parsedRequest('logout');
    }

    return req;
  }


  createDb() {
    const taskTypes = this.createDBTaskTypes();
    const tasks = this.createDBTask();
    const users = this.createDBUsers();
    const { login, logout } = this.createDBAccess(users);

    return { login, logout, tasks, taskTypes, users };
  }

  createDBAccess(users: IUser[]) {
    return {
      login: users,
      logout: [true]
    };
  }

  createDBUsers() {
    const users: IUser[] = [
      {
        id: -1,
        fullName: 'Nick Fury',
        userName: 'admin',
        passWord: 'admin',
        isAdmin: true
      },
      {
        id: 1,
        userName: 'Tony',
        fullName: 'Tony stark',
        passWord: 'dummy',
        isAdmin: false
      },
      {
        id: 2,
        userName: 'Peter',
        fullName: 'Peter Parker',
        passWord: 'dummy',
        isAdmin: false
      }
    ];


    for (let i = users.length; i < this.MAX_USERS; i++) {
      users.push({
        id: i,
        fullName: 'Dummy ' + i,
        userName: 'dummyUser-' + i,
        passWord: 'pwd-' + i,
        isAdmin: false
      });
    }

    return users;
  }

  createDBTask(): ITask[] {
    const tasks: ITask[] = [];
    const startDate = new Date();
    const endDate = new Date();

    for (let id = 1; id < 11; id++) {
      startDate.setDate(startDate.getDate() + id);
      endDate.setDate(endDate.getDate() + id + 1);

      const task: ITask = {
        id,
        title: 'title test - ' + id,
        description: 'description test - ' + id,
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
      { id: 1, description: 'Bug' },
      { id: 2, description: 'Epic' },
      { id: 3, description: 'Story' },
      { id: 4, description: 'Improvement' }
    ];
  }
}
