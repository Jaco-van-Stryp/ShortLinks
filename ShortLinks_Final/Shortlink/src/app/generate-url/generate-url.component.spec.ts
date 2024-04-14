import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateURLComponent } from './generate-url.component';

describe('GenerateURLComponent', () => {
  let component: GenerateURLComponent;
  let fixture: ComponentFixture<GenerateURLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateURLComponent]
    });
    fixture = TestBed.createComponent(GenerateURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
