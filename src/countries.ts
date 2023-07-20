/**
 * Imports the `DateObjectUnits` and `DateTime` types from the `luxon` library.
 */
import { DateObjectUnits, DateTime } from 'luxon'

/**
 * Represents a numeric value that can be either a string or a number.
 */
export type Numeric = string | number

/**
 * Represents the ISO 3166-1 alpha-2 country codes of all countries recognized by the library.
 */
export type Country =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'XK'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW'

/**
 * Represents either the ISO 3166-1 alpha-2 country codes of all countries recognized by the library or the string `'XX'` to represent an unknown country.
 */
export type CountryOrUnknown = Country | 'XX'

/**
 * Represents the possible timezones of all countries recognized by the library.
 */
export type CountryTimezone =
  | 'Europe/Andorra'
  | 'Asia/Dubai'
  | 'Asia/Kabul'
  | 'America/Antigua'
  | 'America/Anguilla'
  | 'Europe/Tirane'
  | 'Asia/Yerevan'
  | 'Africa/Luanda'
  | 'Antarctica/Casey'
  | 'America/Argentina/Buenos_Aires'
  | 'Pacific/Pago_Pago'
  | 'Europe/Vienna'
  | 'Australia/Sydney'
  | 'America/Aruba'
  | 'Europe/Mariehamn'
  | 'Asia/Baku'
  | 'Europe/Sarajevo'
  | 'America/Barbados'
  | 'Asia/Dhaka'
  | 'Europe/Brussels'
  | 'Africa/Ouagadougou'
  | 'Europe/Sofia'
  | 'Asia/Bahrain'
  | 'Africa/Bujumbura'
  | 'Africa/Porto-Novo'
  | 'America/St_Barthelemy'
  | 'Atlantic/Bermuda'
  | 'Asia/Brunei'
  | 'America/La_Paz'
  | 'America/Kralendijk'
  | 'America/Sao_Paulo'
  | 'America/Nassau'
  | 'Asia/Thimphu'
  | 'Africa/Gaborone'
  | 'Europe/Minsk'
  | 'America/Belize'
  | 'America/Toronto'
  | 'Indian/Cocos'
  | 'Africa/Kinshasa'
  | 'Africa/Bangui'
  | 'Africa/Brazzaville'
  | 'Europe/Zurich'
  | 'Africa/Abidjan'
  | 'Pacific/Rarotonga'
  | 'America/Santiago'
  | 'Africa/Douala'
  | 'Asia/Shanghai'
  | 'America/Bogota'
  | 'America/Costa_Rica'
  | 'America/Havana'
  | 'Atlantic/Cape_Verde'
  | 'America/Curacao'
  | 'Indian/Christmas'
  | 'Asia/Nicosia'
  | 'Europe/Prague'
  | 'Europe/Berlin'
  | 'Africa/Djibouti'
  | 'Europe/Copenhagen'
  | 'America/Dominica'
  | 'America/Santo_Domingo'
  | 'Africa/Algiers'
  | 'America/Guayaquil'
  | 'Europe/Tallinn'
  | 'Africa/Cairo'
  | 'Africa/El_Aaiun'
  | 'Africa/Asmara'
  | 'Europe/Madrid'
  | 'Africa/Addis_Ababa'
  | 'Europe/Helsinki'
  | 'Pacific/Fiji'
  | 'Atlantic/Stanley'
  | 'Pacific/Pohnpei'
  | 'Atlantic/Faroe'
  | 'Europe/Paris'
  | 'Africa/Libreville'
  | 'Europe/London'
  | 'America/Grenada'
  | 'Asia/Tbilisi'
  | 'America/Cayenne'
  | 'Europe/Guernsey'
  | 'Africa/Accra'
  | 'Europe/Gibraltar'
  | 'America/Godthab'
  | 'Africa/Banjul'
  | 'Africa/Conakry'
  | 'America/Guadeloupe'
  | 'Africa/Malabo'
  | 'Europe/Athens'
  | 'Atlantic/South_Georgia'
  | 'America/Guatemala'
  | 'Pacific/Guam'
  | 'Africa/Bissau'
  | 'America/Guyana'
  | 'Asia/Hong_Kong'
  | 'America/Tegucigalpa'
  | 'Europe/Zagreb'
  | 'America/Port-au-Prince'
  | 'Europe/Budapest'
  | 'Asia/Jakarta'
  | 'Europe/Dublin'
  | 'Asia/Jerusalem'
  | 'Europe/Isle_of_Man'
  | 'Asia/Kolkata'
  | 'Indian/Chagos'
  | 'Asia/Baghdad'
  | 'Asia/Tehran'
  | 'Atlantic/Reykjavik'
  | 'Europe/Rome'
  | 'Europe/Jersey'
  | 'America/Jamaica'
  | 'Asia/Amman'
  | 'Asia/Tokyo'
  | 'Africa/Nairobi'
  | 'Asia/Bishkek'
  | 'Asia/Phnom_Penh'
  | 'Pacific/Tarawa'
  | 'Indian/Comoro'
  | 'America/St_Kitts'
  | 'Asia/Pyongyang'
  | 'Asia/Seoul'
  | 'Asia/Kuwait'
  | 'America/Cayman'
  | 'Asia/Almaty'
  | 'Asia/Vientiane'
  | 'Asia/Beirut'
  | 'America/St_Lucia'
  | 'Europe/Vaduz'
  | 'Asia/Colombo'
  | 'Africa/Monrovia'
  | 'Africa/Maseru'
  | 'Europe/Vilnius'
  | 'Europe/Luxembourg'
  | 'Europe/Riga'
  | 'Africa/Tripoli'
  | 'Africa/Casablanca'
  | 'Europe/Monaco'
  | 'Europe/Chisinau'
  | 'Europe/Podgorica'
  | 'America/Marigot'
  | 'Indian/Antananarivo'
  | 'Pacific/Majuro'
  | 'Europe/Skopje'
  | 'Africa/Bamako'
  | 'Asia/Yangon'
  | 'Asia/Ulaanbaatar'
  | 'Asia/Macau'
  | 'Pacific/Saipan'
  | 'America/Martinique'
  | 'Africa/Nouakchott'
  | 'America/Montserrat'
  | 'Europe/Malta'
  | 'Indian/Mauritius'
  | 'Indian/Maldives'
  | 'Africa/Blantyre'
  | 'America/Mexico_City'
  | 'Asia/Kuala_Lumpur'
  | 'Africa/Maputo'
  | 'Africa/Windhoek'
  | 'Pacific/Noumea'
  | 'Africa/Niamey'
  | 'Pacific/Norfolk'
  | 'Africa/Lagos'
  | 'America/Managua'
  | 'Europe/Amsterdam'
  | 'Europe/Oslo'
  | 'Asia/Kathmandu'
  | 'Pacific/Nauru'
  | 'Pacific/Niue'
  | 'Pacific/Auckland'
  | 'Asia/Muscat'
  | 'America/Panama'
  | 'America/Lima'
  | 'Pacific/Tahiti'
  | 'Pacific/Port_Moresby'
  | 'Asia/Manila'
  | 'Asia/Karachi'
  | 'Europe/Warsaw'
  | 'America/Miquelon'
  | 'Pacific/Pitcairn'
  | 'America/Puerto_Rico'
  | 'Asia/Gaza'
  | 'Europe/Lisbon'
  | 'Pacific/Palau'
  | 'America/Asuncion'
  | 'Asia/Qatar'
  | 'Indian/Reunion'
  | 'Europe/Bucharest'
  | 'Europe/Belgrade'
  | 'Europe/Moscow'
  | 'Africa/Kigali'
  | 'Asia/Riyadh'
  | 'Pacific/Guadalcanal'
  | 'Indian/Mahe'
  | 'Africa/Khartoum'
  | 'Europe/Stockholm'
  | 'Asia/Singapore'
  | 'Atlantic/St_Helena'
  | 'Europe/Ljubljana'
  | 'Arctic/Longyearbyen'
  | 'Europe/Bratislava'
  | 'Africa/Freetown'
  | 'Europe/San_Marino'
  | 'Africa/Dakar'
  | 'Africa/Mogadishu'
  | 'America/Paramaribo'
  | 'Africa/Juba'
  | 'Africa/Sao_Tome'
  | 'America/El_Salvador'
  | 'America/Lower_Princes'
  | 'Asia/Damascus'
  | 'Africa/Mbabane'
  | 'America/Grand_Turk'
  | 'Africa/Ndjamena'
  | 'Indian/Kerguelen'
  | 'Africa/Lome'
  | 'Asia/Bangkok'
  | 'Asia/Dushanbe'
  | 'Pacific/Fakaofo'
  | 'Asia/Dili'
  | 'Asia/Ashgabat'
  | 'Africa/Tunis'
  | 'Pacific/Tongatapu'
  | 'Europe/Istanbul'
  | 'America/Port_of_Spain'
  | 'Pacific/Funafuti'
  | 'Asia/Taipei'
  | 'Africa/Dar_es_Salaam'
  | 'Europe/Kiev'
  | 'Africa/Kampala'
  | 'Pacific/Wake'
  | 'America/New_York'
  | 'America/Montevideo'
  | 'Asia/Tashkent'
  | 'Europe/Vatican'
  | 'America/St_Vincent'
  | 'America/Caracas'
  | 'America/Tortola'
  | 'America/St_Thomas'
  | 'Asia/Ho_Chi_Minh'
  | 'Pacific/Efate'
  | 'Pacific/Wallis'
  | 'Pacific/Apia'
  | 'Asia/Aden'
  | 'Indian/Mayotte'
  | 'Africa/Johannesburg'
  | 'Africa/Lusaka'
  | 'Africa/Harare'

