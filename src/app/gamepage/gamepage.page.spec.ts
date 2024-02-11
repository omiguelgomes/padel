import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamepagePage } from './gamepage.page';

describe('GamepagePage', () => {
  let component: GamepagePage;
  let fixture: ComponentFixture<GamepagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GamepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
