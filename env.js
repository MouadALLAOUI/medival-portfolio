const ENV = {
  PROD: {
    API_URL: "https://medival-portfolio-apis.yzz.me/api",
    BACKEND_URL: "https://medival-portfolio-apis.yzz.me",
    API_KEY: 'MEDIEVAL_API_KEY_7c24b777ad2c13880bbfa627d4db70cc' // test api key
  },
  DEV: {
    API_URL: 'http://localhost/medival-portfolio-apis/api',
    BACKEND_URL: 'http://localhost/medival-portfolio',
    API_KEY: 'MEDIEVAL_API_KEY_12345' // test api key
  },
};

const APP_ENV = "PROD";

export default function GET_ENV() {
  return ENV[APP_ENV];
}
