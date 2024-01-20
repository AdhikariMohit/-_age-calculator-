document.getElementById('calculate-btn').addEventListener('click', function() {
    const birthdayInput = document.getElementById('birthday');
    const resultContainer = document.getElementById('age-result');
    const yearsSpan = document.getElementById('years');
    const monthsSpan = document.getElementById('months');
    const daysSpan = document.getElementById('days');

    const birthdayDate = new Date(birthdayInput.value);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdayDate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = ageInDays / 30.44; // Average number of days in a month
    const ageInYears = ageInMonths / 12;

    const years = Math.floor(ageInYears);
    const months = Math.floor((ageInYears - years) * 12);
    const days = Math.floor((ageInMonths - Math.floor(ageInMonths)) * 30.44); // Approximate number of days in a month

    yearsSpan.textContent = years;
    monthsSpan.textContent = months;
    daysSpan.textContent = days;

    resultContainer.style.display = 'block';
});
