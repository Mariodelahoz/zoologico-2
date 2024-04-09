import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarListadoComponent } from './mostrar-listado.component';

describe('MostrarListadoComponent', () => {
  let component: MostrarListadoComponent;
  let fixture: ComponentFixture<MostrarListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
