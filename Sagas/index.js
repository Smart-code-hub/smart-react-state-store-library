const V = require("voca");
const { GetAddEntitySagaContent } = require("./getAddEntitySagaContent");

const { GetFetchEntitySagaContent } = require("./getFetchEntitySagaContent");
const { GetUpdateEntitySagaContent } = require("./getUpdateEntitySagaContent");
const { GetRemoveEntitySagaContent } = require("./getRemoveEntitySaga");

function GetSagaContent(entity) {
  const EntityNameUpperCase = V.upperCase(entity.name);
  const EntityNameCamelCase = V.camelCase(entity.name);
  const EntityNameTitleCase = V.titleCase(entity.name);

  return `
    
    ${LoadActionTypes(EntityNameCamelCase,EntityNameUpperCase)}
    ${LoadOtherImports(EntityNameTitleCase,EntityNameCamelCase,entity)}

  
    ${GetAddEntitySagaContent(EntityNameTitleCase, EntityNameUpperCase)}
    ${GetUpdateEntitySagaContent(EntityNameTitleCase, EntityNameUpperCase)}
    ${GetRemoveEntitySagaContent(EntityNameTitleCase, EntityNameUpperCase)}
    ${GetFetchEntitySagaContent(EntityNameTitleCase, EntityNameUpperCase)}

    `;
}
const LoadOtherImports = (EntityNameTitleCase,EntityNameCamelCase,entity) => {
    return `  import {
        Create${EntityNameTitleCase}Record ,
        Edit${EntityNameTitleCase}Record,
        Fetch${EntityNameTitleCase}s,
        Delete${EntityNameTitleCase}
    } from    
    '../../Services/${EntityNameTitleCase}/${entity.name.toLowerCase()}Service'`

}
const LoadActionTypes = (EntityNameCamelCase,EntityNameUpperCase) => {
  return `  import {
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
    } from '../Actions/${EntityNameCamelCase}Actions';
import {put} from "redux-saga/effects";
    
    `;
};

module.exports = { GetSagaContent };
