import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tormenta20 } from './tormenta20';

describe('Tormenta20', () => {
  let component: Tormenta20;
  let fixture: ComponentFixture<Tormenta20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tormenta20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tormenta20);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
