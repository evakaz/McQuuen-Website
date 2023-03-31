const translations = {
    "Teine proovisõit Põhjalas": "Second test drive",
    "date": "Data"
};

const toggleButton = document.getElementById('toggle-lang');
let isEnglish = false;

toggleButton.addEventListener('click', () => {
    isEnglish = !isEnglish;
    toggleButton.textContent = isEnglish ? 'Switch to Estonian' : 'Switch to English';
    translatePage();
});

function translatePage() {
    // Get all elements that contain text
    const elements = document.querySelectorAll("*:not(script):not(style):not(iframe):not(svg):not(path)");

    // Loop through each element and replace phrases with the appropriate translation
    elements.forEach((element) => {
        element.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.nodeValue.trim();
                const translation = isEnglish ? translations[text] : Object.values(translations).find(value => value === text);
                if (translation) {
                    node.nodeValue = translation;
                }
            }
        });
    });
}
