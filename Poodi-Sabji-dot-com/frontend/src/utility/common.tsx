export const BACKEND_DEV_URL = `http://localhost:3000/api`;

export const isNullOrUndefined = (value: any): boolean => {
  if (value === undefined || value === null) return true;
  else return false;
};
