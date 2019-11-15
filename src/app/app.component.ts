import { Component, OnInit, OnDestroy } from '@angular/core';
import { UiService } from './services/ui/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'MiniWeather';
  showMenu = false;
  darkModeActive: boolean;

  constructor(public ui: UiService) {}
  sub1;

  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe(value => {
      this.darkModeActive = value;
    });
  }

  ngOnDestroy() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }
}
