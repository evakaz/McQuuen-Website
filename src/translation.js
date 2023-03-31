// Get references to the elements you want to translate
let teineProovisoitPohjalas = document.getElementById("teine-proovisoit-pohjalas");
let teineProovisoitTekst = document.getElementById("teine-proovisoit-tekst");
let languageToggle = document.getElementById("language-toggle");
let missioonPealkiri = document.getElementById("missioonPealkiri")

// Set up your translations as objects with key-value pairs
const translations = {
  estonian: {
    teineProovisoitPohjalas: "Teine Proovisoit Põhjalas",
    toggleText: "Switch to English",
    teineProovisoitTekst: "Vanalinna Hariduskolleegiumi gümnaasiumi taseme tunniplaanist võib leida õppeaine MATIK, mis on lühend matemaatikast, teadusest, tehnoloogiast, inseneri valdkonnast ja kunstist. Lõppeval õppeaastal oli meie eesmärgiks elektriauto ehitamine. Meie juhendajaks oli hispaania päritolu tarkvara insener ja idufirma ettevõtja Javier Ortín Cervera. Allpool klipp meie pühapäevasest proovisõidust Koplis Põhjala tehase angaaris. Elektriauto ehitasid: Eva Kazakovskaia, Evert Härm, Rasmus Tuum, Julius Putrinš, Valter Luus, Paul Kask ja Anne-Riin Peep ning vastasmeeskond Üks Jupp.",
    missioonPealkiri: "Elekter? Tulevik!",
    missioonTekst: "Me oleme innovaatlised gümnasistid Vanalinna Hariduskolleegiumist. Meie tiim ja varasemad gümnasistid ehitasid Greenpower Education Trust raames elektriauto skeletist. <br>Meie tiimis on gümnasiste igas vanuses ning kõigi panus aitas luua auto, millega me oma esimese proovisõidu Lubja 4 parklas 15. oktoobril 2022 korraldasime. Meie missiooniks on õppida meeskonnatöö korraldamist, inseneeria projekti läbiviimist, mehhanikat, elektroonikat, programmeerimist ja materjaliteadust. Kõike seda ja palju muud oleme me juba õppinud tänu elektriauto ehitamise väljakutse vastu võttes."
  },
  english: {
    teineProovisoitPohjalas: "Second Test Drive in Põhjala",
    teineProovisoitTekst: "The subject MATIK, which is an abbreviation for mathematics, science, technology, engineering and art, can be found in the timetable of the high school level of Vanalinna Hariduskollegium. In the last school year, our goal was to build an electric car. Our supervisor was Javier Ortín Cervera, a Spanish software engineer and startup entrepreneur. Below is a clip from our Sunday test drive in Kopli Põhjala factory hangar. The electric car was built by: Eva Kazakovskaia, Evert Härm, Rasmus Tuum, Julius Putrinš, Valter Luus, Paul Kask and Anne-Riin Peep and the opposing team Üks Jupp.",
    toggleText: "Vaheta eesti keelde",
    missioonPealkiri: "Electricity? The future!",
    missioonTekst: "We are innovative high school students from Vanalinna Hariduskollegium. Our team and previous high school students built an electric car from a skeleton as part of the Greenpower Education Trust. <br>Our team includes high school students of all ages, and everyone's contribution helped to create the car with which we took our first test drive in the Lubja 4 parking lot on October 15 2022 we organized. Our mission is to learn how to organize teamwork, how to carry out an engineering project, mechanics, electronics, programming and material science. We have already learned all this and much more thanks to taking on the challenge of building an electric car."
  }
};

// Set the initial language to Estonian
let currentLanguage = "estonian";

// Function to switch languages
function toggleLanguage() {
  if (currentLanguage === "estonian") {
    teineProovisoitPohjalas.textContent = translations.english.teineProovisoitPohjalas;
    teineProovisoitTekst.textContent = translations.english.teineProovisoitTekst;
    languageToggle.textContent = translations.english.toggleText;
    currentLanguage = "english";
    missioonPealkiri.textContent = translations.english.missioonPealkiri;
    missioonTekst.textContent = translations.english.missioonTekst;
  } else {
    teineProovisoitPohjalas.textContent = translations.estonian.teineProovisoitPohjalas;
    languageToggle.textContent = translations.estonian.toggleText;
    teineProovisoitTekst.textContent = translations.estonian.teineProovisoitTekst;
    currentLanguage = "estonian";
    missioonPealkiri.textContent = translations.estonian.missioonPealkiri;
    missioonTekst.textContent = translations.estonian.missioonTekst


  }
}

// Call the toggleLanguage function once when the page is loaded
toggleLanguage();
toggleLanguage();

// Add a click event listener to the language toggle button
languageToggle.addEventListener("click", toggleLanguage);

