/**
 * The `allCountries` variable is imported from the `country-telephone-data` library and represents an array of objects containing information about all countries recognized by the library.
 * @type {Array<Country>}
 */
import { allCountries } from 'country-telephone-data'

/**
 * The `libPhoneNumber` module is imported from the `google-libphonenumber` library and contains functions for parsing, formatting, and validating international phone numbers.
 * @namespace
 * @alias libPhoneNumber
 */
import * as libPhoneNumber from 'google-libphonenumber'

/**
 * The `Country` type is imported from the `./countries` module and represents a country's ISO 3166-1 alpha-2 code
 */
import type { Country } from './countries'

/**
 * The `CountryOrUnknown` type is imported from the `./countries` module and represents a country's ISO 3166-1 alpha-2 code, or an unknown country represented by the `'XX'` code.
 * @typedef {Country | 'XX'} CountryOrUnknown
 */
import type { CountryOrUnknown } from './countries'

/**
 * The `CountryTimezone` type is imported from the `./countries` module and represents a luxon timezone name
 * @typedef {string} CountryTimezone
 */
import type { CountryTimezone } from './countries'

/**
 * The `isos` variable is imported from the `./countries` module and represents a set of all ISO 3166-1 alpha-2 codes recognized by the library.
 * @type {Set<Country>}
 */
import { isos } from './countries'

/**
 * The `timezones` variable is imported from the `./countries` module and represents an object containing information about all timezones recognized by the library.
 * @type {Object<Country, CountryTimezone>}
 */
import { timezones } from './countries'

/**
 * The `areaCodeMap` variable is imported from the `./nampa` module and represents a map of NANPA area codes to NANPA country codes.
 */
import { areaCodeMap } from './nampa'

/**
 * The `nanpaCountries` variable is imported from the `./nampa` module and represents a list of NANPA country codes.
 */
import { nanpaCountries } from './nampa'

/**
 * The `RawPhoneType` type represents the phone number which should be parsed. It can be either a string or a number.
 * @typedef {string | number} RawPhoneType
 */
export type RawPhoneType = string | number
/**
 * The `RawCountryType` type represents the country which should be used to parse the phone number. It is of type `Country`.
 * @typedef {Country} RawCountryType
 */
export type RawCountryType = Country
/**
 * The `PossiblePhoneTimezone` type represents the estimated timezone of a phone number based on the phone number's country. It can be either a `CountryTimezone` or `'UTC'`.
 * @typedef {CountryTimezone | 'UTC'} PossiblePhoneTimezone
 * @remarks
 *
 * In cases where the phone number's country has several timezones, the timezone with the greatest population is used.
 * In cases where the phone number's country is not recognized or has no timezone defined, `'UTC'` is used.
 */
export type PossiblePhoneTimezone = CountryTimezone | 'UTC'

/**
 * The `PhoneTypes` type represents the possible types of a phone number. It can be any of the keys of the `PhoneNumberType` object in the `google-libphonenumber` library, or `'INVALID'` if the phone number is not valid.
 * @typedef {keyof typeof libPhoneNumber.PhoneNumberType | 'INVALID'} PhoneTypes
 */
export type PhoneTypes = keyof typeof libPhoneNumber.PhoneNumberType | 'INVALID'

/**
 * The `PhoneModelInstanceObject` interface represents the properties of a `Phone` instance.
 * @interface
 */
