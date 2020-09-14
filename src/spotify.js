// From: https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

// Click login button
// redirect to spotify login
// redirect to home page after login

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:3000/";
const clientId = "9dbc557589304b16bbe670ef505ee5c3";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
