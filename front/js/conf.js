function getCookies() {
    let getID = document.cookie

    let cookies = getID.split(';').reduce(
        (cookies, getID) => {
            const [name, val] = getID.split('=').map(c => c.trim());
            cookies[name] = val;
            return cookies;
        }, {});
    return cookies;
}

document.querySelector("#orderId").innerHTML = getCookies().orderId