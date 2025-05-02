function searchBook() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const result = document.getElementById('searchResult');
    const books = [
      "тіні забутих предків",
      "кобзар",
      "залишенець"
    ];
  
    const found = books.find(book => book.includes(input));
    if (found) {
      result.textContent = `Знайдено книгу: ${found}`;
      result.style.color = "green";
    } else {
      result.textContent = "Книгу не знайдено.";
      result.style.color = "red";
    }
  }
  