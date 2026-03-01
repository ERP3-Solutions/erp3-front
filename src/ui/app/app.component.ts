import { AfterViewInit, Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';
import { OverlayService } from './shared/services/overlay.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  public themeService = inject(ThemeService);

  private overlayService = inject(OverlayService);
  @ViewChild('rootOverlay', { read: ViewContainerRef }) _rootOverlay!: ViewContainerRef;

  ngAfterViewInit(): void {
    const overlay = this._rootOverlay;
    if (overlay !== undefined) {
      this.overlayService.setViewContainerRef(overlay);
    }
  }
}
