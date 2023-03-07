# Password Generator

## Description

In my current role with the company that employs me I often have to access and review sensitive data.
In order to provide a better layer of security to this information, I wanted to build a website that
would generate a random password.  I then could use that website to generate a new secure password
for anytime I may need it while accessing and manipulating this data.

I began by defining a variable for the length of the password.  Depending on the security level of 
the data I'm working with I figured the parameter of between 8-128 characters would be suitable.  
I then created a prompt to ask how long the password should be and defined the parameters.  I stored
the user input in the length variable and then wrote an if function to ensure that the user input
met the criteria.  If it did not I created an alert informing the user of their mistake and used a return 
function to get them back to the beginning length prompt.

Next I defined each character variable and stored a boolean value of false within them.  This is so 
the if function works when checking to see if they selected at least one.  Then using each of the four
types of characters I created a confir alert to store a boolean value.  This allows the user to pick if they
want Uppercase, lowercase, numbers and/or special characters in their password.  Then i created the if function 
referenced above in order to make sure they selected at least one type of character using && to denote "or".

Then I created the variabel chars in order to store the possible characters for each of the four variables.  
This was done by declaring the variable equal to "" and putting the characters for each character set within
it's variable then using + to add the possible characters to the specific variable.

Penultimately I created the variable password and then used a for function plus random math to generate
the password based on the stored length variable and the boolean returns on the select if you want this 
kind of character variable.  

Finally the last function writes the password and then uses query selector to store it in the display
box.  

## Screenshot

![PassGen](https://user-images.githubusercontent.com/122305724/221269686-f5c44cd1-a12d-4efe-a59e-215ccfc28da7.png)

## Link

https://sleonny.github.io/Password-Generator/

## Technologies Used

VS Code Editor  

Github  

Google Search Engine  

ChatGPT  

## Existing Code Used

Starter code cloned from https://github.com/coding-boot-camp/friendly-parakeet/tree/main/Develop

## Credit

Sean Leonard

## License

MIT License

