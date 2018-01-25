import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { ComponentLoaderFactory } from './../loader-factory';

@NgModule({
  imports: [CommonModule],
  declarations: [MessageComponent],
  providers: [MessageService, ComponentLoaderFactory],
  entryComponents: [MessageComponent],
  exports: [MessageComponent]
})
export class MessageModule {
}