export interface PhoneModelInstanceObject {
  /**
   * The `phone` property represents the raw phone number string that was used to create the `Phone` instance.
   * @type {string}
   */
  phone: string
  /**
   * The `country` property represents the country that was used to create the `Phone` instance.
   * @type {CountryOrUnknown}
   * @remarks
   *
   * In cases where the country was not recognized and could not be guessed from the phone number, `'XX'` is used.
   */
  country: CountryOrUnknown
  /**
   * The `valid` property represents whether the phone number uses a valid format for the parsed country or not.
   * @type {boolean}
   */
  valid: boolean
  /**
   * The `type` property represents the type of the phone number. It can be any of the keys of the `PhoneNumberType` object in the `google-libphonenumber` library, or `'INVALID'` if the phone number is not valid.
   * @type {PhoneTypes}
   */
  type: PhoneTypes
  /**
   * The `mobile` property represents whether the phone number is possibly a mobile phone number or not.
   * @type {boolean}
   * @remarks
   *
   * This property is `true` if the phone number type is either `'MOBILE'` or `'FIXED_LINE_OR_MOBILE'`.
   * This covers cases like in the United States and Canada where it is not possible to tell if a phone number is a mobile phone number or not based on the phone number alone.
   */
  mobile: boolean
  /**
   * The `raw` property represents the phone number as a string stripped of all non-numeric characters.
   * @type {string}
   */
  raw: string
  /**
   * The `national` property represents the phone number as a string in the national format for the parsed country.
   * @type {string}
   */
  national: string
  /**
   * The `international` property represents the phone number as a string in the international format for the parsed country.
   * @type {string}
   */
  international: string
  /**
   * The `e164` property represents the phone number as a string in the E.164 format.
   * @type {string}
   */
  e164: string
  /**
   * The `timezone` property represents the estimated timezone of the phone number based on the phone number's country. It can be either a `CountryTimezone` or `'UTC'`.
   * @type {PossiblePhoneTimezone}
   * @remarks
   *
   * In cases where the phone number's country has several timezones, the timezone with the greatest population is used.
   * In cases where the phone number's country is not recognized or has no timezone defined, `'UTC'` is used.
   */
  timezone: PossiblePhoneTimezone
}

/**
 * The `PhoneModel` interface represents a phone number object with various properties and methods.
 * @interface
 */
export interface PhoneModel {
  /**
   * The `country` property represents the country that was used to create the `Phone` instance.
   * @type {CountryOrUnknown}
   * @remarks
   *
   * In cases where the country was not recognized and could not be guessed from the phone number, `'XX'` is used.
   */
  country: CountryOrUnknown
  /**
   * The `valid` property represents whether the phone number uses a valid format for the parsed country or not.
   * @type {boolean}
   */
  valid: boolean
  /**
   * The `type` property represents the type of the phone number. It can be any of the keys of the `PhoneNumberType` object in the `google-libphonenumber` library, or `'INVALID'` if the phone number is not valid.
   * @type {PhoneTypes}
   */
  type: PhoneTypes
  /**
   * The `mobile` property represents whether the phone number is possibly a mobile phone number or not.
   * @type {boolean}
   * @remarks
   *
   * This property is `true` if the phone number type is either `'MOBILE'` or `'FIXED_LINE_OR_MOBILE'`.
   * This covers cases like in the United States and Canada where it is not possible to tell if a phone number is a mobile phone number or not based on the phone number alone.
   */
  mobile: boolean
  /**
   * The `raw` property represents the phone number as a string stripped of all non-numeric characters.
   * @type {string}
   */
  raw: string
  /**
   * The `national` property represents the phone number as a string in the national format for the parsed country.
   * @type {string}
   */
  national: string
  /**
   * The `international` property represents the phone number as a string in the international format for the parsed country.
   * @type {string}
   */
  international: string
  /**
   * The `e164` property represents the phone number as a string in the E.164 format.
   * @type {string}
   */
  e164: string
  /**
   * The `timezone` property represents the estimated timezone of the phone number based on the phone number's country. It can be either a `CountryTimezone` or `'UTC'`.
   * @type {PossiblePhoneTimezone}
   * @remarks
   *
   * In cases where the phone number's country has several timezones, the timezone with the greatest population is used.
   * In cases where the phone number's country is not recognized or has no timezone defined, `'UTC'` is used.
   */
  timezone: PossiblePhoneTimezone
  /**
   * The `toObject` method returns an object with the same properties as the `PhoneModelInstanceObject` interface.
   * @returns {PhoneModelInstanceObject}
   */
  toObject(): PhoneModelInstanceObject
  /**
   * The `toJSON` method returns an object with the same properties as the `PhoneModelInstanceObject` interface.
   * @returns {PhoneModelInstanceObject}
   */
  toJSON(): PhoneModelInstanceObject
  /**
   * The `toString` method returns the phone number as a string in the international format for the parsed country.
   * @returns {string}
   */
  toString(): string
}

