export const getSingleObjectsByProperty = ({ array, property, exclude }) => {
  return array.reduce((acc, curr) => {
    const value = curr[property];
    if (!exclude?.includes(value) && !acc.find(item => item[property] === value)) {
      acc.push(curr);
    }
    return acc;
  }, []);
};
