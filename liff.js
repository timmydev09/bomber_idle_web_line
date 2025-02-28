const initLiff = async () => {
    try {
        await liff.init({ liffId: '2006981835-7GgjW3jm' });
        if (!liff.isLoggedIn()) {
            liff.login();
        }
        console.log(liff.getIdToken())
        document.getElementById("user-id").innerHTML(liff.getIdToken())
    } catch (err) {
        console.error(err)
    }
}

initLiff()