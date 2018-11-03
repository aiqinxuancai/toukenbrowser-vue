// pacfile.js example
var blocked      = ["*.*"];
var proxyServer  = "SOCKS5 127.0.2.1:1080";
function FindProxyForURL(url, host) {
    var shost = host.split(".").reverse();
    shost = shost[1] + "." + shost[0];
    for(var i = 0; i < blocked.length; i++) {
        if( shost == blocked[i] ) return proxyServer;
    }
    return "DIRECT";
}