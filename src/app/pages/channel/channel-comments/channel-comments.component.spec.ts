import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelCommentsComponent } from './channel-comments.component';

describe('ChannelCommentsComponent', () => {
  let component: ChannelCommentsComponent;
  let fixture: ComponentFixture<ChannelCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
