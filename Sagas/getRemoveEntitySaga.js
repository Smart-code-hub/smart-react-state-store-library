function GetRemoveEntitySagaContent(EntityNameTitleCase,EntityNameUpperCase) {
    return `
    export function* Remove${EntityNameTitleCase}(action) {
        try {
           
          // we will start loading indicator
          yield put({type:${EntityNameUpperCase}_REMOVE_START});

          // we will remove ${EntityNameTitleCase} to db
          const { data } = yield Delete${EntityNameTitleCase}( 
            action.payload
          );

          //finally update our remove state
          yield put({ type: ${EntityNameUpperCase}_REMOVE_SUCCESS, payload: action.payload });
        
        } catch (error) {
          yield put({
            type: ${EntityNameUpperCase}_REMOVE_FAIL,
            payload: error.response ? error.response.data.message:error.message
          });
        }
      }`;
}

module.exports = {GetRemoveEntitySagaContent}
