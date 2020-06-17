module.exports = {
    url: 'http://localhost:3000',
    elements: {
        homeButton: 'button[class="home-btn"]',
        loanType: 'select[id="loanTypes"]',
        loanTypeoption: 'option[value="Home Purchase"]',
        propertyTypes: 'select[id="propertyTypes"]',
        propertyTypesoption: 'option[value="Single Family Home"]',
        city: 'input[name="city"]',
        primaryHome: 'button[value="Primary Home"]',
        yesButton: 'button[name="yesButton"]',
        price: 'input[name="price"]',
        downPayment: 'input[name="down"]',
        creditScore: 'button[value="excellent"]',
        bankRupt: 'button[value="Has never been in bankruptcy"]',
        addressOne: 'input[id="addressOne"]',
        addressThree: 'input[id="addressThree"]',
        firstName: 'input[id="first"]',
        lastName: 'input[id="last"]',
        email: 'input[id="email"]',
        sendButton: 'button[name="sendButton"]',
        confirmation: {
            selector: '//p[contains(text(),"Expect to hear from our corporate lending offices shortly at adrian.trilogy@gmail.com")]',
            locateStrategy: 'xpath'
        },
        returnHome: 'button[class="margin-btn"]',
        nextButton: 'button[name="nextButton"]',


    }
}