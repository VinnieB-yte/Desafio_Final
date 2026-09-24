import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dnd5 } from './dnd5';

describe('Dnd5', () => {
  let component: Dnd5;
  let fixture: ComponentFixture<Dnd5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dnd5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dnd5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
