#Opdracht
Voor het vak Browser Technologies is een demo ontwikkeld die volgens het Progressive Enhancement principe is opgebouwd, oftwel, uit 3 lagen is opgebouwd, waarbij op elke laag de core functionaliteit nog goed te gebruiken is. Deze lagen zijn de HTML, CSS en de Javascript.

Hieronder staat per laag uitgelegd welke eventuele complicaties deze laag met zich meebrengt. 

##Use case
De use case die in deze demo naar voren komt is de volgende:
> Ik wil in een lijst contacten kunnen zoeken, en details kunnen bekijken

De aanbevolen browser technologie hierbij is Sticky Position, iets wat ik zelf ook nog nooit gebruikt heb.

In de demo wordt een lijst met contacten opgehaald uit een json bestand. Deze lijst wordt weergegeven op chronologische volgorde, waarbij de eerste letter wordt uitvergroot. 

Door op het contact te klikken kan er automatisch met dit contact gebeld worden. 

Daarnaast kan er ook nog gezocht worden in de lijst met contacten, iets wat direct gebeurt, zodat de gebruiker niet de complete naam in hoeft de voeren. 

[Live demo](http://roosness.github.io/browserTech/opracht3/)

#Laag 1: HTML
Als de gebruiker enkel HTML aan heeft staan krijgt deze de lijst met contacten te zien, samen met de telefoonnummers. De applicatie is dan nogsteeds te gebruiken.

#Laag 2: CSS
Als de gebruiker ook CSS aan heeft staan krijgt de gebruiker een gestylde lijst van contacten te zien, samen met de telefoonnummers. De applicatie is dan nogsteeds te gebruiken.

###Transitions
Transitions worden door de meeste moderne browsers ondersteund, maar niet door de verouderde als IE8,9,10. De transitions zijn echter als een enhancement toegevoegd, en verbreken dus niets van de bruikbaarheid van de applicatie als deze niet weergegeven worden.

<img src="images/screenshots/transitions.png" alt="">

###Border-radius

Voor border-radius geld hetzelfde als transition, de enige plek waar border radius toegepast is, is de contacten avatar. Mocht border-radius niet ondersteund worden, ziet de gebruiker een vierkante afbeelding, maar kan hij de applicatie nogsteeds goed gebruiken.
<img src="images/screenshots/border-radius.png" alt="">

###Border-box
box sizing geeft enkel problemen met IE8. Zodra je met IE8 box-sizing gebruikt in combinatie met een min/max width of height, wordt de box-sizing genegeerd. Deze combinatie heb ik dus niet gebruikt in de CSS.

<img src="images/screenshots/boxsizing.png" alt="">

###Viewport en em
viewport wordt in veel browsers nog niet goed ondersteund. Elke gebruikte viewport unit heeft daarom een fallback op em, en mocht deze ook niet ondersteund worden een fallback op pixels.

<img src="images/screenshots/viewport.png" alt="">

#sticky
sticky wordt door nog maar weinig browsers ondersteund. om deze reden is sticky niet toegepast op de belangrijke onderdelen van de applicatie. Sticky wordt hier gebruikt als enhancement, en is geen vereiste om nog optimaal van de applicatie gebruik te maken.

<img src="images/screenshots/sticky.png" alt="">


#Laag 3: Javascript
Mocht de gebruiker ook gewoon zijn Javascript aan hebben staan wordt de statische HTML vervangen door een json bestand, waarmee de data ingeladen wordt. Ook komt er dan een belknop naar voren, waardoor er automatisch gebeld kan worden met het contact.
