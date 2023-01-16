import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thematics } from './thematics.component';

describe('ArticlesComponent', () => {
  let component: Thematics;
  let fixture: ComponentFixture<Thematics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thematics ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thematics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
