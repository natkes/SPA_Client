import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSongPageComponent } from './add-song-page.component';

describe('AddSongPageComponent', () => {
  let component: AddSongPageComponent;
  let fixture: ComponentFixture<AddSongPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSongPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSongPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
