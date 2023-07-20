import { test } from '@japa/runner'
import { allCountries } from 'country-telephone-data'
import { isos } from '../src/countries'

test.group('countries', () => {
  test('country lists match', ({ assert }) => {
    const countrySet = new Set(allCountries.map((c) => c.iso2.trim().toUpperCase()))
    assert.isTrue(isos.size === countrySet.size)
    isos.forEach((iso) => assert.isTrue(countrySet.has(iso), `missing ${iso}`))
  })
})
