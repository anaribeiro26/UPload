import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesVideosComponent } from './favourites-videos.component';

describe('FavouritesVideosComponent', () => {
  let component: FavouritesVideosComponent;
  let fixture: ComponentFixture<FavouritesVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritesVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
