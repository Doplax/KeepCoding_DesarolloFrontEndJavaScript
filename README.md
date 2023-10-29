# Wallapop Practice Task List

## Initial Setup
- [ x ] Clone the `sparrest.js` repository
- [ x ] Run `npm install` to install dependencies
- [ x ] Start the server with `npm start`

## Frontend

### Ad Listing
- [ x ] Create HTML structure for the ad listing
- [ ] Display a loader while ads are being loaded
- [ x ] Fetch ads from the appropriate endpoint
- [ x ] Display the ads (image, name, description, price, buy/sell)
- [ ] Implement UI states (empty, error, loading, success)
- [ x ] Navigate to ad details on clicking an ad
- [ ] Show button for creating new ad if user is logged in

### Ad Details
- [ x ] Create HTML structure for ad details
- [ ] Implement UI states (empty, error, loading, success)
- [ x ] Fetch ad details from the backend
- [ ] Show delete button if the logged-in user owns the ad

### Create New Ad
- [ ] Create HTML structure for new ad form
- [ ] Implement UI states (error, loading, success)
- [ ] Send form data to backend to save the new ad

### Login
- [ x ] Create HTML structure for login form
- [ ] Implement UI states (loading, error, success)
- [ x ] Authenticate the user against the backend and store JWT token

### Registration
- [ x ] Create HTML structure for registration form
- [ ] Implement UI states (loading, error, success)
- [ x ] Register the user in the backend

### Footer
- [  ] Create HTML structure for footer

## Optional Features
- [ ] Implement pagination for the ad listing
- [ ] Add search functionality in the ad listing
- [ ] Allow editing an ad if the logged-in user owns the ad
- [ ] Implement tag filtering for ads
- [ ] Make tags dynamic
