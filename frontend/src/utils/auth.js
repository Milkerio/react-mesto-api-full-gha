export const BASE_URL = "http://localhost:3000";

function checkStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}
export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  }).then(checkStatus);
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
  .then(checkStatus)
};
export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkStatus);
};
