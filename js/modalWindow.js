var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var headingModal = document.querySelector(".heading_center");
var textModal = document.querySelector(".modal-txtP");

var allButton = ["myBtn-1", "myBtn-2", "myBtn-3", "myBtn-4", "myBtn-5", "myBtn-6", "myBtn-7", "myBtn-8"];

for (var i = 0; i < allButton.length; i++) {
    var buttonId = allButton[i];
    var button = document.getElementById(buttonId);

    button.addEventListener("click", function (event) {
        var clickedButtonId = event.target.id;

        switch (clickedButtonId) {
            case "myBtn-1":
                headingModal.textContent = "Izrada biznis i investicionih planova";
                textModal.textContent = "Naša kompanija nudi visoko personalizovanu i sveobuhvatnu uslugu izrade biznis i investicionih planova, prilagođenu vašim jedinstvenim ciljevima i potrebama. Naš tim iskusnih stručnjaka prepoznaje da svaki projekat ima svoje posebne izazove i mogućnosti, te pažljivo slušamo vaše ideje i viziju kako bismo kreirali plan koji će vas postaviti na put uspjeha. Kroz detaljnu analizu tržišta, konkurencije i relevantnih industrijskih trendova, razvijamo strategije koje će vam omogućiti da pronađete svoje mesto na tržištu i ostvarite konkurentske prednosti. Naši finansijski stručnjaci će pažljivo proračunati projekcije i scenarije kako biste imali realističan uvid u vaš potencijalni rast i povraćaj ulaganja. Naš pristup je temeljan i sveobuhvatan, što znači da ćemo raditi sa vama korak po korak kako bismo osigurali da vaš biznis ili investicioni plan odražava vaše vrijednosti i ciljeve. Naš cilj je da vam pružimo pouzdanu i kvalitetnu podršku koja će vam omogućiti donošenje ispravnih odluka i ostvarivanje dugoročnog uspjeha. Ne samo da ćemo vam pružiti profesionalno izrađen plan, već ćemo biti vaši partneri u postizanju ciljeva. Naš tim će biti tu da vas podrži tokom implementacije plana, pruži savjete i riješi sve izazove s kojima se možete suočiti. Uz našu uslugu izrade biznis i investicionih planova, postavite čvrste temelje za vaš uspjeh. Dozvolite nam da prevedemo vaše ideje u stvarnost i zajedno gradimo budućnost vašeg poslovanja!";
                textModal.innerHTML = "Naša kompanija nudi visoko personalizovanu i sveobuhvatnu uslugu izrade biznis i investicionih planova, prilagođenu vašim jedinstvenim ciljevima i potrebama. Naš tim iskusnih stručnjaka prepoznaje da svaki projekat ima svoje posebne izazove i mogućnosti, te pažljivo slušamo vaše ideje i viziju kako bismo kreirali plan koji će vas postaviti na put uspjeha. <br><br> Kroz detaljnu analizu tržišta, konkurencije i relevantnih industrijskih trendova, razvijamo strategije koje će vam omogućiti da pronađete svoje mesto na tržištu i ostvarite konkurentske prednosti. Naši finansijski stručnjaci će pažljivo proračunati projekcije i scenarije kako biste imali realističan uvid u vaš potencijalni rast i povraćaj ulaganja. <br><br> Naš pristup je temeljan i sveobuhvatan, što znači da ćemo raditi sa vama korak po korak kako bismo osigurali da vaš biznis ili investicioni plan odražava vaše vrijednosti i ciljeve. Naš cilj je da vam pružimo pouzdanu i kvalitetnu podršku koja će vam omogućiti donošenje ispravnih odluka i ostvarivanje dugoročnog uspjeha. <br><br> Ne samo da ćemo vam pružiti profesionalno izrađen plan, već ćemo biti vaši partneri u postizanju ciljeva. Naš tim će biti tu da vas podrži tokom implementacije plana, pruži savjete i riješi sve izazove s kojima se možete suočiti. <br><br> Uz našu uslugu izrade biznis i investicionih planova, postavite čvrste temelje za vaš uspjeh. Dozvolite nam da prevedemo vaše ideje u stvarnost i zajedno gradimo budućnost vašeg poslovanja!";
                modal.style.display = "block";
                break;
            case "myBtn-2":
                headingModal.textContent = "Pisanje aplikacija za EU i druge fondove i upravljanje projektima";
                textModal.textContent = "Naša kompanija predstavlja pouzdanog partnera za pisanje aplikacija za EU i druge fondove, kao i za efikasno upravljanje projektima koji ostvaruju vaše ambicije i ostvaruju pozitivan uticaj. Sa bogatim iskustvom u ovim oblastima, naša stručnost i posvećenost vašim ciljevima čine nas pravim izborom za uspjeh vaših projekata. Pisanje aplikacija za fondove može biti kompleksan i zahtevan proces, ali naš tim iskusnih konsultanata pruža vam sveobuhvatnu podršku tokom celog puta. Naš pristup počinje detaljnim razumijevanjem vaših potreba i ciljeva kako bismo prilagodili aplikacije vašim jedinstvenim zahtjevima. Sa pažljivom analizom i strateškim planiranjem, izrađujemo aplikacije koje odražavaju vašu viziju i ističu se među konkurencijom. Kada je vaša aplikacija odobrena, naš tim za upravljanje projektima preuzima kontrolu kako bismo osigurali da vaš projekat bude sproveden uspješno i u okviru predviđenih rokova. Sa jasno definisanim ciljevima i odgovarajućim planom akcije, upravljamo svakim korakom vašeg projekta, sarađujući sa vama kako bismo osigurali postizanje optimalnih rezultata. Naš pristup se zasniva na transparentnosti, komunikaciji i upravljanju rizicima. Razumijemo da svaki projekat ima svoje izazove, ali naša ekspertiza i fleksibilnost omogućavaju nam da brzo reagujemo i prilagodimo se kako bismo prevazišli prepreke i postigli uspjeh. Bilo da vaš projekat zahteva interdisciplinarni pristup, ili se suočavate sa složenim zahtevima fondova, naša posvećenost vašem uspjehu će biti ključni faktor koji će vas voditi ka ostvarenju ciljeva. Koristite prednosti naših usluga pisanja aplikacija za fondove i upravljanja projektima. Prepustite vaše ambicije u ruke našeg stručnog tima i zajedno gradimo uspešnu budućnost. Kontaktirajte nas danas kako bismo započeli vašu poslovnu transformaciju.";
                textModal.innerHTML = "Naša kompanija predstavlja pouzdanog partnera za pisanje aplikacija za EU i druge fondove, kao i za efikasno upravljanje projektima koji ostvaruju vaše ambicije i ostvaruju pozitivan uticaj. Sa bogatim iskustvom u ovim oblastima, naša stručnost i posvećenost vašim ciljevima čine nas pravim izborom za uspjeh vaših projekata. <br><br> Pisanje aplikacija za fondove može biti kompleksan i zahtevan proces, ali naš tim iskusnih konsultanata pruža vam sveobuhvatnu podršku tokom celog puta. Naš pristup počinje detaljnim razumijevanjem vaših potreba i ciljeva kako bismo prilagodili aplikacije vašim jedinstvenim zahtjevima. Sa pažljivom analizom i strateškim planiranjem, izrađujemo aplikacije koje odražavaju vašu viziju i ističu se među konkurencijom. <br><br> Kada je vaša aplikacija odobrena, naš tim za upravljanje projektima preuzima kontrolu kako bismo osigurali da vaš projekat bude sproveden uspješno i u okviru predviđenih rokova. Sa jasno definisanim ciljevima i odgovarajućim planom akcije, upravljamo svakim korakom vašeg projekta, sarađujući sa vama kako bismo osigurali postizanje optimalnih rezultata. <br><br> Naš pristup se zasniva na transparentnosti, komunikaciji i upravljanju rizicima. Razumijemo da svaki projekat ima svoje izazove, ali naša ekspertiza i fleksibilnost omogućavaju nam da brzo reagujemo i prilagodimo se kako bismo prevazišli prepreke i postigli uspjeh. <br><br> Bilo da vaš projekat zahteva interdisciplinarni pristup, ili se suočavate sa složenim zahtevima fondova, naša posvećenost vašem uspjehu će biti ključni faktor koji će vas voditi ka ostvarenju ciljeva. <br><br> Koristite prednosti naših usluga pisanja aplikacija za fondove i upravljanja projektima. Prepustite vaše ambicije u ruke našeg stručnog tima i zajedno gradimo uspešnu budućnost. Kontaktirajte nas danas kako bismo započeli vašu poslovnu transformaciju.";
                modal.style.display = "block";
                break;
            case "myBtn-3":
                headingModal.textContent = "Izrada marketing strategija";
                textModal.textContent = "Naša kompanija nudi profesionalnu uslugu izrade marketing strategije koja će vašem poslovanju doneti konkurentske prednosti i postaviti vas na put uspjeha. Naš pristup počinje dubokim razumijevanjem vaše kompanije, njenih vrijednosti, ciljeva i jedinstvenih prodajnih tačaka. Nakon toga pažljivo istražujemo vaše ciljno tržište kako bismo identifikovali ključne potrošače, njihove potrebe i preferencije. Na osnovu ovih saznanja, razvijamo strategiju koja će vam omogućiti da se povežete s vašom ciljnom publikom na efikasan i autentičan način. Naš tim će vam pružiti smjernice i akcione planove za upotrebu različitih marketinških kanala i alata, uključujući digitalni marketing, društvene mreže, SEO (optimizacija za pretraživače), content marketing, oglašavanje i još mnogo toga. Uz našu stručnost i kreativnost, vaša marketing strategija će biti prilagođena vašem budžetu i resursima, kako biste ostvarili maksimalan povraćaj investicije. Ulaganje u pravilno osmišljenu marketing strategiju je ključno za stvaranje snažnog brenda i privlačenje novih klijenata. Dozvolite da naši stručnjaci prilagode vaš marketinški pristup i ostvare vaše poslovne ciljeve. Kontaktirajte nas danas i zajedno ćemo graditi vašu uspešnu marketinšku budućnost.";
                textModal.innerHTML = "Naša kompanija nudi profesionalnu uslugu izrade marketing strategije koja će vašem poslovanju doneti konkurentske prednosti i postaviti vas na put uspjeha. Naš pristup počinje dubokim razumijevanjem vaše kompanije, njenih vrijednosti, ciljeva i jedinstvenih prodajnih tačaka. Nakon toga pažljivo istražujemo vaše ciljno tržište kako bismo identifikovali ključne potrošače, njihove potrebe i preferencije. Na osnovu ovih saznanja, razvijamo strategiju koja će vam omogućiti da se povežete s vašom ciljnom publikom na efikasan i autentičan način. <br><br> Naš tim će vam pružiti smjernice i akcione planove za upotrebu različitih marketinških kanala i alata, uključujući digitalni marketing, društvene mreže, SEO (optimizacija za pretraživače), content marketing, oglašavanje i još mnogo toga. Uz našu stručnost i kreativnost, vaša marketing strategija će biti prilagođena vašem budžetu i resursima, kako biste ostvarili maksimalan povraćaj investicije. <br><br> Ulaganje u pravilno osmišljenu marketing strategiju je ključno za stvaranje snažnog brenda i privlačenje novih klijenata. Dozvolite da naši stručnjaci prilagode vaš marketinški pristup i ostvare vaše poslovne ciljeve. Kontaktirajte nas danas i zajedno ćemo graditi vašu uspešnu marketinšku budućnost.";
                modal.style.display = "block";
                break;
            case "myBtn-4":
                headingModal.textContent = "Usluge grafičkog dizajna";
                textModal.textContent = "Bez obzira na to da li vam je potrebno osvježenje vašeg postojećeg brenda, kreiranje novog logotipa, dizajniranje promotivnih materijala ili stvaranje cjelokupnog vizuelnog identiteta za vašu kompaniju - mi smo tu da vam pomognemo. Naš pristup počinje pažljivim slušanjem vaših ideja, ciljeva i ciljne publike. Na osnovu vaših zahteva i vaše vizije, naš tim će vas uputiti kroz proces dizajna kako bismo kreirali inspirativna i efektivna rešenja. Bilo da je u pitanju dizajn logoa koji će odražavati suštinu vašeg poslovanja, vizitkarti koja će ostaviti snažan utisak, ambalaže koja će privući pažnju potrošača, ili bilo koje druge marketinške materijale - pružamo jedinstvena i inovativna dizajnerska rješenja. Kroz naš rad, fokusiramo se na stvaranje vizuelno privlačnih i funkcionalnih rješenja koja će vam omogućiti da se istaknete na tržištu i ostvarite trajan uticaj na vašu publiku. Naš tim će raditi u bliskoj saradnji s vama kako bismo osigurali da finalni dizajn odražava vaše vrijednosti i identitet, istovremeno pružajući profesionalan i koherentan izgled. Uložite u kvalitetan dizajn i postignite snažan vizuelni utisak. Kontaktirajte nas danas i zajedno ćemo osmisliti efektivna i privlačna grafička rješenja, koja će istaći vašu kompaniju na tržištu.";
                textModal.innerHTML = "Bez obzira na to da li vam je potrebno osvježenje vašeg postojećeg brenda, kreiranje novog logotipa, dizajniranje promotivnih materijala ili stvaranje cjelokupnog vizuelnog identiteta za vašu kompaniju - mi smo tu da vam pomognemo. <br><br> Naš pristup počinje pažljivim slušanjem vaših ideja, ciljeva i ciljne publike. Na osnovu vaših zahteva i vaše vizije, naš tim će vas uputiti kroz proces dizajna kako bismo kreirali inspirativna i efektivna rešenja. Bilo da je u pitanju dizajn logoa koji će odražavati suštinu vašeg poslovanja, vizitkarti koja će ostaviti snažan utisak, ambalaže koja će privući pažnju potrošača, ili bilo koje druge marketinške materijale - pružamo jedinstvena i inovativna dizajnerska rješenja. <br><br> Kroz naš rad, fokusiramo se na stvaranje vizuelno privlačnih i funkcionalnih rješenja koja će vam omogućiti da se istaknete na tržištu i ostvarite trajan uticaj na vašu publiku. Naš tim će raditi u bliskoj saradnji s vama kako bismo osigurali da finalni dizajn odražava vaše vrijednosti i identitet, istovremeno pružajući profesionalan i koherentan izgled. <br><br> Uložite u kvalitetan dizajn i postignite snažan vizuelni utisak. Kontaktirajte nas danas i zajedno ćemo osmisliti efektivna i privlačna grafička rješenja, koja će istaći vašu kompaniju na tržištu.";
                modal.style.display = "block";
                break;
            case "myBtn-5":
                headingModal.textContent = "Usluge unapređenja WEB prezentacije";
                textModal.textContent = "Naša kompanija pruža profesionalne usluge unapređenja WEB prezentacije, sa fokusom na kreiranju modernih, funkcionalnih i atraktivnih web sajtova koji će ostaviti snažan utisak na vaše posjetioce. Bez obzira da li želite potpuno novu web stranicu ili želite osvježiti postojeću, naš tim iskusnih web dizajnera i programera je tu da vašu online prisutnost podigne na viši nivo. Naš pristup počinje pažljivim razumevanjem vaših ciljeva, potreba i ciljne publike. S pažnjom analiziramo vašu trenutnu web stranicu (ukoliko je imate) kako bismo identifikovali snage i izazove i pružili najbolje unapređenje. U slučaju kreiranja potpuno novog sajt, radićemo posvećeno na istraživanju vaše industrije i konkurencije kako bismo stvorili unikatno i efikasno rješenje koje će se istaći na tržištu. Naši dizajneri će vam pružiti moderni i atraktivan dizajn koji odražava vaš brend, istovremeno pružajući intuitivno korisničko iskustvo posetiocima. Pomoći ćemo vam da struktuirate sadržaj na jasan i privlačan način kako biste maksimalno angažovali svoju ciljnu publiku. Pored estetskog aspekta, naši web sajtovi su prilagođeni za optimalno funkcionisanje na svim uređajima, uključujući desktop računare, tablete i mobilne telefone. Koristimo najnovije tehnologije i standarde kako bismo obezbedili brzinu učitavanja i sigurnost vašeg sajta. Investirajte u profesionalno unapređenje vaše WEB prezentacije i osigurajte da vaša online prisutnost predstavlja vaše poslovanje u najboljem svetlu. Kontaktirajte nas danas i zajedno ćemo kreirati web sajt koji će vam pomoći da ostvarite vaše ciljeve i osvojite online tržište.";
                textModal.innerHTML = "Naša kompanija pruža profesionalne usluge unapređenja WEB prezentacije, sa fokusom na kreiranju modernih, funkcionalnih i atraktivnih web sajtova koji će ostaviti snažan utisak na vaše posjetioce. Bez obzira da li želite potpuno novu web stranicu ili želite osvježiti postojeću, naš tim iskusnih web dizajnera i programera je tu da vašu online prisutnost podigne na viši nivo. <br><br> Naš pristup počinje pažljivim razumevanjem vaših ciljeva, potreba i ciljne publike. S pažnjom analiziramo vašu trenutnu web stranicu (ukoliko je imate) kako bismo identifikovali snage i izazove i pružili najbolje unapređenje. U slučaju kreiranja potpuno novog sajt, radićemo posvećeno na istraživanju vaše industrije i konkurencije kako bismo stvorili unikatno i efikasno rješenje koje će se istaći na tržištu. <br><br> Naši dizajneri će vam pružiti moderni i atraktivan dizajn koji odražava vaš brend, istovremeno pružajući intuitivno korisničko iskustvo posetiocima. Pomoći ćemo vam da struktuirate sadržaj na jasan i privlačan način kako biste maksimalno angažovali svoju ciljnu publiku. <br><br> Pored estetskog aspekta, naši web sajtovi su prilagođeni za optimalno funkcionisanje na svim uređajima, uključujući desktop računare, tablete i mobilne telefone. Koristimo najnovije tehnologije i standarde kako bismo obezbedili brzinu učitavanja i sigurnost vašeg sajta. <br><br> Investirajte u profesionalno unapređenje vaše WEB prezentacije i osigurajte da vaša online prisutnost predstavlja vaše poslovanje u najboljem svetlu. Kontaktirajte nas danas i zajedno ćemo kreirati web sajt koji će vam pomoći da ostvarite vaše ciljeve i osvojite online tržište.";
                modal.style.display = "block";
                break;
            case "myBtn-6":
                headingModal.textContent = "Analiza i unapređenje organizacione kulture";
                textModal.textContent = "Organizaciona kultura predstavlja važan faktor koji značajno determiniše uspješnost i produktivnost svake kompanije, a mi smo tu da vam pomognemo da je bolje razumijete i uskladite sa vašim ciljevima. Nakon što identifikujemo oblasti koje zahtevaju unapređenje, radimo zajedno sa vama na kreiranju personalizovanih planova za unapređenje organizacione kulture. Ovo uključuje definisanje novih vrijednosti, razvoj jasnih komunikacionih kanala i obuka za zaposlene kako bismo podržali pozitivne promene. Naš cilj je stvoriti radno okruženje koje podstiče angažman, timski rad, kreativnost i inovacije. Pružamo vam podršku u implementaciji planova, obezbjeđujući smjernice i prilagođenu obuku za upravljanje promjenama. Radimo u saradnji s vašim timom kako bismo osigurali da se promjene sprovedu uspešno i da se postigne željeni efekat. Naša usluga analize i unapređenja organizacione kulture će vam omogućiti da stvorite pozitivno i inspirativno radno okruženje koje podržava rast vaše organizacije i zadovoljstvo zaposlenih. Kontaktirajte nas danas i zajedno ćemo transformisati vašu organizacionu kulturu ka ostvarenju vrhunskih poslovnih rezultata.";
                textModal.innerHTML = "Organizaciona kultura predstavlja važan faktor koji značajno determiniše uspješnost i produktivnost svake kompanije, a mi smo tu da vam pomognemo da je bolje razumijete i uskladite sa vašim ciljevima. <br><br> Nakon što identifikujemo oblasti koje zahtevaju unapređenje, radimo zajedno sa vama na kreiranju personalizovanih planova za unapređenje organizacione kulture. Ovo uključuje definisanje novih vrijednosti, razvoj jasnih komunikacionih kanala i obuka za zaposlene kako bismo podržali pozitivne promene. Naš cilj je stvoriti radno okruženje koje podstiče angažman, timski rad, kreativnost i inovacije. <br><br> Pružamo vam podršku u implementaciji planova, obezbjeđujući smjernice i prilagođenu obuku za upravljanje promjenama. Radimo u saradnji s vašim timom kako bismo osigurali da se promjene sprovedu uspešno i da se postigne željeni efekat. <br><br> Naša usluga analize i unapređenja organizacione kulture će vam omogućiti da stvorite pozitivno i inspirativno radno okruženje koje podržava rast vaše organizacije i zadovoljstvo zaposlenih. Kontaktirajte nas danas i zajedno ćemo transformisati vašu organizacionu kulturu ka ostvarenju vrhunskih poslovnih rezultata.";
                modal.style.display = "block";
                break;
            case "myBtn-7":
                headingModal.textContent = "Organizacija događaja";
                textModal.textContent = "Uz našu kompaniju kao vašeg pouzdanog partnera, možete biti sigurni da će svaki trenutak vašeg posebnog događaja biti pažljivo osmišljen i izveden. Naš tim stručnjaka posvećen je stvaranju jedinstvenih i nezaboravnih iskustava koja će zadovoljiti i najviše standarde. Naš kreativni tim će vam predstaviti originalne i inspirativne koncepte, uključujući dekoraciju, tematske ideje, raspored programa i izbor najukusnijih obroka i pića. Sve to će biti pažljivo prilagođeno vašem budžetu i stilu, kako bismo stvorili događaj koji odražava vašu jedinstvenu ličnost i viziju. Na dan događaja, naš tim koordinatora će se pobrinuti za sve logističke detalje i koordinaciju sa dobavljačima. Naš cilj je obezbijediti glatku i bezbrižnu organizaciju, tako da vi i vaši gosti možete uživati u svakom trenutku, bez stresa. Vaš događaj će biti pažljivo kreiran kako bi oživio vaše snove i obilježio poseban trenutak u vašem životu ili poslovanju. Kontaktirajte nas danas i dozvolite nam da vašu viziju pretvorimo u nezaboravno iskustvo koje će nadmašiti sva očekivanja!";
                textModal.innerHTML = "Uz našu kompaniju kao vašeg pouzdanog partnera, možete biti sigurni da će svaki trenutak vašeg posebnog događaja biti pažljivo osmišljen i izveden. Naš tim stručnjaka posvećen je stvaranju jedinstvenih i nezaboravnih iskustava koja će zadovoljiti i najviše standarde. <br><br> Naš kreativni tim će vam predstaviti originalne i inspirativne koncepte, uključujući dekoraciju, tematske ideje, raspored programa i izbor najukusnijih obroka i pića. Sve to će biti pažljivo prilagođeno vašem budžetu i stilu, kako bismo stvorili događaj koji odražava vašu jedinstvenu ličnost i viziju. <br><br> Na dan događaja, naš tim koordinatora će se pobrinuti za sve logističke detalje i koordinaciju sa dobavljačima. Naš cilj je obezbijediti glatku i bezbrižnu organizaciju, tako da vi i vaši gosti možete uživati u svakom trenutku, bez stresa. <br><br> Vaš događaj će biti pažljivo kreiran kako bi oživio vaše snove i obilježio poseban trenutak u vašem životu ili poslovanju. Kontaktirajte nas danas i dozvolite nam da vašu viziju pretvorimo u nezaboravno iskustvo koje će nadmašiti sva očekivanja!";
                modal.style.display = "block";
                break;
            case "myBtn-8":
                headingModal.textContent = "Usluge registracije preduzeća i pravnog savjetovanja";
                textModal.textContent = "Naša kompanija pruža pouzdane usluge registracije preduzeća i pravnog savjetovanja kako bismo vam pomogli da započnete vaš biznis s punim povjerenjem i poštovanjem pravnih procedura. Naš iskusni tim pravnih stručnjaka pruža podršku tokom cijelog procesa, čineći vašu registraciju jednostavnom i efikasnom. Naši pravni savjetnici će vam pomoći u odabiru najprikladnijeg pravnog oblika za vaše poslovanje, bilo da je to preduzetnik, društvo s ograničenom odgovornošću ili akcionarsko društvo. Pružamo vam sve potrebne informacije i dokumentaciju kako bismo vam omogućili da donesete informisane odluke. Nakon izbora pravnog oblika, naš tim će preuzeti vođenje administrativnih postupaka i pripremu potrebne dokumentacije za registraciju preduzeća. Brinemo o svakom detalju kako bismo osigurali da vaša registracija bude pravilno izvršena. Pored registracije preduzeća, pružamo i pravno savjetovanje u vezi sa vašim poslovanjem. Naši stručnjaci vam pomažu u razumijevanju zakona, propisa i pravnih obaveza koje se odnose na vašu industriju. Pružamo vam savjete o poslovnim ugovorima, zaštiti intelektualne svojine, poreskim pitanjima i drugim pravnim aspektima kako biste zaštitili svoje interese i osigurali poslovnu uspješnost. Uz naše usluge registracije preduzeća i pravnog savjetovanja, možete se osećati sigurno i obezbeđeno u svom poslovanju. Kontaktirajte nas danas i osigurajte pravilnu i profesionalnu registraciju vašeg preduzeća, za uspješan početak i nesmetano funkcionisanje vašeg biznisa!";
                textModal.innerHTML = "Naša kompanija pruža pouzdane usluge registracije preduzeća i pravnog savjetovanja kako bismo vam pomogli da započnete vaš biznis s punim povjerenjem i poštovanjem pravnih procedura. Naš iskusni tim pravnih stručnjaka pruža podršku tokom cijelog procesa, čineći vašu registraciju jednostavnom i efikasnom. <br><br> Naši pravni savjetnici će vam pomoći u odabiru najprikladnijeg pravnog oblika za vaše poslovanje, bilo da je to preduzetnik, društvo s ograničenom odgovornošću ili akcionarsko društvo. Pružamo vam sve potrebne informacije i dokumentaciju kako bismo vam omogućili da donesete informisane odluke. Nakon izbora pravnog oblika, naš tim će preuzeti vođenje administrativnih postupaka i pripremu potrebne dokumentacije za registraciju preduzeća. Brinemo o svakom detalju kako bismo osigurali da vaša registracija bude pravilno izvršena. <br><br> Pored registracije preduzeća, pružamo i pravno savjetovanje u vezi sa vašim poslovanjem. Naši stručnjaci vam pomažu u razumijevanju zakona, propisa i pravnih obaveza koje se odnose na vašu industriju. Pružamo vam savjete o poslovnim ugovorima, zaštiti intelektualne svojine, poreskim pitanjima i drugim pravnim aspektima kako biste zaštitili svoje interese i osigurali poslovnu uspješnost. <br><br> Uz naše usluge registracije preduzeća i pravnog savjetovanja, možete se osećati sigurno i obezbeđeno u svom poslovanju. Kontaktirajte nas danas i osigurajte pravilnu i profesionalnu registraciju vašeg preduzeća, za uspješan početak i nesmetano funkcionisanje vašeg biznisa!";
                modal.style.display = "block";
                break;
                /*
            case "myBtn-9":
                headingModal.textContent = "Izrada biznis i investicionih planova";
                textModal.textContent = "Naša kompanija nudi visoko personalizovanu i sveobuhvatnu uslugu izrade biznis i investicionih planova, prilagođenu vašim jedinstvenim ciljevima i potrebama. Naš tim iskusnih stručnjaka prepoznaje da svaki projekat ima svoje posebne izazove i mogućnosti, te pažljivo slušamo vaše ideje i viziju kako bismo kreirali plan koji će vas postaviti na put uspjeha. Kroz detaljnu analizu tržišta, konkurencije i relevantnih industrijskih trendova, razvijamo strategije koje će vam omogućiti da pronađete svoje mesto na tržištu i ostvarite konkurentske prednosti. Naši finansijski stručnjaci će pažljivo proračunati projekcije i scenarije kako biste imali realističan uvid u vaš potencijalni rast i povraćaj ulaganja. Naš pristup je temeljan i sveobuhvatan, što znači da ćemo raditi sa vama korak po korak kako bismo osigurali da vaš biznis ili investicioni plan odražava vaše vrijednosti i ciljeve. Naš cilj je da vam pružimo pouzdanu i kvalitetnu podršku koja će vam omogućiti donošenje ispravnih odluka i ostvarivanje dugoročnog uspjeha. Ne samo da ćemo vam pružiti profesionalno izrađen plan, već ćemo biti vaši partneri u postizanju ciljeva. Naš tim će biti tu da vas podrži tokom implementacije plana, pruži savjete i riješi sve izazove s kojima se možete suočiti. Uz našu uslugu izrade biznis i investicionih planova, postavite čvrste temelje za vaš uspjeh. Dozvolite nam da prevedemo vaše ideje u stvarnost i zajedno gradimo budućnost vašeg poslovanja!";
                textModal.innerHTML = "Naša kompanija nudi visoko personalizovanu i sveobuhvatnu uslugu izrade biznis i investicionih planova, prilagođenu vašim jedinstvenim ciljevima i potrebama. Naš tim iskusnih stručnjaka prepoznaje da svaki projekat ima svoje posebne izazove i mogućnosti, te pažljivo slušamo vaše ideje i viziju kako bismo kreirali plan koji će vas postaviti na put uspjeha. <br><br> Kroz detaljnu analizu tržišta, konkurencije i relevantnih industrijskih trendova, razvijamo strategije koje će vam omogućiti da pronađete svoje mesto na tržištu i ostvarite konkurentske prednosti. Naši finansijski stručnjaci će pažljivo proračunati projekcije i scenarije kako biste imali realističan uvid u vaš potencijalni rast i povraćaj ulaganja. <br><br> Naš pristup je temeljan i sveobuhvatan, što znači da ćemo raditi sa vama korak po korak kako bismo osigurali da vaš biznis ili investicioni plan odražava vaše vrijednosti i ciljeve. Naš cilj je da vam pružimo pouzdanu i kvalitetnu podršku koja će vam omogućiti donošenje ispravnih odluka i ostvarivanje dugoročnog uspjeha. <br><br> Ne samo da ćemo vam pružiti profesionalno izrađen plan, već ćemo biti vaši partneri u postizanju ciljeva. Naš tim će biti tu da vas podrži tokom implementacije plana, pruži savjete i riješi sve izazove s kojima se možete suočiti. <br><br> Uz našu uslugu izrade biznis i investicionih planova, postavite čvrste temelje za vaš uspjeh. Dozvolite nam da prevedemo vaše ideje u stvarnost i zajedno gradimo budućnost vašeg poslovanja!";
                modal.style.display = "block";
                break;
                */
            default:
                console.log("Button nije kliknut!");
                break;
        }
    });
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
