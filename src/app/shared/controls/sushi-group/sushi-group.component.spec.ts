import { ComponentFixture, TestBed } from '@angular/core/testing';
// Remove the import statement for 'testing' from '@angular/core'

import { SushiGroupComponent } from './sushi-group.component';

describe('SushiGroupComponent', () => {
  let component: SushiGroupComponent;
  let fixture: ComponentFixture<SushiGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
