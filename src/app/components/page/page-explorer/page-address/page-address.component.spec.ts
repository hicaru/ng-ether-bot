import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddressComponent } from './page-address.component';

describe('PageAddressComponent', () => {
  let component: PageAddressComponent;
  let fixture: ComponentFixture<PageAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
