describe('spec1', function() {
  it('bubu bubu', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://www.google.com/search?q=bubu%20bubu');
  });
  
  it('dudu dudu ', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://www.google.com/search?q=dudu%20dudu');
  });
  
  it('tutu tutu ', function() {
	browser.waitForAngularEnabled(false);
    browser.get('http://www.google.com/search?q=tutu%20tutu%20');
  });
});