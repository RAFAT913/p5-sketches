names = [
    '', 'Vine Street', '', 'Coventry Street', '', '', 'Leicester Square', '', 'Bow Street', 'Whitechapel Road',
    '', 'The Angel Islington', '', 'Trafalgar Square', 'Northumrld Avenue', '', 'Malborough Street', '', 'Fleet Street', 'Old Kent Road',
    '', 'White Hall', '', 'Pentonville Road', 'Pall Mall', '', 'Bond Street', 'Strand', '', 'Regent Street',
    '', 'Euston Road', 'Piccadilly', '', 'Oxford Street', '', '', 'Park Lane', '', 'Mayfair'
];

shortNames = [
    '', 'Vine St', '', 'Cov St', '', '', 'Lei Sq', '', 'Bow St', 'White Rd',
    '', 'Angel Is', '', 'Traf Sq', 'North Av', '', 'Mal St', '', 'Fleet St', 'Kent Rd',
    '', 'Wh Hall', '', 'Pent Rd', 'Pall Mall', '', 'Bond St', 'Strand', '', 'Reg St',
    '', 'Eust Rd', 'Picca', '', 'Oxford St', '', '', 'Park Ln', '', 'Mayfair'
];

types = [
    'go', '', 'chest', '', 'tax', 'train', '', 'chance', '', '',
    'jail', '', 'electricity', '', '', 'train', '', 'chest', '', '',
    '', '', 'chance', '', '', 'train', '', '', 'water', '',
    'gotojail', '', '', 'chest', '', 'train', 'chance', '', 'ring', ''
];

function loopOverTiles() {
    for (i = 0; i < tiles.length; i++) {
        tiles[i].name = names[i];
        tiles[i].shortName = shortNames[i];
        tiles[i].type = types[i];
    }
}


// emptyArray = [
//     '', '', '', '', '', '', '', '', '', '',
//     '', '', '', '', '', '', '', '', '', '',
//     '', '', '', '', '', '', '', '', '', '',
//     '', '', '', '', '', '', '', '', '', ''
// ];