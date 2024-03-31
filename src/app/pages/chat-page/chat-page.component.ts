import { Component, inject } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { NgIf, NgForOf, AsyncPipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, AsyncPipe, FormsModule, JsonPipe],
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent {
  chatService = inject(ChatService);
  messages$ = this.chatService.loadMessages();
  user$ = this.chatService.user$;
  text = '';

  constructor() {
    this.messages$.subscribe(m => console.log(m));
  }

  sendTextMessage() {
    this.chatService.saveTextMessage(this.text);
    this.text = '';
  }

  uploadImage(event: any) {
    const imgFile: File = event.target.files[0];
    if (!imgFile) {
      return;
    }
    this.chatService.saveImageMessage(imgFile);
  }
}