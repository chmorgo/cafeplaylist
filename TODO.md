Next steps to start turning this into a real applications.

- Move the "backend" (`playlist.js`) into a real web service, rather than a simulation in frontend code.
- Consider adding a "weight" to the likes so that users with many artists aren't given disproportionate control over the playlist.
- The flow for registering and expiring a user is very simplified. We should think about a customer who lingers for hours vs a customer who is present only for 5 minutes. Probably a "ping" event from the app is needed.
- Consider how this would actually integrate with a Spotify API (Can you dynamically modify a playlist while its playing? Do you need defaults for when there are no customers?)
