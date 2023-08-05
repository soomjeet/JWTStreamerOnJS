# JWTStreamerOnJS

To install all dependencies, please run the below command

```node:
npm install dotenv axios fs jsforce jsonwebtoken moment querystring url
```

After all the dependencies are installed, Fill the .env file with

//*Consumer key of the connected app created at salesforce end*
CONSUMER_KEY="" 

//*User's Username you are trying to establish the connection with*
USERNAME=""

//*Based on the organization you are trying to connect with, for sandboxes use **https://test.salesforce.com** and for production use **https://login.salesforce.com***
TEST_URL="https://test.salesforce.com"

//*Event URL you are trying to configure this with ex. /event/SomeEventName__e*
CHANNEL_URL="" 

//*File Location where the PEM file of private key is stored*
PEM_FILE_LOCATION=""