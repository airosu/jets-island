import { MOCK_USER_AGENT_MOBILE, MOCK_USER_AGENT_PC } from 'test/mocks/device.mocks'
import { DeviceType } from 'constants/device'
import { checkDeviceType } from './check-device-type'

describe('checkDeviceType()', () => {
    it('should return "pc" if user agent is a desktop machine', () => {
        jest.spyOn(navigator, 'userAgent', 'get').mockReturnValueOnce(MOCK_USER_AGENT_PC)
        const deviceType = checkDeviceType()

        expect(deviceType).toBe(DeviceType.PC)
    })

    it('should return "mobile" if user agent is Android', () => {
        jest.spyOn(navigator, 'userAgent', 'get').mockReturnValueOnce(MOCK_USER_AGENT_MOBILE)
        const deviceType = checkDeviceType()

        expect(deviceType).toBe(DeviceType.MOBILE)
    })
})
