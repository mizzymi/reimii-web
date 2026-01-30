import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteShell } from './site-shell';

describe('SiteShell', () => {
  let component: SiteShell;
  let fixture: ComponentFixture<SiteShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
