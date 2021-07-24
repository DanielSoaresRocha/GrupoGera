import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UnidadeConsumidoraService } from '@src/app/shared/services';

import { UnidadeModalComponent } from './unidade-modal.component';

describe('UnidadeModalComponent', () => {
  let component: UnidadeModalComponent;
  let fixture: ComponentFixture<UnidadeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeModalComponent ],
      providers: [ UnidadeConsumidoraService ],
      imports: [ RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
