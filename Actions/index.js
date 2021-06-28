const V = require('voca');

const GenerateActionsContent = entity => {
  const EntityNameUpperCase = V.upperCase(entity.name);
  return `

export const ${EntityNameUpperCase}_FETCH = "${EntityNameUpperCase}_FETCH";
export const ${EntityNameUpperCase}_FETCH_SUCCESS = "${EntityNameUpperCase}_FETCH_SUCCESS";
export const ${EntityNameUpperCase}_FETCH_START = "${EntityNameUpperCase}_FETCH_START";
export const ${EntityNameUpperCase}_FETCH_FAIL = "${EntityNameUpperCase}_FETCH_FAIL";

  export const ${EntityNameUpperCase}_ADD = "${EntityNameUpperCase}_ADD";
export const ${EntityNameUpperCase}_ADD_START = "${EntityNameUpperCase}_ADD_START";
export const ${EntityNameUpperCase}_ADD_SUCCESS = "${EntityNameUpperCase}_ADD_SUCCESS";
export const ${EntityNameUpperCase}_ADD_FAIL = "${EntityNameUpperCase}_ADD_FAIL";

export const ${EntityNameUpperCase}_UPDATE = "${EntityNameUpperCase}_UPDATE";
export const ${EntityNameUpperCase}_UPDATE_START = "${EntityNameUpperCase}_UPDATE_START";
export const ${EntityNameUpperCase}_UPDATE_SUCCESS = "${EntityNameUpperCase}_UPDATE_SUCCESS";
export const ${EntityNameUpperCase}_UPDATE_FAIL = "${EntityNameUpperCase}_UPDATE_FAIL";

export const ${EntityNameUpperCase}_REMOVE = "${EntityNameUpperCase}_REMOVE";
export const ${EntityNameUpperCase}_REMOVE_START = "${EntityNameUpperCase}_REMOVE_START";
export const ${EntityNameUpperCase}_REMOVE_SUCCESS = "${EntityNameUpperCase}_REMOVE_SUCCESS";
export const ${EntityNameUpperCase}_REMOVE_FAIL = "${EntityNameUpperCase}_REMOVE_FAIL";

  `;
};
module.exports = { GenerateActionsContent };
