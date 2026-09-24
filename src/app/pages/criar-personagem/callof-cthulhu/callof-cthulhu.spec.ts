import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallofCthulhu } from './callof-cthulhu';

describe('CallofCthulhu', () => {
  let component: CallofCthulhu;
  let fixture: ComponentFixture<CallofCthulhu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallofCthulhu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallofCthulhu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
