import { test } from '@japa/runner'
import { Phone } from '../src/phone'

test.group('phone.serialization', () => {
  test('Able to Serialize and Deserialize a Phone Object', ({ assert }) => {
    const phone = new Phone('202-456-1414', 'US')
    assert.equal(phone.raw, '12024561414')
    assert.equal(phone.country, 'US')
    const serialized = phone.serialize()
    assert.isString(serialized)
    assert.equal(
      serialized,
      'eyJwaG9uZSI6IjEyMDI0NTYxNDE0IiwiY291bnRyeSI6IlVTIiwiaGFzaCI6ImV5SndhRzl1WlNJNklqRXlNREkwTlRZeE5ERTBJaXdpWTI5MWJuUnllU0k2SWxWVEluMD0ifQ=='
    )
    const deserialized = Phone.deserialize(serialized)
    assert.equal(deserialized.raw, '12024561414')
    assert.equal(deserialized.country, 'US')
    assert.deepEqual(phone, deserialized)
  })
})
