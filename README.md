# Library


## Waar kan ik het voor gebruiken?
Je kunt de library gebruiken voor het veranderen van elementen.
Het is mogelijk om zelf in te voeren welke breedte, hoogte, kleur en fontkleur het div element heeft.
Als laatste kun je margins veranderen als je op div elementen klikt waardoor ze verder uit elkaar gaan of dichter bij elkaar komen
of
Of je veranderd de kleur van het div element waar op je klikt (Je kan ze niet beide tegelijkertijd gebruiken
omdat je niet twee functies op een click kunt plaatsen.)


## Hoe kan ik de library integreren?
### 1. Download de Library

Het is natuurlijk wel nodig om eerst de library te downloaden zodat je ernaar kun linken.

### 2. Link de JS file
Zorg er wel voor dat je dit boven de functies aanroept anders gaat het niet werken.
```html
<script type="application/javascript" src="js/moveAni.js"></script>

```

### 3. Maak elementen in je pagina aan
Je hebt class of id nodig om de functies te laten werken.
Dit komt omdat je dadelijk een klassenaam of id in moet voeren,
zodat de library weet welke elementen moeten gaan animeren.

```html
  <div class="block" >
        <p>BLOKJE</p>
    </div>
    <div class="block" >
        <p>BLOKJE</p>
    </div>
```

### 4. Roep de functies aan in de html pagina
Door onderaan bij moveAni(jouwklasse of id) in te voeren weten de functies over welk element het gaat.
Het is mogelijk om parameters naar eigen wens te veranderen.
```javascript
<script>

    (function (moveAni) {

        window.onload = function () {
            moveAni.clickColor("red");
            moveAni.design("15vw","15vw","Green","White");
            moveAni.clickMargin("150px");
        }
    }(moveAni(".block")))

</script>


```
## Authors

* **Han Bosman**


## Demo