/**
 * The `Phone` class represents a phone number and provides methods to retrieve information about it.
 * It implements the `PhoneModel` interface.
 * @class
 * @implements {PhoneModel}
 */
export class Phone implements PhoneModel {
  /**
   * The phone number as a string stripped of all non-numeric characters.
   * @type {string}
   * @private
   * @readonly
   */
  readonly #phone: string

  /**
   * The country code of the phone number.
   * @type {CountryOrUnknown}
   * @private
   * @readonly
   */
  readonly #country: CountryOrUnknown

  /**
   * The `PhoneNumberUtil` instance used to parse and validate phone numbers.
   * @type {libPhoneNumber.PhoneNumberUtil}
   * @private
   * @readonly
   */
  readonly #util: libPhoneNumber.PhoneNumberUtil

  /**
   * The parsed `PhoneNumber` object representing the phone number.
   * @type {libPhoneNumber.PhoneNumber | undefined}
   * @private
   * @readonly
   */
  readonly #parsed: libPhoneNumber.PhoneNumber | undefined

  /**
   * Whether the phone number uses a valid format for the parsed country or not.
   * @type {boolean}
   * @private
   * @readonly
   */
  readonly #valid: boolean = false

  /**
   * The type of the phone number.
   * @type {PhoneTypes}
   * @private
   * @readonly
   */
  readonly #type: PhoneTypes = 'INVALID'

  /**
   * The `Phone` class constructor takes a `phone` argument of type `RawPhoneType` and an optional `country` argument of type `RawCountryType`.
   * It initializes `Phone` instance.
   * @constructor
   * @param {RawPhoneType} phone - The phone number to be parsed and validated.
   * @param {RawCountryType} [country] - The country code of the phone number. If not provided, the country will be guessed based on the phone number.
   */
  constructor(phone: RawPhoneType, country?: RawCountryType) {
    this.#phone = String(phone).replace(/\D/g, '')
    const countryTest = 'string' === typeof country ? country.trim().toUpperCase() : 'XX'
    this.#country = isos.has(countryTest) ? (countryTest as CountryOrUnknown) : 'XX'
    this.#util = libPhoneNumber.PhoneNumberUtil.getInstance()
    if (this.#country === 'XX') {
      this.#country = this.#guessCountry(this.#phone)
    }
    try {
      this.#parsed = this.#util.parseAndKeepRawInput(this.#phone, this.#country)
    } catch {
      // noop
    }
    if (this.#parsed) {
      try {
        this.#valid = this.#util.isValidNumber(this.#parsed)
        this.#type = this.#getPhoneNumberType(this.#parsed)
      } catch {
        // noop
      }
    }
    if (true === this.#valid && nanpaCountries.includes(this.#country)) {
      this.#country = this.#getCorrectedNANPCountry()
    }
    Object.defineProperty(this, 'country', { value: this.country, writable: false })
    Object.defineProperty(this, 'valid', { value: this.valid, writable: false })
    Object.defineProperty(this, 'type', { value: this.type, writable: false })
    Object.defineProperty(this, 'mobile', { value: this.mobile, writable: false })
    Object.defineProperty(this, 'raw', { value: this.raw, writable: false })
    Object.defineProperty(this, 'national', { value: this.national, writable: false })
    Object.defineProperty(this, 'international', { value: this.international, writable: false })
    Object.defineProperty(this, 'e164', { value: this.e164, writable: false })
    Object.defineProperty(this, 'timezone', { value: this.timezone, writable: false })
    Object.freeze(this)
  }

