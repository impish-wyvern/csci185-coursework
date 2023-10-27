function defaultTheme() {
    // your code here.
    console.log('default theme');
    document.querySelector('body').className = "";
    
}

function oceanTheme() {
   // your code here.
   console.log('ocean theme');
   document.querySelector('body').className = "ocean";
}

function desertTheme() {
   // your code here.
   console.log('desert theme');
   document.querySelector('body').className = "desert";
}

function highContrastTheme() {
    // your code here.
    console.log('high contrast theme');
    document.querySelector('body').className = "high-contrast";
}

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/