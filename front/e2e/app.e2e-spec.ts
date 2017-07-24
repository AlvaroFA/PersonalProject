import { BusAppPage } from './app.po';

describe('bus-app App', () => {
  let page: BusAppPage;

  beforeEach(() => {
    page = new BusAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
