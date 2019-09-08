import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDirectoryComponent } from './portfolio-directory.component';

describe('PortfolioDirectoryComponent', () => {
  let component: PortfolioDirectoryComponent;
  let fixture: ComponentFixture<PortfolioDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
