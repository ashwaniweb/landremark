# Land Remark:

You are to create a simple responsive web application – working title: “Landmark Remark” - that allows users to save location based notes on a map. These notes can be displayed on the map where they were saved and viewed by the user that created the note as well as other users of the application. The application must demonstrate the functionality captured in the following user stories:

- As a user (of the application) I can see my current location on a map
- As a user I can save a short note at my current location
- As a user I can see notes that I have saved at the location they were saved on themap
- As a user I can see the location, text, and user-name of notes other users havesaved
- As a user I have the ability to search for a note based on contained text or user-name

# Tech Stack:

The Web Application must use node js and function as a Single-Page Application (SPA), leveraging react to deliver the user interface. You are encouraged to leverage appropriate CSS to ensure that the application delivers a pleasant (if not professionally designed) user experience.

You may use any JavaScript library in developing your application. The application should demonstrate responsive design, and function as expected on both desktop and mobile phone (eg. iPhone 7) form factors (only).

You are encouraged to follow test-driven development practices in developing the application.

## Folder Structure

After creation, your project should look like this:

```
Landmark-Remark/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    /components
    home.jsx
      /common
        content.jsx
        map.jsx
        modal.jsx
        notes.jsx
        topbar.jsx
      /myNotes
        index.jsx
      /otherNotes
        index.jsx
    /data
      data.json
    /scss
      style.scss
    App.jsx
    index.css
    index.jsX
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Dependencies

- google-maps-react
  Using for google map in react
- react-router-bootstrap
  For routing link with bootstrap
- react-router-dom
  For react routing
- react-bootstrap
  For UI and theme components
- sass-loader
  For using css pre-processor
- react-custom-scrollbars
  For scrollbar so ui looks good

## Time Spent

- 4 hours on to search free google api key so play with google map (now it's paid)
- 4 hours on to integrate google map with location
- 6 hours on search
- 2 hours on Create custom data
- 12 hours to rest of part like ui and components creation

## known issues or limitations of the solution

Google map with current loaded in 2 click not one
