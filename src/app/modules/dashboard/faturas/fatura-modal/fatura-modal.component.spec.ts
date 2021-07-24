import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaturaService } from '@src/app/shared/services';

import { FaturaModalComponent } from './fatura-modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FaturaModalComponent', () => {
  let component: FaturaModalComponent;
  let fixture: ComponentFixture<FaturaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaModalComponent ],
      providers: [ FaturaService ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
