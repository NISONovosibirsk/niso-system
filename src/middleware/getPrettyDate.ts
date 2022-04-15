const getPrettyDate = initialDate => {
    const date = new Date(initialDate);
    let month = '';

    switch (date.getMonth()) {
        case 0:
            month = 'Января';
            break;
        case 1:
            month = 'Февраля';
            break;
        case 2:
            month = 'Марта';
            break;
        case 3:
            month = 'Апреля';
            break;
        case 4:
            month = 'Мая';
            break;
        case 5:
            month = 'Июня';
            break;
        case 6:
            month = 'Июля';
            break;
        case 7:
            month = 'Августа';
            break;
        case 8:
            month = 'Сентября';
            break;
        case 9:
            month = 'Октября';
            break;
        case 10:
            month = 'Ноября';
            break;
        case 11:
            month = 'Декабря';
            break;
    }

    return date.getDate() + ' ' + month + ' ' + date.getFullYear() + ' года';
};

export default getPrettyDate;
