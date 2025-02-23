import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://e5c5b3625bf9adcacf92eea4d461b987@o65272.ingest.us.sentry.io/4508869990350848",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
