const getFileExtension = (fileName) => {
  const lastDotIndex = fileName.lastIndexOf('.');
  const fileExtension =
    lastDotIndex !== -1 ? fileName.slice(lastDotIndex + 1) : '';

  return fileExtension;
};

export { getFileExtension };
