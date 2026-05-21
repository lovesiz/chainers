// --- JS İÇİNDE TUTULAN VE DEĞİŞTİREBİLECEĞİNİZ DEĞERLER ---
const DATA = {
    toplamPuan: 1917771,
    storeDegeri: 9,       // İlk satır sonucu: 1917771 / 9 = 213086
    mergeDegeri: 10,      // İlk satır sonucu: 1917771 / 10 = 191777
    fertilizerDegeri: 8   // İlk satır sonucu: 1917771 / 8 = 239721
};

// --- DIŞ SİTEDEN ÇEKECEĞİNİZ RESİMLERİN DOSYA YOLLARI ---
const ICONS = {
    cfb: "https://rollerhelper.com/chainers_helper/en/img/Icones/pool/icon_cfb.png", 
    dollar: "https://rollerhelper.com/chainers_helper/en/img/Icones/pool/dollar.png"
};

function initLeftTable() {
    const tbody = document.getElementById("multiplier-tbody");
    tbody.innerHTML = "";

    // İlk satırın (x1) başlangıç (baz) değerlerini hesaplıyoruz
    const baseStore = Math.round(DATA.toplamPuan / DATA.storeDegeri);
    const baseMerge = Math.round(DATA.toplamPuan / DATA.mergeDegeri);
    const baseFertilizer = Math.round(DATA.toplamPuan / DATA.fertilizerDegeri);

    // Açık yeşil renk vurgusunun sadece "İLK KEZ" sağlandığı satıra verilmesi için kontrol değişkeni
    let isGreenHighlighted = false;

    // Tam 50 satır olacak şekilde döngü
    for (let x = 1; x <= 50; x++) {
        // Her x artışında 200 CFB ve 5 Dolar doğrusal artıyor
        const cfbValue = (x - 1) * 200;
        const cryptoPrice = (x - 1) * 5;

        // YENİ FORMÜL: Her satırın değeri = ilk satırın değeri / x
        const currentStore = Math.round(baseStore / x);
        const currentMerge = Math.round(baseMerge / x);
        const currentFertilizer = Math.round(baseFertilizer / x);

        // Number of Chainers Dream alanı (Görseldeki oran korundu)
        const chainersDream = Math.round(currentStore * 0.045); 

        const tr = document.createElement("tr");

        // KOŞUL: Spend in Store değeri, Convert CFB değerinden İLK KEZ küçük olduğunda satırı açık yeşil yap
        if (!isGreenHighlighted && currentStore < cfbValue) {
            tr.classList.add("green-highlight-row");
            isGreenHighlighted = true; 
        }

        tr.innerHTML = `
            <td class="row-index">x${x}</td>
            <td>
                <div class="cell-with-icon">
                    ${cfbValue} <img class="cell-icon" src="${ICONS.cfb}" alt="">
                </div>
            </td>
            <td>
                <div class="cell-with-icon">
                    ${cryptoPrice.toFixed(2)} <img class="cell-icon" src="${ICONS.dollar}" alt="">
                </div>
            </td>
            <td>
                <div class="cell-with-icon">
                    ${currentStore} <img class="cell-icon" src="${ICONS.cfb}" alt="">
                </div>
            </td>
            <td>
                <div class="cell-with-icon">
                    ${currentMerge} <img class="cell-icon" src="${ICONS.cfb}" alt="">
                </div>
            </td>
            <td>${currentFertilizer}</td>
           
        `;
        
        tbody.appendChild(tr);
    }
}

// Sayfa yüklendiğinde çalıştır
window.onload = function() {
    initLeftTable();
};
