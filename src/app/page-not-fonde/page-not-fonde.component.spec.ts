import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFondeComponent } from './page-not-fonde.component';

describe('PageNotFondeComponent', () => {
  let component: PageNotFondeComponent;
  let fixture: ComponentFixture<PageNotFondeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFondeComponent]
    });
    fixture = TestBed.createComponent(PageNotFondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
