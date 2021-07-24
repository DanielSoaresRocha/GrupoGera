import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UnidadeConsumidoraService } from '@src/app/shared/services';

import { UnidadesConsumidorasComponent } from './unidades-consumidoras.component';

describe('UnidadesConsumidorasComponent', () => {
  let component: UnidadesConsumidorasComponent;
  let fixture: ComponentFixture<UnidadesConsumidorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesConsumidorasComponent ],
      providers: [ UnidadeConsumidoraService ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesConsumidorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
