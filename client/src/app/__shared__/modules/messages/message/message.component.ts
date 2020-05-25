import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../message-service/message.service';

@Component({
    templateUrl:'./message.component.html',
    styles: [
        '.message-row { margin-bottom: 10px }'
    ]
})
export class MessageComponent {

    constructor(public messageService: MessageService,
        private router: Router) { }

    close(): void { 
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    }
}
