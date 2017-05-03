import { OauthPasswordPage } from './app.po';

describe('oauth-password App', () => {
  let page: OauthPasswordPage;

  beforeEach(() => {
    page = new OauthPasswordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
