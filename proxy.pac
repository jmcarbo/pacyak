function FindProxyForURL(url, host)
{
// variable strings to return
var proxy_yes = "PROXY bla.bla.com:8080";
var proxy_no = "DIRECT";


if (shExpMatch(url, "http://127.*")) { return proxy_no; }
if (shExpMatch(url, "http://172.20.*")) { return proxy_no; }
if (shExpMatch(url, "https://172.20.*")) { return proxy_no; }
if (shExpMatch(url, "http://193.144.6.*")) { return proxy_no; }
if (shExpMatch(url, "http://193.147.240.*")) { return proxy_no; }
if (shExpMatch(url, "http://10.*")) { return proxy_no; }
if (shExpMatch(url, "http://*.pic.es*")) { return proxy_no; }
if (shExpMatch(url, "http://*jneurosci.org*")) { return proxy_yes; } 

  


// Proxy if PC is on local LAN

if (isInNet(myIpAddress(), "172.20.4.0", "255.255.252.0")) {
	return proxy_yes;
}
else {
	return proxy_yes;
}
}
