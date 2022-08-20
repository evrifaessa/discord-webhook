// Some locale codes and the countries they are mainly spoken in don't match. We need to map them to the correct country code and leave the rest the same.
export function LocaleToCountryCode(locale) {
    switch (locale.toLowerCase()) {
        case 'bn':
            return 'bd'; // Bangladesh
        case 'el':
            return 'gr'; // Greece
        case 'en':
            return 'gb'; // United Kingdom
        case 'uk':
            return 'ua'; // Ukraine
        case 'vi':
            return 'vn'; // Vietnam
        case 'zh':
            return 'cn'; // China
        default:
            return locale.toLowerCase();
    }
}

export function LocaleToFlagClass(locale) {
    return `fi fi-${LocaleToCountryCode(locale)}`;
}

export function LocaleToFlagURL(locale) {
    const protocol = "";
    const hostname = "";
    const folder = "/flags/";

    const countryCode = LocaleToCountryCode(locale);

    return protocol + hostname + folder + countryCode + ".svg";
}