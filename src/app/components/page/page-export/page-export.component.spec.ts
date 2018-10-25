import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExportComponent } from './page-export.component';

describe('PageExportComponent', () => {
  let component: PageExportComponent;
  let fixture: ComponentFixture<PageExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
