function ticketStatus(tickets, ticketId) {

    let message = '';

    if (tickets[ticketId] === undefined) {
        message += 'unknown ticket id';
    } else if (tickets[ticketId] === null) {
        message += 'not sold';
    } else {
        message += `sold to ${tickets.ticketId}`;
    };
    return message;
};


const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
};
console.log(ticketStatus(tickets, '0H2AZ123'));