  /**
   * Returns the country code of the phone number.
   * @readonly
   * @type {CountryOrUnknown}
   */
  public get country(): CountryOrUnknown {
    return this.#country
  }

  /**
   * Returns whether the phone number uses a valid format for the parsed country or not.
   * @readonly
   * @type {boolean}
   */
  public get valid(): boolean {
    return this.#valid
  }

  /**
   * Returns the type of the phone number.
   * @readonly
   * @type {PhoneTypes}
   */
  public get type(): PhoneTypes {
    return this.#type
  }

  /**
   * Returns whether the phone number is a mobile number or not.
   * @readonly
   * @type {boolean}
   */
  public get mobile() {
    return 'string' === typeof this.type && ['MOBILE', 'FIXED_LINE_OR_MOBILE'].includes(this.type)
  }

  /**
   * Returns the raw phone number.
   * @readonly
   * @type {string}
   *
   * @remarks
   * If the phone number is not a valid phone number, the initial phone number which was passed to the constructor is returned.
   */
  public get raw() {
    if (!this.#parsed) {
      return this.#phone
    }
    return this.#util.format(this.#parsed, libPhoneNumber.PhoneNumberFormat.E164).replace(/\D/g, '')
  }

  /**
   * Returns the national format of the phone number.
   * @readonly
   * @type {string}
   *
   * @remarks
   * If the phone number is not a valid phone number, the initial phone number which was passed to the constructor is returned.
   */
  public get national() {
    if (!this.#parsed) {
      return this.#phone
    }
    return this.#util.format(this.#parsed, libPhoneNumber.PhoneNumberFormat.NATIONAL)
  }

  /**
   * Returns the international format of the phone number.
   * @readonly
   * @type {string}
   *
   * @remarks
   * If the phone number is not a valid phone number, the initial phone number which was passed to the constructor is returned.
   */
  public get international() {
    if (!this.#parsed) {
      return this.#phone
    }
    return this.#util.format(this.#parsed, libPhoneNumber.PhoneNumberFormat.INTERNATIONAL)
  }

  /**
   * Returns the E.164 format of the phone number.
   * @readonly
   * @type {string}
   *
   * @remarks
   * If the phone number is not a valid phone number, the initial phone number which was passed to the constructor is returned.
   */
  public get e164() {
    if (!this.#parsed) {
      return this.#phone
    }
    return this.#util.format(this.#parsed, libPhoneNumber.PhoneNumberFormat.E164)
  }

