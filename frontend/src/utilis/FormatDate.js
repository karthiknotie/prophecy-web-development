// utilis/FormatDate.js
export const formatDate = (dateString) => {
    if (!dateString) return '-'; // Return placeholder for invalid date

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, options); // Format based on locale
};
