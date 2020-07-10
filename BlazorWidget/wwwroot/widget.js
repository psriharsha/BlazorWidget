var AppWindows = new Array();
const blazorWidget = {
    open: (url, title, prop, obj) => {
        AppWindows.push(window);
        blazorWidget.setupKill(window);
        var w = window.open(url, title, prop);
        if (w != undefined) {
            AppWindows.push(w);
            //blazorWidget.pollForWindow(w, obj);
            w.onbeforeunload = () => {
                obj.invokeMethodAsync('NotifyWindowClosed').then(r => console.log(r));
            }
        }
    },
    setupKill: (win) => {
        win.onbeforeunload = () => {
            AppWindows.forEach(i => i.close());
        }
    }
}

window['blazorWidget'] = blazorWidget;