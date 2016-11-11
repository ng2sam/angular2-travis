import { Angular2TravisPage } from './app.po';

describe('angular2-travis App', function() {
  let page: Angular2TravisPage;

  beforeEach(() => {
    page = new Angular2TravisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
