function getFileExtension(fileName) {
  const lastDotIndex = fileName.lastIndexOf('.');
  const fileExtension = lastDotIndex !== -1 ? fileName.slice(lastDotIndex + 1) : '';

  return fileExtension;
}

function getFileSize(units, power) {
  const valueTitles = {
    10: 'Кб',
    20: 'Мб',
    30: 'Гб',
    40: 'Тб',
  };

  power = power || 10;
  const value = units / Math.pow(2, power);

  if (value >= 1024) {
    return getFileSize(units, power + 10);
  }

  return `${value.toFixed(2)} ${valueTitles[power]}`;
}

export { getFileExtension, getFileSize };
