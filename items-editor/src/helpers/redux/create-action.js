// @flow

import { createAction } from 'redux-act'

const PROJECT_NAME = 'ItemsEditor'

export type Action<Data> = string &
  ((data: Data) => { type: string, payload: Data })
// @todo try to add `string & ` to allow direct use of action
export type ActionWithStates<Res, Req> = {|
  (data: Req): { type: string, payload: Req },
  request: Action<Req>,
  success: Action<Res>,
  failure: Action<$Shape<Req & { error: string | Error }>>,
|}

// @todo make Request optional (default void)
type CreateRequestAction = <Response, Request>(
  name: string,
) => ActionWithStates<Response, Request>
export const createRequestAction: CreateRequestAction = name => {
  let action = createAction(`${PROJECT_NAME}/${name.toUpperCase()}`)

  action = Object.assign(action, {
    request: action,
    success: createAction(`${PROJECT_NAME}/${name.toUpperCase()}_SUCCESS`),
    failure: createAction(`${PROJECT_NAME}/${name.toUpperCase()}_FAILURE`),
  })

  return action
}

const createSingleAction = <Payload>(name: string): Action<Payload> =>
  createAction(`${PROJECT_NAME}/${name.toUpperCase()}`)

export default createSingleAction
