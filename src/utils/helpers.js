export const formatPrice = (number) => {
    const formattedPrice = Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD",
    }).format(number / 100);
    return formattedPrice;
}