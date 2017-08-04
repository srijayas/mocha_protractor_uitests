exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub"
    ,specs: ['test.js'],
     baseUrl: 'https://web-frameworks.firebaseapp.com/',
     capabilities: {
         browserName: 'chrome'
     }
};