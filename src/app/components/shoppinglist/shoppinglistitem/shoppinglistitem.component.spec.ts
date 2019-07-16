import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinglistitemComponent } from './shoppinglistitem.component';

describe('ShoppinglistitemComponent', () => {
  let component: ShoppinglistitemComponent;
  let fixture: ComponentFixture<ShoppinglistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppinglistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinglistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