  /**
   * Returns the timezone of the phone number.
   * @readonly
   * @type {PossiblePhoneTimezone}
   */
  public get timezone(): PossiblePhoneTimezone {
    if (timezones.has(this.#country)) {
      return timezones.get(this.#country) as CountryTimezone
    }
    return 'UTC'
  }

  /**
   * Guesses the country of a phone number based on its prefix.
   * @private
   * @param {string} phone - The phone number to guess the country of.
   * @returns {CountryOrUnknown} - The ISO 3166-1 alpha-2 code of the guessed country, or 'XX' if the country could not be guessed.
   */
  #guessCountry(phone: string): CountryOrUnknown {
    const potentials = allCountries
      .map((c) => ({
        iso: c.iso2.toUpperCase(),
        prefix: String(c.dialCode).trim().replace(/\D/g, ''),
      }))
      .filter((c) => phone.substring(0, c.prefix.length) === c.prefix)
      .sort(this.#sortCountriesByPrefix)
      .filter((c) => {
        // done like this because typescript thinks that T.constructor is not a type of T but a plain function
        // https://stackoverflow.com/a/61444747/10645758
        const t = this.constructor as { new (...args: ConstructorParameters<typeof Phone>): Phone }
        const tp = new t(phone, c.iso)
        return tp.valid
      })
    if (potentials.length >= 1) {
      return potentials[0].iso
    }
    return this.#guessCountryWithoutPrefix(phone)
  }

  #guessCountryWithoutPrefix(phone: string): CountryOrUnknown {
    const potentials = allCountries
      .map((c) => ({
        iso: c.iso2.toUpperCase(),
        prefix: String(c.dialCode).trim().replace(/\D/g, ''),
      }))
      .sort(this.#sortCountriesByPrefix)
      .filter((c) => {
        // done like this because typescript thinks that T.constructor is not a type of T but a plain function
        // https://stackoverflow.com/a/61444747/10645758
        const t = this.constructor as { new (...args: ConstructorParameters<typeof Phone>): Phone }
        const tp = new t(phone, c.iso)
        return tp.valid
      })
    if (potentials.length >= 1) {
      return potentials[0].iso
    }
    return 'XX'
  }

  /**
   * Sorts an array of countries by their phone number prefix.
   * @private
   * @param {Object} a - The first country object to compare.
   * @param {string} a.iso - The ISO 3166-1 alpha-2 code of the country.
   * @param {string} a.prefix - The phone number prefix of the country.
   * @param {Object} b - The second country object to compare.
   * @param {string} b.iso - The ISO 3166-1 alpha-2 code of the country.
   * @param {string} b.prefix - The phone number prefix of the country.
   * @returns {number} - A number indicating the order of the two countries in the sorted array.
   */
  #sortCountriesByPrefix(
    a: { iso: string; prefix: string },
    b: { iso: string; prefix: string }
  ): number {
    if (a.prefix.length === b.prefix.length) {
      const intA = parseInt(a.prefix)
      const intB = parseInt(b.prefix)
      if (intA === intB) {
        return a.iso.localeCompare(b.iso)
      }
      return intA > intB ? 1 : -1
    }
    return a.prefix.length > b.prefix.length ? 1 : -1
  }

  /**
   * Gets the type of the phone number as a string.
   * @private
   * @param {libPhoneNumber.PhoneNumber | undefined} parsed - The parsed phone number.
   * @returns {PhoneTypes} - The type of the phone number.
   *
   * @remarks
   * If the parsed phone number is not valid, the function returns 'INVALID'.
   * The function uses the libPhoneNumber library to determine the type of the phone number.
   */
  #getPhoneNumberType(parsed: libPhoneNumber.PhoneNumber | undefined): PhoneTypes {
    if (!parsed) {
      return 'INVALID'
    }
    const type = this.#util.getNumberType(parsed)
    const typeValues = Object.values(libPhoneNumber.PhoneNumberType)
    const typeKeys = Object.keys(libPhoneNumber.PhoneNumberType)
    const typeIndex = typeValues.indexOf(type)
    return (typeKeys[typeIndex] as PhoneTypes) || 'INVALID'
  }

