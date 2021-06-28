const prettier = require("prettier");
const { GenerateActionsContent } = require("./Actions/index");
const { GenerateReducersContent } = require("./Reducers/index");
const { GetSagaContent } = require("./Sagas/index");

const ProcessState = entity => {
  try {
    // we will generate all components here related to crud
    const actionContent = GenerateActionsContent(entity);
    const reducerConent = GenerateReducersContent(entity);
    const sagaContent = GetSagaContent(entity);

  
    console.log(prettier.format(sagaContent));
    

    return [
      {
        data: prettier.format(actionContent),
        statePath: `State/Actions/${entity.name.toLowerCase()}Actions.js`
      },
      {
        data: prettier.format(reducerConent),
        statePath: `State/Reducers/${entity.name.toLowerCase()}Reducer.js`
      },
      {
        data: prettier.format(sagaContent),
        statePath: `State/Sagas/${entity.name.toLowerCase()}Saga.js`
      }
    ];
  } catch (error) {
    return { error };
  }
};

module.exports = {
  ProcessState
};
