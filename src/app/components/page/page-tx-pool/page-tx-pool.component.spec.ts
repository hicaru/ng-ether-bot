import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTxPoolComponent } from './page-tx-pool.component';

describe('PageTxPoolComponent', () => {
  let component: PageTxPoolComponent;
  let fixture: ComponentFixture<PageTxPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTxPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTxPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
