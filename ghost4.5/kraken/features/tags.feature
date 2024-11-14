Feature: Tags

@user1 @web
Scenario: EP-01 Create a new tag with name and description
  Given I am logged into Ghost
  When I navigate to the tags page
  And I click on New Tag button
  And I create a new tag with name "$name_1" and description "$string_2"
  And I come back to the tags page
  Then I should see the tag "$$name_1" in the list

@user2 @web
Scenario: EP-02 Create a new tag with more than 500 chars in name and description inputs
  Given I am logged into Ghost
  When I navigate to the tags page
  And I click on New Tag button
  And I create a new tag with name "a" repeated 501 times and description "b" repeated 501 times
  Then I should see an error message indicating the input exceeds the character limit