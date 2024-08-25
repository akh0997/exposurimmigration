export const getExtension = (fileName: string) => {
  const keysArray = fileName.split(".");
  const last = keysArray[keysArray.length - 1];
  return "." + last;
};
