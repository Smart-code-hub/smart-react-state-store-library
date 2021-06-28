const V = require('voca')

function GetUpdateReducerContent(name) {
    const EntityNameUpperCase = V.upperCase(name);

    return `
    case ${EntityNameUpperCase}_UPDATE_SUCCESS:
        {
          let items = state.${name}s;
          const current${name} = items.find(
            a => a._id == payload._id
          );

          const index = items.indexOf(current${name});

          items[index] = payload;
          return {
            ...state,

            ${name}s: [ ... items ],
            loading: false,
            error:null
          };
        }
      case ${EntityNameUpperCase}_UPDATE_START:
        return { ...state, loading: true ,error:null};
      case ${EntityNameUpperCase}_UPDATE_FAIL:
        return { ...state, error: payload, loading: false };
      `
}
module.exports = {GetUpdateReducerContent}