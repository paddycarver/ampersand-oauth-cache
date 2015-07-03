import Model from 'ampersand-model'
import debounce from 'lodash.debounce'

export default Model.extend({
  url: 'https://auth.server/path/to/token/endpoint',
  props: {
    access_token: 'string',
    refresh_token: 'string',
    expires_in: 'int',
    token_created: 'date',
    profileID: 'string',
  },
  initialize () {
    this.debouncedWriteToCache = debounce(this.writeToCache, 250)
  },
  writeToCache () {
    console.log('Writing data to localStorage!')
    const data = JSON.stringify(this)
    localStorage.setItem('me', data)
  },
  load () {
    const data = localStorage.getItem('me')
    if (data) {
      const loaded = JSON.parse(data)
      this.set(loaded)
    }
    return this
  },
})
