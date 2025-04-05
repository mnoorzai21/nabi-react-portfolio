export function validateEmail(email) {
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(String(email).toLowerCase());
}
