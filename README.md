# cafeplaylist

This is a quick mockup inside a browser to explore how a shared playlist app would work. A real app would involve an backend service and a client app to trigger it.

- `playlist.js` is the simulated "backend" service.
- `index.js` is the "frontend" UI harness for testing.

This simulation represents:

- Customers entering a venue (a cafe) and an app on their phone advertising their music tastes to the service.
- Their collective preferences are aggregated by the backend service (into a frequency graph) and sent to an external Spotify API.
- Preferences for each user will expire after a set time period and fall out of the generated playlist. 

How to run:

- Open `index.html` in a browser.
- Use the buttons in the "frontend" to simulate users walking into the venue and advertising their artist preferences to the "backend".
- You can adjust the time for the user's preferences to expire from the backend. The options are in seconds for purposes of testing, in a real application it would more likely be in minutes.
- The "backend" playlist will regenerate as needed. You can see the simulated events to the Spotify API logged in the JS console.

See also: `TODO.md`
