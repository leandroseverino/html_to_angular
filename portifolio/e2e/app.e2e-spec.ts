import { PortifolioPage } from './app.po';

describe('portifolio App', () => {
  let page: PortifolioPage;

  beforeEach(() => {
    page = new PortifolioPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
