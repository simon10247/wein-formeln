function show_text(text_class, button_class) { // Normal function (Called by HTML code)
    let element = document.getElementsByClassName(text_class)[0]; // Saves the element with the class in a var
    let button = document.getElementsByClassName(button_class)[0]; // Saves the button with the class in a var
    if (element.style.display === "none" || element.style.display === "") { // If the element is hidden
        element.style.display = "block"; // Show the element
        button.style["background-color"] = "var(--widget_color_2)";
    }
    else { // If the element is visible
        element.style.display = "none"; // Hide the element
        button.style["background-color"] = "var(--widget_color)";
    }
}

document.addEventListener("DOMContentLoaded", () => { // This code is executed, when the html page is finished loading

    // HEAD INJECTION
    document.head.insertAdjacentHTML('beforeend', `
        <link rel="icon" type="image/x-icon" href="faviconWeinFormeln.png">
        <meta author="simon102">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta charset="UTF-8">
        `)

    // NAVIGATION INJECTION
    let box = document.getElementById("navigation_bar_injection"); // Saves the div with the id in a var
    // Tells the div to contain this code
    box.innerHTML = `
        <ul class="navigation_bar_ul">
            <li class="navigation_bar_left"><img src="faviconWeinFormeln.png" alt="A wine bottle with a math formular" style="width: 40px; padding-top: 10px;"></li>
            <li class="navigation_bar_left navigation_bar_title"><a href="">Wein-Formeln.de</a></li>
            <li class="navigation_bar_left navigation_bar_hover hide_on_phone"><a href=""><img class="navigation_bar_icon" src="icon/navigation_bar/home.png" alt="Home Icone">Home</a></li>
            <li class="navigation_bar_left navigation_bar_hover navigation_bar_dropdown hide_on_phone">
                <a href=""><img class="navigation_bar_icon" src="icon/navigation_bar/math.png" alt="Calculation Icone">Formeln</a>
                <ul class="navigation_bar_dropdown_content">
                    <li><a class="navigation_bar_hover" href="">• Natürlicher Alkohol</a></li>
                    <li><a class="navigation_bar_hover" href="">• Anreicherung</a></li>
                    <li><a class="navigation_bar_hover" href="">• [Drittes Thema hier]</a></li>
                </ul>
            </li>
            <li class="navigation_bar_left navigation_bar_hover hide_on_phone"><a href=""><img class="navigation_bar_icon" src="icon/navigation_bar/mail.png" alt="Envelope Icone">Kontakte</a></li>
            <li class="navigation_bar_left navigation_bar_hover navigation_bar_dropdown show_on_phone"><a href=""><img class="navigation_bar_icon" src="icon/navigation_bar/menu.png" alt="Menu Icone"></a>
                <ul class="navigation_bar_dropdown_content">
                    <li class="navigation_bar_left navigation_bar_hover"><a href=""><img class="navigation_bar_icon" src="icon/navigation_bar/home.png" alt="Home Icone">Home</a></li>
                    <li class="navigation_bar_left navigation_bar_hover navigation_bar_dropdown"><a href=""><img class="navigation_bar_icon" src="icon/navigation_bar/math.png" alt="Calculation Icone">Formeln</a></li>
                    <li class="navigation_bar_left navigation_bar_hover"><a href=""><img class="navigation_bar_icon" src="icon/navigation_bar/mail.png" alt="Envelope Icone">Kontakte</a></li>
                </ul>
            </li>
            <li class="navigation_bar_right navigation_bar_hover navigation_bar_dropdown"><a href=""><img class="navigation_bar_icon" src="icon/navigation_bar/paintbrush.png" alt="Paintbrush Icone"></a>
                <ul class="navigation_bar_dropdown_content_right navigation_bar_dropdown_content">
                    <li><a class="navigation_bar_dropdown_theme navigation_bar_hover" href="javascript:void(0)" onclick="setTheme('light')">Light Theme</a></li>
                    <li><a class="navigation_bar_dropdown_theme navigation_bar_hover" href="javascript:void(0)" onclick="setTheme('dark')">Dark Theme</a></li>
                    <li><a class="navigation_bar_dropdown_theme navigation_bar_hover" href="javascript:void(0)" onclick="setTheme('purple')">Purple Theme</a></li>
                    <li class="navigation_bar_dropdown_devider"></li>
                    <li><a class="navigation_bar_hover" href="javascript:void(0)" onclick="setAccent('vibrant')"><img class="navigation_bar_icon navigation_bar_dropdown_icon" src="icon/accent/vibrant.png" alt="Vibrant Accent Color Icone">Vibrant Accent</a></li>
                    <li><a class="navigation_bar_hover" href="javascript:void(0)" onclick="setAccent('soft')"><img class="navigation_bar_icon navigation_bar_dropdown_icon" src="icon/accent/soft.png" alt="Vibrant Accent Color Icone">Soft Accent</a></li>
                    <li><a class="navigation_bar_hover" href="javascript:void(0)" onclick="setAccent('cmy')"><img class="navigation_bar_icon navigation_bar_dropdown_icon" src="icon/accent/cmy.png" alt="Vibrant Accent Color Icone">Alternativ Accent</a></li>
                    <li class="navigation_bar_dropdown_devider"></li>
                    <li><a class="navigation_bar_hover" href="javascript:void(0)" onclick="toggleHighlight()"><img class="navigation_bar_icon navigation_bar_dropdown_icon" id="highlight_icon" src="icon/navigation_bar/highlight/text_marker.png" alt="Text Marker Icone"><span class="highlight_1">Highlight</span></a></li>
                </ul>
            </li>
        </ul>`;

    // THEME STORAGE
    let savedTheme = localStorage.getItem('selectedTheme'); // Look into browser storage and saves "selectedTheme" into var
    if (savedTheme) { // If a saved theme exists
        setTheme(savedTheme); // Calles the setTheme function with the found/saved theme
    }

    // ACCENT STORAGE
    let savedAccent = localStorage.getItem('selectedAccent'); // Look into browser storage and saves "selectedAccent" into var
    if (savedAccent) { // If a saved theme exists
        setAccent(savedAccent); // Calles the setAccent function with the found/saved accent
    }

    // HIGHLIGHT STORAGE
    let savedHighlight = localStorage.getItem('selectedHighlight') || 'off'; // Look into browser storage and saves "selectedHighlight" into var
    if (savedHighlight === "on") {
        setHighlight(savedHighlight);
    }

    // INJECT ATTRIBUTES INTO HTML SPANES
    document.querySelectorAll('.input_span').forEach((inputSpan) => {   // Finds all spans and allows them to be editable
        inputSpan.setAttribute('inputmode', 'decimal'); // Injects the attribute
        inputSpan.setAttribute('contenteditable', 'true'); // Also injects the attribute
    })

    let result = document.querySelectorAll('.result_span'); // Selects all inputs and puts them into a var
    result.forEach(result => { // Loops through each input
        result.addEventListener('keydown', (event) => { // Triggers when a key is pressed)
            if ((event.ctrlKey) && (event.key === 'c' || event.key === 'a')) { // If ctrl+C is pressed
            return; // Don't do anything
            }
            event.preventDefault(); // Prevents the key from being pressed
        })
    })

    // TURN DROPDOWN INTO A TOGGLE
    let dropdowns = document.querySelectorAll('.navigation_bar_dropdown'); // Selects all dropdowns and puts them into a var
    dropdowns.forEach(dropdown => { // Loops through each dropdown
        dropdown.addEventListener('click', function(event) { // Triggers function when dropdown is clicked
            let content = this.querySelector('.navigation_bar_dropdown_content'); // Finds the specific dropdown menu and puts it into a var
            event.preventDefault(); // Prevents the link from refreshing the page
            content.classList.toggle('show_dropdown'); // Toggles the CSS class that makes the menu visible
            dropdown.forEach(dropdown => { // Loops through all dropdowns
                if (other !== dropdown) { // Every dropdown that isn't the one we just clicked
                    other.querySelector('.navigation_bar_dropdown_content').classList.remove('show_dropdown'); // Hide the others (Not selected Dropdowns)
                }
            })
        })
    })
    window.addEventListener('click', (event) => { // Triggers when anything is clicked
        if (!event.target.closest('.navigation_bar_dropdown')) { // Check if the click was (not) on a dropdown element
            document.querySelectorAll('.navigation_bar_dropdown_content').forEach(menu => { // Loop through all dropdowns
                menu.classList.remove('show_dropdown'); // Close them
            })
        }
    })

    // CALCULATE WHEN ENTER IS PRESSED IN INPUTS
    let input = document.querySelectorAll('.input_span'); // Selects all inputs and puts them into a var
    input.forEach((input) => { // Loops through all inputs
        input.addEventListener('keydown', (event) => { // Triggers when enter is pressed
            if (event.key === 'Enter') { // If enter is pressed
                event.preventDefault(); // Prevents the enter key from making a line break
                calculation(); // Call calculate function
                input.blur(); // Remove focus from the input
            }
        });
        // HIGHLIGHT THE INPUTS WHEN THEY ARE FOCUSED
        input.addEventListener('focus', () => { // Triggers when an input is focused (clicked on)
        let range = document.createRange(); // Creates a range (To manage a selection of text?)
        range.selectNodeContents(input); // Sets the range to include everthing inside the input
        let selection = window.getSelection(); // Tells the var to be the browser selection tool
        selection.removeAllRanges(); // Clears all current selections
        selection.addRange(range); // Uses the browser selection tool previously set to be the "selection" var on the range
        });
    });

})

