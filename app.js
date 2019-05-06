const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function round(num) 
{
    return Math.round(num * 100)/100
}

function convertCelcius() 
{
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = round(fTemp);
    kelvinInput.value = round(kTemp);
}

function convertFahrenheit() 
{
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp -32) * (5/9);
    const kTemp = (fTemp + 459.67) * (5/9);
    celciusInput.value = round(cTemp);
    kelvinInput.value = round(kTemp);
}

function convertKelvin()
{
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celciusInput.value = round(cTemp);
    fahrenheitInput.value = round(fTemp);
}

function main()
{
    celciusInput.addEventListener('input', convertCelcius);
    fahrenheitInput.addEventListener('input', convertFahrenheit);
    kelvinInput.addEventListener('input', convertKelvin);
}

main();