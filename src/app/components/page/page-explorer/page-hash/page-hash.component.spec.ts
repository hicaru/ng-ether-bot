import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHashComponent } from './page-hash.component';

describe('PageHashComponent', () => {
  let component: PageHashComponent;
  let fixture: ComponentFixture<PageHashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
