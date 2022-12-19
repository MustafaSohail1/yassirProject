/// <reference types="cypress" />

import { navigateTologin} from "../../support/testCases/loginPage"
import { navigateToVisitPlan} from "../../support/testCases/createVisitPlan"
import { navigateTo } from "../../support/testCases/navigationBar";
import { navigateToException } from "../../support/testCases/exceptionHandling";

const { clear } = require("console");
const { STATUS_CODES } = require("http");
const { empty } = require("rxjs") 

describe('Add eConsent Visit Type', () => {

    it('DD - Creating a Visit Plan with eConsent ', () => {
        navigateToException.exceptionMethod()
        navigateTologin.login()
        navigateTo.selectStudiesTenant()
        navigateTo.SelectRowFromStudies()
        navigateTo.selectVisitPlanTab()
        navigateToVisitPlan.addNewVisitPlan()
        navigateToVisitPlan.addEconsentVisit()
        cy.screenshot()
    })


  


   


    


   

})


