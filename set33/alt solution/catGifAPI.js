const generateBtn = document.getElementById('generateBtn');

async function getRandomCatGif() {
  try {
    const response = await fetch('http://thecatapi.com/api/images/get?format=src&type=gif');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getRandomCatGif();