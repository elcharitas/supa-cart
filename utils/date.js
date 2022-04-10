export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const today = new Date();

export function lastXMonths(x) {
    const result = [];
    for (var i = x; i > 0; i -= 1) {
        const now = new Date(today.getFullYear(), today.getMonth() - i, 1);
        result.push(monthNames[now.getMonth()]);
    }
    return result;
}
