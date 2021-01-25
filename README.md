1. Clone the repo
2. `npm install`
3. `npm test` to run the test
4. Test for server-side that testing expired cookie should fails because we expect the cookie value to be undefined (just like in client-side/browser), but we got value instead.