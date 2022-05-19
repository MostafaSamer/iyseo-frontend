import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigbUpComponent } from './sigb-up.component';

describe('SigbUpComponent', () => {
  let component: SigbUpComponent;
  let fixture: ComponentFixture<SigbUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigbUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigbUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
