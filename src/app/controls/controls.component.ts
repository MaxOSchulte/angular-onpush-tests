import { Component, EventEmitter, Output } from '@angular/core';

export interface Config {
  siblings: number;
  childPerLevel: number;
  highlight: boolean;
  levels: number;
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent {
  @Output() config = new EventEmitter<Config>();

  components = 10;
  groups = 1;
  levels = 1;

  interval: any;

  toggleInterval(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    } else {

      // ngZone catches this event.
      this.interval = setInterval(() => console.log('Timer'), 6000);
    }
  }

  emit(): void {
    this.config.emit({
      childPerLevel: this.components,
      siblings: this.groups,
      highlight: true,
      levels: this.levels,
    });
  }
}
