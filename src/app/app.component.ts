import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class')
  currentTheme: 'light-theme' | 'dark-theme' = 'dark-theme';

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    this.setTheme('dark-theme');
  }

  onSelectionChange(change: MatSelectChange): void {
    this.setTheme(change.source.value);
  }

  setTheme(currentTheme: 'light-theme' | 'dark-theme'): void {
    this.currentTheme = currentTheme;
    this.overlayContainer
      .getContainerElement()
      .classList.remove(
        this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme'
      );
    this.overlayContainer
      .getContainerElement()
      .classList.add(this.currentTheme);
  }
}
