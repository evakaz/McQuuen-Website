// Get references to the elements you want to translate
let teineProovisoitPohjalas = document.getElementById("teine-proovisoit-pohjalas");
let teineProovisoitTekst = document.getElementById("teine-proovisoit-tekst");
let languageToggle = document.getElementById("language-toggle");
let missioonPealkiri = document.getElementById("missioonPealkiri");
let tiimiliikmed = document.getElementById("teamMembers");
let evaTekst = document.getElementById("evaTekst");
let anneTekst = document.getElementById("anneTekst");
let valterTekst = document.getElementById("valterTekst");
let evertTekst = document.getElementById("evertTekst");
let rasmusTekst = document.getElementById("rasmusTekst");
let juljusTekst = document.getElementById("juljusTekst");
let paulTekst = document.getElementById("paulTekst");
let javierTekst = document.getElementById("javierTekst");
let tiimitekst = document.getElementById("tiimitekst");
let pildid = document.getElementById("pictures");
let missioonTekst1 = document.getElementById("missioonTekst1");
let missioonTekst2 = document.getElementById("missioonTekst2");
let missioonTekst3 = document.getElementById("missioonTekst3");
let sposorPealkiri = document.getElementById("sponsorPealkiri");
let sponsorTekst = document.getElementById("sponsorTekst");
let toetajad = document.getElementById("toetajad");
let autor = document.getElementById("autor");
let news = document.getElementById("news");
let contact = document.getElementById("contact");
let videos = document.getElementById("videos");
let esimenePealkiri = document.getElementById("esimenePealkiri");
let esimeneTekst1 = document.getElementById("esimeneTekst1");
let esimeneTekst2 = document.getElementById("esimeneTekst2");
let eProovisoit = document.getElementById("1proovisoit");
let tProovisoit = document.getElementById("2proovisoit");
let hooaeg = document.getElementById("hooaeg");
let missioon = document.getElementById("navMissioon");
let navToetus = document.getElementById("navToetus");
let navTiimiliikmed = document.getElementById("navTiimiliikmed");
let navPildid = document.getElementById("navPildid");
let navVideod = document.getElementById("navVideod");
let navUudised = document.getElementById("navUudised");
let navMaterjalid = document.getElementById("navMaterjalid");