/**
 * Interface representing advanced options for specifying a specific time for use with the `getCountriesWithSpecificTime` function.
 * @interface
 */
export interface SpecificTimeAdvancedOptions {
  /**
   * The hour of the day to match.
   */
  hourOfDay?: Numeric
  /**
   * The day of the week to match.
   */
  dayOfWeek?: Numeric
  /**
   * The week of the year to match.
   */
  weekOfYear?: Numeric
  /**
   * The day of the month to match.
   */
  dayOfMonth?: Numeric
  /**
   * The month of the year to match.
   */
  monthOfYear?: Numeric
  /**
   * The year to match.
   */
  year?: Numeric
}

/**
 * An immutable map of all of the names of the countries recognized by the library in English using ISO 3166-1 alpha-2 country codes as keys.
 */
export const countries = Object.freeze(
  new Map<string, string>([
    ['AD', 'Andorra'],
    ['AE', 'United Arab Emirates'],
    ['AF', 'Afghanistan'],
    ['AG', 'Antigua and Barbuda'],
    ['AI', 'Anguilla'],
    ['AL', 'Albania'],
    ['AM', 'Armenia'],
    ['AO', 'Angola'],
    ['AQ', 'Antarctica'],
    ['AR', 'Argentina'],
    ['AS', 'American Samoa'],
    ['AT', 'Austria'],
    ['AU', 'Australia'],
    ['AW', 'Aruba'],
    ['AX', 'Aland Islands'],
    ['AZ', 'Azerbaijan'],
    ['BA', 'Bosnia and Herzegovina'],
    ['BB', 'Barbados'],
    ['BD', 'Bangladesh'],
    ['BE', 'Belgium'],
    ['BF', 'Burkina Faso'],
    ['BG', 'Bulgaria'],
    ['BH', 'Bahrain'],
    ['BI', 'Burundi'],
    ['BJ', 'Benin'],
    ['BL', 'Saint Barthelemy'],
    ['BM', 'Bermuda'],
    ['BN', 'Brunei'],
    ['BO', 'Bolivia'],
    ['BQ', 'Bonaire, Saint Eustatius and Saba'],
    ['BR', 'Brazil'],
    ['BS', 'Bahamas'],
    ['BT', 'Bhutan'],
    ['BV', 'Bouvet Island'],
    ['BW', 'Botswana'],
    ['BY', 'Belarus'],
    ['BZ', 'Belize'],
    ['CA', 'Canada'],
    ['CC', 'Cocos Islands'],
    ['CD', 'Democratic Republic of the Congo'],
    ['CF', 'Central African Republic'],
    ['CG', 'Republic of the Congo'],
    ['CH', 'Switzerland'],
    ['CI', 'Ivory Coast'],
    ['CK', 'Cook Islands'],
    ['CL', 'Chile'],
    ['CM', 'Cameroon'],
    ['CN', 'China'],
    ['CO', 'Colombia'],
    ['CR', 'Costa Rica'],
    ['CU', 'Cuba'],
    ['CV', 'Cape Verde'],
    ['CW', 'Curacao'],
    ['CX', 'Christmas Island'],
    ['CY', 'Cyprus'],
    ['CZ', 'Czech Republic'],
    ['DE', 'Germany'],
    ['DJ', 'Djibouti'],
    ['DK', 'Denmark'],
    ['DM', 'Dominica'],
    ['DO', 'Dominican Republic'],
    ['DZ', 'Algeria'],
    ['EC', 'Ecuador'],
    ['EE', 'Estonia'],
    ['EG', 'Egypt'],
    ['EH', 'Western Sahara'],
    ['ER', 'Eritrea'],
    ['ES', 'Spain'],
    ['ET', 'Ethiopia'],
    ['FI', 'Finland'],
    ['FJ', 'Fiji'],
    ['FK', 'Falkland Islands'],
    ['FM', 'Micronesia'],
    ['FO', 'Faroe Islands'],
    ['FR', 'France'],
    ['GA', 'Gabon'],
    ['GB', 'United Kingdom'],
    ['GD', 'Grenada'],
    ['GE', 'Georgia'],
    ['GF', 'French Guiana'],
    ['GG', 'Guernsey'],
    ['GH', 'Ghana'],
    ['GI', 'Gibraltar'],
    ['GL', 'Greenland'],
    ['GM', 'Gambia'],
    ['GN', 'Guinea'],
    ['GP', 'Guadeloupe'],
    ['GQ', 'Equatorial Guinea'],
    ['GR', 'Greece'],
    ['GS', 'South Georgia and the South Sandwich Islands'],
    ['GT', 'Guatemala'],
    ['GU', 'Guam'],
    ['GW', 'Guinea-Bissau'],
    ['GY', 'Guyana'],
    ['HK', 'Hong Kong'],
    ['HM', 'Heard Island and McDonald Islands'],
    ['HN', 'Honduras'],
    ['HR', 'Croatia'],
    ['HT', 'Haiti'],
    ['HU', 'Hungary'],
    ['ID', 'Indonesia'],
    ['IE', 'Ireland'],
    ['IL', 'Israel'],
    ['IM', 'Isle of Man'],
    ['IN', 'India'],
    ['IO', 'British Indian Ocean Territory'],
    ['IQ', 'Iraq'],
    ['IR', 'Iran'],
    ['IS', 'Iceland'],
    ['IT', 'Italy'],
    ['JE', 'Jersey'],
    ['JM', 'Jamaica'],
    ['JO', 'Jordan'],
    ['JP', 'Japan'],
    ['KE', 'Kenya'],
    ['KG', 'Kyrgyzstan'],
    ['KH', 'Cambodia'],
    ['KI', 'Kiribati'],
    ['KM', 'Comoros'],
    ['KN', 'Saint Kitts and Nevis'],
    ['KP', 'North Korea'],
    ['KR', 'South Korea'],
    ['KW', 'Kuwait'],
    ['KY', 'Cayman Islands'],
    ['KZ', 'Kazakhstan'],
    ['LA', 'Laos'],
    ['LB', 'Lebanon'],
    ['LC', 'Saint Lucia'],
    ['LI', 'Liechtenstein'],
    ['LK', 'Sri Lanka'],
    ['LR', 'Liberia'],
    ['LS', 'Lesotho'],
    ['LT', 'Lithuania'],
    ['LU', 'Luxembourg'],
    ['LV', 'Latvia'],
    ['LY', 'Libya'],
    ['MA', 'Morocco'],
    ['MC', 'Monaco'],
    ['MD', 'Moldova'],
    ['ME', 'Montenegro'],
    ['MF', 'Saint Martin'],
    ['MG', 'Madagascar'],
    ['MH', 'Marshall Islands'],
    ['MK', 'Macedonia'],
    ['ML', 'Mali'],
    ['MM', 'Myanmar'],
    ['MN', 'Mongolia'],
    ['MO', 'Macao'],
    ['MP', 'Northern Mariana Islands'],
    ['MQ', 'Martinique'],
    ['MR', 'Mauritania'],
    ['MS', 'Montserrat'],
    ['MT', 'Malta'],
    ['MU', 'Mauritius'],
    ['MV', 'Maldives'],
    ['MW', 'Malawi'],
    ['MX', 'Mexico'],
    ['MY', 'Malaysia'],
    ['MZ', 'Mozambique'],
    ['NA', 'Namibia'],
    ['NC', 'New Caledonia'],
    ['NE', 'Niger'],
    ['NF', 'Norfolk Island'],
    ['NG', 'Nigeria'],
    ['NI', 'Nicaragua'],
    ['NL', 'Netherlands'],
    ['NO', 'Norway'],
    ['NP', 'Nepal'],
    ['NR', 'Nauru'],
    ['NU', 'Niue'],
    ['NZ', 'New Zealand'],
    ['OM', 'Oman'],
    ['PA', 'Panama'],
    ['PE', 'Peru'],
    ['PF', 'French Polynesia'],
    ['PG', 'Papua New Guinea'],
    ['PH', 'Philippines'],
    ['PK', 'Pakistan'],
    ['PL', 'Poland'],
    ['PM', 'Saint Pierre and Miquelon'],
    ['PN', 'Pitcairn'],
    ['PR', 'Puerto Rico'],
    ['PS', 'Palestinian Territory'],
    ['PT', 'Portugal'],
    ['PW', 'Palau'],
    ['PY', 'Paraguay'],
    ['QA', 'Qatar'],
    ['RE', 'Reunion'],
    ['RO', 'Romania'],
    ['RS', 'Serbia'],
    ['RU', 'Russia'],
    ['RW', 'Rwanda'],
    ['SA', 'Saudi Arabia'],
    ['SB', 'Solomon Islands'],
    ['SC', 'Seychelles'],
    ['SD', 'Sudan'],
    ['SE', 'Sweden'],
    ['SG', 'Singapore'],
    ['SH', 'Saint Helena'],
    ['SI', 'Slovenia'],
    ['SJ', 'Svalbard and Jan Mayen'],
    ['SK', 'Slovakia'],
    ['SL', 'Sierra Leone'],
    ['SM', 'San Marino'],
    ['SN', 'Senegal'],
    ['SO', 'Somalia'],
    ['SR', 'Suriname'],
    ['SS', 'South Sudan'],
    ['ST', 'Sao Tome and Principe'],
    ['SV', 'El Salvador'],
    ['SX', 'Sint Maarten'],
    ['SY', 'Syria'],
    ['SZ', 'Swaziland'],
    ['TC', 'Turks and Caicos Islands'],
    ['TD', 'Chad'],
    ['TF', 'French Southern Territories'],
    ['TG', 'Togo'],
    ['TH', 'Thailand'],
    ['TJ', 'Tajikistan'],
    ['TK', 'Tokelau'],
    ['TL', 'East Timor'],
    ['TM', 'Turkmenistan'],
    ['TN', 'Tunisia'],
    ['TO', 'Tonga'],
    ['TR', 'Turkey'],
    ['TT', 'Trinidad and Tobago'],
    ['TV', 'Tuvalu'],
    ['TW', 'Taiwan'],
    ['TZ', 'Tanzania'],
    ['UA', 'Ukraine'],
    ['UG', 'Uganda'],
    ['UM', 'United States Minor Outlying Islands'],
    ['US', 'United States'],
    ['UY', 'Uruguay'],
    ['UZ', 'Uzbekistan'],
    ['VA', 'Vatican'],
    ['VC', 'Saint Vincent and the Grenadines'],
    ['VE', 'Venezuela'],
    ['VG', 'British Virgin Islands'],
    ['VI', 'U.S. Virgin Islands'],
    ['VN', 'Vietnam'],
    ['VU', 'Vanuatu'],
    ['WF', 'Wallis and Futuna'],
    ['WS', 'Samoa'],
    ['XK', 'Kosovo'],
    ['YE', 'Yemen'],
    ['YT', 'Mayotte'],
    ['ZA', 'South Africa'],
    ['ZM', 'Zambia'],
    ['ZW', 'Zimbabwe'],
  ])
)

