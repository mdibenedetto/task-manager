import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: string[] = [];
  isDisplayed = false;

  addMessage(message: string): void {
    const currentDate = new Date();
    this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
  }
}
