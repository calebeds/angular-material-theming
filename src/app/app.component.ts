import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly themeAnchor = this.document.getElementById('app-theme');
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  setTheme(change: MatSelectChange): void {
    const currentTheme = change.source.value;
    this.renderer.setAttribute(
      this.themeAnchor,
      'href',
      `/${currentTheme}.css`
    );
  }
}
