Feature: Staff

@user1 @web
Scenario: EP-07 Create a new staff user
  Given I am logged into Ghost
  When I navigate to the settings page
  And I click on Staff in the left menu
  And I click on Invite People button
  And I create a new staff user with email "$email_1" and role "author"
  And I hide the modal by pressing "Escape"
  And I click on the Invited tab
  Then I should see the staff user with email "$$email_1"

@user2 @web
Scenario: EP-08 Try to create a new staff user with invalid email
  Given I am logged into Ghost
  When I navigate to the settings page
  And I click on Staff in the left menu
  And I click on Invite People button
  And I create a new staff user with email "$string_1" and role "author"
  Then I should see the error message "Please enter a valid email address."