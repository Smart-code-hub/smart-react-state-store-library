function GetUpdateEntitySagaContent(EntityNameTitleCase,EntityNameUpperCase) {
    return `
    export function* Update${EntityNameTitleCase}(action) {
        try {
           
          // we will start loading indicator
          yield put({type:${EntityNameUpperCase}_UPDATE_START});

          // we will update ${EntityNameTitleCase} to db
          const { data } = yield Edit${EntityNameTitleCase}Record(
            action.payload.id,action.payload.data
          );

          //finally update our app state
          yield put({ type: ${EntityNameUpperCase}_UPDATE_SUCCESS, payload: data });
        
        } catch (error) {
          yield put({
            type: ${EntityNameUpperCase}_UPDATE_FAIL,
            payload: error.response ? error.response.data.message:error.message
          });
        }
      }`;
}

module.exports = {GetUpdateEntitySagaContent}
