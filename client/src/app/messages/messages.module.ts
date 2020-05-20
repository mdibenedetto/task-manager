import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message-service/message.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup'
      }
    ])
  ],
  declarations: [MessageComponent],
  providers: [MessageService]
})
export class MessagesModule { }
