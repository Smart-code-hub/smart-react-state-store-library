
    function GetFetchEntitySagaContent(EntityNameTitleCase,EntityNameUpperCase) {
        return `
    export function* Fetch${EntityNameTitleCase}(action) {
        try {
           
          // we will start loading indicator
          yield put({type:${EntityNameUpperCase}_FETCH_START});

          // we will fetch ${EntityNameTitleCase} from db
          const { data } = yield Fetch${EntityNameTitleCase}s();

          //finally update our app state
          yield put({ type: ${EntityNameUpperCase}_FETCH_SUCCESS, payload: data });
        
        } catch (error) {
          yield put({
            type: ${EntityNameUpperCase}_FETCH_FAIL,
            payload: error.response ? error.response.data.message:error.message
          });
        }
      }`;
    }


    module.exports = {GetFetchEntitySagaContent}