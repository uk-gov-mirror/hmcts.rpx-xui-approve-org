
Feature: Banner

  Background:
    When I navigate to EUI Approve Organisation Url
    Given I am logged into approve organisation with HMCTS admin
    Then I should be redirected to approve organisation dashboard page
    Then I Check the pending Organisation banner appear

@all
  Scenario: Verify the Banner on Approve Organisation
    Then I Verify the Text on Banner

@all
  Scenario: Verify the Check Now Link on Approve Organisation
    Then I Verify the Check Now Link
    Then I click on Check Now Link to redirect to Organisations Pending Activation page
