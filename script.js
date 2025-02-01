// Data dummy anime
const animeData = [
    { id: 1, title: "Working!!", image: "https://i.pinimg.com/236x/9c/6c/2f/9c6c2fecaa79052724ca063e4e83728b.jpg" },
    { id: 2, title: "K-On!", image: "https://i.pinimg.com/474x/fc/fa/da/fcfadaa4f36232e9bc02105079f70abc.jpg" },
    { id: 3, title: "Bocchi the Rock!", image: "https://i.pinimg.com/236x/f3/a1/81/f3a181a4d06d24255aa29f23724d56c3.jpg" },
    { id: 4, title: "Koe no Katachi", image: "https://i.pinimg.com/474x/21/ce/f6/21cef699a4b7c594e05f395f932fc1f0.jpg" },
    { id: 5, title: "Fullmetal Alchemist: Brotherhood", image: "https://i.pinimg.com/236x/68/ab/3b/68ab3b6d65e32d9f3b53b0ca18adcbe2.jpg" },
    { id: 6, title: "Kimi no Na wa.", image: "https://i.pinimg.com/236x/77/42/e8/7742e8d219c26ecda9eb1ebb240fdf15.jpg" },
  ];
  
  let favorites = [];
  
  // Fungsi untuk menampilkan daftar anime
  function renderAnimeList(data) {
    const animeList = document.querySelector('.anime-list');
    animeList.innerHTML = '';
  
    data.forEach(anime => {
      const card = document.createElement('div');
      card.classList.add('anime-card');
  
      card.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}">
        <h3>${anime.title}</h3>
        <button onclick="addToFavorites(${anime.id})">Tambah ke Favorit</button>
      `;
  
      animeList.appendChild(card);
    });
  }
  
  // Fungsi untuk menambahkan anime ke favorit
  function addToFavorites(id) {
    const anime = animeData.find(a => a.id === id);
  
    if (!favorites.some(f => f.id === id)) {
      favorites.push(anime);
      renderFavorites();
    } else {
      alert(`${anime.title} sudah ada di daftar favorit!`);
    }
  }
  
  // Fungsi untuk menampilkan daftar favorit
  function renderFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';
  
    favorites.forEach(fav => {
      const listItem = document.createElement('li');
      listItem.textContent = fav.title;
      favoritesList.appendChild(listItem);
    });
  }
  
  // Fungsi pencarian anime
  document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredAnime = animeData.filter(anime =>
      anime.title.toLowerCase().includes(query)
    );
    renderAnimeList(filteredAnime);
  });
  
  // Render daftar anime saat halaman dimuat
  renderAnimeList(animeData);