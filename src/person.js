const isAdult = (age) => age>=18;
const canDrink = (age) => age>=21;


const isSenior= (x) => {
    if (x>=60)
    return true;
    else
    return false
};
export default isSenior;
export {isAdult,canDrink};