(function(w,d,c,k,a,b,t,e) {
    var cs = d.currentScript;
    if (cs) {
        var uo = cs.getAttribute('data-ueto');
        if (uo && w[uo] && typeof w[uo].setUserSignals === 'function') {
            w[uo].setUserSignals({'co': c, 'kc': k, 'at': a, 'bi': b, 'dt': t, 'ec': e});
        }
    }
})(window, document, 'us', false, false, false, false, false);