import { Component } from '@angular/core';
import { Config } from '../../controls/controls.component';
import { buildConfig, TestConfig } from '../../test-config.model';

@Component({
  selector: 'app-default-container',
  templateUrl: './default-container.component.html',
  styleUrls: ['./default-container.component.scss'],
})
export class DefaultContainerComponent {
  config?: TestConfig[] = [];

  updateConfig(config: Config): void {
    this.config = buildConfig(config);
  }
}
