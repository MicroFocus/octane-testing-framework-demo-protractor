describe('spec2', function() {
  it('bubu bubu2', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://www.google.com/search?q=bubu%20bubu2');
  });
  
  it('dudu dudu2', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://www.google.com/search?q=dudu%20dudu2');
  });
  
  it('tutu tutu2', function() {
	browser.waitForAngularEnabled(false);
    browser.get('http://www.google.com/search?q=tutu%20tutu2');
  });
});