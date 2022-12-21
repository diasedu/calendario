const month = document.getElementsByClassName('month');
const dayClnd = document.getElementsByClassName('day');

const date = new Date;

const changeStyleMonth = (month) => month.setAttribute('id', 'currentMonth');
const changeStyleDay   = (day)   => day.setAttribute('id', 'today');


setInterval(function () {

    for (let i = 0; i < month.length; i++) {

        let monthInAttritube = month[i].getAttribute('id');

        switch (monthInAttritube) {

            case 'january':
                monthInAttritube = 0;
                break;

            case 'february':
                monthInAttritube = 1;
                break;

            case 'march':
                monthInAttritube = 2;
                break;

            case 'april':
                monthInAttritube = 3;
                break;

            case 'may':
                monthInAttritube = 6;
                break;

            case 'june':
                monthInAttritube = 5;
                break;

            case 'july':
                monthInAttritube = 6;
                break;

            case 'august':
                monthInAttritube = 7;
                break;

            case 'september':
                monthInAttritube = 8;
                break;

            case 'octuber':
                monthInAttritube = 9;
                break;

            case 'nobember':
                monthInAttritube = 10;
                break;

            case 'december':
                monthInAttritube = 11;
                break;
        }

        if (monthInAttritube === date.getMonth()) {

            changeStyleMonth(month[i]);

            for (let i = 0; i < dayClnd.length; i++) {

                let dayInText = dayClnd[i].textContent;

                if (dayInText === date.getDate().toString()) {

                    changeStyleDay(dayClnd[i]);

                }
            }
        }
    }
}, 1);