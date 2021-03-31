import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushContainerComponent } from './onpush-container.component';

describe('OnpushContainerComponent', () => {
  let component: OnpushContainerComponent;
  let fixture: ComponentFixture<OnpushContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnpushContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
