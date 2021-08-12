/* eslint-disable camelcase */

// end points have inconsistent naming as well as non standard snake_case. pushing it all here
// in order to keep JS standard camelCase compliance

export default {
  // for login.js
  toSnakeCaseLogin: (user_name, password) => ({ user_name, password }),
  toCamelCaseLogin: ({ data: { user_id: user, data: session } }) => ({ user, session }),
  // for isActiveSession.js
  toSnakeCaseIsActive: (user_id, session_id) => ({ user_id, session_id }),
  // for sendCode.js
  toSnakeCaseSendCode: (u_code, u_id, session_id) => ({ u_code, u_id, session_id })
}
