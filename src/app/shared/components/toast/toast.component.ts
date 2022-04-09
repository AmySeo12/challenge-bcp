import { Component, TemplateRef } from '@angular/core';
import { DialogComponent } from '../../services/dialog-component.interface';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  host: {'class': 'position-fixed top-0 end-0', 'style': 'bottom: 0'}
})
export class ToastComponent implements DialogComponent {
  data: any;
}
