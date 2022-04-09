import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAgencyComponent } from './card-agency.component';

describe('CardAgencyComponent', () => {
  let component: CardAgencyComponent;
  let fixture: ComponentFixture<CardAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
