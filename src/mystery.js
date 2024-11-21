// Non-refactored
export const mystery2 = (num) => {
  if (num % 400 === 0) {
    return true;
  } else if (num % 100 === 0) {
    return false;
  } else if (num % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// Refactored
export const mystery2 = num => {
  return num % 400 === 0 || (num % 4 === 0 && num % 100 !== 0);
};
