const V = require('voca')

function GetAddReducerContent(name) {
    const EntityNameUpperCase = V.upperCase(name);

    return `
    case ${EntityNameUpperCase}_ADD_SUCCESS:
        return {
            ...state,
            ${name}s: [payload, ...state.${name}s],
            loading: false,
            error:null
          };
      case ${EntityNameUpperCase}_ADD_START:
        return { ...state, loading: true ,error:null };
      case ${EntityNameUpperCase}_ADD_FAIL:
        return { ...state, error: payload, loading: false };
     `
}



function GetRemoveReducerContent(name){
  const EntityNameUpperCase = V.upperCase(name);
    return `  
    
    
    case ${EntityNameUpperCase}_REMOVE_SUCCESS:
        return {
            ...state,
    
            ${name}s: [...state.${name}s.filter(a => a._id != payload)],
            loading: false,
            error:null
          };
      case ${EntityNameUpperCase}_REMOVE_START:
        return { ...state, loading: true ,error:null};
      case ${EntityNameUpperCase}_REMOVE_FAIL:
        return { ...state, error: payload, loading: false };
     `
    
}
module.exports = {GetAddReducerContent,GetRemoveReducerContent}