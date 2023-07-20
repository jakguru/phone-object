import { test } from '@japa/runner'
import { Phone } from '../src/phone'

test.group('phone', () => {
  test('should create a valid phone instance', ({ assert }) => {
    const phone = new Phone('202-456-1414', 'US')
    assert.isTrue(phone.valid)
    assert.isTrue(phone.mobile)
    assert.equal(phone.raw, '12024561414')
    assert.equal(phone.country, 'US')
    assert.equal(phone.type, 'FIXED_LINE_OR_MOBILE')
    assert.equal(phone.national, '(202) 456-1414')
    assert.equal(phone.international, '+1 202-456-1414')
    assert.equal(phone.e164, '+12024561414')
    assert.equal(phone.timezone, 'America/New_York')
  })

  test('should create an invalid phone instance', ({ assert }) => {
    const phone = new Phone('123')
    assert.isFalse(phone.valid)
    assert.isFalse(phone.mobile)
    assert.equal(phone.raw, '123')
    assert.equal(phone.country, 'XX')
    assert.equal(phone.type, 'INVALID')
    assert.equal(phone.national, '123')
    assert.equal(phone.international, '123')
    assert.equal(phone.e164, '123')
    assert.equal(phone.timezone, 'UTC')
  })

  test('should be able to guess the country from a phone number with an international prefix', ({
    assert,
  }) => {
    const phone = new Phone('+1 (202) 456 1414')
    assert.isTrue(phone.valid)
    assert.isTrue(phone.mobile)
    assert.equal(phone.raw, '12024561414')
    assert.equal(phone.country, 'US')
    assert.equal(phone.type, 'FIXED_LINE_OR_MOBILE')
    assert.equal(phone.national, '(202) 456-1414')
    assert.equal(phone.international, '+1 202-456-1414')
    assert.equal(phone.e164, '+12024561414')
    assert.equal(phone.timezone, 'America/New_York')
  })

  test('should be able to guess the country from a phone number without an international prefix', ({
    assert,
  }) => {
    const phone = new Phone('(202) 456 1414')
    assert.isTrue(phone.valid)
    assert.isTrue(phone.mobile)
    assert.equal(phone.raw, '12024561414')
    assert.equal(phone.country, 'US')
    assert.equal(phone.type, 'FIXED_LINE_OR_MOBILE')
    assert.equal(phone.national, '(202) 456-1414')
    assert.equal(phone.international, '+1 202-456-1414')
    assert.equal(phone.e164, '+12024561414')
    assert.equal(phone.timezone, 'America/New_York')
  })

  test('should be able to automatically correct for North American Dialing Plan numbers', ({
    assert,
  }) => {
    const phone = new Phone('202-456-1414', 'CA')
    assert.isTrue(phone.valid)
    assert.isTrue(phone.mobile)
    assert.equal(phone.raw, '12024561414')
    assert.equal(phone.country, 'US')
    assert.equal(phone.type, 'FIXED_LINE_OR_MOBILE')
    assert.equal(phone.national, '(202) 456-1414')
    assert.equal(phone.international, '+1 202-456-1414')
    assert.equal(phone.e164, '+12024561414')
    assert.equal(phone.timezone, 'America/New_York')
  })
})
