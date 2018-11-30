import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExplorerComponent } from './page-explorer.component';

describe('PageExplorerComponent', () => {
  let component: PageExplorerComponent;
  let fixture: ComponentFixture<PageExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
