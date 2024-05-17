import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPproductsComponent } from './category-pproducts.component';

describe('CategoryPproductsComponent', () => {
  let component: CategoryPproductsComponent;
  let fixture: ComponentFixture<CategoryPproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryPproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
