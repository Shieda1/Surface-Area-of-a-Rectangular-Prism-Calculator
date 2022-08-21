// https://calculator.swiftutors.com/surface-area-of-a-rectangular-prism-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const surfaceAreaofRectangularPrismRadio = document.getElementById('surfaceAreaofRectangularPrismRadio');
const widthoftheRectangularPrismRadio = document.getElementById('widthoftheRectangularPrismRadio');
const LengthoftheRectangularPrismRadio = document.getElementById('LengthoftheRectangularPrismRadio');
const heightoftheRectangularPrismRadio = document.getElementById('heightoftheRectangularPrismRadio');

let surfaceAreaofRectangularPrism;
const two = 2;
let widthoftheRectangularPrism = v1;
let LengthoftheRectangularPrism = v2;
let heightoftheRectangularPrism = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

surfaceAreaofRectangularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Width of the Rectangular Prism';
  variable2.textContent = 'Length of the Rectangular Prism';
  variable3.textContent = 'Height of the Rectangular Prism';
  widthoftheRectangularPrism = v1;
  LengthoftheRectangularPrism = v2;
  heightoftheRectangularPrism = v3;
  result.textContent = '';
});

widthoftheRectangularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of Rectangular Prism';
  variable2.textContent = 'Length of the Rectangular Prism';
  variable3.textContent = 'Height of the Rectangular Prism';
  surfaceAreaofRectangularPrism = v1;
  LengthoftheRectangularPrism = v2;
  heightoftheRectangularPrism = v3;
  result.textContent = '';
});

LengthoftheRectangularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of Rectangular Prism';
  variable2.textContent = 'Width of the Rectangular Prism';
  variable3.textContent = 'Height of the Rectangular Prism';
  surfaceAreaofRectangularPrism = v1;
  widthoftheRectangularPrism = v2;
  heightoftheRectangularPrism = v3;
  result.textContent = '';
});

heightoftheRectangularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of Rectangular Prism';
  variable2.textContent = 'Width of the Rectangular Prism';
  variable3.textContent = 'Length of the Rectangular Prism';
  surfaceAreaofRectangularPrism = v1;
  widthoftheRectangularPrism = v2;
  LengthoftheRectangularPrism = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(surfaceAreaofRectangularPrismRadio.checked)
    result.textContent = `Surface Area of Rectangular Prism = ${computeSurfaceAreaofRectangularPrism().toFixed(2)}`;

  else if(widthoftheRectangularPrismRadio.checked)
    result.textContent = `Width of the Rectangular Prism = ${computeWidthoftheRectangularPrism().toFixed(2)}`;

  else if(LengthoftheRectangularPrismRadio.checked)
    result.textContent = `Length of the Rectangular Prism = ${computeLengthoftheRectangularPrism().toFixed(2)}`;

  else if(heightoftheRectangularPrismRadio.checked)
    result.textContent = `Height of the Rectangular Prism = ${computeHeightoftheRectangularPrism().toFixed(2)}`;
})

// calculation

function computeSurfaceAreaofRectangularPrism() {
  return two * (Number(widthoftheRectangularPrism.value) * Number(LengthoftheRectangularPrism.value) + Number(LengthoftheRectangularPrism.value) * Number(heightoftheRectangularPrism.value) + Number(heightoftheRectangularPrism.value) * Number(widthoftheRectangularPrism.value));
}

function computeWidthoftheRectangularPrism() {
  return ((Number(surfaceAreaofRectangularPrism.value) / two) - (Number(heightoftheRectangularPrism.value) * Number(widthoftheRectangularPrism.value))) / (Number(widthoftheRectangularPrism.value) + Number(heightoftheRectangularPrism.value));
}

function computeLengthoftheRectangularPrism() {
  return ((Number(surfaceAreaofRectangularPrism.value) / two) - (Number(widthoftheRectangularPrism.value) * Number(LengthoftheRectangularPrism.value))) / (Number(LengthoftheRectangularPrism.value) + Number(widthoftheRectangularPrism.value));
}

function computeHeightoftheRectangularPrism() {
  return ((Number(surfaceAreaofRectangularPrism.value) / two) - (Number(LengthoftheRectangularPrism.value) * Number(heightoftheRectangularPrism.value))) / (Number(heightoftheRectangularPrism.value) + Number(LengthoftheRectangularPrism.value));
}