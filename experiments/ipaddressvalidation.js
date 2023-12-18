/*
Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.
*/
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    if(verifyipv4(queryIP)) {
        return "IPv4";
    }
    if(verifyipv6(queryIP)) {
        return "IPv6";
    }
    return "Neither";
};
const verifyipv4 = (queryIP) => {
    const items = queryIP.split('.');
    if(items.length !== 4) {
        return false;
    }
    if(!items.every((item) => /^(0|[1-9]\d*)$/.test(item))) {
        return false;
    }
    const components = items.map((item) => parseInt(item, 10));
    if (!components.every((component) => component >=0 && component <=255)) {
        return false;
    }
    return true;
};
const verifyipv6 = (queryIP) => {
    const items = queryIP.split(':');
    if (items.length !== 8){
        return false;
    }
    if(!items.every((item) => /^[\da-fA-F]{1,4}$/.test(item))) {
        return false;
    }
    return true;
};