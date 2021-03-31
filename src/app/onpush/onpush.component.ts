import { ChangeDetectionStrategy, Component, ElementRef, Host, HostBinding, Input, NgZone, Renderer2 } from '@angular/core';
import { TestConfig } from '../test-config.model';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushComponent{
  @Input() config!: TestConfig;
  @Input() value!: any;
  @Input() object!: object;

  inputValue?: string;

  @HostBinding('class.highlight')
  private highlight = false;

  constructor(private readonly renderer: Renderer2, private readonly ngZone: NgZone, @Host() private readonly ref: ElementRef) {
  }

  markCdCycle(): void {
    console.log(this.ref.nativeElement.classList = ['highlight']);
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.ref.nativeElement.classList = [], 1000);
    });
  }
}
