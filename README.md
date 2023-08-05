# JWTStreamerOnJS

To install all dependencies, please run the below command

```shell:
npm install dotenv axios fs jsforce jsonwebtoken moment querystring url
```

After all the dependencies are installed, Fill the .env file with

//*Consumer key of the connected app created at salesforce end*
<br/>CONSUMER_KEY="" <br/><br/>

//*User's Username you are trying to establish the connection with*
<br/>USERNAME="" <br/><br/>

//*Based on the organization you are trying to connect with, for sandboxes use **https://test.salesforce.com** and for production use **https://login.salesforce.com***
<br/>TEST_URL="https://test.salesforce.com" <br/><br/>

//*Event URL you are trying to configure this with ex. /event/SomeEventName__e*
<br/>CHANNEL_URL="" <br/><br/>

//*File Location where the PEM file of private key is stored*
<br/>PEM_FILE_LOCATION="" <br/><br/>

To Run the snippet, use the below command

```shell:
node index.js
```