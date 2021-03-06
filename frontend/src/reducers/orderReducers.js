import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCESS,
  ORDER_PAY_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCESS,
  ORDER_MY_ORDERS_REQUEST,
  ORDER_MY_ORDERS_SUCESS,
  ORDER_MY_ORDERS_FAIL,
  ORDER_MY_ORDERS_RESET,
  ORDER_ALL_FAIL,
  ORDER_ALL_SUCESS,
  ORDER_ALL_REQUEST,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_RESET,
} from '../constants/orderConstant'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      }
    case ORDER_CREATE_SUCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      }
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ORDER_DETAILS_SUCESS:
      return {
        loading: false,
        order: action.payload,
      }
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      }
    case ORDER_PAY_SUCESS:
      return {
        loading: false,
        success: true,
      }
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_PAY_RESET:
      return {}
    default:
      return state
  }
}

export const getMyOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_MY_ORDERS_REQUEST:
      return {
        loading: true,
      }
    case ORDER_MY_ORDERS_SUCESS:
      return {
        loading: false,
        orders: action.payload,
      }
    case ORDER_MY_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_MY_ORDERS_RESET:
      return { orders: [] }
    default:
      return state
  }
}

export const getAllOrdersReducer = (state = { orders:[] }, action) => {
  switch (action.type) {
    case ORDER_ALL_REQUEST:
      return {
        loading: true,
      }
    case ORDER_ALL_SUCESS:
      return {
        loading: false,
        orders: action.payload,
      }
    case ORDER_ALL_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const orderDeliveredReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELIVER_REQUEST:
      return {
        loading: true,
      }
    case ORDER_DELIVER_SUCESS:
      return {
        loading: false,
        success: true,
      }
    case ORDER_DELIVER_FAIL:
      return {
        loading: false,
        error: action.DELIVERload,
      }
    case ORDER_DELIVER_RESET:
      return {}
    default:
      return state
  }
}

