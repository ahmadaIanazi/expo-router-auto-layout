/**
 * Clean and convert a string to camelCase and capitalized formats
 * @param {string} s - The input string to be cleaned and formatted
 * @returns {object} - An object containing formatted strings and extension
 */

const nameFormatter = (s) => {
  if (!s) {
    return {
      camelCase: 'empty',
      capitalized: 'Empty',
      camelCaseWithExtension: 'empty.jsx',
      capitalizedWithExtension: 'Empty.jsx',
      extension: '.jsx',
    };
  }

  const extension = s.substring(s.lastIndexOf('.') + 1);
  const removeExtension = s.replace(extension,'')
  const cleaned = removeExtension.replace(/[^a-zA-Z0-9_]/g, '')

  const camelCase = cleaned.replace(/[_\s]([a-z])/g, (_, char) =>
    char.toUpperCase()
  )

  const capitalized = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  const camelCaseWithExtension = camelCase + '.' + extension;
  const capitalizedWithExtension = capitalized + '.' + extension;

  return {
    camelCase,
    capitalized,
    camelCaseWithExtension,
    capitalizedWithExtension,
    extension: '.' + extension,
  };
};

module.exports = { nameFormatter };
