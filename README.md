# 2021 Docker challenge

Hello adventurer, and welcome to the 2021 Docker Challenge.

If you have some basic understanding of Angular or a similar Single Page Application framework and want to try your hand at setting up Docker containers for some Nodejs, MongoDB and file servers, this challenge might be just right for you.

Be warned, though, that this challenge will not teach you anything about Docker containers, Nodejs, MongoDB or file servers, it only provides a challenge to be undertaken by you and your jolly developer friends.  
Of course you can, and probably will, learn a thing or two by looking at the submissions of those brave enough to accept this challenge.  
But the main opportunity for learning consists of you browsing the internet and trying out different things while looking for the best way to complete this challenge!

If this sounds like a challenge for you, continue reading below.

## Intro
This repository provides a simple `express` server connecting to a local `MongoDB` instance and a relatively simple `Angular` frontend for the "Mama Mia Pizzeria" establishment.

The main challenge consists of providing a production grade Docker solution to serve the database, backend API and front-end project each on their own server.

Besides the main challenge there a couple of side quests you can try to complete to deepen your learnings and broaden your knowledge. 

Note: The code in this project is not 100% ready to be plugged into a Docker solution. You are free to, and probably will have to, change any line of code to fit your needs.

Merge Requests for bugfixes, code improvements, additional features or even additional goals are very much appreciated.

## Disclaimer
The code in this project is not intended to be optimal, well thought out, readable, or safe to run in production, it is just a slightly amusing motivation to make learning a bit more interesting. Likewise the proposed challenge is not meant to be the best solution for the problem and is most certainly way over-engineered for running a project of this size.

Licensed content (you will probably know what I am referring to very soon) is used solely for educational purposes and must not be used by you or anyone else outside the context of this challenge.

The Score page is just a general indication of how well you are doing, doesn't even test half of the objectives of this challenge and is easy to cheat. All submissions for this challenge will be judged and evaluated by the other challengees.

## Challenge
You are free to solve the challenge however you desire, but keep in mind the goal of this challenge is to acquire knowledge about and experience with Docker.

**Main goals**
* Setup a `MongoDB` container with persisting data between restarts
* Setup a `Nodejs` container to serve the express API
* Setup a `file server` (with Apache or otherwise) container to serve the client code _(serving the client from your express server is allowed but maybe not in the spirit of this challenge)_
* Setup a `reverse proxy` container to forward traffic to `localhost/api` to the `express` API and the client traffic to the `file server`'s `index.html` page _(opting for Angular's hash routing is allowed but maybe not in the spirit of this challenge)_

**Additional goals**
* Serve the API and client over HTTPS (with `Let's encrypt`, `Caddy server` or otherwise)
* Setup a static subdomain `api.localhost` for the `express` API
* Setup a static subdomain `admin.localhost` for the `localhost/admin` client route

**Advanced goal**
* Setup dynamic subdomains for each of the pizzas (e.g. `margherita.localhost` for `localhost/pizzas/margherita`)

## Getting started
1. Fork this project to your personal GitHub or GitLab (TODO EVEN POSSIBLE?) account.
1. Launch a local instance of MongoDB _(if needed, change the `mongodbConnectionString` in `server/src/db/db.js`)_
1. Install the server NPM dependencies by running `npm install` from the server directory
1. Install the client NPM dependencies by running `npm install` from the client directory
1. Start the API server with `npm run start:server` from the root directory
1. Start the client dev server with `npm run start:client` from the root directory

With the API and client servers up and running you are free to surf to http://localhost:4200 and explore the "Mama Mia Pizzeria" website.

This is where the challenge begins, the "Mama Mia Pizzeria" website is currently being server by your local nodejs express server connecting to your local MongoDB server and another Angular dev server serving the client files. Now it is your job to turn this setup into a Docker solution with containers, local networks and anything else you need or desire.

Good luck!

## Accepting the challenge
If you made it this far, I am sure you have what it takes to accept and complete (at least part of) this challenge.

To accept the challenge you simply have to
1. Go to the nearest window, open it, lean out and shout from the top of your lungs "I, <your name>, accept the 2021 Docker challenge!"
1. Fork this project, add your name to the challengees list, and initiate a Merge Request

**Challengees**
* Jonas

_The deadline for submitting your solution is technically December 31st 2021, but you are free to complete this challenge at your own pace and when you see fit._