function setTheme(theme) {
    let root = document.documentElement;
    localStorage.setItem('selectedTheme', theme);

    if (theme === "light") {
        root.style.setProperty('--main_background_color', '#eeeeee');
        root.style.setProperty('--secondary_background_color', '#ffffff');
        root.style.setProperty('--widget_color', '#413561');
        root.style.setProperty('--widget_hover_color', '#2b2341');
        root.style.setProperty('--widget_color_2', '#8775b9');
        root.style.setProperty('--widget_color_3', '#7464a0');
        root.style.setProperty('--card_color', '#604d92');
        root.style.setProperty('--title_color', '#2b2341');
        root.style.setProperty('--text_color', '#ffffff');
    } else if (theme === "dark") {
        root.style.setProperty('--main_background_color', 'rgb(9, 9, 9)');
        root.style.setProperty('--secondary_background_color', 'rgb(7, 7, 7)');
        root.style.setProperty('--widget_color', 'rgb(15, 15, 15)');
        root.style.setProperty('--widget_hover_color', 'rgb(30, 30, 30)');
        root.style.setProperty('--widget_color_2', 'rgb(45, 45, 45)');
        root.style.setProperty('--widget_color_3', 'rgb(15, 15, 15)');
        root.style.setProperty('--card_color', 'rgb(25, 25, 25)');
        root.style.setProperty('--title_color', 'rgb(255, 255, 255)');
        root.style.setProperty('--text_color', 'rgb(255, 255, 255)');
    } else if (theme === "purple") {
        root.style.setProperty('--main_background_color', '#1E113F');
        root.style.setProperty('--secondary_background_color', '#2B1859');
        root.style.setProperty('--widget_color', '#180E33');
        root.style.setProperty('--widget_hover_color', '#06030C');
        root.style.setProperty('--widget_color_2', '#422883');
        root.style.setProperty('--widget_color_3', '#341e6b');
        root.style.setProperty('--card_color', '#0f0920');
        root.style.setProperty('--title_color', '#ffffff');
        root.style.setProperty('--text_color', '#ffffff');
    }
}

