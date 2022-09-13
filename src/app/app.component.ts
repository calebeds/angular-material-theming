import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostBinding,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.setTheme('dark-theme');
  }

  onSelectionChange(change: MatSelectChange): void {
    this.setTheme(change.source.value);
  }

  setTheme(currentTheme: 'light-theme' | 'dark-theme'): void {
    this.renderer.removeClass(
      this.document.body,
      currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme'
    );
    this.renderer.addClass(this.document.body, currentTheme);
  }
}
