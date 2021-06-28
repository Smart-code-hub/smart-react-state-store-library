const V = require('voca')

function GetFetchReducerContent(name) {
    const EntityNameUpperCase = V.upperCase(name);

    return `
    case ${EntityNameUpperCase}_FETCH_SUCCESS:
      return { ...state, ${name}s: payload,error:null, loading: false };
    case ${EntityNameUpperCase}_FETCH_START:
      return { ...state, loading: true ,error:null};
    case ${EntityNameUpperCase}_FETCH_FAIL:
      return { ...state, error: payload, loading: false };`
}
module.exports = {GetFetchReducerContent}