import { Component } from '@angular/core';

import { EthBotService } from '../../service/eth-bot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [EthBotService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private ethBot: EthBotService) {
  }
}
