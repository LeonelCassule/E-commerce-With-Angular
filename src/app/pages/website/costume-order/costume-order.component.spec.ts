import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeOrderComponent } from './costume-order.component';

describe('CostumeOrderComponent', () => {
  let component: CostumeOrderComponent;
  let fixture: ComponentFixture<CostumeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostumeOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostumeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
