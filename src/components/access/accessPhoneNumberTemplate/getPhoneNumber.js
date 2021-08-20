export default function getPhoneNumber(event, phone, setPhone) {
    let phoneValue = event.target.value
    if (phoneValue.length + 1 === phone.length && phone.length > 5) {
        if (phoneValue.length === 6) setPhone(phoneValue.substring(0, 5))
        else if (phoneValue.length === 8) setPhone(phoneValue.substring(0, 7))
        else if (phoneValue.length === 9) setPhone(phoneValue.substring(0, 9))
        else if (phoneValue.length === 12) setPhone(phoneValue.substring(0, 11))
        else if (phoneValue.length === 13) setPhone(phoneValue.substring(0, 13))
        else if (phoneValue.length === 15) setPhone(phoneValue.substring(0, 14))
        else if (phoneValue.length === 16) setPhone(phoneValue.substring(0, 16))
        else setPhone(phoneValue)
    } else {
        let number = parseInt(phoneValue.charAt(phoneValue.length - 1))
        if (phone.length < 18 && phoneValue.length > 4 && number >= 0 && number <= 9) {
            console.log(number)

            if (phone.length === 5)
                setPhone(phone.concat('(' + number))
            else if (phone.length === 7) setPhone(phone.concat(number + ')'))
            else if (phone.length === 11 || phone.length === 14) setPhone(phone.concat(number + '-'))
            else setPhone(phone.concat(number))
        }
    }
}