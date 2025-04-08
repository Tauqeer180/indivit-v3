// src/services/utils/session.js
import Cookies from 'js-cookie'

export default class session {
  static set(key, value, options = {}) {
    Cookies.set(key, typeof value === 'string' ? value : JSON.stringify(value), options)
  }

  static get(key) {
    const value = Cookies.get(key)
    if (value === undefined || value === null) return null

    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  }

  static clear() {
    Cookies.remove('token')
    Cookies.remove('user')
  }
}
