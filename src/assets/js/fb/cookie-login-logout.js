javascript:void (function () {
    function setCookie(t) {
        const list = t.split('; ');
        console.log(list);
        for (i = 0; i < list.length; i++) {
            const cname = list[i].split('=')[0];
            const cvalue = list[i].split('=')[1];
            const d = new Date();
            d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
            const expires = ';domain=.facebook.com;expires=' + d.toUTCString();
            document.cookie = cname + '=' + cvalue + '; ' + expires;
        }
    }

    function hex2a(hex) {
        var str = '';
        for (let i = 0; i < hex.length; i += 2) {
            const v = parseInt(hex.substr(i, 2), 16);
            if (v) str += String.fromCharCode(v);
        }
        return str;
    }

    const cookie = prompt('Nhập cookie vào bên dưới để đăng nhập', '');
    setCookie(cookie);
    location.href = 'https://facebook.com';
})();

javascript:void (function () {
    function deleteAllCookiesFromCurrentDomain() {
        const cookies = document.cookie.split('; ');
        for (let c = 0; c < cookies.length; c++) {
            const d = window.location.hostname.split('.');
            while (d.length > 0) {
                const cookieBase = encodeURIComponent(cookies[c].split(';')[0].split('=')[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
                const p = location.pathname.split('/');
                document.cookie = cookieBase + '/';
                while (p.length > 0) {
                    document.cookie = cookieBase + p.join('/');
                    p.pop();
                }
                d.shift();
            }
        }
    }

    deleteAllCookiesFromCurrentDomain();
    location.href = 'https://facebook.com';
})();
