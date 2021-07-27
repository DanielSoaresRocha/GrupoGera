import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FaturasComponent } from './faturas.component';

describe('FaturasComponent', () => {
  let component: FaturasComponent;
  let fixture: ComponentFixture<FaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturasComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
