

export function* AddCustomer(action) {
  try {
    // we will start loading indicator
    yield put({ type: CUSTOMER_ADD_START });

    // we will add Customer to db
    const { data } = yield CustomerService.AddCustomer({
      ...action.payload
    });

    //finally update our app state
    yield put({ type: Customer_ADD_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: CUSTOMER_ADD_FAIL,
      payload: error.response.data.message
    });
  }
}

export function* UpdateCustomer(action) {
  try {
    // we will start loading indicator
    yield put({ type: CUSTOMER_UPDATE_START });

    // we will add Customer to db
    const { data } = yield CustomerService.UpdateCustomer({
      ...action.payload
    });

    //finally update our app state
    yield put({ type: Customer_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: CUSTOMER_UPDATE_FAIL,
      payload: error.response.data.message
    });
  }
}

export function* RemoveCustomer(action) {
  try {
    // we will start loading indicator
    yield put({ type: CUSTOMER_REMOVE_START });

    // we will add Customer to db
    const { data } = yield CustomerService.RemoveCustomer({
      ...action.payload
    });

    //finally update our remove state
    yield put({ type: Customer_REMOVE_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({
      type: CUSTOMER_REMOVE_FAIL,
      payload: error.response.data.message
    });
  }
}

export function* FetchCustomer(action) {
  try {
    // we will start loading indicator
    yield put({ type: CUSTOMER_FETCH_START });

    // we will fetch Customer from db
    const { data } = yield CustomerService.FetchCustomer();

    //finally update our app state
    yield put({ type: Customer_FETCH_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: CUSTOMER_FETCH_FAIL,
      payload: error.response.data.message
    });
  }
}
