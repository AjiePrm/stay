export default function formatNumber(number) {
    const formatinNumber = new Intl.NumberFormat('id-ID')
    return formatinNumber.format(number)
}