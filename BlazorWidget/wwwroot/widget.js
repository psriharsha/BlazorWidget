var AppWindows = new Array();
const blazorWidget = {
    open: (url, title, prop, obj) => {
        AppWindows[AppWindows.length] = window;
        var w = window.open(url, title, prop);
        if (w != undefined) {
            AppWindows[AppWindows.length] = w;
            blazorWidget.pollForWindow(w, obj);
        }
    },
    pollForWindow: (w, obj) => {
        setTimeout(() => {
            if (w.closed) {
                if (w === AppWindows[0]) {
                    for (var i = 0; i < AppWindows.length; i++) {
                        AppWindows[i].close();
                    }
                }
                obj.invokeMethodAsync('NotifyWindowClosed').then(r => console.log(r));
            } else {
                blazorWidget.pollForWindow(w, obj);
            }
        }, 1000);
    }
}

window['blazorWidget'] = blazorWidget;