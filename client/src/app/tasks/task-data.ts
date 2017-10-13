import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { ITask } from './task';
import { IUser } from '../user/user';
//

export class TaskData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() { 
        let tasks: ITask[] = []; 
        let startDate = new Date();
        let endDate = new Date();

        for (let _id = 1; _id < 11; _id++){
            startDate.setDate(startDate.getDate() + _id);
            endDate.setDate(endDate.getDate() + _id + 1);

            let task: ITask = {
                id: _id,
                _id: _id,
                title: 'title test - ' + _id,
                description: 'description test - ' + _id,
                startDate: startDate,
                endDate: endDate,
                category: null,
                assigneId:null
            };
            tasks.push(task);
        }
        
        let login: IUser = { userName:'Mario', id:1,isAdmin:false };
        return { tasks, login }; 
    }
}