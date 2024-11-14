import LoginPage from '../page_objects/login-page';
import MembersPage from '../page_objects/members-page';

describe('I am logged into Ghost', function() {
  const loginPage = new LoginPage();
  const membersPage = new MembersPage();

  it('Crear miembro con nombre y correo', function() {
     // Given I am logged into Ghost
     loginPage.login();
    //  When I navigate to the members page
    membersPage.navigateToMembers();
    // And I click the new member button
    membersPage.clickNewMemberButton();
    // And I fill in the member name and email and save
    const { randomName } = membersPage.fillMemberDetailsAndSave();
    // And I come back to the members page
    membersPage.navigateToMembers();
    // Then I should see the member in the list
    membersPage.verifyMemberExists(randomName);
  });

  it('Editar miembro con nombre y correo', function() {
     // Given I am logged into Ghost
     loginPage.login();
    //  When I navigate to the members page
    membersPage.navigateToMembers();
    //  And I click on the first member of the list
    membersPage.clickFirstMember();
    //  And I edit the member name and email and save
    const { randomName } = membersPage.fillMemberDetailsAndSave();
    //  And I come back to the members page
    membersPage.navigateToMembers();
    //  Then I should see the member in the list
    membersPage.verifyMemberExists(randomName);
  });
});