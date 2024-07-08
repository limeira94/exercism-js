// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    switch (name) {
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Energizer':
            return 1.5;
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5;
    }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    let totalWedges = 0;
    let limesCut = 0;
    let index = 0;

    while (totalWedges < wedgesNeeded && index < limes.length) {
        let lime = limes[index];
        switch (lime) {
            case 'small':
                totalWedges += 6;
                break;
            case 'medium':
                totalWedges += 8;
                break;
            case 'large':
                totalWedges += 10;
                break;
            default:
                break;
        }
        limesCut += 1; // limesCut++
        index += 1; // index++
    }
    return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
    let index = 0;

    do {
        if (index <= orders.length) {
            const juiceTime = timeToMixJuice(orders[index]);
            timeLeft -= juiceTime;
            index += 1;
        }
    } while (timeLeft > 0);

    return orders.slice(index);
}
