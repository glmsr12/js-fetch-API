const random_cat = document.getElementById('random-cat');
const random_dog = document.getElementById('random-dog');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

function getRandomCat() {
  fetch('https://aws.random.cat/meow')
    .then((res) => res.json())
    .then((data) => {
      random_cat.innerHTML = `<img src="${data.file}"/>`;
    });
}

function getRandomDog() {
  fetch('https://random.dog/woof.json')
    .then((res) => res.json())
    .then((data) => {
      random_dog.innerHTML = `<img src="${data.url}"/>`;
    });
}
