Feature: Posts

@user1 @web
Scenario: EP-05 Create a new post with title and description
  Given I am logged into Ghost
  When I navigate to the posts page
  And I click on New Post button
  And I create a new post with title "$string_1" and description "$string_2"
  And I click on the button Publish post, right now
  Then I should see the confirmation message

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
