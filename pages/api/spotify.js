const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

export default function handler(req, res) {
  if (req.method == "GET") {
    const spotify = new SpotifyWebApi({
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
      redirectUri: process.env.REDIRECT_URI,
    });
    console.log(process.env.TOKEN)
    spotify.setAccessToken(process.env.TOKEN);
    spotify
      .getMyCurrentPlayingTrack()
      .then(function (data) {
        res.status(200).json({ data });
      })
      .catch(function (err) {
        console.log("Error: " + err);
        res.status(500);
      });
  } else {
    res.status(400);
  }
}
