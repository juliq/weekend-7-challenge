# Redux Feedback Loop

 For this assignment, I created a feedback form modeled after Prime's system. Feedback is collected over 4 views, and when all steps are complete, the app saves the feedback in the database. In the Admin view, an administrator is able to see all the collected feedback. 

### SETUP

First, I created my database and tables using the provided `data.sql` file. 

### ADD NEW FEEDBACK

NOTE: I used Redux to store my data across views.

I created a multi-part form that allows users to leave feedback for today. 
There are 4 views for the form parts, each view has one question to be answered.
They include:
1- How are you feeling today? 
This question is answered with a number, preferably 1-5.

2- How well are you understanding the content? 
This question is also answered with a number, preferably 1-5.

3- How well are you being supported? 
This question is also answered with a number, preferably 1-5.

4- Any comments you want to leave? 
This question is answered by typing text into the box.

Since there is no nav bar, each part of the form is its own route. Clicking "Next" moves the user to the appropriate step in the process.

 When the form is complete, the submission is saved in the database. The user sees a submission success page.

### DISPLAY FEEDBACK

All of the existing feedback is displayed in a table at the route `/admin`. The most recently added feedback should appear at the top of the list -- I am still working on this. 

The administrator may delete existing feedback. The administrator is prompted to confirm prior to deleting the feedback from the database.

## STRETCH GOALS

- I have updated the README.md.
- I would like to improve the styling of the app using Material-UI, etc.

