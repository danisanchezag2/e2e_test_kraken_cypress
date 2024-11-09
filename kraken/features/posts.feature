Feature: Posts


@user2 @web
Scenario: EP-06 Delete a post
  Given I am logged into Ghost
  When I navigate to the posts page
  And I click on the first post of the list
  And I click on Settings button
  And I scroll to the bottom of the settings menu
  And I click on the delete button
  And I click on the delete button confirmation
  Then I should be redirected to Posts page