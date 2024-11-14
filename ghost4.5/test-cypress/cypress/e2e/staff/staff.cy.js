
import LoginPage from '../page_objects/login-page';
import StaffPage from '../page_objects/staff-page';
import { faker } from '@faker-js/faker';
describe('Given I am logged into Ghost', function() {
  const staffPage = new StaffPage();
  const loginPage = new LoginPage();
  beforeEach(() => {
    loginPage.login();  // "Given I am logged into Ghost"
  });

  it('Create a new staff user', function() {
    // When I navigate to the settings page
    staffPage.navigateSettings();
    // And I click on the staff section
    staffPage.clickStaff();
    //  And I click on Invite People button
    staffPage.clickInvitePeople();
    //  And I create a new staff user with email and role "author"
    const email = faker.internet.email();
    staffPage.fillStaffDetails(email);
    //  And I click on the send invitation button
    staffPage.clickSendInvitation();
    //  And I hide the modal by pressing "Escape"
    staffPage.hideStaffModal();
    //  And I click on the Invited tab
    staffPage.clickInvitedTab();
    //  Then I should see the staff user with email in the list
    staffPage.verifyStaffExists(email);
  });

  it('EP-08 Try to create a new staff user with invalid email', function() {
    // When I navigate to the settings page
    staffPage.navigateSettings();
    // And I click on the staff section
    staffPage.clickStaff();
    //  And I click on Invite People button
    staffPage.clickInvitePeople();
    //  And I create a new staff user with email and role "author"
    const email = faker.internet.userName();
    staffPage.fillStaffDetails(email);
    //  And I click on the send invitation button
    staffPage.clickSendInvitation();
    //  Then I should see the error message "Please enter a valid email address."
    staffPage.verifyErrorMessage();
  });
});