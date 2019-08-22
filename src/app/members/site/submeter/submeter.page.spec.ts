import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterPage } from './submeter.page';

describe('SubmeterPage', () => {
  let component: SubmeterPage;
  let fixture: ComponentFixture<SubmeterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