/**
 * An immutable map of all of the timezones of the countries recognized by the library using ISO 3166-1 alpha-2 country codes as keys.
 */
export const timezones = Object.freeze(
  new Map<string, CountryTimezone>([
    ['AD', 'Europe/Andorra'],
    ['AE', 'Asia/Dubai'],
    ['AF', 'Asia/Kabul'],
    ['AG', 'America/Antigua'],
    ['AI', 'America/Anguilla'],
    ['AL', 'Europe/Tirane'],
    ['AM', 'Asia/Yerevan'],
    ['AO', 'Africa/Luanda'],
    ['AQ', 'Antarctica/Casey'],
    ['AR', 'America/Argentina/Buenos_Aires'],
    ['AS', 'Pacific/Pago_Pago'],
    ['AT', 'Europe/Vienna'],
    ['AU', 'Australia/Sydney'],
    ['AW', 'America/Aruba'],
    ['AX', 'Europe/Mariehamn'],
    ['AZ', 'Asia/Baku'],
    ['BA', 'Europe/Sarajevo'],
    ['BB', 'America/Barbados'],
    ['BD', 'Asia/Dhaka'],
    ['BE', 'Europe/Brussels'],
    ['BF', 'Africa/Ouagadougou'],
    ['BG', 'Europe/Sofia'],
    ['BH', 'Asia/Bahrain'],
    ['BI', 'Africa/Bujumbura'],
    ['BJ', 'Africa/Porto-Novo'],
    ['BL', 'America/St_Barthelemy'],
    ['BM', 'Atlantic/Bermuda'],
    ['BN', 'Asia/Brunei'],
    ['BO', 'America/La_Paz'],
    ['BQ', 'America/Kralendijk'],
    ['BR', 'America/Sao_Paulo'],
    ['BS', 'America/Nassau'],
    ['BT', 'Asia/Thimphu'],
    ['BW', 'Africa/Gaborone'],
    ['BY', 'Europe/Minsk'],
    ['BZ', 'America/Belize'],
    ['CA', 'America/Toronto'],
    ['CC', 'Indian/Cocos'],
    ['CD', 'Africa/Kinshasa'],
    ['CF', 'Africa/Bangui'],
    ['CG', 'Africa/Brazzaville'],
    ['CH', 'Europe/Zurich'],
    ['CI', 'Africa/Abidjan'],
    ['CK', 'Pacific/Rarotonga'],
    ['CL', 'America/Santiago'],
    ['CM', 'Africa/Douala'],
    ['CN', 'Asia/Shanghai'],
    ['CO', 'America/Bogota'],
    ['CR', 'America/Costa_Rica'],
    ['CU', 'America/Havana'],
    ['CV', 'Atlantic/Cape_Verde'],
    ['CW', 'America/Curacao'],
    ['CX', 'Indian/Christmas'],
    ['CY', 'Asia/Nicosia'],
    ['CZ', 'Europe/Prague'],
    ['DE', 'Europe/Berlin'],
    ['DJ', 'Africa/Djibouti'],
    ['DK', 'Europe/Copenhagen'],
    ['DM', 'America/Dominica'],
    ['DO', 'America/Santo_Domingo'],
    ['DZ', 'Africa/Algiers'],
    ['EC', 'America/Guayaquil'],
    ['EE', 'Europe/Tallinn'],
    ['EG', 'Africa/Cairo'],
    ['EH', 'Africa/El_Aaiun'],
    ['ER', 'Africa/Asmara'],
    ['ES', 'Europe/Madrid'],
    ['ET', 'Africa/Addis_Ababa'],
    ['FI', 'Europe/Helsinki'],
    ['FJ', 'Pacific/Fiji'],
    ['FK', 'Atlantic/Stanley'],
    ['FM', 'Pacific/Pohnpei'],
    ['FO', 'Atlantic/Faroe'],
    ['FR', 'Europe/Paris'],
    ['GA', 'Africa/Libreville'],
    ['GB', 'Europe/London'],
    ['GD', 'America/Grenada'],
    ['GE', 'Asia/Tbilisi'],
    ['GF', 'America/Cayenne'],
    ['GG', 'Europe/Guernsey'],
    ['GH', 'Africa/Accra'],
    ['GI', 'Europe/Gibraltar'],
    ['GL', 'America/Godthab'],
    ['GM', 'Africa/Banjul'],
    ['GN', 'Africa/Conakry'],
    ['GP', 'America/Guadeloupe'],
    ['GQ', 'Africa/Malabo'],
    ['GR', 'Europe/Athens'],
    ['GS', 'Atlantic/South_Georgia'],
    ['GT', 'America/Guatemala'],
    ['GU', 'Pacific/Guam'],
    ['GW', 'Africa/Bissau'],
    ['GY', 'America/Guyana'],
    ['HK', 'Asia/Hong_Kong'],
    ['HN', 'America/Tegucigalpa'],
    ['HR', 'Europe/Zagreb'],
    ['HT', 'America/Port-au-Prince'],
    ['HU', 'Europe/Budapest'],
    ['ID', 'Asia/Jakarta'],
    ['IE', 'Europe/Dublin'],
    ['IL', 'Asia/Jerusalem'],
    ['IM', 'Europe/Isle_of_Man'],
    ['IN', 'Asia/Kolkata'],
    ['IO', 'Indian/Chagos'],
    ['IQ', 'Asia/Baghdad'],
    ['IR', 'Asia/Tehran'],
    ['IS', 'Atlantic/Reykjavik'],
    ['IT', 'Europe/Rome'],
    ['JE', 'Europe/Jersey'],
    ['JM', 'America/Jamaica'],
    ['JO', 'Asia/Amman'],
    ['JP', 'Asia/Tokyo'],
    ['KE', 'Africa/Nairobi'],
    ['KG', 'Asia/Bishkek'],
    ['KH', 'Asia/Phnom_Penh'],
    ['KI', 'Pacific/Tarawa'],
    ['KM', 'Indian/Comoro'],
    ['KN', 'America/St_Kitts'],
    ['KP', 'Asia/Pyongyang'],
    ['KR', 'Asia/Seoul'],
    ['KW', 'Asia/Kuwait'],
    ['KY', 'America/Cayman'],
    ['KZ', 'Asia/Almaty'],
    ['LA', 'Asia/Vientiane'],
    ['LB', 'Asia/Beirut'],
    ['LC', 'America/St_Lucia'],
    ['LI', 'Europe/Vaduz'],
    ['LK', 'Asia/Colombo'],
    ['LR', 'Africa/Monrovia'],
    ['LS', 'Africa/Maseru'],
    ['LT', 'Europe/Vilnius'],
    ['LU', 'Europe/Luxembourg'],
    ['LV', 'Europe/Riga'],
    ['LY', 'Africa/Tripoli'],
    ['MA', 'Africa/Casablanca'],
    ['MC', 'Europe/Monaco'],
    ['MD', 'Europe/Chisinau'],
    ['ME', 'Europe/Podgorica'],
    ['MF', 'America/Marigot'],
    ['MG', 'Indian/Antananarivo'],
    ['MH', 'Pacific/Majuro'],
    ['MK', 'Europe/Skopje'],
    ['ML', 'Africa/Bamako'],
    ['MM', 'Asia/Yangon'],
    ['MN', 'Asia/Ulaanbaatar'],
    ['MO', 'Asia/Macau'],
    ['MP', 'Pacific/Saipan'],
    ['MQ', 'America/Martinique'],
    ['MR', 'Africa/Nouakchott'],
    ['MS', 'America/Montserrat'],
    ['MT', 'Europe/Malta'],
    ['MU', 'Indian/Mauritius'],
    ['MV', 'Indian/Maldives'],
    ['MW', 'Africa/Blantyre'],
    ['MX', 'America/Mexico_City'],
    ['MY', 'Asia/Kuala_Lumpur'],
    ['MZ', 'Africa/Maputo'],
    ['NA', 'Africa/Windhoek'],
    ['NC', 'Pacific/Noumea'],
    ['NE', 'Africa/Niamey'],
    ['NF', 'Pacific/Norfolk'],
    ['NG', 'Africa/Lagos'],
    ['NI', 'America/Managua'],
    ['NL', 'Europe/Amsterdam'],
    ['NO', 'Europe/Oslo'],
    ['NP', 'Asia/Kathmandu'],
    ['NR', 'Pacific/Nauru'],
    ['NU', 'Pacific/Niue'],
    ['NZ', 'Pacific/Auckland'],
    ['OM', 'Asia/Muscat'],
    ['PA', 'America/Panama'],
    ['PE', 'America/Lima'],
    ['PF', 'Pacific/Tahiti'],
    ['PG', 'Pacific/Port_Moresby'],
    ['PH', 'Asia/Manila'],
    ['PK', 'Asia/Karachi'],
    ['PL', 'Europe/Warsaw'],
    ['PM', 'America/Miquelon'],
    ['PN', 'Pacific/Pitcairn'],
    ['PR', 'America/Puerto_Rico'],
    ['PS', 'Asia/Gaza'],
    ['PT', 'Europe/Lisbon'],
    ['PW', 'Pacific/Palau'],
    ['PY', 'America/Asuncion'],
    ['QA', 'Asia/Qatar'],
    ['RE', 'Indian/Reunion'],
    ['RO', 'Europe/Bucharest'],
    ['RS', 'Europe/Belgrade'],
    ['RU', 'Europe/Moscow'],
    ['RW', 'Africa/Kigali'],
    ['SA', 'Asia/Riyadh'],
    ['SB', 'Pacific/Guadalcanal'],
    ['SC', 'Indian/Mahe'],
    ['SD', 'Africa/Khartoum'],
    ['SE', 'Europe/Stockholm'],
    ['SG', 'Asia/Singapore'],
    ['SH', 'Atlantic/St_Helena'],
    ['SI', 'Europe/Ljubljana'],
    ['SJ', 'Arctic/Longyearbyen'],
    ['SK', 'Europe/Bratislava'],
    ['SL', 'Africa/Freetown'],
    ['SM', 'Europe/San_Marino'],
    ['SN', 'Africa/Dakar'],
    ['SO', 'Africa/Mogadishu'],
    ['SR', 'America/Paramaribo'],
    ['SS', 'Africa/Juba'],
    ['ST', 'Africa/Sao_Tome'],
    ['SV', 'America/El_Salvador'],
    ['SX', 'America/Lower_Princes'],
    ['SY', 'Asia/Damascus'],
    ['SZ', 'Africa/Mbabane'],
    ['TC', 'America/Grand_Turk'],
    ['TD', 'Africa/Ndjamena'],
    ['TF', 'Indian/Kerguelen'],
    ['TG', 'Africa/Lome'],
    ['TH', 'Asia/Bangkok'],
    ['TJ', 'Asia/Dushanbe'],
    ['TK', 'Pacific/Fakaofo'],
    ['TL', 'Asia/Dili'],
    ['TM', 'Asia/Ashgabat'],
    ['TN', 'Africa/Tunis'],
    ['TO', 'Pacific/Tongatapu'],
    ['TR', 'Europe/Istanbul'],
    ['TT', 'America/Port_of_Spain'],
    ['TV', 'Pacific/Funafuti'],
    ['TW', 'Asia/Taipei'],
    ['TZ', 'Africa/Dar_es_Salaam'],
    ['UA', 'Europe/Kiev'],
    ['UG', 'Africa/Kampala'],
    ['UM', 'Pacific/Wake'],
    ['US', 'America/New_York'],
    ['UY', 'America/Montevideo'],
    ['UZ', 'Asia/Tashkent'],
    ['VA', 'Europe/Vatican'],
    ['VC', 'America/St_Vincent'],
    ['VE', 'America/Caracas'],
    ['VG', 'America/Tortola'],
    ['VI', 'America/St_Thomas'],
    ['VN', 'Asia/Ho_Chi_Minh'],
    ['VU', 'Pacific/Efate'],
    ['WF', 'Pacific/Wallis'],
    ['WS', 'Pacific/Apia'],
    ['YE', 'Asia/Aden'],
    ['YT', 'Indian/Mayotte'],
    ['ZA', 'Africa/Johannesburg'],
    ['ZM', 'Africa/Lusaka'],
    ['ZW', 'Africa/Harare'],
  ])
)

