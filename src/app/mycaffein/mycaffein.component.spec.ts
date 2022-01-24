import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycaffeinComponent } from './mycaffein.component';

describe('MycaffeinComponent', () => {
  let component: MycaffeinComponent;
  let fixture: ComponentFixture<MycaffeinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycaffeinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycaffeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
