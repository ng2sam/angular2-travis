/* tslint:disable:no-unused-variable */

import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ProductService } from './product.service';

describe('Service: Product (MOCK)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should construct', inject([ProductService, MockBackend], (service: MockBackend) => {
    expect(service).toBeTruthy();
  }));
  describe('getProducts', () => {
    const mockResponse = [{
      'id': 999,
      'productName': 'Proudct TEST',
      'productCode': 'GMG-0042',
      'releaseDate': 'October 15, 2015',
      'description': 'Standard two-button video game controller',
      'price': 35.95,
      'starRating': 4.6,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
  }];

    it('should parse response', async(inject(
      [ProductService, MockBackend], (service, mockBackend) => {

      mockBackend.connections.subscribe(conn => {
        conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
      });

      const result = service.getProducts();

      result.subscribe(res => {
        expect(res).toEqual([{
          'id': 999,
          'productName': 'Proudct TEST',
          'productCode': 'GMG-0042',
          'releaseDate': 'October 15, 2015',
          'description': 'Standard two-button video game controller',
          'price': 35.95,
          'starRating': 4.6,
          'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
        }]);
      });
    })));
  });

});