  #getCorrectedNANPCountry(): CountryOrUnknown {
    const ak = this.raw.substring(1, 4)
    if (areaCodeMap[ak] && 'string' === typeof areaCodeMap[ak]) {
      return areaCodeMap[ak] as Country
    }
    return 'XX'
  }

  /**
   * Returns an object representation of the phone number.
   * @returns {{
   *   phone: string;
   *   country: string;
   *   valid: boolean;
   *   type: PhoneTypes;
   *   mobile: boolean;
   *   raw: string;
   *   national: string;
   *   international: string;
   *   e164: string;
   *   timezone: PossiblePhoneTimezone;
   * }} - An object representation of the phone number.
   */
  public toObject() {
    return {
      /**
       * The phone number as a string stripped of all non-numeric characters.
       */
      phone: this.#phone,
      /**
       * The country code of the phone number.
       * @remarks
       * In cases where the country was not recognized and could not be guessed from the phone number, `'XX'` is used.
       * @type {CountryOrUnknown}
       */
      country: this.#country,
      /**
       * Whether the phone number uses a valid format for the parsed country or not.
       * @type {boolean}
       */
      valid: this.valid,
      /**
       * The type of the phone number.
       * @type {PhoneTypes}
       */
      type: this.type,
      /**
       * Whether the phone number is possibly a mobile number or not.
       * @type {boolean}
       */
      mobile: this.mobile,
      /**
       * The phone number as a string stripped of all non-numeric characters.
       * @type {string}
       */
      raw: this.raw,
      /**
       * The phone number as a string in the national format for the parsed country.
       * @type {string}
       */
      national: this.national,
      /**
       * The phone number as a string in the international format for the parsed country.
       * @type {string}
       */
      international: this.international,
      /**
       * The phone number as a string in the E.164 format.
       * @type {string}
       */
      e164: this.e164,
      /**
       * The estimated timezone of the phone number based on the phone number's country. It can be either a `CountryTimezone` or `'UTC'`.
       */
      timezone: this.timezone,
    }
  }

  /**
   * Returns a JSON representation of the phone number.
   * @returns {{
   *   phone: string;
   *   country: string;
   *   valid: boolean;
   *   type: PhoneTypes;
   *   mobile: boolean;
   *   raw: string;
   *   national: string;
   *   international: string;
   *   e164: string;
   *   timezone: PossiblePhoneTimezone;
   * }} - A JSON-safe representation of the phone number.
   */
  public toJSON() {
    return this.toObject()
  }

  /**
   * Returns the E.164 format of the phone number as a string.
   * @returns {string} - The E.164 format of the phone number.
   */
  public toString() {
    return this.e164
  }

  /**
   * Returns a stringified representation of the phone number.
   * @returns {string} - A string representation of the phone number.
   */
  public inspect() {
    return `Phone {
      phone: ${this.#phone},
      country: ${this.#country},
      valid: ${this.valid === true ? 'true' : 'false'},
      type: ${this.type},
      mobile: ${this.mobile === true ? 'true' : 'false'},
      raw: ${this.raw},
      national: ${this.national},
      international: ${this.international},
      e164: ${this.e164},
      timezone: ${this.timezone},
    }`
  }

  /**
   * Serializes the phone object to an obfuscated string which can be used to recreate the phone object from the `Phone.deserialize` method.
   * @returns {string} - The serialized phone object.
   */
  public serialize() {
    const hash = Buffer.from(JSON.stringify({ phone: this.raw, country: this.country })).toString(
      'base64'
    )
    return Buffer.from(JSON.stringify({ phone: this.raw, country: this.country, hash })).toString(
      'base64'
    )
  }

  /**
   * Creates a new phone object from a serialized phone object.
   * @param serialized The serialized phone object returned from the `Phone.serialize` method.
   * @returns A Phone instance with the same properties as the original phone object.
   * @throws An error if the serialized phone object is not valid.
   */
  public static deserialize(serialized: string): Phone {
    let asJsonString: string
    try {
      asJsonString = Buffer.from(serialized, 'base64').toString('utf-8')
    } catch {
      throw new Error('Not a valid serialized phone object')
    }
    let asJson: { phone: string; country: CountryOrUnknown; hash: string }
    try {
      asJson = JSON.parse(asJsonString)
    } catch {
      throw new Error('Not a valid serialized phone object')
    }
    if (!asJson.phone || !asJson.country || !asJson.hash) {
      throw new Error('Not a valid serialized phone object')
    }
    const hash = Buffer.from(
      JSON.stringify({ phone: asJson.phone, country: asJson.country })
    ).toString('base64')
    if (hash !== asJson.hash) {
      throw new Error('Not a valid serialized phone object')
    }
    return new Phone(asJson.phone, asJson.country === 'XX' ? undefined : asJson.country)
  }
}
