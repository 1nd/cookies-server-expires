/**
 * @jest-environment node
 */

const Cookies = require('universal-cookie');

describe('Test expires in server-side', () => {
    it(`returns correct value if the value is not expired`, () => {
        const key = 'something'
        const value = 'value stored in cookie'

        const cookies = new Cookies()

        cookies.set(key, value)

        expect(cookies.get(key)).toBe(value)
    })
    it(`returns no value if the value has been expired`, () => {
        const key = 'something'
        const value = 'value stored in cookie'
        const expiresDate = new Date()
        expiresDate.setSeconds(expiresDate.getSeconds() - 1)

        console.log(expiresDate)

        const cookies = new Cookies()

        cookies.set(key, value, { expires: expiresDate })

        expect(cookies.get(key)).toBeUndefined()
    })
})