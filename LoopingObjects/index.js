const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, 
    close: 24,
  },
};

for (const day of Object.keys(openingHours)) console.log(day);

const properties = Object.keys(openingHours);
console.log(properties);