/**
 * An immutable set of all of the ISO 3166-1 alpha-2 country codes recognized by the library.
 */
export const isos = Object.freeze(new Set<string>([...countries.keys()]))

/**
 * Returns an array of ISO 3166-1 alpha-2 country codes that have the same specific time as the given options.
 * @param minute - The minute of the specific time.
 * @param hour - The hour of the specific time. Can be a number or an object of advanced options.
 * @param advanced - An object of advanced options for the specific time.
 * @returns An array of ISO 3166-1 alpha-2 country codes that have the same specific time as the given options.
 */
export function getCountriesWithSpecificTime(
  minute: Numeric,
  hour?: Numeric | SpecificTimeAdvancedOptions,
  advanced?: SpecificTimeAdvancedOptions
) {
  let options: Partial<SpecificTimeAdvancedOptions & { minute: Numeric }> = {
    minute,
  }
  if (typeof hour === 'object') {
    options = hour as SpecificTimeAdvancedOptions
  } else if (hour !== undefined) {
    options.hourOfDay = hour
    if (advanced) {
      options = { ...options, ...advanced }
    }
  }
  options = { ...options } as SpecificTimeAdvancedOptions & { minute: Numeric }
  const getNumberOrUndefined = (value: Numeric | undefined) => {
    if (value === undefined) {
      return undefined
    }
    const number = Number(value)
    if (isNaN(number)) {
      return undefined
    }
    return number
  }
  const dateObjectUnits: DateObjectUnits = {
    year: getNumberOrUndefined(options.year),
    month: getNumberOrUndefined(options.monthOfYear),
    day: getNumberOrUndefined(options.dayOfMonth),
    hour: getNumberOrUndefined(options.hourOfDay),
    minute: getNumberOrUndefined(options.minute),
    // Luxon's DateObjectUnits also includes seconds and milliseconds, which we'll set to 0
    second: 0,
    millisecond: 0,
  }

  const targetDateTime = DateTime.fromObject(dateObjectUnits)
  const ret: Array<string> = []
  const keysToCompare = Object.keys(dateObjectUnits).filter(
    (key) => 'undefined' !== typeof dateObjectUnits[key] && !['second', 'millisecond'].includes(key)
  )
  timezones.forEach((zone, iso2) => {
    const currentDateTimeInZone = DateTime.now().setZone(zone)
    const matches = keysToCompare.filter((key) => {
      return targetDateTime.toObject()[key] === currentDateTimeInZone.toObject()[key]
    })
    if (matches.length === keysToCompare.length) {
      ret.push(iso2)
    }
  })
  return ret
}
