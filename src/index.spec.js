const { KVStore } = require('./index')

describe('KVStore', () => {
  it('should throw if not given a kv instance', () => {
    expect(() => new KVStore()).toThrow()
  })

  it('should not throw if given a kv instance', () => {
    expect(() => new KVStore({ kv: true })).not.toThrow()
  })
})