// Set up your translations as objects with key-value pairs
const translations = {
  estonian: {
    teineProovisoitPohjalas: "Teine Proovisõit Põhjalas",
    // toggleText: "Switch to English",
    teineProovisoitTekst: "Vanalinna Hariduskolleegiumi gümnaasiumi taseme tunniplaanist võib leida õppeaine MATIK, mis on lühend matemaatikast, teadusest, tehnoloogiast, inseneri valdkonnast ja kunstist. Lõppeval õppeaastal oli meie eesmärgiks elektriauto ehitamine. Meie juhendajaks oli hispaania päritolu tarkvara insener ja idufirma ettevõtja Javier Ortín Cervera. Allpool klipp meie pühapäevasest proovisõidust Koplis Põhjala tehase angaaris. Elektriauto ehitasid: Eva Kazakovskaia, Evert Härm, Rasmus Tuum, Juljus Putrinš, Valter Luus, Paul Kask ja Anne-Riin Peep ning vastasmeeskond Üks Jupp.",
    missioonPealkiri: "Elekter? Tulevik!",
    missioonTekst1: "Me oleme innovaatlised gümnasistid Vanalinna Hariduskolleegiumist. Meie tiim ja varasemad gümnasistid ehitasid Greenpower Education Trust raames elektriauto skeletist. ",
    missioonTekst2: "Meie tiimis on gümnasiste igas vanuses ning kõigi panus aitas luua auto, millega me oma esimese proovisõidu Lubja 4 parklas 15. oktoobril 2022 korraldasime.",
    missioonTekst3: "Meie missiooniks on õppida meeskonnatöö korraldamist, inseneeria projekti läbiviimist, mehhanikat, elektroonikat, programmeerimist ja materjaliteadust. Kõike seda ja palju muud oleme me juba õppinud tänu elektriauto ehitamise väljakutse vastu võttes.",
    tiimiliikmed: "Tiimiliikmed",
    tiimitekst: "Meie ehitustiimis on igal meeskonnaliikmel ainulaadne vastutusvaldkond. Alates elektrisüsteemide kavandamisest ja rakendamisest kuni juhtmestiku ja elektroonika nõuetekohase paigaldamise ja töökindluse tagamiseni mängib iga liige olulist rolli projekti üldise edu saavutamisel. Olgu see siis elektrik, insener või tehnik, iga meeskonnaliige toob lauale erineva oskuste kogumi ja ekspertiisi, aidates kaasa elektriautode tõhusale ja ohutule käitamisele.",
    evaTekst: "Minu peamiseks ülesandeks sai draiveri ehk speed controlleri paigaldamine. Mina vastutan ka selle veebilehe arendamise eest.",
    anneTekst: "Minu peamiseks ülesandeks on sotsiaalmeedia haldamine, sponsori leidmine ning tulevikuplaanid. Mina vastutan ka selle eest, et meie sotsiaalmeedia platvormidel oleks kvaliteetne ja sihtrühmale huvipakkuv sisu.",
    valterTekst: "Minu peamiseks ülesandeks on disaini arendamine ja kujundamine. ",
    evertTekst: "Minu ülesandeks on üleüldine vastutus meie seadmete toimimise ja tõrgeteta töö tagamise eest. Mina vastutan ka selle eest, et meie seadmed vastavad kõikidele nõuetele ja standarditele ning et meie meeskond töötab kooskõlas kõigi asjakohaste eeskirjade ja protseduuridega.",
    rasmusTekst: "Minu peamiseks ülesandeks on mehaaniliste komponentide haldamine ja paigaldamine. Mina vastutan ka selle eest, et kõik meie seadmed töötaksid korrektselt ning oleksid ohutud kasutada. Lisaks sellele koostan hooldusplaane ja tagan, et meie seadmed vastavad kõikidele nõuetele ja standarditele.",
    juljusTekst: "Minu peamiseks ülesandeks on telemeetria komplekti haldamine ja hooldamine. Mina vastutan ka selle eest, et meie seadmed suudaksid koguda ja analüüsida täpset telemetria infot. Lisaks sellele koostan hooldusplaane ning tagan, et meie seadmed vastavad kõikidele nõuetele ja standarditele.",
    paulTekst: "Minu peamiseks ülesandeks on akude haldamine ja hooldamine. Mina vastutan ka selle eest, et meie akud oleksid alati töökorras ning tagaksid meie seadmete pideva toimimise. Lisaks sellele koostan hooldusplaane ja tagan, et meie akud vastavad kõikidele nõuetele ja standarditele.",
    javierTekst: "Mina olen selle projekti juhendaja.",
    sposorPealkiri: "Hakka meie sponsoriks?",
    sponsorTekst: "9–25-aastaste õpilaste meeskonnad üle maailma võistlevad Greenpoweri üritustel Ühendkuningriigis ja teistes riikides, sealhulgas USA-s, Hispaanias, Portugalis, Belgias ja Hiinas. Ka meie unistus on 2023. aasta suvel Ühendkuningriigis toimuvatele võistlustele jõuda. Aita meil saavutada see unistus!",
    toetajad: "Meie toetajad:",
    autor: "Piltide autor: Aleksandr Gužov",
    news: "Meist Tehtud Uudised",
    contact: "Võta meiega ühendust!",
    videos: "Videod",
    pildid: "Pildid",
    esimenePealkiri: "Esimene Proovisõit",
    esimeneTekst1: "22. oktoobril toimus Lubja 4 parklas meie esimene proovisõit, mis näitas nii sõiduki potentsiaali, kuid ka täiustamist vajavaid külgi, nagu gaasihooba kinnitus ja roolivõimendi puudusi.",
    esimeneTekst2: "Esimene proovisõitoli  oluline verstapost meie elektriauto arendamisel mitte ainult andmete kogumise pärast, vaid ka motivatsioonist, mida auto sõitma saamine meie tiimliikmetele andis.  Vaja on vaid testimist, analüüsimist ja täiustamist jätkata, et auto oma täieliku potentsiaali saavutaks!",
    eProovisoit: "1. proovisõit",
    tProovisoit: "2. proovisõit",
    hooaeg: "1. hooaeg",
    missioon: "Missioon",
    navToetus: "Aita meil eesmärgini jõuda!",
    navTiimiliikmed: "Tiimiliikmed",
    navPildid: "Pildid",
    navUudised: "Uudised",
    navVideod: "Videod" ,
    navMaterjalid: "Materjalid"
  },
  english: {
    teineProovisoitPohjalas: "Second Test Drive in Põhjala",
    teineProovisoitTekst: "There is a special course available for the high school students of Vanalinna Hariduskolleegium. It is called MATIK, which is an acronym for mathematics, science, technology, engineering and art. During this school year our task was building an electric car. Our instructor was a software engineer and startup entrepreneur of Spanish origins – Javier Ortin Cervera. Down below you can find a clip of one of our test drives, which took place in the Põhjatehas hangar in Kopli. The creators of the electric car are: Eva Kazakovskaia, Evert Härm, Rasmus Tuum, Juljus Putrinš, Valter Luus, Paul Kask and Anne-Riin Peep.",
    // toggleText: "Vaheta eesti keelde",
    missioonPealkiri: "Electricity? The future!",
    missioonTekst1: "We are innovative high schoolers from Vanalinna Hariduskolleegium. Our team and the students before us built an electric car from the skeleton up in association with the Greenpower Education Trust.",
    missioonTekst2: "We have high schoolers of all ages in our team and every single one of them helped in creating the car, with which we drove in our first ever test drive in the parking lot at Lubja 4 on the 15th of October 2022. ",
    missioonTekst3: " Our mission is learning how to work as a team, leading an engineering project, mechanics, electronics, programming and material science. We have learned this and much more, all because of taking on this challenge.",
    tiimiliikmed: "Team members",
    tiimitekst: "Each team member has a unique set of responsibilities. From designing and implementing electrical systems to ensuring that the wiring and circuitry are properly installed and functional, each member plays an important role in the overall success of the project. Whether it's the electrician, engineer, or technician, each team member brings a different skill set and expertise to the table, contributing to the efficient and safe operation of electric cars.",
    evaTekst: "My main task was to install the driver or speed controller. I am also responsible for the development of this website.",
    anneTekst: "My main task is managing social media, finding sponsors and future plans. I am also responsible for ensuring that our social media platforms have high-quality content that is of interest to the target audience.",
    valterTekst: "My main task is design development and design.",
    evertTekst: "My role is overall responsibility for the operation and smooth running of our equipment. I am also responsible for ensuring that our equipment meets all requirements and standards and that our team works in accordance with all relevant regulations and procedures.",
    rasmusTekst: "My main task is to manage and install mechanical components. I am also responsible for making sure that all our equipment works correctly and is safe to use. In addition, I prepare maintenance plans and ensure that our equipment meets all requirements and standards.",
    juljusTekst: "My main task is to manage and maintain the telemetry suite. I am also responsible for ensuring that our devices are able to collect and analyze accurate telemetry information. In addition, I prepare maintenance plans and ensure that our equipment meets all requirements and standards.",
    paulTekst: "My main task is battery management and maintenance. I am also responsible for making sure that our batteries are always in working order and that our equipment is always working. In addition, I create maintenance plans and ensure that our batteries meet all requirements and standards.",
    javierTekst: "I am the mentor of this project.",
    pildid: "Pictures",
    sposorPealkiri: "Would you like to be our sponsor?",
    sponsorTekst: "Students aged 9-25 from around the world compete in Greenpower tournaments held in various countries, including the United Kingdom, USA, Spain, Portugal, Belgium, and China. Our goal is to participate in the 2023 Greenpower tournament in the United Kingdom, and your support can help us achieve it!",
    toetajad: "Our sponsors:",
    autor: "Pictures made by: Aleksandr Gužov",
    news: "News About Us",
    contact: "Contact us!",
    videos: "Videod",
    esimenePealkiri: "First Test Drive",
    esimeneTekst1: "On October 22nd, the first test drive at Lubja 4 went smoothly, showcasing the potential of the vehicle. However, while the test drive was successful, it also highlighted the need for further improvement.",
    esimeneTekst2: "Despite these areas of improvement, the first test drive was an important milestone in the development of the vehicle at Lubja 4. With continued testing and refinement, we are confident that it will continue to improve and reach its full potential.",
    eProovisoit: "1. test drive",
    tProovisoit: "2. test drive",
    hooaeg: "1. season",
    missioon: "Mission",
    navToetus: "Help us reach our goal!",
    navTiimiliikmed: "Team members",
    navPildid: "Pictures",
    navUudised: "News",
    navVideod: "Videos" ,
    navMaterjalid: "Sources"
}
};

