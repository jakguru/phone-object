import { writeFileSync } from 'fs'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { join } from 'path'

interface AreaCodeMap {
  [areaCode: number]: string
}
const phoneUtil = PhoneNumberUtil.getInstance()

// Define a range of valid area codes for the NANP region (200-999)
const areaCodes = Array.from({ length: 800 }, (_, i) => i + 200)

const areaCodeMap: AreaCodeMap = {}
const nampaCountries = new Set()

areaCodes.forEach((areaCode) => {
  // Create a fake phone number with the area code
  const fakePhoneNumber = `1${areaCode}5555555`

  try {
    // Use libphonenumber to parse the phone number
    const number = phoneUtil.parse(fakePhoneNumber, 'US')

    // Get the region code for the phone number
    const regionCode = phoneUtil.getRegionCodeForNumber(number)

    // Add the area code and region code to the map
    if (regionCode) {
      areaCodeMap[areaCode] = regionCode
      nampaCountries.add(regionCode)
    }
  } catch {
    // noop
  }
})

const templateToExport = `
/**
 * An interface describing an object where a NANPA area code is a key, and a NANPA country code is a value.
 */
export interface AreaCodeMap {
    [areaCode: string]: string;
}

/**
 * A map of NANPA area codes to NANPA country codes.
 */
export const areaCodeMap: AreaCodeMap = {
${Object.entries(areaCodeMap)
  .map(([areaCode, regionCode]) => `  '${areaCode}': '${regionCode}',`)
  .join('\n')}
}

/**
 * A list of NANPA country codes.
 */
export const nanpaCountries: Array<string> = [
${Array.from(nampaCountries)
  .map((country) => `  '${country}'`)
  .join(',\n')},
]`
const destinationPath = join(__dirname, '../src/nampa.ts')
writeFileSync(destinationPath, templateToExport)
console.log(
  `Exported ${Object.keys(areaCodeMap).length} area codes for ${
    nampaCountries.size
  } countries to ${destinationPath}`
)
