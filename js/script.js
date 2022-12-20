const month     = document.querySelectorAll('.month');
const dayClnd   = document.querySelectorAll('.day');
const date      = new Date;




dayClnd.forEach(function(e, i) {
    const day = (dayClnd[i].textContent === (date.getDate().toString())) ? date.getDate() : '';

    if (dayClnd[i].textContent === (date.getDate().toString())) {
        dayClnd[i].style.backgroundColor = "#F0E68C";
        dayClnd[i].style.color           = "gray";
        alert(`Today is ${dayClnd[i].textContent}`)
    }
    
    
});