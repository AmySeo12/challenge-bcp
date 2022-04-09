import { ComponentFactoryResolver, Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { DialogComponent } from './dialog-component.interface';
import { DialogConfig } from './dialog-config.interface';


@Injectable({ 
  providedIn: 'root' 
})
export class DialogService {
  viewContainerRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  
  init(viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

  open(component: any, config?: DialogConfig) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<DialogComponent>(component);
    const containerRef = this.viewContainerRef.createComponent(componentFactory)
    if (config?.data) {
      containerRef.instance.data = config.data;
    }
    if (config?.timer) {
      setTimeout(() => {
        this.close()
      }, config.timer);
    }
  }

  close(timer: number = 0) {
    setTimeout(() => {
      this.viewContainerRef.clear();
    }, timer)
  }
}
