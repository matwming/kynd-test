# Welcome to the Kynd Front End Test

Hey, Thanks for taking the time to do this test. 

The goal for us, is to get an idea of:
- Your familiarity with core parts of our front end tech stack
- How you approach development tasks and plan out code changes
- Can you clearly communicate what you are doing to the team.

We don't expect you to spend more than four hours on this. It is okay if you don't complete everything. If there are any parts you get stuck on and can't figure out with some quick googling please just skip it and make a note. 

### The Task
We want to add a new "Members" page to our web app. Our UX designer has provided a mockup for what the new page should look like. Your job is to implement the front end changes for this new page.

1. View the [mockups](https://www.figma.com/file/k2LGJ9gxe8NJDGsEG5egg0/FE-Dev-Test) (Don't worry about creating an account) 
2. Make a clone of this project to make your changes in (You will be sending us a link to your own github repository when you are finished the test)
3. Go through all the project setup steps listed at the end of this readme. 
4. Build the new "Members" page following the mockups.
5. Use the "About" page in the app to communicate back to us a brief summary (can be bullet points) of:
   - What you added/changed and the rationale behind it
   - Any improvements you would suggest to either the UX worflow, the UI design, or the code
   - Any assumptions you had to make because information was missing
   - Any roadblocks or issues you encountered
6. When you are done send us a link to your repository so we can check it out.  

### What we are looking for
- Is the nav menu item for "Members" showing and linking to the new page?
- Are the members loaded and displayed when the button is pushed?
- Is the app free of bugs and errors?
- Did you use the Vuex store following standard practices and clearly explain the rationale behind any additions/changes you made?
- Did your Vue components following standard practices and are any new components you write consistent with the existing components?
- Did you clearly explain the rationale behind each new component you introduce and how you compose them?
- Are the components accurately following the mockups for both Mobile and Desktop?
- Did you use modern CSS features and Tailwind's utility classes?
- Did you look at the rest of the project to avoid duplicating logic that already exists?
- Is your code easy to read, well-typed and efficient?
- Did you clearly communicate the info we asked for on the "about" page?

### Tips
- We will be testing your app in the Chrome browser.
- We are currently using Vue 2 (Upgrading to Vue 3 is in the works). [Vue 2 docs](https://v2.vuejs.org/v2/guide/)
- [Docs for Vue2 TS decorators](https://github.com/kaorun343/vue-property-decorator#readme)
- [Docs for Vuex decorators](https://github.com/ktsn/vuex-class)
- If using VSCode the "Vetur" & "Tailwind CSS IntelliSense" plugins can make things easier.
- The colours used in figma should correspond to colours in Tailwind (except for the background colour of circle on the member cards). [Tailwind docs](https://tailwindcss.com/docs/background-color)

## Project setup
```
yarn install
```

### Build and start development server (hot-reloads on save)
```
yarn serve
```
