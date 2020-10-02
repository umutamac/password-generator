# UT Austin Coding Bootcamp - 03 JavaScript: Password Generator

This project is aimed at creating a password generator based on a series of questions to user. 
User can choose to include uppercase letters, numbers, and special characters, and user is asked how long they want the generated password to be.
The system will decline lengths that are shorter than 8 or longer than 128 characters, and re-ask the user to type in a suitable length.

Based on users' answers, extra characters are added to the available character pool for the generator to pick from. 
Then, based on chosen length, math.random() is used to pick a character and add it to the output strings many times as necessary until the desired length is reached.

Note that this project is not suitable for creating secure passwords. This project is used to practice prompt(), confirm(), Math() functions and manipulate and output strings.