const { screenshot } = require('../../support/utils');
const { MembersPage } = require("../page_objects/members-page");
import { faker } from '@faker-js/faker';

describe('Members', () => {
    const member = new MembersPage();
    
    beforeEach(() => {
        member.signIn();
    });

    it(`Create a new member with name, email and note`, () => {
        for (let index = 0; index < 2; index++) {
            const memberName = faker.person.fullName();
            const memberEmail = faker.internet.email();
            const memberNote = faker.lorem.lines();
    
            member.navigateToMembers();
            member.clickNewMemberButton();
            const { email } = member.fillMemberDetailsAndSave(memberName, memberEmail, memberNote);
            
            member.navigateToMembers();
            member.verifyMemberExists(email);
        }
    });
    
    it('Create a new member without name', () => {
        for (let index = 0; index < 2; index++) {
            const memberEmail = faker.internet.email();
            const memberNote = faker.lorem.lines();

            member.navigateToMembers();
            member.clickNewMemberButton();
            const { email } = member.fillMemberDetailsAndSave('', memberEmail, memberNote);
            
            member.navigateToMembers();
            
            member.verifyEmptyStringName(email);
        }
    });

    it('Create a new member without note', () => {
        for (let index = 0; index < 2; index++) {
            const memberName = faker.person.fullName();
            const memberEmail = faker.internet.email();
    
            member.navigateToMembers();
            member.clickNewMemberButton();
            const { email } = member.fillMemberDetailsAndSave(memberName, memberEmail, '');
            
            member.navigateToMembers();
            member.verifyMemberExists(email);
        }
    });

    it('Edit name field of a existing member', () => {
        for (let index = 0; index < 2; index++) {
            const memberName = faker.person.fullName();
    
            member.navigateToMembers();
            member.clickFirstMemberInList();
            const { name } = member.fillMemberDetailsAndSave(memberName, '', '');
            
            member.navigateToMembers();
            member.checkNameInList(name);
        }
    });

    it('Edit an existing member with a invalid email', () => {
        for (let index = 0; index < 3; index++) {
            const newWrongEmail = faker.string.alphanumeric();
    
            member.navigateToMembers();
            member.clickFirstMemberInList();
            member.fillMemberDetailsAndSave('', newWrongEmail, '');
            member.checkErrorMessageExist();
            member.visitPage();
            member.clickLeave();
        }
    });

    it('Create a new member exceeding max chars in note field', () => {
        for (let index = 0; index < 2; index++) {
            const memberName = faker.person.fullName();
            const memberEmail = faker.internet.email();
            const memberNote = faker.lorem.lines(1).repeat(60);

            member.navigateToMembers();
            member.clickNewMemberButton();
            member.fillMemberDetailsAndSave(memberName, memberEmail, memberNote);
            member.checkErrorMessageExist();
            member.visitPage();
            member.clickLeave();
        }
    });

    it('Edit an existing member exceeding max chars in note field', () => {
        for (let index = 0; index < 2; index++) {
            const memberName = faker.person.fullName();
            const memberEmail = faker.internet.email();
            const memberNote = faker.lorem.lines(1).repeat(60);

            member.navigateToMembers();
            member.clickFirstMemberInList();
            member.fillMemberDetailsAndSave(memberName, memberEmail, memberNote);
            member.checkErrorMessageExist();
            member.visitPage();
            member.clickLeave();
        }
    });

})