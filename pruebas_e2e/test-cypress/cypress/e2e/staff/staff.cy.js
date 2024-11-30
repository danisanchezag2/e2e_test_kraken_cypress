
import LoginPage from '../page_objects/login-page';
import StaffPage from '../page_objects/staff-page';
import { faker } from '@faker-js/faker';
import { screenshot } from '../../support/utils';
describe('Given I am logged into Ghost', function() {
  const staffPage = new StaffPage();
  const loginPage = new LoginPage();
  beforeEach(() => {
    loginPage.login();  // "Given I am logged into Ghost"
  });

  it('EP-07 Create a new staff user', function() {
    // When I navigate to the settings page
    staffPage.navigateSettings();
    screenshot('Staff','EP-07 Create a new staff user', 'When I navigate to the settings page');
    // And I click on the staff section
    staffPage.clickStaff();
    screenshot('Staff','EP-07 Create a new staff user', 'And I click on the staff section');
    //  And I click on Invite People button
    staffPage.clickInvitePeople();
    screenshot('Staff','EP-07 Create a new staff user', 'And I click on Invite People button');
    //  And I create a new staff user with email and role "author"
    const email = faker.internet.email();
    staffPage.fillStaffDetails(email);
    //  And I click on the send invitation button
    staffPage.clickSendInvitation();
    screenshot('Staff','EP-07 Create a new staff user', 'And I click on the send invitation button');
    //  And I hide the modal by pressing "Escape"
    staffPage.hideStaffModal();
    //  And I click on the Invited tab
    staffPage.clickInvitedTab();
    screenshot('Staff','EP-07 Create a new staff user', 'And I click on the Invited tab');
    //  Then I should see the staff user with email in the list
    staffPage.verifyStaffExists(email);
  });

  it('EP-08 Try to create a new staff user with invalid email', function() {
    // When I navigate to the settings page
    staffPage.navigateSettings();
    screenshot('Staff','EP-08 Create a new staff user', 'When I navigate to the settings page');
    // And I click on the staff section
    staffPage.clickStaff();
    screenshot('Staff','EP-08 Create a new staff user', 'And I click on the staff section');
    //  And I click on Invite People button
    staffPage.clickInvitePeople();
    screenshot('Staff','EP-08 Create a new staff user', 'And I click on Invite People button');
    //  And I create a new staff user with email and role "author"
    const email = faker.internet.userName();
    staffPage.fillStaffDetails(email);
    //  And I click on the send invitation button
    staffPage.clickSendInvitation();
    screenshot('Staff','EP-08 Create a new staff user', 'And I click on the send invitation button');
    //  Then I should see the error message "Please enter a valid email address."
    staffPage.verifyErrorMessage();
    screenshot('Staff','EP-08 Try to create a new staff user with invalid emaI;', ' Then I should see the error message "Please enter a valid email address."');
  });
});