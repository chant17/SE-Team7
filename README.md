## SE-Team7
```
Below you will find the needed dependencies as well as warnings to help guide you through the specifics of our project
```

## Dependencies

```impt
"  "axios": "^0.21.0",
    "bootstrap": "^4.5.3",
    "react": "^17.0.0",
    "react-bootstrap": "^1.4.0",
    "react-datepicker": "^3.3.0",
    "react-dom": "^17.0.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.4",
    "reactstrap": "^8.7.1"
    "argon2": "^0.27.0",
    "axios": "^0.21.0",
    "bcrypt": "^5.0.0",
    "body-parser": "^1.19.0",
    "connect-mongo": "^3.2.0",
    "cookie-parser": "^1.4.5",
    "cookieparser": "^0.1.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "express-validation": "^3.0.6",
    "express-validator": "^6.6.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.10.9",
    "morgan": "^1.10.0",
    "session": "^0.1.0"
```

## Installation

```yarn

yarn install

```

## Usage

```specifics
To start each folder which is ready to all merge, we separated it for convenience
cd into each specific folder

and open 2 separate terminals / one if all merged

yarn start
for all 2

Please configure your own api key for the mailing service in the dotenv file
It is inside the server folder under survey-result folder.

nodemon server.js

```

## Installation

```
Important note, I hid the API key for sendgrid in dotenv. However when the company uses this, they should make their own personal business account which will then give them their own api key.

Additional note: Please allow the server on EC2 to host on proxy: localhost 3000 or picked port just in case of CORS policy exception.
```

## Contributing

```Makers

Jeremy Bayangos
Chantha Mak
Muhammad Abbas

```
