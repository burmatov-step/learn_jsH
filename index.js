const listDefault = document.querySelector(".dropdown-lists__list--default"),
  listsColDefault = listDefault.querySelector(".dropdown-lists__col"),
  selectCities = document.getElementById("select-cities"),
  listSelect = document.querySelector(".dropdown-lists__list--select"),
  listsColSelect = listSelect.querySelector(".dropdown-lists__col"),
  closeButton = document.querySelector(".close-button"),
  button = document.querySelector(".button"),
  cubeLoader = document.getElementById("cube-loader");
  listAutocomplete = document.querySelector(
    ".dropdown-lists__list--autocomplete"
  ),
  listsColAutocomplete = listAutocomplete.querySelector(".dropdown-lists__col"),
  inputCities = document.querySelector(".input-cities");
// let countryRu = {};

const getCountry = (body) => {
  return fetch("db_cities.json", {
    method: "GET",
  });
};

// формирование listDefault
const rendCountry = (res) => {
  const wrap = document.createElement("div");
  wrap.classList.add("dropdown-lists__countryBlock");
  res.forEach((item) => {
    const country = document.createElement("div");
    country.classList.add("dropdown-lists__total-line");
    country.innerHTML = `
                  <div class="dropdown-lists__country">${item.country}</div>
                  <div class="dropdown-lists__count">${item.count}</div>
      `;
    wrap.append(country);
    renderCity(item.cities);
  });

  function renderCity(arr) {
    for (let i = 0; i < 3; i++) {
      const city = document.createElement("div");
      city.classList.add("dropdown-lists__line");
      city.innerHTML = `
                  <div class="dropdown-lists__city">${arr[i].name}</div>
                  <div class="dropdown-lists__count">${arr[i].count}</div>
      `;
      wrap.append(city);
    }
  }
  cubeLoader.style.display = "none";
  listsColDefault.append(wrap);
};

// //  формирование listSelect

const selectVal = (nameCountry, countryRu) => {
  countryRu.forEach((item) => {
    if (item.country === nameCountry) {
      listSelect.style.transform = 'translateX(-100%)'
      listDefault.style.display = "none";
      listSelect.style.display = "block";
      const wrap = document.createElement("div");
      wrap.classList.add("dropdown-lists__countryBlock");
      const country = document.createElement("div");
      country.classList.add("dropdown-lists__total-line");
      country.innerHTML = `
                  <div class="dropdown-lists__country">${item.country}</div>
                  <div class="dropdown-lists__count">${item.count}</div>
      `;
      wrap.append(country);
      for (let i = 0; i < item.cities.length; i++) {
        const city = document.createElement("div");
        city.classList.add("dropdown-lists__line");
        city.innerHTML = `
                  <div class="dropdown-lists__city">${item.cities[i].name}</div>
                  <div class="dropdown-lists__count">${item.cities[i].count}</div>
      `;
        wrap.append(city);
      }
      cubeLoader.style.display = "none";
      listsColSelect.append(wrap);
      let i = -100;
      let sset = setInterval(() => {
        if(i<=0){
          listSelect.style.transform = `translateX(${i}%)`;
        }else{
          clearInterval(sset);
        }

        i +=10
      }, 20);
    }
  });
};

const renderAutoComplete = (val, countryRu) => {
  listsColAutocomplete.innerHTML = "";
  const length = val.length;
  const wrap = document.createElement("div");

  wrap.classList.add("dropdown-lists__countryBlock");


  countryRu.forEach((item) => {
    if (val.toLowerCase() === item.country.substring(0, length).toLowerCase()) {
      const countryBlock = document.createElement("div");
      countryBlock.classList.add("dropdown-lists__line");
      countryBlock.innerHTML = `
      <div class="dropdown-lists__country">${item.country.substring(
        0,
        length
      ).italics().toUpperCase()}${item.country.substring(length)}</div>
      <div class="dropdown-lists__count">${item.count}</div>
      `;
      wrap.append(countryBlock);
      console.log(item.country);
    }
    item.cities.forEach((city) => {
      const cityBlock = document.createElement("div");
      cityBlock.classList.add("dropdown-lists__line");
      if (val.toLowerCase() === city.name.substring(0, length).toLowerCase()) {
        cityBlock.innerHTML = `
      <div class="dropdown-lists__city">${city.name.substring(
        0,
        length
      ).bold()}${city.name.substring(length)}</div>
      <div class="dropdown-lists__count">${city.count}</div>
      `;
        wrap.append(cityBlock);
        console.log(city.name);
      }

      listsColAutocomplete.append(wrap);
    });
  });

  if (wrap.childElementCount === 0) {
    wrap.textContent = "Ничего не найдено";
  }
};

// переход на listSelect
listDefault.addEventListener("click", (e) => {
  let target = e.target;
  cubeLoader.style.display = "inline-block";
  if (target.closest(".dropdown-lists__total-line")) {
    const wrap = target.closest(".dropdown-lists__total-line");
    const nameCountry = wrap.children[0].innerText;
    getCountry()
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let countryRu = response.RU;

        selectVal(nameCountry, countryRu);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

// переход на listDefault

listSelect.addEventListener("click", (e) => {
  let target = e.target;
  if (target.closest(".dropdown-lists__total-line")) {
    listDefault.style.transform = "translateX(-100%)";
    listsColSelect.innerHTML = "";
    listSelect.style.display = "none";
    listDefault.style.display = "block";
    let i = -100;
    let sset = setInterval(() => {
      i+=10
      if(i <= 0){
        listDefault.style.transform = `translateX(${i}%)`;
      } else{
        clearInterval(sset);
      }
    }, 20);

  }
});

// вызов listDefault
selectCities.addEventListener("focus", () => {
  if(!listsColDefault.childElementCount){
    cubeLoader.style.display = 'inline-block';
getCountry()
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    let countryRu = response.RU;

    rendCountry(countryRu);
  })
  .catch((error) => {
    console.log(error);
  });
  };

});

// отслеживание автокомплита
selectCities.addEventListener("input", () => {
  button.href = "#";
  if (selectCities.value.length > 0) {
    getCountry()
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let countryRu = response.RU;

        renderAutoComplete(selectCities.value, countryRu);
      })
      .catch((error) => {
        console.log(error);
      });

    listDefault.style.display = "none";
    listSelect.style.display = "none";
    listAutocomplete.style.display = "block";
  } else {
    listDefault.style.display = "block";
    listAutocomplete.style.display = "none";
  }
});

inputCities.addEventListener("click", (e) => {
  const target = e.target;
  const linkCity = (countryRu) => {
    countryRu.forEach((item) => {
      item.cities.forEach((city) => {
        if (target.innerText === city.name) {
          button.href = city.link;
        }
      });
    });
  };

  // появление крестика
  if (
    target.className === "dropdown-lists__country" ||
    target.className === "dropdown-lists__city"
  ) {
    // selectCities.focus();
    selectCities.value = target.innerText;
    closeButton.style.display = "block";
  }
  // появление ссылки
  if (target.className === "dropdown-lists__city") {
    getCountry()
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let countryRu = response.RU;
        linkCity(countryRu);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (target === closeButton) {
    selectCities.value = "";
    listsColDefault.innerHTML = "";
    listDefault.style.display = "block";
    listSelect.style.display = "none";
    closeButton.style.display = "none";
    listAutocomplete.style.display = "none";
    button.href = "#";
  }
});
