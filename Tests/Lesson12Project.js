let validTests = [
    {
        city: 'Sandy',
        price: '450,000',
        down: '20,000',
        addressOne: '1987 E Ashridge Circle',
        firstName: 'Adrian',
        lastName: 'Richards',
        email: 'adrian.trilogy@gmail.com',
        confirmation: 'Expect to hear from our corporate lending offices shortly at adrian.trilogy@gmail.com.'
    },
    {
        city: 'Cottonwood Heights',
        price: '300,000',
        down: '25,000',
        addressOne: '2250 Cottonwood Cove Lane',
        firstName: 'Val',
        lastName: 'klein',
        email: 'valrichards654@gmail.com',
        confirmation: 'Expect to hear from our corporate lending offices shortly at valrichards654@gmail.com.'
    }
]
var Project12 
module.exports = {
    beforeEach: browser => {
        Project12 = browser.page.homeLoanwizardPageobjects()
        Project12
            .navigate()
    },
    "Check searches": browser=>{
        validTests.forEach(test=>{
           Project12
            .click('@homeButton')
            .pause(1000)
            .click('@loanType')
            .click('@loanTypeoption')
            .click('@nextButton')
            .pause(1000)
            .click('@loanType')
            .pause(1000)
            .click('@loanTypeoption')
            .pause(1000)
            .click('@propertyTypes')
            .waitForElementPresent('@propertyTypesoption')
            .click('@propertyTypesoption')
            .pause(2000)
            .click('@nextButton')
            .pause(1000)
            .setValue('@city', test.city)
            .pause(1000)
            .click('@nextButton')
            .click('@primaryHome')
            .click('@yesButton')
            .click('@yesButton')
            .setValue('@price', test.price)
            .setValue('@downPayment', test.down)
            .click('@nextButton')
            .click('@creditScore')
            .click('@bankRupt')
            .setValue('@addressOne', test.addressOne)
            .setValue('@addressThree', test.city)
            .click('@nextButton')
            .setValue('@firstName', test.firstName)
            .setValue('@lastName', test.lastName)
            .setValue('@email', test.email)
            .click('@nextButton')
            .pause(5000)
            .click('@sendButton')
            .pause(1000)
            .verify.containsText('@confirmation', test.confirmation)
            .click('@returnHome')

        })
    }
}