import app from 'ampersand-app'
import Me from './me'

window.app = app.extend({
  init () {
    this.me = new Me().load()
    this.me.on('change', this.me.debouncedWriteToCache)
  }
})

app.init()
