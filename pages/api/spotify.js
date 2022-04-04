const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

var spotifyApi = new SpotifyWebApi();

spotifyApi.setCredentials({
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  refreshToken: process.env.TOKEN,
  redirectUri: 'http://localhost:3000/callback/',
});

export default function handler(req, res) {
  if (req.method == "GET") {

    spotifyApi.refreshAccessToken().then(function (data) {
      spotifyApi.setAccessToken(data.body["access_token"]);
      spotifyApi
        .getMyCurrentPlayingTrack()
        .then(function (data) {
          res.status(200).json({ data });
        })
        .catch(function (err) {
          console.log("Error: " + err);
          res.status(500);
        });
    });
  } else {
    res.status(400);
  }
}
