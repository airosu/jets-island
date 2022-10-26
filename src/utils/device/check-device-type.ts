import { DeviceType } from 'constants/device'

/**
 * Returns either 'mobile' or 'PC', depending on what device type the page is being rendered on.
 * Also works in mobile device emulator, from most browser developer tools.
 *
 * @example
 * checkDeviceType() // => 'mobile'
 * checkDeviceType() // => 'PC'
 */

export const checkDeviceType = () => {
    const mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i

    const regexTestResult = mobileDeviceRegex.test(navigator.userAgent)
    return regexTestResult ? DeviceType.MOBILE : DeviceType.PC
}

/**
 * NOTE:
 * The reason why the whole "mobileDeviceRegex.test(navigator.userAgent)" test is placed first
 * in a const and then returned, instead of the statement directly, is because if the same
 * statement would be used again in the function, e.g. in a console.log(),
 * then the check-device-type.test.ts unit test would fail. (both test would return "PC")


    export const checkDeviceType = () => {
        const mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i
        console.log({
            msg: 'This will cause the test to fail',
            regexTestResult: mobileDeviceRegex.test(navigator.userAgent),
        })
        return mobileDeviceRegex.test(navigator.userAgent) ? DeviceType.MOBILE : DeviceType.PC
    }

 */
