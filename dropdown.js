document.addEventListener("DOMContentLoaded", function() {
    const brandSelect = document.getElementById("brand");
    const modelSelect = document.getElementById("model");
    const yearSelect = document.getElementById("year");
    const engineOptionSelect = document.getElementById("engineOption");

    const originalHp = document.getElementById("originalHp");
    const optimizedHp = document.getElementById("optimizedHp");
    const hpIncrease = document.getElementById("hpIncrease");
    const originalTorque = document.getElementById("originalTorque");
    const optimizedTorque = document.getElementById("optimizedTorque");
    const torqueIncrease = document.getElementById("torqueIncrease");
    const price = document.getElementById("price");

   //CAR DATA
    const carData = {
        Toyota: {
            Corolla: {
                2022: {
                    "1.8L": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "2.0L": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 }
                },
                2021: {
                    "1.6L": { originalHp: 120, optimizedHp: 140, originalTorque: 150, optimizedTorque: 170, price: 4800 },
                    "1.8L": { originalHp: 130, optimizedHp: 150, originalTorque: 160, optimizedTorque: 180, price: 5200 }
                }
            }
        },
        Ford: {
            Mustang: {
                2023: {
                    "5.0L V8": { originalHp: 450, optimizedHp: 500, originalTorque: 500, optimizedTorque: 550, price: 12000 },
                    "2.3L EcoBoost": { originalHp: 310, optimizedHp: 340, originalTorque: 350, optimizedTorque: 390, price: 7000 }
                }
            }
        },
        BMW: {
            "3-Serien": {
                "E46 1998 > 2005": {
                    "Bensin": {},
                    "325i 192hk": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "330i 231hk": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "M3 343hk": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "M3 CSL 360hk": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "Diesel": {},
                    "318d 115hk": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 },
                    "320d 128hk": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 },
                    "320d 136hk": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 },
                    "320d 150hk": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 },
                    "330d 184hk": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 },
                    "330d 204hk": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 }
                },
                "E9x 2005 > 2010": {
                    "Bensin": {},
                    "318i": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "320i": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "Diesel": {},
                    "318d": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 }
                },
                "E9x lci 2010 > 2011": {
                    "Bensin": {},
                    "318i": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "320i": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "Diesel": {},
                    "318d": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 }
                },
                "F3x 2011 > 2015": {
                    "Bensin": {},
                    "318i": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "320i": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "Diesel": {},
                    "318d": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 }
                },
                "F3x LCI 2015 > 2019": {
                    "Bensin": {},
                    "318i": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "320i": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "Diesel": {},
                    "318d": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 }
                },
                "G2x 2019 > ": {
                    "Bensin": {},
                    "318i": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "320i": { originalHp: 140, optimizedHp: 160, originalTorque: 170, optimizedTorque: 190, price: 5000 },
                    "Diesel": {},
                    "318d": { originalHp: 160, optimizedHp: 180, originalTorque: 180, optimizedTorque: 210, price: 5500 }
                },
            }
        }
    };

    brandSelect.addEventListener("change", function() {
        modelSelect.disabled = yearSelect.disabled = engineOptionSelect.disabled = true;
        modelSelect.innerHTML = '<option value="">-- Select a Model --</option>';
        yearSelect.innerHTML = '<option value="">-- Select Year --</option>';
        engineOptionSelect.innerHTML = '<option value="">-- Select Engine Option --</option>';

        if (carData[brandSelect.value]) {
            Object.keys(carData[brandSelect.value]).forEach(model => {
                const option = document.createElement("option");
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
            modelSelect.disabled = false;
        }
    });

    modelSelect.addEventListener("change", function() {
        yearSelect.disabled = true;
        yearSelect.innerHTML = '<option value="">-- Select Year --</option>';
        engineOptionSelect.innerHTML = '<option value="">-- Select Engine Option --</option>';

        if (carData[brandSelect.value][modelSelect.value]) {
            Object.keys(carData[brandSelect.value][modelSelect.value]).forEach(year => {
                const option = document.createElement("option");
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            });
            yearSelect.disabled = false;
        }
    });

    yearSelect.addEventListener("change", function() {
        engineOptionSelect.disabled = true;
        engineOptionSelect.innerHTML = '<option value="">-- Select Engine Option --</option>';

        if (carData[brandSelect.value][modelSelect.value][yearSelect.value]) {
            Object.keys(carData[brandSelect.value][modelSelect.value][yearSelect.value]).forEach(engine => {
                const option = document.createElement("option");
                option.value = engine;
                option.textContent = engine;
                engineOptionSelect.appendChild(option);
            });
            engineOptionSelect.disabled = false;
        }
    });

    engineOptionSelect.addEventListener("change", function() {
        const selectedData = carData[brandSelect.value][modelSelect.value][yearSelect.value][engineOptionSelect.value];
        
        originalHp.textContent = `${selectedData.originalHp} hp`;
        optimizedHp.textContent = `${selectedData.optimizedHp} hp`;
        hpIncrease.textContent = `+ ${selectedData.optimizedHp - selectedData.originalHp} hp`;
        originalTorque.textContent = `${selectedData.originalTorque} Nm`;
        optimizedTorque.textContent = `${selectedData.optimizedTorque} Nm`;
        torqueIncrease.textContent = `+ ${selectedData.optimizedTorque - selectedData.originalTorque} Nm`;
        price.textContent = `${selectedData.price} SEK`;
    });
});
