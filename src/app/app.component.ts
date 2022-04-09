import { Component, ViewContainerRef } from '@angular/core';
import { DialogService } from './shared/services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private dialogService: DialogService
  ) {
    this.dialogService.init(this.viewContainerRef);
  }
}
