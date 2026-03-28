import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ToastPositionType } from '../types/position.type';

@Component({
  selector: 'c-app-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
})
export class CAppToast implements OnInit {
  @Input() text?: string;
  @Input() position: ToastPositionType = 'topCenter';
  @Input() style: Record<string, string> = {};

  @Input() duration = 3000;
  @Input() visible = true;

  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'info';

  ngOnInit() {
    if (this.duration > 0) {
      setTimeout(() => {
        this.visible = false;
      }, this.duration);
    }
  }

  public positionClasses: Record<ToastPositionType, string> = {
    topLeft: 'top-4 left-4',
    topCenter: 'top-4 left-1/2',
    topRight: 'top-4 right-4',

    bottomLeft: 'bottom-4 left-4',
    bottomCenter: 'bottom-4 left-1/2',
    bottomRight: 'bottom-4 right-4',
  };

  public typeClasses = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-black',
  };
}