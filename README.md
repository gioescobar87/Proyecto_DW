# Proyecto_DW

********************************************
npx create-react-app instagram-clone
Downloads a template React app with basic configuration.
Creates a folder structure (src, public, etc.).
Installs dependencies like react, react-dom, and react-scripts.

********************************************
npm init -y
Initialize backend with npm

********************************************
npm install express mongoose cors dotenv
express for the server, mongoose to interact with MongoDB, and cors to handle cross-origin requests

********************************************
Phase 3: Set Up Google OAuth
Step 1: Create a Google Cloud Project
Visit Google Cloud Console:
Go to https://console.cloud.google.com/.
Create a New Project:
In the top navigation bar, click on the project dropdown (it might say "Select a project").
Click on New Project.
Give your project a name (e.g., "Instagram Replica Project").
Choose your organization or leave it empty if you don't have one.
Click Create.
Step 2: Enable the OAuth Consent Screen
Navigate to the OAuth Consent Screen:

In the left sidebar, find and click on APIs & Services > OAuth consent screen.
Select User Type:

Choose External (this is for apps used by users outside your organization) and click Create.
Set Up OAuth Consent Screen:

App Name: Set a name for your app (e.g., "Instagram Replica").
User Support Email: Enter your email address.
App Domain: This is optional, but you can add your app’s domain if you have one (for development, it can be ignored).
Authorized Domains: Enter localhost or your deployed app's domain if applicable.
Developer Contact Information: Add your email.
Click Save and Continue.
Step 3: Create OAuth Credentials
Go to Credentials Page:

In the left sidebar, click on APIs & Services > Credentials.
Create OAuth Client ID:

Click on + Create Credentials at the top.
Choose OAuth Client ID.
Select Web Application as the application type.
Name: Give it a name (e.g., "Instagram Replica OAuth").
Authorized JavaScript Origins: Add http://localhost:3000 (or your domain if deploying).
Authorized Redirect URIs: Add http://localhost:3000/auth/callback.
Click Create.
Copy Client ID and Client Secret:

After creating, Google will show your Client ID and Client Secret. Copy both, as you’ll need them in the backend.

********************************************
PHASES
**
Phase 1: Initial Setup
Install Necessary Tools:

Install Node.js and npm (Node Package Manager).
Set up MongoDB locally or sign up for MongoDB Atlas for a cloud database.
Install MongoDB Compass for database management.
Create React App:

Use Create React App to scaffold your frontend project.
Set Up Backend:

Create a new directory for your backend, initialize it with npm, and set up a basic Express server.

**
Phase 2: Database Design
Define Database Structure:

Create a Users collection:
Fields: username, email, profilePicture, etc.
Create an Images collection:
Fields: url, description, userId (to associate images with users).
Create the Database:

Using MongoDB Compass, create your database and the defined collections.

**
Phase 3: Authentication with Google
Set Up Firebase for Authentication:

Create a Firebase project in the Firebase Console.
Enable Google authentication.
Get your Firebase configuration settings.
Integrate Firebase with React:

Install Firebase SDK in your React app.
Set up Firebase configuration in your project.
Create Authentication Logic:

Create functions to handle Google login.
Use Firebase Auth to manage user sessions.

**
Phase 4: Picture Management
Set Up Image Upload:

Choose a file upload method (e.g., using a file input or drag-and-drop).
Decide on where to store images (e.g., cloud storage like Firebase Storage or directly in MongoDB).
Create Image Upload API:

Set up an Express route for uploading images.
Implement logic to save images in the database (URL) and associate them with the user.
Create Image Display Component:

Build a component to fetch and display images from the database.
Allow users to see images from all users.

**
Phase 5: User Interaction Features
Follow/Unfollow Functionality (Optional):

Create a basic structure to manage user relationships (followers).
Set up API endpoints for following and unfollowing users.
Comments and Likes (Optional):

Implement a comments system for images.
Add a like feature to images.
Profile Management:

Create a user profile page where users can view their uploaded images.
Allow users to edit their profile information.

**
Phase 6: Styling and User Experience
UI Design:

Design the application layout (header, footer, main content area).
Use CSS frameworks (like Bootstrap or Tailwind CSS) for responsive design.
Improve User Experience:

Add loading spinners while fetching data.
Provide user feedback on actions (like successful uploads or errors).

**
Phase 7: Testing and Deployment
Testing:

Test all features to ensure they work as intended.
Fix any bugs that arise during testing.
Deployment:

Choose a hosting service (like Heroku for the backend and Vercel or Netlify for the frontend).
Deploy your application and configure environment variables (like MongoDB URI and Firebase credentials).
Monitor and Maintain:

Monitor the application for any issues.
Plan for future features and updates based on user feedback.