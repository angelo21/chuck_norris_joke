
const form = document.querySelector("form");
const number = document.querySelector(".number");
const ol = document.querySelector(".jokes");

const jokes = {
  generator: function() {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const xhr = new XMLHttpRequest();
      xhr.open("GET", `http://api.icndb.com/jokes/random/${number.value}`, true);

      xhr.onload = function() {
        if (this.status = 200) {
          const response = JSON.parse(this.responseText);
          let li = "";

          response.value.forEach(joke => {
            li += `
              <li>${joke.joke}</li>
            `
          })
          ol.innerHTML = li;
        }
      }
      xhr.send();
    })
  }
}

jokes.generator();