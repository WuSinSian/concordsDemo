import { ConcordsDemoPage } from './app.po';

describe('concords-demo App', () => {
  let page: ConcordsDemoPage;

  beforeEach(() => {
    page = new ConcordsDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
