
README – jQuery Web Showcase (Event-Driven Programming Prelim Project)

Project Goal:
To create a multi-section interactive website that demonstrates key jQuery effects such as:
- .hide(), .show()
- .fadeIn(), .fadeOut(), .fadeToggle(), .fadeTo()
- .slideUp(), .slideDown(), .slideToggle()
- .animate(), .stop()
- Callbacks and Chaining
- Plus: Dark Mode toggle, particle background, sound effects

Section-by-Section Breakdown:

1. Home Section – Intro Animation
Function: Displays a welcome message or intro banner when the page loads.
jQuery Effects:
- .fadeIn() – Fades in the section smoothly.
- .animate() – Moves and fades the text for a dynamic entrance.
- Chained animations for seamless visual flow.

2. About/Profile Card
Function: Displays a profile card with image and description.
jQuery Effects:
- .toggle() – Show/hide the card.
- .animate() – Enlarges or repositions the image smoothly.

3. Services/Features Panel
Function: Highlights clickable feature cards with expandable descriptions.
jQuery Effects:
- .slideToggle() – Reveals or hides each feature’s description.
- .stop() – Prevents queue buildup from multiple clicks.

4. Gallery/Portfolio
Function: Displays a series of images that respond to user interaction.
jQuery Effects:
- .fadeIn(), .fadeOut(), .fadeToggle(), .fadeTo() – Creates soft visual transitions.
- .animate() – Resizes or moves images for emphasis.

5. FAQ Section
Function: Presents frequently asked questions with expandable answers.
jQuery Effects:
- .slideDown(), .slideUp() – Toggles answer visibility.
- .stop() – Avoids animation delays with rapid clicks.

6. Notification Banner
Function: Displays a top banner automatically with a brief message.
jQuery Effects:
- .slideDown() – Slides the banner into view.
- .fadeOut() – Automatically fades it after 5 seconds.
- Callback function – Ensures fade happens after slide.

7. Dashboard Panel
Function: Simulates an admin or settings panel with moveable boxes.
jQuery Effects:
- .animate() – Adjusts size and position on button click.
- Chaining – Executes multiple visual effects sequentially.

Additional Features:

Dark Mode Toggle
Function: Allows the user to switch between light and dark themes.
Effect Applied: .toggleClass('dark-mode') – Adds/removes a class that changes theme colors.

Particle Background
Function: Animates floating particles behind all sections.
Technology Used: tsParticles or particles.js – Adds a modern visual effect not natively in jQuery.

Sticky Navigation
Function: Allows screen to follow when you scroll
Effect Applied: .scrollTop
