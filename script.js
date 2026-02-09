/**
 * 1. Find the area of a triangle 
 * Formula: Area = base * height / 2
 */
const areaTriangle = (base, height) => (base * height) / 2;

console.log("--- Triangle Area ---");
console.log(areaTriangle(3, 4).toFixed(1)); // Expected: 6.0
console.log(areaTriangle(5, 7).toFixed(1)); // Expected: 17.5

/**
 * 2. Find the volume of a sphere
 * Formula: Volume = 4/3 * PI * radius^3
 */
const volumeSphere = (radius) => (4/3) * Math.PI * Math.pow(radius, 3);

console.log("--- Sphere Volume ---");
console.log(volumeSphere(3).toFixed(1)); // Expected: 113.1
console.log(volumeSphere(5).toFixed(1)); // Expected: 523.6

/**
 * 3. Convert distance to meters
 * Uses a switch/case with a short-circuit for 'm' or 0 distance.
 */
function convertToMeters(distance, unit) {
    if (distance === 0 || unit === 'm') {
        return distance;
    }

    switch (unit) {
        case 'km':
            return distance * 1000;
        case 'y':
            return distance * 0.9144;
        case 'mi':
            return distance * 1609.34;
        default:
            return distance;
    }
}

console.log("--- Distance Conversion (m) ---");
console.log(convertToMeters(50, 'm').toFixed(2));     // Expected: 50.00
console.log(convertToMeters(100, 'y').toFixed(2));    // Expected: 91.44
console.log(convertToMeters(1, 'mi').toFixed(2));     // Expected: 1609.34
console.log(convertToMeters(1.234, 'km').toFixed(2)); // Expected: 1234.00

/**
 * 4. Convert a time string (HH:MM:SS, MM:SS, or SS) to seconds
 */
function timeToSeconds(time) {
    const parts = time.split(':');
    let totalSeconds = 0;

    if (parts.length === 3) {
        // HH:MM:SS
        totalSeconds = (Number(parts[0]) * 3600) + (Number(parts[1]) * 60) + Number(parts[2]);
    } else if (parts.length === 2) {
        // MM:SS
        totalSeconds = (Number(parts[0]) * 60) + Number(parts[1]);
    } else {
        // SS
        totalSeconds = Number(parts[0]);
    }

    return totalSeconds;
}

console.log("--- Time to Seconds ---");
console.log(timeToSeconds('02:33:21')); // Expected: 9201
console.log(timeToSeconds('00:04:51')); // Expected: 291
console.log(timeToSeconds('04:51'));    // Expected: 291
console.log(timeToSeconds('00:13'));    // Expected: 13
console.log(timeToSeconds('13'));       // Expected: 13