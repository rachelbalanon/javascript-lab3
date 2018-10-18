"use sctrict";

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    
    add(info) {
        this.contacts.push(info);
    }
    
    deleteAt(index){
        this.contacts.splice(index, 1)
    }
    
    print(){
        for (let contact of this.contacts) {
            console.log(contact);
        }
    }

    deleteByName(name){
        let deleteName = this.contacts.map(function (person) {
            return person.name; 
        }).indexOf(name);
        this.contacts.splice(deleteName, 1);
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

let addressBook = new AddressBook();

while (true) {
    let choice = prompt("Would you like to add, delete, print, or quit?");
    if (choice === "add") {
        let name = prompt("What is their name?");
        let email = prompt("What is their email?");
        let phone = prompt("What is their phone number?");
        let relation = prompt("What is their relation to you?")
        addressBook.add(new Contact(name, email, phone, relation));
    } else if (choice === "delete") {
        let deletion = prompt("Would you like to delete by index or name?");
        if (deletion === "index") {        
            let index = prompt("Which index number would you like to delete?");
            addressBook.deleteAt(index);
        } else if (deletion === "name") {
            let name = prompt("Which name would you like to delete?");
            addressBook.deleteByName(name);
        }
    } else if (choice === "print") {
        addressBook.print();
    } else if (choice === "quit") {
        break;
    }
}
