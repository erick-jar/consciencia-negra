import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Personalidades } from './personalidades';

describe('Personalidades', () => {
  let component: Personalidades;
  let fixture: ComponentFixture<Personalidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personalidades],
    }).compileComponents();

    fixture = TestBed.createComponent(Personalidades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
