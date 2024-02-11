import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultpagePage } from './resultpage.page';

describe('ResultpagePage', () => {
  let component: ResultpagePage;
  let fixture: ComponentFixture<ResultpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResultpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