// Set the initial language to Estonian
let currentLanguage = "estonian";

// Function to switch languages
function toggleLanguage() {
  if (currentLanguage === "estonian") {
    teineProovisoitPohjalas.textContent = translations.english.teineProovisoitPohjalas;
    teineProovisoitTekst.textContent = translations.english.teineProovisoitTekst;
    // languageToggle.textContent = translations.english.toggleText;
    currentLanguage = "english";
    missioonPealkiri.textContent = translations.english.missioonPealkiri;
    missioonTekst1.textContent = translations.english.missioonTekst1;
    missioonTekst2.textContent = translations.english.missioonTekst2;
    missioonTekst3.textContent = translations.english.missioonTekst3;
    document.getElementById("flag").src = "/img/estonian.png"; // display French flag
    tiimiliikmed.textContent = translations.english.tiimiliikmed;
    tiimitekst.textContent = translations.english.tiimitekst;
    evaTekst.textContent = translations.english.evaTekst;
    anneTekst.textContent = translations.english.anneTekst;
    valterTekst.textContent = translations.english.valterTekst;
    evertTekst.textContent = translations.english.evertTekst;
    rasmusTekst.textContent = translations.english.rasmusTekst;
    juljusTekst.textContent = translations.english.juljusTekst;
    paulTekst.textContent = translations.english.paulTekst;
    javierTekst.textContent = translations.english.javierTekst;
    sposorPealkiri.textContent = translations.english.sposorPealkiri;
    sponsorTekst.textContent = translations.english.sponsorTekst;
    toetajad.textContent = translations.english.toetajad;
    autor.textContent = translations.english.autor;
    news.textContent = translations.english.news;
    contact.textContent = translations.english.contact;
    pildid.textContent = translations.english.pildid;
    videos.textContent = translations.english.videos;
    esimenePealkiri.textContent = translations.english.esimenePealkiri;
    esimeneTekst1.textContent = translations.english.esimeneTekst1;
    esimeneTekst2.textContent = translations.english.esimeneTekst2;
    eProovisoit.textContent = translations.english.eProovisoit;
    tProovisoit.textContent = translations.english.tProovisoit;
    hooaeg.textContent = translations.english.hooaeg;
    missioon.textContent = translations.english.missioon;
    navToetus.textContent = translations.english.navToetus;
    navTiimiliikmed.textContent = translations.english.navTiimiliikmed;
    navPildid.textContent = translations.english.navPildid;
    navUudised.textContent = translations.english.navUudised;
    navVideod.textContent = translations.english.navVideod;
    navMaterjalid.textContent = translations.english.navMaterjalid;
    



  } else {
    teineProovisoitPohjalas.textContent = translations.estonian.teineProovisoitPohjalas;
    teineProovisoitTekst.textContent = translations.estonian.teineProovisoitTekst;
    currentLanguage = "estonian";
    missioonPealkiri.textContent = translations.estonian.missioonPealkiri;
    missioonTekst1.textContent = translations.estonian.missioonTekst1;
    missioonTekst2.textContent = translations.estonian.missioonTekst2;
    missioonTekst3.textContent = translations.estonian.missioonTekst3;
    document.getElementById("flag").src = "/img/english.png"; // display French flag
    tiimiliikmed.textContent = translations.estonian.tiimiliikmed;
    tiimitekst.textContent = translations.estonian.tiimitekst;
    evaTekst.textContent = translations.estonian.evaTekst;
    anneTekst.textContent = translations.estonian.anneTekst;
    valterTekst.textContent = translations.estonian.valterTekst;
    evertTekst.textContent = translations.estonian.evertTekst;
    rasmusTekst.textContent = translations.estonian.rasmusTekst;
    juljusTekst.textContent = translations.estonian.juljusTekst;
    paulTekst.textContent = translations.estonian.paulTekst;
    javierTekst.textContent = translations.estonian.javierTekst;
    pildid.textContent = translations.estonian.pildid;
    sposorPealkiri.textContent = translations.estonian.sposorPealkiri;
    sponsorTekst.textContent = translations.estonian.sponsorTekst;
    toetajad.textContent = translations.estonian.toetajad;
    autor.textContent = translations.estonian.autor;
    news.textContent = translations.estonian.news;
    contact.textContent = translations.estonian.contact;
    videos.textContent = translations.estonian.videos;
    esimenePealkiri.textContent = translations.estonian.esimenePealkiri;
    esimeneTekst1.textContent = translations.estonian.esimeneTekst1;
    esimeneTekst2.textContent = translations.estonian.esimeneTekst2;
    eProovisoit.textContent = translations.estonian.eProovisoit;
    tProovisoit.textContent = translations.estonian.tProovisoit;
    hooaeg.textContent = translations.estonian.hooaeg;
    missioon.textContent = translations.estonian.missioon;
    navToetus.textContent = translations.estonian.navToetus;
    navTiimiliikmed.textContent = translations.estonian.navTiimiliikmed;
    navPildid.textContent = translations.estonian.navPildid;
    navUudised.textContent = translations.estonian.navUudised;
    navVideod.textContent = translations.estonian.navVideod;
    navMaterjalid.textContent = translations.estonian.navMaterjalid;
  }
}

// Call the toggleLanguage function once when the page is loaded
toggleLanguage();
toggleLanguage();

// Add a click event listener to the language toggle button
// languageToggle.addEventListener("click", toggleLanguage);

