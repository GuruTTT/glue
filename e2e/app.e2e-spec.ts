import { MovieDetailsPage } from './app.po';

describe('movie-details App', function() {
  let page: MovieDetailsPage;

  beforeEach(() => {
    page = new MovieDetailsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
