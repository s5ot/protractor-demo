exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  sauceUser: 'sogoohta',
  sauceKey: 'afcbb21b-694c-4003-8802-8ce4d1782ab1',
  specs: ['todo-spec.js']
};
