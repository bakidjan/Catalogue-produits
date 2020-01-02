import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckProductComponent } from './check-product.component';

describe('CheckProductComponent', () => {
  let component: CheckProductComponent;
  let fixture: ComponentFixture<CheckProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
