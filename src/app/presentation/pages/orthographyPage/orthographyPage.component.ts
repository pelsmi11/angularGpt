import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent } from '../../components/chat-bubble/chatMessage/chatMessage.component';
import { MyMessageComponent } from '../../components/chat-bubble/MyMessage/MyMessage.component';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [CommonModule, ChatMessageComponent, MyMessageComponent],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {}
