import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeModalComponent } from './unidade-modal.component';

describe('UnidadeModalComponent', () => {
  let component: UnidadeModalComponent;
  let fixture: ComponentFixture<UnidadeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeModalComponent ]
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
