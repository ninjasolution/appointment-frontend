/**
 * Application configuration
 */
const dateTime = new Date();

const year = dateTime.getFullYear();
const month = dateTime.getMonth();
const day = dateTime.getDate();

const calendarConfig = {
    date : new Date(year, month, day),

    crudManager : {
        transport : {
            load : {
                url : 'data/calendar-data.json'
            }
        },
        autoLoad : true
    }
};

export { calendarConfig };
