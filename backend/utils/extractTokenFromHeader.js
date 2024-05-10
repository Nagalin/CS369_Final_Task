const extractTokenFromHeader = (tokenType, cookiesHeader) => {
    const cookies = cookiesHeader.split('; ')
    let token = ''

    cookies.map(currCookie => {
        let [key, value] = currCookie.split('=')
        if(key === tokenType) token = value
    })
    
    return token
}

module.exports = extractTokenFromHeader