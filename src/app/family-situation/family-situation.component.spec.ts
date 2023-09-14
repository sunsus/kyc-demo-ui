import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilySituationComponent } from './family-situation.component';

describe('FamilySituationComponent', () => {
  let component: FamilySituationComponent;
  let fixture: ComponentFixture<FamilySituationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilySituationComponent]
    });
    fixture = TestBed.createComponent(FamilySituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
