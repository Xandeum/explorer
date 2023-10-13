// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,

    // dsn: 'https://5efdc15b4828434fbe949b5daed472be@o434108.ingest.sentry.io/5390542',
    dsn: 'https://b881ce918bc26b5e262b3f7605809dd9@o4506030177714176.ingest.sentry.io/4506030184660992',

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,
});
