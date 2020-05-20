import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    public messages: string[] = [];
    isDisplayed = false;

    addMessage(message: string): void {
        let currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }
}
