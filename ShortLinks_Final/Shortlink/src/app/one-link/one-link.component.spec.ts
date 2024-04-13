import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLinkComponent } from './one-link.component';

describe('OneLinkComponent', () => {
  let component: OneLinkComponent;
  let fixture: ComponentFixture<OneLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneLinkComponent]
    });
    fixture = TestBed.createComponent(OneLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
