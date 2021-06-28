
    function GetAddEntitySagaContent(EntityNameTitleCase,EntityNameUpperCase) {
        return `
    export function* Add${EntityNameTitleCase}(action) {
        try {
           
          // we will start loading indicator
          yield put({type:${EntityNameUpperCase}_ADD_START});

          // we will add ${EntityNameTitleCase} to db
          const { data } = yield Create${EntityNameTitleCase}Record(
            action.payload
          );

          //finally update our app state
          yield put({ type: ${EntityNameUpperCase}_ADD_SUCCESS, payload: data });
        
        } catch (error) {
          yield put({
            type: ${EntityNameUpperCase}_ADD_FAIL,
            payload: error.response ? error.response.data.message:error.message
          });
        }
      }`;
    }


    module.exports = {GetAddEntitySagaContent}