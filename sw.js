self.addEventListener("push", event => {

    let data = {
        title: "XLine Araç Uyarısı",
        body: "Aracınız için yeni bir bildirim var.",
        url: "./panel.html"
    };

    if (event.data) {
        try {
            data = {
                ...data,
                ...event.data.json()
            };
        } catch (e) {
            data.body = event.data.text();
        }
    }

    const options = {
        body: data.body,
        icon: "./icons/icon-192.png",
        badge: "./icons/badge-96.png",

        data: {
            url: data.url || "./panel.html"
        },

        tag: data.tag || "xline-vehicle-alert",
        renotify: true,
        requireInteraction: false
    };

    event.waitUntil(
        self.registration.showNotification(
            data.title || "XLine Araç Uyarısı",
            options
        )
    );
});


self.addEventListener("notificationclick", event => {

    event.notification.close();

    const targetUrl =
        event.notification.data?.url ||
        "./panel.html";

    event.waitUntil(
        clients.matchAll({
            type: "window",
            includeUncontrolled: true
        }).then(windowClients => {

            for (const client of windowClients) {

                if ("focus" in client) {
                    client.navigate(targetUrl);
                    return client.focus();
                }
            }

            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
