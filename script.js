document.getElementById('convertFtoC').addEventListener('click', function() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * (5/9);
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('result').textContent = 
            `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById('result').textContent = 
            'Please enter a valid number in Fahrenheit';
    }
});

document.getElementById('convertCtoF').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * (9/5)) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('result').textContent = 
            `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('result').textContent = 
            'Please enter a valid number in Celsius';
    }
});