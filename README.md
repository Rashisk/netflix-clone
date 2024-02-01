# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Netflix GPT

- Create React App
- Configurec Tailwind CSS
- Header
- Routing of App

- Login Form
- Sign up Form
- Form Validation
- useRef Hook

- Firebase setup
- Deploying our app to Production
- Create Sign Up user Account
- Implement Sign In User Api

- Created Redux store with user slice
- Implemented Sign out
- Update Profile
- Fetch from TmDB movies
- Added hardcoded values to constant file

- Get Data from TmDB api and created an app and access token
- Custom hook for now playing movies
- Created movieSlice
- Updated store with movie data
- Planning for main container and secondary container
- Fetched data for trailer video ( basically - took one object from the list and from its id - we can fire one more api to get the trailer for that object)
- Updated store with trailer video data ( one slice can have many sub categories for storing data ( state))
- Updated the youtube video and make it autoplay and mute
- CSS for making looks awesome

- BUilding Secondary Component
- Build MOvie List 
Build Movie Card 
- TMDB Image CDN Url 
- usePopularMovies Custom Hook 

- GPT Search Feature
- GPT Search Bar 
- Multilingual feature in our app ( BONUS )
- Integrate GPT Apis
- GPT Search OPen API key and call 
- Memoization 
- Fetched GPT Movie Suggestions from TMDB
- Created GPT slice 
- Reused movie list component to make movie suggestions 
- Adding .env file and putting it to gitignore 
- Made our site Responsive 
- 


- Make the app multilingal(At least in Hindi);

- Make display page on clicking a card 

- Add streaming
Implement standard video playback features like play, pause, rewind, and fast forward.
Include volume controls and subtitle options.

- Continue Watching:

Save the user's progress in a movie or TV show for easy resume.

- Social Integration:

Allow users to share their favorite content on social media.
Incorporate social logins and user reviews.

- User Feedback:

Include a feedback mechanism for users to report issues and provide suggestions.

# A Big Learning - Reusability of components

# Steps to deploy app -


- Login to firebasee and select authentication
- npm i -g firebase tools
- firebase login
- firebase init, then select hosting
- firebase deploy
