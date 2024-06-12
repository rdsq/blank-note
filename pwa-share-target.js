self.addEventListener("fetch", (event) => {
    // Regular requests not related to Web Share Target.
    if (event.request.method !== "POST") {
        event.respondWith(fetch(event.request));
        return;
    }

    // Requests related to Web Share Target.
    event.respondWith(
        (async () => {
            const formData = await event.request.formData();
            const text = formData.get("text") || '';
            const textToSend = encodeURIComponent(text);
            return Response.redirect(`/#${textToSend}`, 303);
        })(),
    );
});
