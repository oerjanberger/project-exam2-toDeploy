# Project Exam 2 RE:ACT
## Description
This is the final project exam for Ørjan Grøttvedt Berger while studying front-end development at Noroff. The exam is made to be a social media website that a student or teacher with a noroff email address can register a user and login to interact with the rest of the students. 
This is the user stories that is the base for what functionality the website provides:

- A user with a stud.noroff.no email may `register`
- A registered user may `login`
- A registered user may update their `avatar` and `banner`
- A registered user may `logout`
- A registered user may view a list of `Posts`
- A registered user may view a list of `Profiles`
- A registered user may view a single `Post` by `id`
- A registered user may view a single `Profile` by `name`
- A registered user may create a `Post`
- A registered user may update a `Post` they own
- A registered user may delete a `Post` they own
- A registered user may create a `Comment` on any `Post`
- A registered user may `react` to any `Post` with an `emoji`
- A registered user may `follow` and `unfollow` another Profile
## How to setup the project locally

Open a new terminal and change directory to the correct folder `cd project-exam-2-oerjanberger`. 

When the correct directory is chosen you can `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### How to login
When the project is open in [http://localhost:3000](http://localhost:3000), you can register a new user with a `@noroff.no` or `@stud.noroff.no` email. Choose a suitable username and password and register your new user. You can now use this user to login to the website.

### Adding images
When you add images to a post or if you are changing your banner/avatar image it is important that you us the full image url. Otherwise the image will not be be show. For example you can use [unsplash](https://unsplash.com) to this. Find the image you want that is free to use. Right click it and select `copy image address`. Paste this in the url field of the form and submit it.



## Report
Following is the full report for the project exam 2. In this report I will take you through all the stages I went trough these seven weeks to make my Project Exam 2. I will take you through my thought processes, decision making, and struggles. I have broken the main section up in smaller pieces where I will take you trough the planning, design and coding. 
### Planning and Research
#### Planning
I had already started to plan how to do the hotel booking site and got a bit confused when we suddenly had to do a different project. Having to work with a new API that I was unfamiliar with created its own problems down the line as well. But adapting to fast changing environment and new ways of doing things is all apart of what we will do in the job as front-end developers so in that regards it was good practice.
I started with planning the steps I had to take to make the site. Not knowing quite what I needed but generalizing and listing the things I could think of. I made the Kanban board in Trello first and then made the Gantt chart in Clickup with the main parts from the Kanban board. This made the Gantt chart a more overall timeline and Kanban a detailed timeline to work from.
I gave myself some extra time both in the design phase and the Coding phase in case I ran into problems that would slow me down. This was a good thing as I ran into several problems when working with react in a more comprehensive way then before and working with an API you have no control over yourself.
On purpose I have not moved the cards on the Trello board to done or doing, since we are delivering it as a URL and not a screenshot.
#### Research
For research I had a good comprehension on how different social media websites looks and did not need that much time to study them, but for the API there was a lot of new details to get to know. Through the requirement from the brief and reading the API documentation it became clear what pages I would need and what functionality the API was able to give me. 

### Design
While designing the page I hid a bit of a wall. I did not want to copy the design of the social media websites I know, which includes almost all of them. This made the process slow down as I was always second guessed my design decisions.
I started with making a quick low fidelity prototype that gave me the basics of what I felt I needed of functionality and used this to get some early feedback to see if I was heading down the correct path. 

For the colour scheme I originally had a playful orange colour as my primary colour but running this through WCAG contrast checker I could not get it to work with any colour for the text, so I used a colour that was darker and browner. When I had time in the final week of the project, I got around to finding a brighter, eye catching and more inviting pink/purple colour.

For the font I did research in what type of font is used on the different social media websites and based on that I found a baseline to go from. It had to be easy to read and inviting, but not be distracting from the content on the page. I feel my choices are good and complement each other nicely.

The Logo and name of the page I decided to not spend to much time on. This is content that would be provided by a client and a graphic designer. But I am happy with the look of the logo and that the name of the site sets the purpose of the website which is reacting and interacting with your fellow students at Noroff.
#### Wireframing
When designing the wireframes, I planned it out based on the research I had done with regards to what pages was needed and what functionality I could expect to be able to deliver based on the API. I made the conscious decision to only have icons in my nav menu. This is based on the user base being young technology students or teachers that would understand the meaning of the icons and have no issue using the site based on it. Through the research of other social media websites, I also saw that this was something they did as well.

The wireframing was relative straight forward seeing as I had the general idea for the layout. I could have been better at making parts into components to make the job a little faster but am overall happy with the process. I ended up changing some things when I was coding the website, that I think made the site better. Among those things is having a create post button not in the nav and locked on the user’s profile page. I felt it was better to have it as a bigger button that was easily accessible and easy to see. There is also some colour and content changes on the follow buttons that I felt made them look more inviting and makes it easier to spot if the user is following a profile or not.

Even though it was not part of the brief I added a contact page and an about page as I feel all websites should have this.

#### Prototyping and testing
The prototyping was simple enough, but I did struggle with content that is being toggled through states which will be displayed behind other parts of the site. This is especially noticeable for the edit post buttons. I could not find a solution for this but felt that even though it was a bug, it would not impair the test users to much when it is used with an instructor and having them explain it. This was my experience when testing the medium fidelity prototype with users. 

I also had to add some more pages for following and followers in the coding part as this is not something I had considered when designing the page but was pointed out in the user testing that it should be added. It was to late to add them to the wireframes as I was already a little behind schedule already.

I on purpose did not add a functionality for adding tags, based on the documentation this was an optional point when adding posts. At the point of making the wireframes and for most of the coding of the website there was also not an easy way to get posts based on tags. Having them be optional and not have default tags in the API would cause chaos because of misspelling and a lot of posts would not have tags.

I originally had a reply icon for the comments but, did not have enough time to code this so I removed it from the wireframes. Hopefully I will be able to work more on this in the portfolio 2 course.

### Coding
Coding started well. I was quickly able to set up the react app and start making the components needed. I felt accomplishment and I felt I could see how far I had come when I was planning the code needed and how to implement it. I was able to use my experience with dev tools to solve most of my problems and for the first two weeks of coding I felt like I was cruising along and would be able to implement functionality I had not thought I would be able to make in time for the deadline. 

Then I hit a wall when I wanted to be able to check if a user was following a profile and having the status of the follow button be correct, without using localstorage, so the status would not reset on different devices or browsers. This gave me problems for almost two weeks. After a few days of trying this, I started working on other parts of the website to distract my brain and hopefully it would come to me. But after a while I was stuck again on another problem, and I eventually had to ask in the discord on how to solve the follow button issue and was able to get help from MJ. He gave me a tutorial of how to use the find() method and this gave me a good understanding on how to solve the problem. I had through trial and error a good idea of how to implement it and had the bones of the components ready to go. After being pointed in the correct direction, I used two hours to solve the problem I had been stuck with on and off for two weeks. I know I could have asked for help much earlier, but this process gave me a lot of new knowledge of React and JavaScript and when there is still time for trial and error it is my opinion, the best way of learning.

One other place I was stuck was the reacting with emojis part of the assignment. I noticed that the count for reactions only took into account how many different emojis was used to react to a post, but not the count of each of these. I had to change my design of how the post card for all posts worked. I do not feel it is visually beautiful having that many emojis shown on the post card, but to be able to show the correct amount of emojis, this was the best way of doing it.
I wanted to be able to toggle an emoji on a post but quickly discovered that this was not part of the functionality of the API. Then I had to find the best way of sending the data of the emoji. 
Seeing all the emojis that was added to the different posts I felt I needed a way to select many emojis and adding them all through hardcoding each would make the code cluttered and take a lot of time. Therefor I searched for a library that I could install via NPM and add as a React component, but this also had to send the correct data. The first one I tried did not send the correct data seeing as it could not be a URL for an image. I found another one that would send the correct data and was able to give the user ability to react with a large selection of emojis. 

Through the coding phase I learnt that the posts and profiles only show the first 100 objects. This was not something that I saw mentioned in the documentation, but it was a question in the forum on discord and a solution to this was added there. 
I had to add buttons so the user could paginate through the posts and profiles. This was not in my opinion implemented in the best way, but it was the only way I could make it work before I reached the deadline for the project. This was some of the last things I was able to implement before sending the page out to user testing.

User testing the page I got feedback that I used to update and change the main colour theme, spacing and some small bugs. There was one user that had a bug where they clicked an existing emoji on a post, and it added to the count of that symbol until there were to many calls to the API server and they got an error. I was not able to replicate this error and could not see a solution for it in time for the deadline

There are still things I would like to implement and fix on the website that I did not have time for or was able to figure out how to do before the deadline. These include:
-	Adding a placeholder image if the image URL gives a CORB error.
-	A message or alert that there are no posts added on a user’s profile, that a post has no comments, that the user is not following anyone or have any followers yet.
-	That a logged in user should be directed to post list and not home. Tried a solution for this but it gave an error when there was no auth.name in localstorage.
-	Add a reply to comment functionality.
-	Maybe add tags, but it still does not feel right to have unless there are default tags.
-	Add a search functionality based on title of post, body of post or author name. This is not easy to do without a change in the API as I could not find a way to get all posts/profiles in one call.
-	I would like to have the pages update with new emojis and following status without the need to refresh the page.


### Conclusion
I am glad I always add more time than I need at the end of the projects when planning them, especially around user testing. There is always more to do, added functionality that is needed or getting stuck on some point in the coding. Having that extra space in the plan really helps with this and makes it possible to deliver on deadline.
I am happy with the look and feel of the page. I feel I have completed the assignment based on the requirements but am also aware there is still more to fix and do. I don’t think there is ever not something that could be fixed on a project and I guess this is one of the key parts of being a front-end developer, there is always more to do.

#### Feedback to Noroff and things I would like to improve
-	I would have liked much more time working with this new Noroff API before getting it thrown at us in our final project, but I appreciate the experience of working in an environment and with tools that is ever changing. 
-	There should be default tags in the API that could be toggled for a post. Similar to discord forum.
-	I wish there were emoji symbols added to the API. Then we could us show those in our projects and they could be toggled to true or false. Having all students that is creating a social media website choose which emojis their projects have and that that everyone have to take those into account on their own website is in my opinion not good practice.


#### Resources

[Images for style tile and wireframes](https://unsplash.com)
[Icons](https://react-icons.github.io/react-icons/)
[Fonts](https://fonts.google.com/)
[NPM package for Emojis](https://www.npmjs.com/package/unicode-emoji)
[Mail to solution](https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea)
[onkeydown to solution](https://reactgo.com/react-trigger-button-click/)

