import { PluralsightPage } from './app.po';

describe('pluralsight App', () => {
  let page: PluralsightPage;

  beforeEach(() => {
    page = new PluralsightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
