Feature: Members

@user1 @web
Scenario: EP-03 Create a new member with name and email
  Given I am logged into Ghost
  When I navigate to the members page
  And I click on New Member button
  And I create a new member with name "$name_1" and email "$email_1"
  And I come back to the members page
  Then I should see the member "$$name_1" in the list

@user2 @web
Scenario: EP-04 Edit name and email of an existing member
  Given I am logged into Ghost
  When I navigate to the members page
  And I click on the first member of the list
  And I edit the member with name "$name_2" and email "$email_2"
  And I come back to the members page
  Then I should see the member "$$name_2" in the list