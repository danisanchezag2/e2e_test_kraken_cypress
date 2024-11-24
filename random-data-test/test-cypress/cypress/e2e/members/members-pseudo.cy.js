const { screenshot } = require('../../support/utils');
const { MembersPage } = require("../page_objects/members-page");
const users = require('../../fixtures/users.json');
const wrongEmails = require('../../fixtures/wrong-emails.json');

describe('Members - Pseudorandom', () => {

    const member = new MembersPage();
    const names = ["Alice", "Bob", "Charlie", "David", "Ella", "Olivia"];
    const emailConsecutive = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const descriptions = [
        "creative thinker", "problem solver", "team player", "detail-oriented", "self-starter",
        "strong communicator", "adaptable", "strategic planner", "data-driven", "goal-oriented",
        "innovative", "dependable", "collaborative"
    ];
    
    beforeEach(() => {
        member.signIn();
    });

    it(`Create a new member with name, email and note`, () => {
        users.slice(1, 3).forEach((user) => {
            const memberName = `${user.Displayname}_${names[Math.floor(Math.random() * names.length)]}`;
            const memberEmail = `${emailConsecutive[Math.floor(Math.random() * emailConsecutive.length)]}_${user.Username}`;
            const memberNote = `${user.Department}_${descriptions[Math.floor(Math.random() * descriptions.length)]}`;
    
            member.navigateToMembers();
            member.clickNewMemberButton();
            const { email } = member.fillMemberDetailsAndSave(memberName, memberEmail, memberNote);
            
            member.navigateToMembers();
            member.verifyMemberExists(email);
        });
    });
    
    it('Create a new member without name', () => {
        users.slice(5, 7).forEach((user) => {
            const memberEmail = `${emailConsecutive[Math.floor(Math.random() * emailConsecutive.length)]}_${user.Username}`;
            const memberNote = `${user.Department}_${descriptions[Math.floor(Math.random() * descriptions.length)]}`;

            member.navigateToMembers();
            member.clickNewMemberButton();
            const { email } = member.fillMemberDetailsAndSave('', memberEmail, memberNote);
            
            member.navigateToMembers();
            
            member.verifyEmptyStringName(email);
        })
    });

    it('Create a new member without note', () => {
        users.slice(8, 10).forEach((user) => {
            const memberName = `${user.Displayname}_${names[Math.floor(Math.random() * names.length)]}`;
            const memberEmail = `${emailConsecutive[Math.floor(Math.random() * emailConsecutive.length)]}_${user.Username}`;
    
            member.navigateToMembers();
            member.clickNewMemberButton();
            const { email } = member.fillMemberDetailsAndSave(memberName, memberEmail, '');
            
            member.navigateToMembers();
            member.verifyMemberExists(email);
        })
    });

    it('Edit name field of a existing member', () => {
        users.slice(11, 13).forEach((user) => {
            const memberName = `${user.Displayname}_${names[Math.floor(Math.random() * names.length)]}`;
    
            member.navigateToMembers();
            member.clickFirstMemberInList();
            const { name } = member.fillMemberDetailsAndSave(memberName, '', '');
            
            member.navigateToMembers();
            member.checkNameInList(name);
        })
    });

    it('Edit an existing member with a invalid email', () => {
        wrongEmails.slice(0, 3).forEach((wrongEmail) => {
            const newWrongEmail = `${wrongEmail.value}_${names[Math.floor(Math.random()*names.length)]}`;
    
            member.navigateToMembers();
            member.clickFirstMemberInList();
            member.fillMemberDetailsAndSave('', newWrongEmail, '');
            member.checkErrorMessageExist();
            member.visitPage();
            member.clickLeave();
        })
    });

    it('Edit an existing member with empty fields', () => {
        member.navigateToMembers();
        member.clickFirstMemberInList();
        member.clearMemberDetailsAndSave();
        member.checkErrorMessageExist();
    });

    it('Create a new member exceeding max chars in note field', () => {
        users.slice(14, 16).forEach((user) => {
            const memberName = `${user.Firstname} ${user.Lastname}`;
            const memberEmail = user.Username;
            const memberNote = user.Address.repeat(60);

            member.navigateToMembers();
            member.clickNewMemberButton();
            member.fillMemberDetailsAndSave(memberName, memberEmail, memberNote);
            member.checkErrorMessageExist();
            member.visitPage();
            member.clickLeave();
        })
    });

    it('Edit an existing member exceeding max chars in note field', () => {
        users.slice(17, 19).forEach((user) => {
            const memberName = `${user.Firstname} ${user.Lastname}`;
            const memberEmail = user.Username;
            const memberNote = user.Address.repeat(60);

            member.navigateToMembers();
            member.clickFirstMemberInList();
            member.fillMemberDetailsAndSave(memberName, memberEmail, memberNote);
            member.checkErrorMessageExist();
            member.visitPage();
            member.clickLeave();
        })
    });
    
})