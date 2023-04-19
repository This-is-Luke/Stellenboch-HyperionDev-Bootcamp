// An Email Simulation
/*
create your email class here
*/
// First I needed a class to create the email object
class Email 
{
constructor(emailContents, fromAddress) 
{
    this.hasBeenRead = false
    this.emailContents = emailContents
    this.isSpam = false
    this.fromAddress = fromAddress
}
}

// Then I need a function for the email object to mark itself as read
function markAsRead(email) 
{
email.hasBeenRead = true
}

// Then I need a function for the email object to mark itself as spam
function markAsSpam(email) 
{
email.isSpam = true
}

// Then I need a variable array to store the emails
let inbox = []

// Then I need a function to push an email to the inbox
function addEmail(fromAddress, emailContents) 
{
const newEmail = new Email(emailContents, fromAddress)
inbox.push(newEmail)
}

// Then I need a function to return the number of emails in the inbox
function getCount() 
{
return inbox.length
}

// Then I need a function to return the email at a given index
function getEmail(i) 
{
if (i >= 0 && i < inbox.length) 
{
    markAsRead(inbox[i])
    return inbox[i]
}
return null
}

// Then I need a function to return the unread emails if called and not show emails marked as spam
function getUnreadEmails() 
{
return inbox.filter(email => !email.hasBeenRead && !email.isSpam)
}

// Then I need a function to return the spam emails if called
function getSpamEmails() 
{
return inbox.filter(email => email.isSpam)
}

// Then I need a function to delete an email at a given index
function deleteEmail(i) 
{
if (i >= 0 && i < inbox.length) {
    inbox.splice(i, 1)
}
}

// Add test emails to the inbox
addEmail("jim@example.com", "Hello, how are you?");
addEmail("jane@example.com", "Meeting tomorrow at 2 PM");
addEmail("spam@example.com", "You won a million dollars!!!");
addEmail("mary@example.com", "Lunch on Friday?");
addEmail("bill@example.com", "Thx for the invoice, R12599 paid");
addEmail("lisa@example.com", "How is the HyperionDev Bootcamp going?");

// Log all emails in the inbox
inbox.forEach((email, index) => {
    console.log(`[${index}] From: ${email.fromAddress}\nContent: ${email.emailContents}\n`);
});


userChoice = "";
while(userChoice != "7"){
	userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?");

	if(userChoice == "1")
	{	// Read email
		// Prompt the user for the index of the email they want to read
		const index = parseInt(prompt("Enter the index of the email you want to read:"));
		//grab the email at the given index
        const email = getEmail(index);
		// Simply log the email contents to the console
        if (email) 
		{
            console.log(`From: ${email.fromAddress}nContent: ${email.emailContents}`);
        } 
		else 
		{
            console.log("Invalid index");
        }
	}
	else if(userChoice == "2")
	{   
		// Mark spam
		// Prompt the user for the index of the email they want to mark as spam
		const index = parseInt(prompt("Enter the index of the email you want to mark as spam:"));
		//loop through the inbox array and mark the email at the given index as spam
        if (index >= 0 && index < inbox.length) 
		{
            markAsSpam(inbox[index]);
            console.log("Email marked as spam");
        }
		// If the index is invalid, log an error message to the console 
		else 
		{
            console.log("Invalid index");
        }
	}
	else if(userChoice == "3")
	{
		// Send email
		// Prompt the user for the email address and email contents
        const fromAddress = prompt("Enter your email address:");
        const emailContents = prompt("Enter the email content:");
		// Add the email to the inbox(should be outbox but for now will just log to the end of the array, see index >6 to view)
        addEmail(fromAddress, emailContents);
        console.log("Email sent");

	}
	else if(userChoice == "4")
	{
		// Delete email
		// Prompt the user for the index of the email they want to delete
        const index = parseInt(prompt("Enter the index of the email you want to delete:"));
		// Delete the email at the given index by calling the deleteEmail function
        deleteEmail(index);
        console.log("Email deleted");

	}
	else if(userChoice == "5")
	{
		// View spam emails
		// Loop through the inbox array and log the spam emails to the console
        const spamEmails = getSpamEmails();
        spamEmails.forEach((email, index) => 
		{
            console.log(`[${index}] From: ${email.fromAddress}\nContent: ${email.emailContents}\n`);
        });
	}
	else if(userChoice == "6")
	{
		// View unread emails
		// Loop through the inbox array and log the unread emails to the console
        const unreadEmails = getUnreadEmails();
        unreadEmails.forEach((email, index) => 
		{
            console.log(`[${index}] From: ${email.fromAddress}\nContent: ${email.emailContents}\n`);
        });
	}
	else if(userChoice == "7")
	{
		console.log("Cheers!");
	}
	else
	{
		console.log("Oops - incorrect input");
	}
}


//this assignment is starting to show me the power of javascript to create essentially a full email management sytem with just a few lines of simple code.
//Although some of the topics could use more examples and explinations in video form, so far I am enjoying the course and the assignments.