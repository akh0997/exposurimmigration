export const URLS = {
  LOGIN: "/auth/sign-in",
  REFRESH_TOKEN: "/auth/get-refresh-token",
  PROPERTIES: "/properties",
  SIGNED_URL: "/media/signed-url",
};

export const TOKEN_REFRESH_TIME_IN_MILLI_SEC = 5 * 60 * 1000;
export const SKIP_TOKEN_URL = [
  URLS.LOGIN,
  URLS.REFRESH_TOKEN,
  "https://backendmedia1.s3.amazonaws.com/",
  "https://profile-img.s3.us-east-2.amazonaws.com/",
  "https://test919292.s3.us-east-2.amazonaws.com/",
];
