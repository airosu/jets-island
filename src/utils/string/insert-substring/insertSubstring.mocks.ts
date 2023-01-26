export const mockHost = 'lc-imageresizer-live-s.placeholdcdn.jp'

export const mockPath = {
    existingFile: {
        trailingSlash: {
            urlParams: `https://${mockHost}/resize/15_ugc.png/?width=720&height=480`,
            noUrlParams: `https://${mockHost}/resize/15_ugc.png/`,
        },
        noTrailingSlash: {
            urlParams: `https://${mockHost}/resize/15_ugc.png?width=720&height=480`,
            noUrlParams: `https://${mockHost}/resize/15_ugc.png`,
        },
    },
    existingFileExtensionOnly: {
        trailingSlash: {
            urlParams: `https://${mockHost}/resize/.svg/?width=720&height=480`,
            noUrlParams: `https://${mockHost}/resize/.svg/`,
        },
        noTrailingSlash: {
            urlParams: `https://${mockHost}/resize/.svg?width=720&height=480`,
            noUrlParams: `https://${mockHost}/resize/.svg`,
        },
    },
    noExistingFile: {
        trailingSlash: {
            urlParams: `https://${mockHost}/resize/?width=720&imageUrl=htts//1...022%2f_mobile.png%3fl.r%3d`,
            noUrlParams: `https://${mockHost}/resize/`,
        },
        noTrailingSlash: {
            urlParams: `https://${mockHost}/resize?width=720&imageUrl=htts//1...022%2f_mobile.png%3fl.r%3d`,
            noUrlParams: `https://${mockHost}/resize`,
        },
    },
} as const
