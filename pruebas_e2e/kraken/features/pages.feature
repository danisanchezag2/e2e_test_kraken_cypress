Feature: Pages

@user1 @web
Scenario: EP-09 Create a new page
  Given I am logged into Ghost
  When I navigate to the pages page
  And I click on New Page button
  And I create a new page with title "$string_1" and description "$string_2"
  And I click on the button Continue, final review in the new page
  And I click on the button Publish, right now in the new page
  Then I should see the confirmation message in the Pages page

@user2 @web
Scenario: EP-10 Delete a page
  Given I am logged into Ghost
  When I navigate to the pages page
  And I click on the first page of the list
  And I click on Settings button in the page selected
  And I scroll to the bottom of the settings menu in the page selected
  And I click on the delete button in the page selected
  And I click on the delete button confirmation in the page selected
  Then I should be redirected to Pages page