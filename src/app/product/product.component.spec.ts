/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductComponent } from './product.component';
import { ProductService, IProduct } from './shared';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

class MockProductService  {
  products: Observable<IProduct[]>;
  mockProducts: IProduct[] = [{
      'id': 999,
      'productName': 'Proudct TEST',
      'productCode': 'GMG-0042',
      'releaseDate': 'October 15, 2015',
      'description': 'Standard two-button video game controller',
      'price': 35.95,
      'starRating': 4.6,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
  }];

  getProducts(): Observable<IProduct[]> {
    return Observable.from(this.mockProducts).toArray();
  }
}

  beforeEach(async(() => {
    this.mockProductService = new MockProductService();
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      providers: [{provide: ProductService, useValue: this.mockProductService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let productService = TestBed.get(ProductService);
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
