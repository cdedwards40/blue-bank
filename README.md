# Blue Bank

This app is a three tier banking application that allows authenticated users to do normal banking operations (deposit, withdrawl, and check the balance) on their bank account. The app has evolved from a Bad Bank (no authentication) to having robust user authentication as well as a database for data persistence.

## Installation

1. Simply clone the repository
2. Run a MongoDB instance in Docker by executing the command `docker run -p 27017:27017 --name bank -d mongodb`
3. Run `npm install` to install the node dependencies for the project
4. Run the backend server by executing the command `node index.js`
5. Run the frontend server by executing the command `node public/index.js`
4. Open your web browser to `http://localhost:8080/`

## Usage

Once the application is running, you can visit the different pages and perform different banking operations.

![](https://github.com/cdedwards40/blue-bank/screenshot.png)

## Tech Stack

This application uses:
 - NodeJS
 - ReactJS
 - Express
 - MongoDB

## Support

Use this program at your own risk. If it does not behave correctly, challenge yourself to find the issues and share your fixes with the rest of the community!

## Roadmap of Future Improvements

In the future I would like to refactor the code a bit.

## License

MIT License

Copyright (c) [2024] [Chris Edwards]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

