# Elokuvasivusto web-projekti

### [Linkki sivustolle](https://movieapp-976r.onrender.com/)

#### Avainsanat: Web-ohjelmointi, fullstack, frontend, backend, database, API, UI/UX wireframe, Node.js, React, JavaScript, PostgreSQL, Render, VS Code, Postman

Tervetuloa tutustumaan elokuvasivustoon, jonka ovat tehneet toisen vuoden tieto- ja viestintätekniikan ohjelmistokehityspuolen opiskelijat Oulun ammattikorkeakoulusta. Projektin tarkoitus on oppia fullstack-ohjelmointia, tekemällä Web-ohjelmoinnin sovellusprojekti (15 op), jonka lopputulos on elokuvasivusto.

Projektia ovat tehneet Lara Laamanen, Jaakko Kauppila, Paula Ervasti, Teemu Yritys ja Sami Köngäs. Ryhmässä jokainen on tehnyt fullstack-ohjelmointia, mutta jokaiselle jaettiin erilliset vastuualueet, jotka vastaavat osioiden etenemisestä. Köngäs on vastannut backendista, Kauppila sekä Yritys databasesta, Laamanen viestinnästä ja Ervasti frontendistä sekä wireframesta.

## Projektin kuvaus

Elokuvasivusto on fullstack web-sovellus, joka antaa käyttäjälle mahdollisuuden tutustua elokuvamaailmaan. Se yhdistää saumattomasti React-frontendin ja Node.js-backendin. Sivusto tarjoaa laajan valikoiman elokuvia sekä sarjoja, käyttäjäystävällisen käyttöliittymän sekä tehokkaan hakutoiminnon. Sivuston perusideana käyttäjä voi jättää erilaisia arvosteluja elokuvien ja sarjojen alle, keskustella niistä omissa ryhmissä ja tutkia tarjontaa niin uutisten kuin toisten jättämien arvostelujen muodossa. Käyttäjälle sovellus tarjoaa sosiaalisten ominaisuuksien lisäksi myös erilaisia kustomoituja ominaisuuksia, jolloin hän voi etsiä ja suodattaa mieluista tarjontaa erilaisten hakusuodatuksien avulla. 

## Teknologiat

### Frontend

Sovelluksen käyttöliittymäpuoli (frontend) on toteutettu käyttäen moderneja web-tekniikoita, kuten React-kirjastoa työkaluineen. Reactin avulla saadaan tehokas ja dynaaminen käyttöliittymä, jonka tilanmuutoksia on helppo hallita. Sovellus käyttää myös React Router Dom-kirjastoa reititykseen, mikä mahdollistaa eri näkymien hallinnan ja siirtymisen sovelluksen sisällä. Lisäksi kokonaisuuden rakentamisessa hyödynnetään myös ulkopuolisia kirjastoja, esimerkiksi kommunikointi palvelinpuolen kanssa onnistuu Axiosta hyödyntäen. Ulkoasun tyylittelyssä on hyödynnetty Styled Componenst-kirjastoa, joka mahdollistaa CSS:n kirjoittamisen suoraan React-komponentteihin, mikä taas helpottaa komponenttien tyylien hallintaa, eristämistä ja organisoimista. Sivun ja komponenttien responsiivisuus on toteutettu klassisella media queryllä, esimerkiksi navigointipalkin paikka ja tyyli mukautuvat näytön koon mukaan.

Frontendin arkkitehtuuri noudattaa komponenttipohjaista lähestymistapaa. App.js-tiedosto toimii keskeisenä reititystiedostona, jonka avulla sovellus navigoi eri näkymien välillä, joiden sisään on sisällytetty erikseen rakennettuja ja uudelleenkäytettäviä komponentteja. Yhteinen tekijä komponenttien ja näkymien välillä on niitä koskevat globaalit tyylit. Tämä on nopeuttanut sovelluksen kehitystä, sillä vain poikkeustapauksissa tyylittely tulee määritellä erikseen komponentteja ja näkymiä rakentaessa. Näkymät on eroteltu omiin pages- ja components-kansioihin, jolloin frontendin rakentaminen ja organisointi pysynyt tehokkaana ja helposti lähestyttävänä.

Sovellus on integroitu kolmannen osapuolen API:n kanssa. Tärkeänä osana on The Movie Database (TMDB)-rajapinta, joka sisältää muun muassa sarjoja, elokuvia ja niiden tietoja. Esimerkiksi MediaList-komponentti kutsuu API:a, esittää viisi elokuvaa kerrallaan, tyylittelee sekä tiivistää saadun informaation käyttäjälle sopivalla tavalla. Details-osio taas avaa tietoja laajemmin, mikäli käyttäjä tahtoo tietää enemmän. Toinen API sisältää Finnkinon uutisia, joka puolestaan tuo sivustolle monimuotoisuutta ja parantaa käyttäjäkokemusta. 

### Backend

