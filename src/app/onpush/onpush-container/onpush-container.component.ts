import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Config } from '../../controls/controls.component';
import { buildConfig, TestConfig } from '../../test-config.model';

@Component({
  selector: 'app-onpush-container',
  templateUrl: './onpush-container.component.html',
  styleUrls: ['./onpush-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushContainerComponent {
  testConfigs: TestConfig[] = [];

  updateConfig(config: Config): void {
    this.testConfigs = buildConfig(config);
  }
}
