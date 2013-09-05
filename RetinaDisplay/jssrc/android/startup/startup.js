//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "RetinaDisplay",
    appName: "RetinaDisplay",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.4.114",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://10.10.4.114:80/middleware/MWServlet",
    secureurl: "https://10.10.4.114:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmHomeGlobals();
    frmRtnFirstGlobals();
    frmRtnSecondGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};