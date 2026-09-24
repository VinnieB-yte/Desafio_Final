import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vampiro } from './vampiro';

describe('Vampiro', () => {
  let component: Vampiro;
  let fixture: ComponentFixture<Vampiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vampiro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vampiro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
