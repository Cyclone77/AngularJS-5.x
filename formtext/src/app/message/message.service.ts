import { Injectable, Injector } from '@angular/core';
import { ComponentLoaderFactory } from './../loader-factory';
import { MessageComponent } from './message.component';
import { ComponentLoader } from './../component-loader';

@Injectable()
export class MessageService {
  constructor(
    private _clf: ComponentLoaderFactory,
    private _injector: Injector
  ) {
    this.loader = this._clf.create<MessageComponent>();
  }
  private loader: ComponentLoader<MessageComponent>;
  private createMessage(t, c, duration = 2000) {
    const msg = this.loader.attch(MessageComponent).to('body');
    const opts = {
      msgType: t,
      payload: c
    };

    const ref = this.loader.create(opts);
    ref.instance.show();
    ref.changeDetectorRef.markForCheck();
    ref.changeDetectorRef.detectChanges();

    const self = this;
    const timer = setTimeout(() => {
      self.loader.remove(ref);
      clearTimeout(timer);
    }, duration);
  }
  public info(payload, duration?) {
    this.createMessage('info', payload, duration);
  }
  public success(payload, duration?) {
    this.createMessage('success', payload, duration);
  }
  public error(payload, duration?) {
    this.createMessage('error', payload, duration);
  }
  public warning(payload, duration?) {
    this.createMessage('warning', payload, duration);
  }
}