Sovelluksen palvelinpuoli (backend) on kehitetty Javascriptin Node.js-ajoympäristössä Express-kirjastoa hyödyntäen. Node.js tarjoaa ajoympäristön Javascript-ohjelmoinnille palvelinpuolella, kun taas Express tekee palvelimen reitityksestä ja konfiguroinnista sekä HTTP-pyyntöjen käsittelystä helppoa ja selkeää. Node.js:n mukana tulevalla paketinhallintajärjestelmä NPM:llä, on toteutettu projektin, tarvittavien kirjastojen sekä muiden pakettien alustus, projektin riippuvuuksien lisääminen sekä kaikkien näiden päivittäminen.

![image](https://github.com/Web-Software-Project-Group20/MovieApp/assets/122626028/4604d490-bdd0-4d6e-98f1-a1b53082df91)

*KUVA 1. Model-View-Controller-malli.*

Palvelinpuoli on organisoitu noudattaen MVC- eli Model-View-Controller-mallia (kuva 1). Käytännössä palvelimen eri osa-alueet ovat jaoteltu omiksi osikseen. Model (malli) vastaa sovelluksen datan käsittelystä ja hallinnasta kuten tietokannoista. View (näkymä) huolehtii datan esittämisestä käyttäjälle. Perinteisestä MVC-mallista poiketen, sovelluksen palvelin ei suoraan näytä käyttäjälle mitään esimerkiksi HTML-muodossa, vaan data esitetään käyttäjälle HTTP-vastauksena JSON:na eli Javascript Object Notationilla. Controller (ohjain) vastaa kommunikaatiosta käyttäjän ja sovelluksen muiden eri osa alueiden välillä. Ohjaimet vastaavat esimerkiksi käyttäjälle esitetyn datan näyttämisestä käyttäjän syötteiden mukaan. MVC-malli erottaa selkeästi toiminnalliset osat toisistaan ja mahdollistaa modulaarisen sekä helposti ylläpidettävän sovelluksen.

#### Rajapinta

Sovelluksen palvelin tarjoaa REST- eli Representational State Transfer-rajapinnan käytetyn tietokannan välille, joka on esitelty alempana. Rajapinta tarjoaa eri päätepisteitä (endpoints) eri toiminnallisuuksiin. Esimerkiksi “/users” on endpoint käyttäjään ja siihen liittyvien toiminnallisuuksien hallintaan, kun taas “/reviews” on endpoint käyttäjien kirjoittamien arvostelujen lisäämiseen sekä muihin toiminnallisuuksiin. Endpointit ottavat datan vastaan JSON-formaatissa ja ne vastaavat siihen tarvittavalla tavalla riippuen annetusta datasta.

#### Tietoturva

Tietoturvasta on huolehdittu eri kirjastoilla, kuten CORS, JSON Web Token sekä Bcrypt. CORS eli Cross-origin resource sharing on mekanismi, jolla säädellään verkkosivujen lataamia resursseja eri alkuperistä tulevilta verkkopalvelimilta. Tällä voidaan määrittää, mitkä verkkopalvelinosoitteet saavat ladattua resursseja sovelluksen kehittäjän rajapinnasta. JSON Web Token eli JWT on tiiviste (token), jota backendissa käytetään käyttäjien autentikointiin. Tällä tavalla osa endpointeista on suojattu, jolloin ainoastaan sisäänkirjautunut käyttäjä voi kutsua tiettyjä endpointteja. Palvelin luo tokenin sisäänkirjautuessa ja se luodaan käyttäjän ID:n sekä salaisen avaimen avulla, joka on ainoastaan palvelimen tiedossa. Bcrypt on käyttäjien salasanojen salaamiseen tarkoitettu kirjasto. Bcrypt on todella hyvä esimerkiksi bruteforce- ja dictionary -hyökkäyksiä vastaan, sillä se käyttää säädettävää hidasprosessista hajautusalgoritmia.

#### Testaus

Palvelinta kehittäessä on hyödynnetty Mocha- ja Chai- kirjastoja, joilla koodille on voitu tehdä yksikkötestejä. Näillä on varmistettu koodien jakoon mennessä niiden toimivuus ja luotettavuus.

![image](https://github.com/Web-Software-Project-Group20/MovieApp/assets/122626028/23776b69-6a1e-4a20-bdf6-0e41928c785d)

*KUVA 2. Ryhmän toiminnallisuuden testaus.*

#### Dokumentaatio

Palvelimen toiminnallisuus ja sen palauttama data sekä eri endpointit on dokumentoitu Postman-työkalua käyttäen. Postman mahdollistaa kattavan dokumentaation, josta näkyy muun muassa eri endpointit, mitä dataa ne odottavat käyttäjän sinne lähettävän ja mitä dataa käyttäjä voi odottaa takaisin.

![image](https://github.com/Web-Software-Project-Group20/MovieApp/assets/122626028/a50a3a1a-75ef-4e51-b633-5adc096dade9)

*KUVA 3. Postman-dokumentaatio uuden käyttäjän luomisesta.*

### Tietokanta

Sovelluksessa käytetään PostgreSQL-tietokantaa (database) käyttäjien tietojen tallentamiseen. Tietokantaan tallennetaan esimerkiksi käyttäjäkohtaiset tiedot, arvostelut, suosikit ja ryhmät. Tietokanta on alustettu Render-nettisivustolle, johon jokainen kehittäjä on luonut yhteydet VSCode-ohjelmointiympäristön lisäosan Database Client JDBC kautta. Jokainen kehittäjä voi siis muokata sekä lisätä tietokantaan tietoa ja muutokset päivittyvät reaaliajassa kaikille. 

#### ER-kaavio

Sovelluksen tietokanta hyödyntää ER-kaavion (kuva 4) mukaista logiikkaa. Keskiössä on käyttäjä, joka voi tehdä arvosteluita, lisätä suosikkeihin elokuvia tai sarjoja. Käyttäjä voi myös kuulua eri ryhmiin ja ryhmän luoja on aina sen ylläpitäjä (admin), joka voi poistaa ryhmän tai käyttäjiä ryhmästä. Ryhmän luomisen yhteydessä luodaan ryhmälle nimi sekä asetetaan ryhmälle kuvaus ja kuvake. Ryhmässä käyttäjät voivat lisätä ryhmäkohtaiset suosikit ja keskustella ryhmän sisällä. Ryhmiin on mahdollista liittyä lähettämällä liittymispyyntö. Kaikki taulukkojen yhteydet ovat Identifioivia yhteyksiä. Eli kun käyttäjän poistetaan, poistaa se myös kaiken tiedon kyseiseen käyttäjään liittyen automaattisesti kaikista tauluista.

![image](https://github.com/Web-Software-Project-Group20/MovieApp/assets/122626028/d2157f39-bea6-438e-bc23-69533ee019d1)

*KUVA 4. Sovelluksen ER-kaavio.*

## UI/UX Wireframe

Sovelluksen yleisenä tavoitteena on paitsi tarjota käyttäjille yleistä tietoa elokuvista ja sarjoista, myös luoda yhteisöllinen tila. Sivuston visuaalinen identiteetti on harkittu niin värien kuin rakenteen puolesta. Kylmät ja tummat vihreät sekä sinisen sävyt luovat vahvan ja rauhallisen tunnelman, kun taas kellertävä valkoinen kontrastina tuo selkeyttä tekstiin ja navigointiin (kuva 5). Paletti luo uskottavuutta ja rauhallista tunnelmaa, joka houkuttelee käyttäjää uppoutumaan sisältöön ja viettämään enemmän aikaa sovelluksessa. 

![image](https://github.com/Web-Software-Project-Group20/MovieApp/assets/122626028/6b0f45a2-1acb-4236-858c-ac87e670ad02)

*KUVA 5. Tyylikonsepti.*

Wireframe- ja värillinen tyylikonsepti on hahmoteltu Figma-suunnittelutyökalussa ennen varsinaista sovelluksen rakentamista. Sovelluksen navigointi on suunniteltu pitämään yleisilme vakiona, mikä varmistaa sulavan käyttäjäkokemuksen useista kategorioista huolimatta.

![image](https://github.com/Web-Software-Project-Group20/MovieApp/assets/122626028/26e21cd7-81ad-4cc0-a311-4eb643d9fa86)

*KUVA 6. Työpöydän wireframe.*

Sovelluksessa on huomioitu eri kokoiset näytöt muuttamalla niin komponenttien kuin fonttien kokoa, sijaintia sekä välejä (kuvat 5-6). Näin esteettömyys on otettu huomioon tarkasti valitsemalla ruudulle sopiva fontti, sen koko sekä kontrasti ympäröivää taustaa vasten. Komponenttien välisen tiheyden pitäminen sopivan väljänä auttaa käyttäjiä helposti erottamaan eri osat. Lisäksi visuaalinen hierarkia on huomioitu suurten pääkategorioiden korostamisessa, mikä nopeuttaa käyttäjien tiedonhakua.

Interaktiivisuus on huomioitu erityisesti työpöydille, jossa hover-efektit tarjoavat visuaalista palautetta klikattavista elementeistä. Sovellus tarjoaa myös kenttiä median hakemiseen, suodattamiseen sekä kommentointiin, mikä monipuolistaa käyttäjäkokemusta.

## Sovelluksen käyttöönotto

Sovellusta pääsee kokeilemaan ja tarkastelemaan Renderiin luodulta palvelimelta. Kirjautumatta käyttäjä voi nähdä elokuvatarjontaa, suodattaa elokuvia sekä lukea ajankohtaisia uutisia. Laajempaa käyttöä varten, käyttäjän tulee tehdä tunnukset kohdasta ”Sign up”, jossa käyttäjä luo itselleen käyttäjänimen, salasanan sekä antaa sähköpostiosoitteensa. Kirjautuneena käyttäjä saa käyttöönsä profiili- sekä ryhmäominaisuudet ja mahdollisuuden kirjoittaa arvosteluja.
Sovelluksen voit ottaa käyttöön täältä: https://movieapp-976r.onrender.com/