function setAccent(accent) {
    let root = document.documentElement;
    localStorage.setItem('selectedAccent', accent);

    setHighlight(localStorage.getItem('selectedHighlight'));

    if (accent === "vibrant") {
        root.style.setProperty('--accent_card_color', 'yellow');
        root.style.setProperty('--accent_card_color_2', 'red');
        root.style.setProperty('--accent_card_color_3', 'green');
        root.style.setProperty('--accent_card_color_4', 'blue');
    } else if (accent === "soft") {
        root.style.setProperty('--accent_card_color', 'gold');
        root.style.setProperty('--accent_card_color_2', 'crimson');
        root.style.setProperty('--accent_card_color_3', 'limegreen');
        root.style.setProperty('--accent_card_color_4', 'dodgerblue');
    } else if (accent === "cmy") {
        root.style.setProperty('--accent_card_color', 'limegreen');
        root.style.setProperty('--accent_card_color_2', 'cyan');
        root.style.setProperty('--accent_card_color_3', 'magenta');
        root.style.setProperty('--accent_card_color_4', 'yellow');
    }
}

function setHighlight(highlight) {
    let root = document.documentElement;
    let icon = document.getElementById('highlight_icon');
    if (highlight === 'on' && localStorage.getItem('selectedAccent') !== 'cmy') {
        root.style.setProperty('--highlight_color_text_1', 'var(--highlight_color_1)');
        root.style.setProperty('--highlight_color_text_2', 'var(--highlight_color_2)');
        root.style.setProperty('--highlight_color_text_3', 'var(--highlight_color_3)');
        root.style.setProperty('--highlight_color_text_4', 'var(--highlight_color_4)');
        root.style.setProperty('--highlight_color_text_5', 'var(--highlight_color_5)');
        root.style.setProperty('--highlight_color_text_6', 'var(--highlight_color_6)');
        root.style.setProperty('--highlight_color_text_7', 'var(--highlight_color_7)');
        root.style.setProperty('--highlight_color_text_8', 'var(--highlight_color_8)');
        root.style.setProperty('--highlight_color_text_9', 'var(--highlight_color_9)');

        root.style.setProperty('--highlight_color_input_1', 'var(--highlight_color_1)');
        root.style.setProperty('--highlight_color_input_2', 'var(--highlight_color_2)');
        root.style.setProperty('--highlight_color_input_3', 'var(--highlight_color_3)');
        root.style.setProperty('--highlight_color_input_4', 'var(--highlight_color_4)');
        root.style.setProperty('--highlight_color_input_5', 'var(--highlight_color_5)');
        root.style.setProperty('--highlight_color_input_6', 'var(--highlight_color_6)');
        root.style.setProperty('--highlight_color_input_7', 'var(--highlight_color_7)');
        root.style.setProperty('--highlight_color_input_8', 'var(--highlight_color_8)');
        root.style.setProperty('--highlight_color_input_9', 'var(--highlight_color_9)');

        root.style.setProperty('--highlight_color_result_1', 'var(--highlight_color_1)');
        root.style.setProperty('--highlight_color_result_2', 'var(--highlight_color_2)');
        root.style.setProperty('--highlight_color_result_3', 'var(--highlight_color_3)');
        root.style.setProperty('--highlight_color_result_4', 'var(--highlight_color_4)');
        root.style.setProperty('--highlight_color_result_5', 'var(--highlight_color_5)');
        root.style.setProperty('--highlight_color_result_6', 'var(--highlight_color_6)');
        root.style.setProperty('--highlight_color_result_7', 'var(--highlight_color_7)');
        root.style.setProperty('--highlight_color_result_8', 'var(--highlight_color_8)');
        root.style.setProperty('--highlight_color_result_9', 'var(--highlight_color_9)');

        root.style.setProperty('--highlight_text_color', 'black');

        icon.src = 'icon/navigation_bar/highlight/text_marker_active.png';
    }
    else if (highlight === 'on' && localStorage.getItem('selectedAccent') === 'cmy') {
        root.style.setProperty('--highlight_color_text_1', 'var(--highlight_color_9)');
        root.style.setProperty('--highlight_color_text_2', 'var(--highlight_color_8)');
        root.style.setProperty('--highlight_color_text_3', 'var(--highlight_color_7)');
        root.style.setProperty('--highlight_color_text_4', 'var(--highlight_color_6)');
        root.style.setProperty('--highlight_color_text_5', 'var(--highlight_color_5)');
        root.style.setProperty('--highlight_color_text_6', 'var(--highlight_color_4)');
        root.style.setProperty('--highlight_color_text_7', 'var(--highlight_color_3)');
        root.style.setProperty('--highlight_color_text_8', 'var(--highlight_color_2)');
        root.style.setProperty('--highlight_color_text_9', 'var(--highlight_color_1)');

        root.style.setProperty('--highlight_color_input_1', 'var(--highlight_color_9)');
        root.style.setProperty('--highlight_color_input_2', 'var(--highlight_color_8)');
        root.style.setProperty('--highlight_color_input_3', 'var(--highlight_color_7)');
        root.style.setProperty('--highlight_color_input_4', 'var(--highlight_color_6)');
        root.style.setProperty('--highlight_color_input_5', 'var(--highlight_color_5)');
        root.style.setProperty('--highlight_color_input_6', 'var(--highlight_color_4)');
        root.style.setProperty('--highlight_color_input_7', 'var(--highlight_color_3)');
        root.style.setProperty('--highlight_color_input_8', 'var(--highlight_color_2)');
        root.style.setProperty('--highlight_color_input_9', 'var(--highlight_color_1)');

        root.style.setProperty('--highlight_color_result_1', 'var(--highlight_color_9)');
        root.style.setProperty('--highlight_color_result_2', 'var(--highlight_color_8)');
        root.style.setProperty('--highlight_color_result_3', 'var(--highlight_color_7)');
        root.style.setProperty('--highlight_color_result_4', 'var(--highlight_color_6)');
        root.style.setProperty('--highlight_color_result_5', 'var(--highlight_color_5)');
        root.style.setProperty('--highlight_color_result_6', 'var(--highlight_color_4)');
        root.style.setProperty('--highlight_color_result_7', 'var(--highlight_color_3)');
        root.style.setProperty('--highlight_color_result_8', 'var(--highlight_color_2)');
        root.style.setProperty('--highlight_color_result_9', 'var(--highlight_color_1)');

        root.style.setProperty('--highlight_text_color', 'black');

        icon.src = 'icon/navigation_bar/highlight/text_marker_active_2.png';
    }
    else {
        root.style.setProperty('--highlight_color_text_1', '#ffffff');
        root.style.setProperty('--highlight_color_text_2', '#ffffff');
        root.style.setProperty('--highlight_color_text_3', '#ffffff');
        root.style.setProperty('--highlight_color_text_4', '#ffffff');
        root.style.setProperty('--highlight_color_text_5', '#ffffff');
        root.style.setProperty('--highlight_color_text_6', '#ffffff');
        root.style.setProperty('--highlight_color_text_7', '#ffffff');
        root.style.setProperty('--highlight_color_text_8', '#ffffff');
        root.style.setProperty('--highlight_color_text_9', '#ffffff');

        root.style.setProperty('--highlight_color_input_1', 'var(--input_color)');
        root.style.setProperty('--highlight_color_input_2', 'var(--input_color)');
        root.style.setProperty('--highlight_color_input_3', 'var(--input_color)');
        root.style.setProperty('--highlight_color_input_4', 'var(--input_color)');
        root.style.setProperty('--highlight_color_input_5', 'var(--input_color)');
        root.style.setProperty('--highlight_color_input_6', 'var(--input_color)');
        root.style.setProperty('--highlight_color_input_7', 'var(--input_color)');
        root.style.setProperty('--highlight_color_input_8', 'var(--input_color)');
        root.style.setProperty('--highlight_color_input_9', 'var(--input_color)');

        root.style.setProperty('--highlight_color_result_1', 'var(--result_color)');
        root.style.setProperty('--highlight_color_result_2', 'var(--result_color)');
        root.style.setProperty('--highlight_color_result_3', 'var(--result_color)');
        root.style.setProperty('--highlight_color_result_4', 'var(--result_color)');
        root.style.setProperty('--highlight_color_result_5', 'var(--result_color)');
        root.style.setProperty('--highlight_color_result_6', 'var(--result_color)');
        root.style.setProperty('--highlight_color_result_7', 'var(--result_color)');
        root.style.setProperty('--highlight_color_result_8', 'var(--result_color)');
        root.style.setProperty('--highlight_color_result_9', 'var(--result_color)');

        root.style.setProperty('--highlight_text_color', 'var(--text_color)');

        icon.src = 'icon/navigation_bar/highlight/text_marker.png';
    }
}

function toggleHighlight() {
    let currentHighlightState = localStorage.getItem('selectedHighlight') || 'off';
    let newHighlightState = (currentHighlightState === 'on') ? 'off' : 'on';

    localStorage.setItem('selectedHighlight', newHighlightState);
    setHighlight(newHighlightState);
}

let commaOrDot = "";
function commaToDot(text) {
    commaOrDot = "";
    text = String(text);
    if (text.includes(",")) {commaOrDot = ","}
    text = text.replace(",", ".");
    text = Number(text);
    return text;
}
