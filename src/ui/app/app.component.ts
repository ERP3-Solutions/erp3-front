import { AfterViewInit, Component, effect, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';
import { OverlayService } from './shared/services/overlay.service';
import { TranslateService } from './shared/services/translate.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  public themeService = inject(ThemeService);
  private translate = inject(TranslateService);

  private overlayService = inject(OverlayService);
  @ViewChild('rootOverlay', { read: ViewContainerRef }) _rootOverlay!: ViewContainerRef;

  constructor() {
    effect(async () => {
      await this.translate.load('shared');
    })
  }

  ngAfterViewInit(): void {
    const overlay = this._rootOverlay;
    if (overlay !== undefined) {
      this.overlayService.setViewContainerRef(overlay);
    }
  }
}
