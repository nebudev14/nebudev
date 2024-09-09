import { NextApiRequest, NextApiResponse } from "next";

import SpotifyWebApi from "spotify-web-api-node";

require("dotenv").config();

let spotifyApi = new SpotifyWebApi();

spotifyApi.setCredentials({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.TOKEN,
  redirectUri: 'http://localhost:3000/callback/',
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
      res.status(400);
    });

  } else {
    res.status(400);
  }
}
