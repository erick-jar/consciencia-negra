import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinhaTempo } from './linha-tempo';

describe('LinhaTempo', () => {
  let component: LinhaTempo;
  let fixture: ComponentFixture<LinhaTempo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinhaTempo],
    }).compileComponents();

    fixture = TestBed.createComponent(LinhaTempo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
