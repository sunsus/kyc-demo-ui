import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyDataComponent } from './legacy-data.component';

describe('LegacyDataComponent', () => {
  let component: LegacyDataComponent;
  let fixture: ComponentFixture<LegacyDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegacyDataComponent]
    });
    fixture = TestBed.createComponent(LegacyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
