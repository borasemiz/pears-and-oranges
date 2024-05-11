This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You need to use a NodeJS version that is compatiple with 20. If you use NVM, you can execute `nvm use` (or maybe first `nvm install`) command within the project root. NVM will install the correct version for you.

After you have the correct NodeJS version, run `npm install` to install the dependencies. In order to run the project, you also need to create an `.env.local` file. You can copy the contents of the `.env` file to create one, then replace the `NEXT_PUBLIC_SERVER_METRICS_URL` variable with the one that I told you in the email. This is the WebSocket URL.

After these, you are all set. Run `npm run dev` and head to the `http://localhost:3000`.

## Notes

In the app, I tried to maintain a good amount of user experience and accessibility features with the limited information I had. I might have missed some of the requirements due to the fact that I thought they can be improved with better ones. Such as selecting a server from the list. It didn't feel right to implement this because a user can already see the servers and all their glory in detail. They can click one to go to their detail page.

Also, because it has been quite a while since I worked with charts, they might not be fully responsive. If you open the web page in a mobile phone for the first time, they look perfect. However, if you open the web page on desktop and resize the page, you will realize that they won't respond to changes. If I would be developing this for a real world app, I would have some more time therefore I wouldn't publish it like this. But due to the lack of time and good charting charting libraries that are out-of-the-box compatible with React, I wasn't able to implement the charts fully responsive.

In all, I hope you like to read my code, and the solution that I made. I also hope it satisfies the most important pieces of your specifications.
