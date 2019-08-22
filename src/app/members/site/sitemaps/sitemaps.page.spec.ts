import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapsPage } from './sitemaps.page';

describe('SitemapsPage', () => {
  let component: SitemapsPage;
  let fixture: ComponentFixture<SitemapsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitemapsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
