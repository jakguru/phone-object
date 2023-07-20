# Phone Object

Phone Object is a comprehensive, immutable object representation of a phone number, complete with an array of properties detailing different aspects of the said phone number.

Inspired by Google's libphonenumber, our library extends its capabilities by parsing phone numbers from a diverse range of formats. This library is capable of validating phone numbers per country, identifying the type of line a phone number belongs to (like mobile, landline, etc.), and suggesting potential timezones associated with the phone number.

This project is perfect for anyone who needs robust and efficient phone number parsing and handling in their applications. Whether you're validating user-input phone numbers, normalizing phone numbers into a standard format, or simply analyzing phone number data, the Phone Object Library has got you covered.

For more information, view the [documentation](https://jakguru.github.io/phone-object/).

## Installation

```bash
npm install @jakguru/phone-object
```

or

```bash
yarn add @jakguru/phone-object
```

## Usage

### Import / Require the library

```typescript
import { Phone } from '@jakguru/phone-object'
```

or

```typescript
import Phone from '@jakguru/phone-object'
```

or

```javascript
const { Phone } = require('@jakguru/phone-object')
```

### Create a new Phone Object

```typescript
const phone = new Phone('202-456-141', 'US')
const phone = new Phone('202-456-1414', 'US')
const phone = new Phone('(202) 456-1414', 'US')
const phone = new Phone('+1 (202) 456-1414', 'US')
const phone = new Phone('202.456.1414', 'US')
const phone = new Phone('202/4561414', 'US')
const phone = new Phone('1 202 456 1414', 'US')
const phone = new Phone('+12024561414', 'US')
const phone = new Phone('1 202-456-1414' 'US')
```

### Get the phone number in different formats

```typescript
phone.raw // 2024561414
phone.national // (202) 456-1414
phone.international // +1 202-456-1414
phone.e164 // +12024561414
```

### Get the country code

```typescript
phone.country // US
```

### Get a timezone suggestion

```typescript
phone.timezone // America/New_York
```

### Get the type of line

```typescript
phone.valid // true
phone.type // FIXED_LINE_OR_MOBILE
phone.mobile // true
```

### Serialize for storage

```typescript
phone.serialize() // <base64 encoded string>
```

### Deserialize from storage

```typescript
const phone = Phone.deserialize(<base64 encoded string>)
```
