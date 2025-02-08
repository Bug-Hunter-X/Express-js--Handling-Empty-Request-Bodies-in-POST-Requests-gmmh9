# Express.js - Handling Empty Request Bodies in POST Requests

This repository demonstrates a common error in Express.js applications: failing to handle empty request bodies in POST requests.  The code does not check for the presence of data before accessing `req.body`, resulting in potential errors.

## The Bug

The original code attempts to process a POST request to `/users` without first checking if `req.body` is empty.  If a client sends an empty POST request, this leads to unexpected behavior or errors.

## The Solution

The solution demonstrates how to check for empty request bodies using `Object.keys(req.body).length === 0`. If the request body is empty, it returns an appropriate error response (400 Bad Request) to the client.  If data is present, it continues processing the request as before.

## How to run the code

1. Clone this repository
2. Navigate to the repository's directory
3. Run `npm install express`
4. Run `node bug.js` (to see the bug in action)
5. Run `node bugSolution.js` (to see the solution)