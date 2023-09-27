import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollworsComponent } from './follwors.component';

describe('FollworsComponent', () => {
  let component: FollworsComponent;
  let fixture: ComponentFixture<FollworsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollworsComponent]
    });
    fixture = TestBed.createComponent(FollworsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
