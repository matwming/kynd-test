# Welcome to the Kynd Front End Test

Hey, Thanks for taking the time to do this test. The goal for us is to get an idea of your familiarity with core parts of our front end tech stack. We are also trying to get some insight into how you approach development tasks and are able to communicate what you are doing to the team. We don't expect you to spend more than a couple of hours on this so don't worry about going above and beyond the scope provided. Also if there are any parts you get stuck on and can't figure out with some quick googling please just skip it and make a note. 

### The Task
We want to add a new "Members" page to our web app. Our UX designer has provided a mockup for what the new page should look like. Your job is to implement the front end changes for this new page.

1. View the [mockups](https://www.figma.com/file/k2LGJ9gxe8NJDGsEG5egg0/FE-Dev-Test) (If you create a free figma account you should be able to select elements and see styling setails, spacing measurements and comments) 
2. Make a clone of this project to make your changes in (You will be sending us a link to your own github repository when you are finsihed the test)
3. Go through all the project setup steps listed at the end of this readme. 
4. Build the new "Members" page following the mockups.
5. Use the "About" page in the app to communicate back to us a brief summary (can be bullet points) of:
   - What you added/changed and the rationale behind it
   - Any improvements you would suggest to either the UX worflow, the UI design, or the code
   - Any assumptions you had to make because information was missing
   - Any roadblocks or issues you encountered
6. When you are done send us a link to your repository so we can check it out.  

### What we are looking for
- Nav menu item for "Members" is showing and it takes us to the new page
- The members are loaded and displayed when the button is pushed.
- There are no bugs or compile time errors
- Can you use the Vuex store following standard practices and did you clearly explain the rationale behind any additions/changes you make.
- Can you create Vue components following standard practices and are any new components you write consistent with the existing components.
- Did you clearly explain the rationale behind each new component you introduce and how you compose them.
- Can you style the components to accurately follow the mockups for both Mobile and Desktop.
- How well you use tailwind's utility classes to save on writing custom CSS.
- Are you able to figure out a custom CSS solution to achieve styles that tailwind can't do.
- Are you looking at the rest of the project to avoid duplicating logic that already exists.
- Is your code easy to read, using Typescript's features correctly and generally efficient.
- Are you clearly communicating on the "about" page
- We *don't* care about niche browser support. We will be testing your app in Chrome.

### Tips
- If using VSCode the "Vetur" & "Tailwind CSS IntelliSense" can make things easier.
- There are comments on the mockups with more details
- The colours used in figma should correspond to colours in Tailwind (except for the background colour of circle on the member cards). If we missed one just use the closest match.     


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```
