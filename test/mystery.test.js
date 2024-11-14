import { mystery2 } from '../src/mystery';

test('Years not divisible by 4 return a falsy result', () => {
  // Arrange
  const years = [1903, 2001, 2019, 1, 3, 2];

  years.forEach((year) => {
    // Act
    const result = mystery2(year);

    // Assert
    expect(result).toBeFalsy();
  });
});

test('Years divisible by 400 return a truthy result', () => {
  // Arrange
  const years = [1600, 2000, 1200];

  years.forEach((year) => {
    // Act
    const result = mystery2(year);

    // Assert
    expect(result).toBeTruthy();
  });
});

test('Years divisible by 100 return a falsy result', () => {
  // Arrange
  const years = [1900, 1800, 1700, 100];

  years.forEach((year) => {
    // Act
    const result = mystery2(year);

    // Assert
    expect(result).toBeFalsy();
  });
});

test('Years that are divisible by four return a truthy result', () => {
  // Arrange
  const years = [1904, 1988, 2004, 2012];

  years.forEach((year) => {
    // Act
    const result = mystery2(year);

    // Assert
    expect(result).toBeTruthy();
  });
});
