import { DotNetGigsPage } from './app.po';

describe('dot-net-gigs App', () => {
  let page: DotNetGigsPage;

  beforeEach(() => {
    page = new DotNetGigsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
