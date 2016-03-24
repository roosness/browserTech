#usecase

#laag 1: html
#laag 2: css
#laag 3: javascript

Handlebars?
Laag 1: HTML
Als de gebruiker enkel HTML aan heeft staan krijgt deze de lijst met contacten te zien, samen met de telefoonnummers. De applicatie is dan nogsteeds te gebruiken.

Laag 2: CSS
Als de gebruiker ook CSS aan heeft staan krijgt de gebruiker een gestylde lijst van contacten te zien, samen met de telefoonnummers. De applicatie is dan nogsteeds te gebruiken.

Transitions
Transitions worden door de meeste moderne browsers ondersteund, maar niet door de verouderde als IE8,9,10. De transitions zijn echter als een enhancement toegevoegd, en verbreken dus niets van de bruikbaarheid van de applicatie als deze niet weergegeven worden.
http://caniuse.com/#search=transition
screenshit: transition.

Border-radius
http://caniuse.com/border-radius
Voor border-radius geld hetzelfde als transition, de enige plek waar border radius toegepast is, is de contacten avatar. Mocht border-radius niet ondersteund worden, ziet de gebruiker een vierkante afbeelding, maar kan hij de applicatie nogsteeds goed gebruiken.
screenshot: border-radius
Border-box
box sizing geeft enkel problemen met IE8. Zodra je met IE8 box-sizing gebruikt in combinatie met een min/max width of height, wordt de box-sizing genegeerd. Deze combinatie heb ik dus niet gebruikt in de CSS.

screenshot:boxsizing

Viewport en em
viewport wordt in veel browsers nog niet goed ondersteund. Elke gebruikte viewport unit heeft daarom een fallback op em, en mocht deze ook niet ondersteund worden een fallback op pixels.

screenshot:viewport

sticky
sticky wordt door nog maar weinig browsers ondersteund. om deze reden is sticky niet toegepast op de belangrijke onderdelen van de applicatie. Sticky wordt hier gebruikt als enhancement, en is geen vereiste om nog optimaal van de applicatie gebruik te maken.
screenshot: sticky

