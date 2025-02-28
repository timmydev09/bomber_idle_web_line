const initLiff = async () => {
    try {
        await liff.init({ liffId: '2006898896-KvlkD1WM' });
        if (!liff.isLoggedIn()) {
            liff.login();
        }
        console.log(liff.getIdToken())
    } catch (err) {
        console.error(err)
    }
}

initLiff()