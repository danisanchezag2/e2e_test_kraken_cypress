const { signIn, readUsersData, randomIntFromInterval, screenshot } = require('../../support/utils');
const {Member} = require("../page_objects/member");
const users = require('../../fixtures/users.json');
const wrongEmails = require('../../fixtures/wrongEmail.json');

describe('Members', () => {
    const member = new Member();
    const names = ["Alice", "Bob", "Charlie", "David", "Ella", "Olivia"];
    const emailConsecutive = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const descriptions = [
    "creative thinker", "problem solver", "team player", "detail-oriented", "self-starter",
    "strong communicator", "adaptable", "strategic planner", "data-driven", "goal-oriented",
    "innovative", "dependable", "collaborative"
    ];
    
    beforeEach(() => {
        signIn();
    });

    it(`Create a new member with name, email and note`, () => {
        users.slice(1, 3).forEach((user) => {
            const memberName = `${user.Displayname}-${names[Math.floor(Math.random() * names.length)]}`;
            const memberEmail = `${user.Username}_${emailConsecutive[Math.floor(Math.random() * emailConsecutive.length)]}`;
            const memberNote = `${user.Department}-${descriptions[Math.floor(Math.random() * descriptions.length)]}`;
    
            member.navigateToMembers();
            member.clickNewMemberButton();
            const { email } = member.fillMemberDetailsAndSave(memberName, memberEmail, memberNote);
            
            member.navigateToMembers();
            member.verifyMemberExists(email);
        });
    });
    
    it('Create a new member without name', () => {
        users.slice(5, 7).forEach((user) => {
            const memberEmail = `${user.Username}_${emailConsecutive[Math.floor(Math.random() * emailConsecutive.length)]}`;
            const memberNote = `${user.Department}-${descriptions[Math.floor(Math.random() * descriptions.length)]}`;

            member.navigateToMembers();
            member.clickNewMemberButton();
            const { email } = member.fillMemberDetailsAndSave('', memberEmail, memberNote);
            
            member.navigateToMembers();
            
            member.verifyEmptyStringName(email);
        })
    });

    it('Create a new member without note', () => {
        users.slice(8, 10).forEach((user) => {
            const memberName = `${user.Displayname}-${names[Math.floor(Math.random() * names.length)]}`;
            const memberEmail = `${user.Username}_${emailConsecutive[Math.floor(Math.random() * emailConsecutive.length)]}`;
    
            member.navigateToMembers();
            member.clickNewMemberButton();
            const { email } = member.fillMemberDetailsAndSave(memberName, memberEmail, '');
            
            member.navigateToMembers();
            member.verifyMemberExists(email);
        })
    });

    // it('Test edit name field of a existing member', () => {
    //     signIn();
    //     cy.fixture('users.json').then((users)=>{
    //         for (let index = 40; index < 43; index++) {
    //             let memberName = `${users[index].Displayname}-${names[Math.floor(Math.random()*names.length)]}`;
                
    //             cy.get('a[href="#/members/"]').its('length').then((length) => {
    //                 if (length === 1) {
    //                     member.clickMemberLink();
    //                 } else {
    //                     member.clickFirstMemberLink();
    //                 }
    //             });
    //             cy.wait(2000);

    //             member.clickFirstMembersListElement();
    //             cy.wait(1000);

    //             member.clearName();
    //             cy.wait(1000);

    //             member.typeName(memberName);
    //             cy.wait(1000);

    //             member.saveCreation();
    //             cy.wait(2000);

    //             member.returnMembersList();
    //             cy.wait(1000);

    //             member.checkNameInList(memberName);
    //             cy.wait(2000);
    //         }
    //     })
        
    // })
    
    // it('Test edit an existing member with a invalid email', () => {
    //     signIn();
    //     cy.fixture('wrongEmail.json').then((wrongEmail)=>{
    //         for (let index = 0; index < 3; index++) {
    //             let newWrongEmail = `${wrongEmail.value}-${names[Math.floor(Math.random()*names.length)]}`;
                
    //             cy.wait(2000);
    //             cy.reload()

    //             cy.get('a[href="#/members/"]').its('length').then((length) => {
    //                 if (length === 1) {
    //                     member.clickMemberLink();
    //                 } else {
    //                     member.clickFirstMemberLink();
    //                 }
    //             });
    //             cy.wait(2000);
    
    //             member.clickFirstMembersListElement();
    //             cy.wait(1000);
    
    //             member.clearEmail();
    //             cy.wait(1000);
    
    //             member.typeEmail(newWrongEmail);
    //             cy.wait(1000);
    
    //             member.saveCreation();
    //             cy.wait(1000);
                
    //             member.checkErrorMessageExist();
    //             cy.wait(2000);
    //         }
    //     })
    // });
    
    // it('Test edit an existing member with empty fields', () => {
    //     signIn();
    //     for (let index = 0; index < 3; index++) {
    //         cy.wait(1000);
    //         cy.reload()

    //         cy.get('a[href="#/members/"]').its('length').then((length) => {
    //             if (length === 1) {
    //                 member.clickMemberLink();
    //             } else {
    //                 member.clickFirstMemberLink();
    //             }
    //         });
    //         cy.wait(2000);
            
    //         member.clickFirstMembersListElement();
    //         cy.wait(2000);
            
    //         member.clearEmail();
    //         cy.wait(1000);
            
    //         member.clearName();
    //         cy.wait(1000);
            
    //         member.clearNote();
    //         cy.wait(1000);
            
    //         member.saveCreation();
    //         cy.wait(2000);
            
    //         member.checkErrorMessageExist();
    //         cy.wait(2000);
    //     }
    // });

    // it('Add member with more fields than allowed in note field', () => {
    //     signIn();
    //     cy.fixture('users.json').then((users)=>{
    //         for (let index = 50; index < 53; index++) {
    //             cy.wait(1000);
    //             cy.reload();

    //             let memberNote = users[index].Department.repeat(randomIntFromInterval(30, 32));
                
    //             cy.get('a[href="#/members/"]').its('length').then((length) => {
    //                 if (length === 1) {
    //                     member.clickMemberLink();
    //                 } else {
    //                     member.clickFirstMemberLink();
    //                 }
    //             });
    //             cy.wait(1000);

    //             cy.get('a[href="#/members/new/"]').its('length').then((length) => {
    //                 if (length === 1) {
    //                     member.clickNewMemberLink();
    //                 } else {
    //                     member.clickFirstNewMemberLink();
    //                 }
    //             });	
    //             cy.wait(3000);
                
    //             member.typeName(users[index].Displayname);
    //             cy.wait(1000);
                
    //             member.typeEmail(users[index].Username);
    //             cy.wait(1000);
                
    //             member.typeNote(memberNote);
    //             cy.wait(1000);
                
    //             member.saveCreation();
    //             cy.wait(2000);
                
    //             member.checkErrorMessageExist();
    //             cy.wait(2000);

    //             member.clickFirstMemberLink();
                
    //             member.clickLeave();
    //         }
    //     })
        
    // });

    // it('Test edit an existing member with exceded note field', () => {
    //     signIn();

    //     cy.fixture('users.json').then((users)=>{
    //         for (let index = 26; index < 29; index++) {
    //             cy.wait(1000);
    //             cy.reload();

    //             let memberNote = users[index].Department.repeat(randomIntFromInterval(30, 32));
                
    //             cy.get('a[href="#/members/"]').its('length').then((length) => {
    //                 if (length === 1) {
    //                     member.clickMemberLink();
    //                 } else {
    //                     member.clickFirstMemberLink();
    //                 }
    //             });
    //             cy.wait(1000);

    //             member.clickFirstMembersListElement();
    //             cy.wait(3000);
                
    //             member.clearName();
    //             cy.wait(1000);

    //             member.typeName(users[index].Displayname);
    //             cy.wait(1000);

    //             member.clearEmail();
    //             cy.wait(1000);

    //             member.typeEmail(users[index].Username);
    //             cy.wait(1000);
                
    //             member.clearNote();

    //             member.typeNote(memberNote);
    //             cy.wait(1000);
                
    //             member.saveCreation();
    //             cy.wait(2000);
                
    //             member.checkErrorMessageExist();
    //             cy.wait(2000);
    //         }
    //     })
    // });

    // it('Test create member without subscribe', () => {
    //     signIn();
    //     cy.fixture('users.json').then((users)=>{
    //         for (let index = 23; index < 26; index++) {
    //             let memberName = `${users[index].Displayname}-${names[Math.floor(Math.random()*names.length)]}`;
    //             let memberEmail = `${emails[Math.floor(Math.random()*emails.length)]}-${users[index].Username}`;
    //             let memberNote = `${users[index].Department}-${descriptions[Math.floor(Math.random()*descriptions.length)]}`;

    //             cy.get('a[href="#/members/"]').its('length').then((length) => {
    //                 if (length === 1) {
    //                     member.clickMemberLink();
    //                 } else {
    //                     member.clickFirstMemberLink();
    //                 }
    //             });
    //             cy.wait(1000);

    //             cy.get('a[href="#/members/new/"]').its('length').then((length) => {
    //                 if (length === 1) {
    //                     member.clickNewMemberLink();
    //                 } else {
    //                     member.clickFirstNewMemberLink();
    //                 }
    //             });	
    //             cy.wait(3000);
                
    //             member.typeName(memberName);
    //             cy.wait(1000);
                
    //             member.typeEmail(memberEmail);
    //             cy.wait(1000);
                
    //             member.typeNote(memberNote);
    //             cy.wait(1000);
                
    //             member.uncheckSubscribe();
    //             cy.wait(1000);

    //             member.saveCreation();
    //             cy.wait(2000);
                
    //             member.returnMembersList();
    //             cy.wait(1000);
                
    //             member.checkNameInList(memberName);
    //             cy.wait(2000);
    //         }
    //     })
    // })
})