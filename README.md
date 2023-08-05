
# JWT Salesforce Streaming Example

This repository contains a Node.js code snippet that demonstrates how to use JSON Web Token (JWT) authentication to establish a connection with Salesforce and stream data from a specified channel. The code utilizes libraries such as Axios for HTTP requests, JSforce for Salesforce integration, and Moment for time manipulation.

## Prerequisites

Before running the code, make sure you have the following prerequisites:

1. Node.js installed on your machine.
2. Access to a Salesforce account with necessary permissions.
3. Salesforce Connected App configured to generate a JWT token.

## Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/soomjeet/JWTStreamerOnJS.git
   cd JWTStreamerOnJS
   ```

2. Install the required dependencies using npm:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project directory with the following content:

   ```dotenv
   CONSUMER_KEY=your_salesforce_connected_app_consumer_key
   USERNAME=your_salesforce_username
   TEST_URL=https://your-salesforce-instance-url
   CHANNEL_URL=/event/Your_Channel_Name
   PEM_FILE_LOCATION=path_to_your_private_key.pem
   ```

   Replace the placeholders with your actual Salesforce Connected App credentials and private key file location.

4. Run the code:

   ```bash
   node index.js
   ```

## Code Explanation

The code snippet in `index.js` accomplishes the following:

1. Loads required libraries using the `require` statements.
2. Reads the private key from the provided PEM file.
3. Defines a function `jwtStreamer` for JWT-based Salesforce streaming.
4. Generates a JWT token using the provided credentials and private key.
5. Requests an OAuth token using the generated JWT token.
6. Creates a Salesforce connection using the OAuth token.
7. Sets up streaming using Faye and subscribes to a specified channel.
8. Logs incoming data from the channel.

## Notes

- This example focuses on demonstrating JWT-based authentication and streaming setup. It's important to handle errors, implement proper security practices, and manage connection issues for production use.

## License

This code is licensed under the [MIT License](LICENSE).
```

Replace placeholders like `your-username`, `your_salesforce_connected_app_consumer_key`, `your_salesforce_username`, `https://your-salesforce-instance-url`, `Your_Channel_Name`, and `path_to_your_private_key.pem` with actual values.

Remember that the README should provide clear instructions for others to understand, set up, and use your code.