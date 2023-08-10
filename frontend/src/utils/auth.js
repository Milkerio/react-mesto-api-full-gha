//export const BASE_URL = "http://localhost:3000";
export const BASE_URL = "https://api.mlkr.students.nomoreparties.co"

function checkStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}
export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
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
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
  .then(checkStatus)
  .then((data) => {
    localStorage.setItem('userId', data._id);
    return data;
  })
};
export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      //'Authorization': `Bearer ${token}`,
    },
  })
  .then(checkStatus);
};
