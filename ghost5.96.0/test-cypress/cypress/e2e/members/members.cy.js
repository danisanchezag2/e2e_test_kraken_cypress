import LoginPage from '../page_objects/login-page';
import MembersPage from '../page_objects/members-page';
import { screenshot } from '../../support/utils';

describe('I am logged into Ghost', function() {
  const loginPage = new LoginPage();
  const membersPage = new MembersPage();

  it('EP-03 Create a new member with name and email', function() {

     // Given I am logged into Ghost
    loginPage.login();
    //  When I navigate to the members page
    membersPage.navigateToMembers();
    screenshot('Members','EP-03 Create a new member with name and email', 'When I navigate to the members page');
    // And I click the new member button
    membersPage.clickNewMemberButton();
    screenshot('Members','EP-03 Create a new member with name and email', 'And I click the new member button');
    // And I fill in the member name and email and save
    const { randomEmail } = membersPage.fillMemberDetailsAndSave();
    screenshot('Members','EP-03 Create a new member with name and email', 'And I fill in the member name and email and save');
    // And I come back to the members page
    membersPage.navigateToMembers();
    // Then I should see the member in the list
    membersPage.verifyMemberExists(randomEmail);
  });

  it('EP-04 Edit name and email of an existing member', function() {
     // Given I am logged into Ghost
     loginPage.login();
    //  When I navigate to the members page
    membersPage.navigateToMembers();
    screenshot('Members', 'EP-04 Edit name and email of an existing member', 'When I navigate to the members page');
    //  And I click on the first member of the list
    membersPage.clickFirstMember();
    screenshot('Members','EP-04 Edit name and email of an existing member', 'And I click on the first member of the list');
    //  And I edit the member name and email and save
    const { randomEmail } = membersPage.fillMemberDetailsAndSave();
    screenshot('Members','EP-04 Edit name and email of an existing member', 'And I fill in the member name and email and save');
    //  And I come back to the members page
    membersPage.navigateToMembers();
    //  Then I should see the member in the list
    membersPage.verifyMemberExists(randomEmail);
  });
});