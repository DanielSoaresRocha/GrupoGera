import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesConsumidorasComponent } from './unidades-consumidoras.component';

describe('UnidadesConsumidorasComponent', () => {
  let component: UnidadesConsumidorasComponent;
  let fixture: ComponentFixture<UnidadesConsumidorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesConsumidorasComponent ]
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
