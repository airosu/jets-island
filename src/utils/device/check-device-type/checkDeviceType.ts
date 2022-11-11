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

    return mobileDeviceRegex.test(navigator.userAgent) ? DeviceType.MOBILE : DeviceType.PC
}
