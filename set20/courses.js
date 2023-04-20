//First I started with a base class called courses, with a method to display the contact website for the course.
class Courses 
{
    constructor(courseName, contactWebsite) 
    {
        this.courseName = courseName;
        this.contactWebsite = contactWebsite;
    }
    //in here to differentiate between the two classes I used the console.log with "+" to separate the two classes
    displayContactWebsite() 
    {   
        console.log("++++++++++ Display Contact Website +++++++++++++")
        console.log(`Contact website for ${this.courseName}: ${this.contactWebsite}`);
        console.log("++++++++++++++++++++++++++++++++")
    }
}

//Then I created a class called subjects that extends the courses class, with a method to display the subject name, subject code and the course name.
class Subjects extends Courses {
    constructor(courseName, contactWebsite, subjectName, subjectCode) {
        super(courseName, contactWebsite);
        this.subjectName = subjectName;
        this.subjectCode = subjectCode;
    }

    display() 
    {   /*In here I just used console.log with "=" to separate the two classes so that when its logged to console it is easier to read ad see which is 
        part of the main class and which is part of the sub class*/
        console.log("========= 'Display' Method ==========")
        console.log(`This is ${this.subjectName}, it is part of the ${this.courseName} course and the subject code is ${this.subjectCode}`);
        console.log("================================")
    }

    displayCourse() 
    {
        console.log("========= 'Display Course' Method ==========")
        console.log(`This subject (${this.subjectName}) belongs to the ${this.courseName} course.`);
        console.log("================================")
    }
}

//Then I called the classes and methods to display the information in the console by declaring the variables and passing in the methods.
let myCourse = new Courses("fullstack development", "https://www.hyperiondev.com/");
myCourse.displayContactWebsite();
let mySubject = new Subjects("fullstack development", "https://www.hyperiondev.com/", "Introduction to OOP", "L1T19");
mySubject.display();
mySubject.displayCourse();
let mySubject2 = new Subjects("fullstack development", "https://www.hyperiondev.com/", "Introduction to OOP-Inheritance", "L1T20");
mySubject2.display();
mySubject2.displayCourse();
let mySubject3 = new Subjects("fullstack development", "https://www.hyperiondev.com/", "Capstone Project - OOP", "L1T21");
mySubject3.display();
mySubject3.displayCourse();
let mySubject4 = new Subjects("fullstack development", "https://www.hyperiondev.com/", "Introduction to HTML", "L1T22");
mySubject4.display();
mySubject4.displayCourse();

