// Find a better way to keep the list updated
export function getEnglishNameFromLocaleCode(locale) {
    switch (locale.toLowerCase()) {
        case 'en':
            return 'English';
        case 'bn':
            return 'Bengali';
        case 'bg':
            return 'Bulgarian';
        case 'nl':
            return 'Dutch';
        case 'fr':
            return 'French';
        case 'de':
            return 'German';
        case 'el':
            return 'Greek';
        case 'lt':
            return 'Lithuanian';
        case 'pl':
            return 'Polish';
        case 'ro':
            return 'Romanian';
        case 'ru':
            return 'Russian';
        case 'es':
            return 'Spanish';
        case 'tr':
            return 'Turkish';
        case 'uk':
            return 'Ukrainian';
        case 'vi':
            return 'Vietnamese';
        default:
            return locale.toLowerCase();
    }
}