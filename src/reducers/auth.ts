import { ActionType } from '../ActionType'

export type AuthState = {
  isAuthenticated: boolean
  isAdmin: boolean
  email?: string
  uid?: string
  displayName?: string
  photoURL?: string
}

const initialState: AuthState = {
  isAuthenticated: false,
  isAdmin: false
}

export const auth = (
  state: AuthState = initialState,
  { type, payload }
): AuthState => {
  switch (type) {
    case ActionType.SIGN_IN_SUCCESS:
      const {
        displayName,
        isAdmin,
        email,
        uid,
        isAuthenticated,
        photoURL
      }: AuthState = payload

      return {
        ...state,
        displayName,
        isAdmin,
        email,
        uid,
        isAuthenticated,
        photoURL
      }

    case ActionType.SIGN_OUT_SUCCESS:
      return initialState

    default:
      return state
  }
}
