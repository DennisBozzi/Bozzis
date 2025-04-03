import axios from "axios";
import { clientId, clientSecret } from "@/utils/env";
import { addDateToken, addToken, getDateToken, getToken } from "@/utils/localStorage";

const tokenUrl = "https://us.battle.net/oauth/token";

async function getAccessToken() {
  const res = await axios.post(
    tokenUrl,
    "grant_type=client_credentials", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
    },
  });

  addToken(res.data.access_token);
  addDateToken();
}

async function checkToken() {
  var dateToken = getDateToken();
  var authToken = getToken();
  var dayInMiliseconds = 86400000;

  if (dateToken === null || authToken === null) {
    await getAccessToken();
    return getToken();
  }

  if (Number(dateToken) + dayInMiliseconds < Date.now()) {
    await getAccessToken();
    return getToken();
  }

  return authToken;
}

export { checkToken };
