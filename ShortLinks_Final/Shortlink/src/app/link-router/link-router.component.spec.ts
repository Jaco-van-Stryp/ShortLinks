import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRouterComponent } from './link-router.component';

describe('LinkRouterComponent', () => {
  let component: LinkRouterComponent;
  let fixture: ComponentFixture<LinkRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkRouterComponent]
    });
    fixture = TestBed.createComponent(LinkRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
