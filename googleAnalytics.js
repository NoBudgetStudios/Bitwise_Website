// Load the Google Tag Manager script
(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-RYBVHE9Z8G';
  document.head.appendChild(script);
})();

// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Configure the tag with debug mode enabled
gtag('js', new Date());
gtag('config', 'G-RYBVHE9Z8G', { 'debug_mode': true }); // Debug mode enabled

////button tracking

document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for the 'Join Newsletter' button
  var newsletterButton = document.getElementById('newsletter-button');
  if (newsletterButton) {
    newsletterButton.addEventListener('click', function() {
      console.log('Join Newsletter button clicked');  // Log to console
      gtag('event', 'join_newsletter', {
        'event_category': 'Button',
        'event_label': 'Join Newsletter'
      });
    });
  }

  // Add event listener for the 'Download Rulebook' button
  var downloadButton = document.getElementById('rules-download-button');
  if (downloadButton) {
    downloadButton.addEventListener('click', function() {
      console.log('Download Rulebook button clicked');  // Log to console
      gtag('event', 'download_rulebook', {
        'event_category': 'Button',
        'event_label': 'Download Rulebook'
      });
    });
  }
});