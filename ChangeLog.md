#Adventurer

### Updates:

##### Alpha 0.0.1 (9.28.13)
- created login page
- max username char limit 50
- added create account page
- added generic redirect page

##### Alpha 0.0.3 (9.30.13)
- created login SQL and attached it to the create account page
- formatted generic redirect page and attached it to most redirects
- fixed SQL query on create account
- revamped login page to scale properly
- fixed login query
- created main page
- tweaked php.ini

##### Alpha 0.0.5 (10.1.13)
- got updates to work on main page
- created admin page for access 3+
- buttons on admin page work
- clear button on update submit works

##### Alpha 0.0.6 (10.5.13)
- cleaning up some php -> html
- changed the look of the updates
- added new character page
- revamped color scheme for main page
- added new character sheet

##### Alpha 0.0.8 (10.6.13)
- cheebus finished layout of charsheet *DRINK*
- fixed color scheme of login and create account
- made it so you cannot create an account with a space
- changed some of the charsheet layout
- made class and race features text areas larger

##### Alpha 0.0.9 (10.7.13)
- implemented jquery
- successfully ajaxed to char.php
- created create a char layout

##### Alpha 0.1.0 (10.9.13)
- restructured directory
- started step by step char maker
- created custom sword pics

##### Alpha 0.1.1 (10.10.13)
- finished char maker layout with sword buttons (custom)
- created account page for button to send to
- create template1
- created index.js for ALL THE BUTTONS! :D

##### Alpha 0.1.1 (10.11.13)
- created create a char layout
- ajaxed to init for username on newchar.html

##### Alpha 0.1.1 (10.12.13)
- added red x for missing fields in create a char

##### Alpha 0.1.1 (10.14.13)
- added json file for accounts to be accessed by ajax
- html pages will now check if you are currently logged in and redirect if not

##### Alpha 0.1.5 (10.15.13)
- finished database for new character

##### Alpha 0.1.5 (10.21.21)
- finished int values on char page
- recreated login page as an HTML page
- hauled everything off c9 now using wampstack
- got phpmyadmin up and running
- started mysql server

##### Alpha 0.1.5(10.22.13)
- created new main html
- revamped character list
- changed most all redirects

##### Alpha 0.1.6(10.22.13)
- Added entire directory to github

##### Alpha 0.1.6(10.27.13)
- Revamped charactersheet

##### Alpha 0.1.6(10/23/13)
- revamped character sheet to 2.0

##### Alpha 0.1.6(11.16.13)
- added DM Tools button to main page
- created DM tools page
- added menu buttons to DM Tools page

##### Alpha 0.1.6(11.22.13)
- merged in new character sheet
- added ajax for login check on charactersheet
- trashed senses label and kept senses static
- increased width of console to 700px
- changed main button labels
- got character loading to work on the new charactersheet

##### Alpha 0.1.8(11.23.13)
- fixed github repository
- delete character prompts work
- removed from IP from .at.vu
- internal IP changed, remapped routers port forwarding
- fixed console sizing
- revamped readme to work also with MD format
- revamped menu buttons
- delete character button now works
- aligned the console layout more

##### Alpha 0.1.8(11.24.13)
- added powers to console
- fixed console tables widths
- created list icon
- got rid of menubuttons and title on character sheet

##### Alpha 0.1.8(11/25/13)
- created delete field button for add char
- added add field button to new char
- added delete field button to new char

##### Alpha 0.1.8(12/3/13)
- added test button to new char page

##### Alpha 0.1.8(12/4/13)
- race feature list now adds and deletes properly
- changed delete feature on all text inputs on new character sheet
- named all new text inputs on new character sheet with array values
- added bottom margin to add icon
- got rid of test button

##### Alpha 0.1.8(12/5/13)
- fully finished additional input fields on new char sheet *DRINK*
- pulled at will powers to character sheet
- pulled encounter powers to character sheet
- pulled daily powers to character sheet
- pulled utility powers to character sheet
- pulled features list to character sheet
- pulled feats and languages to character sheet
- gave style to the new additions to the character sheet
- added check boxes to powers to indicate used or not
- pulled skills to character sheet, not fully functional
- pulled equipment and inventory to character sheet equipment not fully functional
- created wealth tab on character sheet page
- created notes tab on character sheet page
- rezised tables in console to fit width
- resize right column in console to fit length
- fixed basic info labels
- equipment sheet fully pulled

##### Alpha 0.1.8(12/6/13)
- pulled in skills with existing json data
- created function for rounding odd numbers down (modifiers) *DRINK!*
- created function for modifiers implementing rounding function! *DRINK!* (its friday...)
- skills now work perfectly!!!!!!
- ability mods now work!
- skills that you have chosen are highlighted
- finished attacks equations
- finished defense equations

##### Alpha 0.1.8(12/7/13)
- fixed ability scores layout
- fixed skill layout
- added highlight to shown tabs on character sheet

##### Alpha 0.1.8(1/17/14)
- reimaged entire computer and reloaded page from github

##### Alpha 0.1.8(1/18/14)
- got login working with new SQL database
- added json db for dmtools users

##### Alpha 0.1.8(1/20/14)
- added init php page for dmtools
- able to now change your name in the character sheet
- fixed the character select screen not loading the newest character changes (appended changing variable to json file load so the browser will not cache the page)
- implemented change attribute on focusout
- created function for changing character sheet data

##### Alpha 0.1.8(1/26/14)
- transfered github repo to Epihedron
- deleted local jquery file and pointed to google api jquery
- now syncing with branches on github

##### Alpha 0.2.0(2/5/14)
- completely ported the web server to a Raspberry Pi!!
- installed SQL server on the Pi
- got SQL to work with current PHP settings
- switched name of database to adventurer
- configured git hub with Pi
- set Pis private IP to static with port routed on router
- testing git branches

##### Alpha 0.2.0(2/6/14)
- commented out JSON character creation files from PHP
- cleaned up htdocs folder a bit
- cleaned up newchar.php

##### Alpha 0.2.0(2/7/14)
- created SQL tables for cfeatures,rfeatures,feats,powers,and inventory (items)

##### Alpha 0.2.0(2/9/14)
- cleaned up newchar.php and created function for php array to sql tables
- created tables in SQL for characters

##### Alpha 0.2.0(2/10/14)
- added function to update SQL with new character info. The function has the option to either insert or update

##### Alpha 0.2.0(2/11/14)
- modified insert for initial character data
- trashed passive perc and passive ins inputs on new char worksheet
- got all fields to populate into SQL from new char page. *DRINK*
- JSON script commented out
- added languages table to SQL
- turned on input validation on new char page

##### Alpha 0.2.0(2/12/14)
- working on character select page to query database for users characters
- got character select page to work by sending JSON from php to javascript

##### Alpha 0.2.0(2/13/14)
- got character select to show your characters
- got character select delete button to work properly with SQL
- character select now chooses your character but doesnt fill everything out on the character sheet yet


##### Alpha 0.2.0(2/18/14)
- created a change log file to clean up readme