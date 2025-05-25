
self.addEventListener('push', function(event) {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification('Doginal Dog Alert', {
      body: data.body,
      icon: 'https://doggy.market/favicon.ico'
    })
  );
});
