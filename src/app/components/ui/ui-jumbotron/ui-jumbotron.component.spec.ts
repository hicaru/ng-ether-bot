import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiJumbotronComponent } from './ui-jumbotron.component';

describe('UiJumbotronComponent', () => {
  let component: UiJumbotronComponent;
  let fixture: ComponentFixture<UiJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
