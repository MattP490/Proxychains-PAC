function FindProxyForURL(url, host) {
    // Define rules based on the host or URL
    if (shExpMatch(host, "*.internaldomain.com")) {
        // Internal domain, bypass proxy
        return "DIRECT";
    }
    if (isInNet(host, "192.168.0.0", "255.255.255.0")) {
        // Local network, bypass proxy
        return "DIRECT";
    }

    // For all other traffic, use SOCKS proxies
    // You can specify multiple proxies for redundancy or load balancing
    var proxies = [
        "SOCKS4 192.168.1.200:1080",
        "SOCKS5 127.0.0.1:9050",
        "SOCKS5 10.10.10.1:1080"
    ];

    // Return the list of proxies in a round-robin style
    return proxies.join("; ");
}

