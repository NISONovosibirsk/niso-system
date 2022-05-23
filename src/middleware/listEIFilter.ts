const listEIFilter = (cards, chars, filter) =>
    cards
        .filter(card =>
            JSON.stringify(card).toLowerCase().includes(chars.toLowerCase())
        )
        .filter(card =>
            filter.list[0].picked.length
                ? filter.list[0].picked.includes(card.district)
                : true
        )
        .filter(card =>
            filter.list[1].picked.length
                ? filter.list[1].picked.includes(card.type)
                : true
        );

export default listEIFilter;
