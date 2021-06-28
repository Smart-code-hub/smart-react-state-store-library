const V = require('voca')
const {GetFetchReducerContent} = require('./getFetchReducerContent');
const {GetUpdateReducerContent} = require('./getUpdateReducerContent');
const {GetAddReducerContent ,GetRemoveReducerContent} = require('./getAddReducerConttent');


const GenerateReducersContent = entity => {
  const EntityNameUpperCase = V.upperCase(entity.name);
  return `import {
    ${EntityNameUpperCase}_FETCH_SUCCESS,
    ${EntityNameUpperCase}_FETCH_START,
    ${EntityNameUpperCase}_FETCH_FAIL,

    ${EntityNameUpperCase}_ADD_START,
    ${EntityNameUpperCase}_ADD_SUCCESS,
    ${EntityNameUpperCase}_ADD_FAIL,

    ${EntityNameUpperCase}_UPDATE_START,
    ${EntityNameUpperCase}_UPDATE_SUCCESS,
    ${EntityNameUpperCase}_UPDATE_FAIL,

    ${EntityNameUpperCase}_REMOVE_START,
    ${EntityNameUpperCase}_REMOVE_SUCCESS,
    ${EntityNameUpperCase}_REMOVE_FAIL,

   } from "../Actions/${entity.name}Actions";

  const initialState = {
    ${entity.name}s: [],
    loading:false,
    error:null
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
     
       ${GetFetchReducerContent(entity.name)}
  

    
      ${GetUpdateReducerContent(entity.name)}

     
      ${GetAddReducerContent(entity.name)}


    
      ${GetRemoveReducerContent(entity.name)}
      default:
        return state;
    }
  };
  `;
};
module.exports = { GenerateReducersContent };
