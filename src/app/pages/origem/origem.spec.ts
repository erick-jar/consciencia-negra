import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Origem } from './origem';

describe('Origem', () => {
  let component: Origem;
  let fixture: ComponentFixture<Origem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Origem],
    }).compileComponents();

    fixture = TestBed.createComponent(Origem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
