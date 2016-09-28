import { SmartschoolPage } from './app.po';

describe('smartschool App', function() {
  let page: SmartschoolPage;

  beforeEach(() => {
    page = new SmartschoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
