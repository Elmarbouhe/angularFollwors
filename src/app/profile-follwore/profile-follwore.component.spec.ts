import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFollworeComponent } from './profile-follwore.component';

describe('ProfileFollworeComponent', () => {
  let component: ProfileFollworeComponent;
  let fixture: ComponentFixture<ProfileFollworeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileFollworeComponent]
    });
    fixture = TestBed.createComponent(ProfileFollworeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
