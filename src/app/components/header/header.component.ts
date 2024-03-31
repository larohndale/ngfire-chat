import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, NgIf, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  chatService = inject(ChatService);
  user$ = this.chatService.user$;
}
