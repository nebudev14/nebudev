declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      REDIRECT_URI: string;
      TOKEN: string;
      REACT_APP_DOMAIN: string;
    }
  }
}

export {};
