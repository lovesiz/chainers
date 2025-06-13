let currentSort = { column: null, ascending: true };

function sortTable(columnIndex) {
  const table = document.getElementById("seedTable");
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);

  const isNumeric = columnIndex !== 0;

  // Sıralama yönünü ters çevir
  if (currentSort.column === columnIndex) {
    currentSort.ascending = !currentSort.ascending;
  } else {
    currentSort.column = columnIndex;
    currentSort.ascending = true;
  }

  // Okları sıfırla
  for (let i = 0; i < table.rows[0].cells.length; i++) {
    document.getElementById("arrow-" + i).innerText = "";
  }

  // Yeni ok yönünü göster
  document.getElementById("arrow-" + columnIndex).innerText = currentSort.ascending ? "▼" : "▲";

  // Sıralama işlemi
  rows.sort((a, b) => {
    let valA = a.cells[columnIndex].innerText.trim();
    let valB = b.cells[columnIndex].innerText.trim();

    if (isNumeric) {
      valA = parseFloat(valA.replace(",", "."));
      valB = parseFloat(valB.replace(",", "."));
    }

    if (valA < valB) return currentSort.ascending ? -1 : 1;
    if (valA > valB) return currentSort.ascending ? 1 : -1;
    return 0;
  });

  // Sıralanmış satırları yeniden ekle
  tbody.innerHTML = "";
  rows.forEach(row => tbody.appendChild(row));
}
