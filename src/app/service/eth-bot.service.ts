import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Observer } from 'rxjs';

import { ISoketEvent } from '../store/config';



@Injectable({
  providedIn: 'root'
})
export class EthBotService {

  private wsUtl = 'ws://localhost:8999';
  private ws: WebSocket;
  private subject: Subject<MessageEvent>;
  private redux: Observable<ISoketEvent> = this.store.select('etherStore');

  constructor(private store: Store<ISoketEvent>) {
    this.connect(this.wsUtl).subscribe(event => {
      if (!event.data) {
        return null;
      }

      console.log(event);

      const data: ISoketEvent = JSON.parse(event.data);

      if (data.code || data.error) {
        return null;
      }

      this.store.dispatch({
        type: data.type.toString(),
        body: data.body
      });
    });

    this.onSendEvent();
  }

  private connect(url): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }

    return this.subject;
  }

  private create(url): Subject<MessageEvent> {
    this.ws = new WebSocket(url);

    const observable = Observable.create((obs: Observer<MessageEvent>) => {
      this.ws.onmessage = obs.next.bind(obs);
      this.ws.onerror = obs.error.bind(obs);
      this.ws.onclose = obs.complete.bind(obs);

      return this.ws.close.bind(this.ws);
    });

    const observer = {
      next: (data: Object) => {
        if (this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(JSON.stringify(data));
        }
      }
    };

    return Subject.create(observer, observable);
  }

  private onSendEvent() {
    this.redux.subscribe(dispatchEvent => {
      if (!dispatchEvent) {
        return null;
      }

      const dataSerialization = JSON.stringify({
        type: +dispatchEvent.type,
        body: dispatchEvent.body
      });

      this.ws.send(dataSerialization);
    });
  }

}
