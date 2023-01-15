import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicDetailsComponent } from './thematic-details.component';

describe('ThematicDetailsComponent', () => {
  let component: ThematicDetailsComponent;
  let fixture: ComponentFixture<ThematicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThematicDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThematicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
