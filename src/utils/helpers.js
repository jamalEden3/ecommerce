export const formatPrice = (number) => {
    const formattedPrice = Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD",
    }).format(number / 100);
    return formattedPrice;
}

export const getUniqueSections = (data, type) => {
    let uniqueSection = data.map(section => section[type]);
    if(type === 'colors') {
        uniqueSection = uniqueSection.flat()
    }
    return  ['all', ...new Set(uniqueSection)];
}