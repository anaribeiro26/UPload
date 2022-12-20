import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsVideosComponent } from './tags-videos.component';

describe('TagsVideosComponent', () => {
  let component: TagsVideosComponent;
  let fixture: ComponentFixture<TagsVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
