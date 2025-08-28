const brandSelect = document.getElementById("brand");
    const modelSelect = document.getElementById("model");
    const searchBtn = document.getElementById("searchBtn");
    const resultDiv = document.getElementById("result");

    // Models Data
    const models = {
      Samsung: ["Galaxy S23", "Galaxy A54", "Galaxy Z Fold 5"],
      Apple: ["iPhone 14", "iPhone 14 Pro", "iPhone SE"],
      Xiaomi: ["Redmi Note 12", "Mi 11 Lite", "Poco X5"]
    };

    // Brand Change → Load Models
    brandSelect.addEventListener("change", function () {
      const brand = this.value;
      modelSelect.innerHTML = `<option value="">-- Choose Model --</option>`;
      if (models[brand]) {
        models[brand].forEach(model => {
          const option = document.createElement("option");
          option.value = model;
          option.textContent = model;
          modelSelect.appendChild(option);
        });
      }
    });

    
    searchBtn.addEventListener("click", function () {
      const brand = brandSelect.value;
      const model = modelSelect.value;

      if (brand && model) {
        resultDiv.textContent = `You selected: ${brand} - ${model}`;
      } else {
        resultDiv.textContent = "⚠️ Please select both brand and model!";
      }
    });