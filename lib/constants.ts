export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_REGEX = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);
export const PASSWORD_REGEX_ERROR =
  "The password must include lowercase letters, uppercase letters, numbers, and special characters.";
