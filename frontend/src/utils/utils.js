
  /* API */
const apiSettings = {
  url: 'http://localhost:3000',
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json'
  }
}
export {apiSettings};