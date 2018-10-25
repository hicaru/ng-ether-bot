import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSyncComponent } from './page-sync.component';

describe('PageSyncComponent', () => {
  let component: PageSyncComponent;
  let fixture: ComponentFixture<PageSyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
