import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSendTxComponent } from './page-send-tx.component';

describe('PageSendTxComponent', () => {
  let component: PageSendTxComponent;
  let fixture: ComponentFixture<PageSendTxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSendTxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSendTxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
