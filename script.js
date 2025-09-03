function hesapla() {
  const bioPuan = parseFloat(document.getElementById('bioPuan').value);
  const havuzGucu = parseFloat(document.getElementById('havuzGucu').value);

  if (isNaN(bioPuan) || isNaN(havuzGucu) || havuzGucu === 0) {
    alert("Lütfen geçerli sayılar girin ve Toplam Havuz Gücü sıfır olmasın.");
    return;
  }

  // Tablo 1 katsayıları
  const katsayilar1 = [0.0015, 95, 5];
  const ids1 = ['t1s1', 't1s2', 't1s3'];

  // Tablo 2 katsayıları
  const katsayilar2 = [0.017, 815, 60];
  const ids2 = ['t2s1', 't2s2', 't2s3'];

  // Tablo 3 katsayıları
  const katsayilar3 = [0.0315, 1595, 117];
  const ids3 = ['t3s1', 't3s2', 't3s3'];

  // Tüm tabloları hesapla
  [ [katsayilar1, ids1], [katsayilar2, ids2], [katsayilar3, ids3] ].forEach(([katsayilar, ids]) => {
    katsayilar.forEach((katsayi, index) => {
      const sonuc = (bioPuan / havuzGucu) * katsayi;
      document.getElementById(ids[index]).textContent = sonuc.toFixed(4);
    });
  });
}

