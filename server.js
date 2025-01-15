const express = require('express');
const cors = require('cors'); // Подключаем CORS (midlleware)
const app = express();
const port = 5000;

app.use(cors()); // Разрешаем все источники для CORS
app.use(express.json()); // Для обработки JSON данных

// songs data
const songs = [
    { id: 1, title: "12 Notes", album: "12 Notes" },
    { id: 2, title: "Ways To Go", album: "12 Notes" },
    { id: 3, title: "In A Little", album: "12 Notes" },
    { id: 4, title: "Different Kind Of Beautiful", album: "12 Notes" },
    { id: 5, title: "Pick Me", album: "12 Notes" },
    { id: 6, title: "Sacrifice Tomorrow", album: "12 Notes" },
    { id: 7, title: "I Sent My Therapist To Therapy", album: "12 Notes" },
    { id: 8, title: "The Arsonist", album: "12 Notes" },
    { id: 9, title: "Lead Me To Water", album: "12 Notes" },
    { id: 10, title: "By Now", album: "12 Notes" },
    { id: 11, title: "King Size Bed", album: "12 Notes" },
    { id: 12, title: "Love The Ones Who Leave", album: "12 Notes" },

    { id: 13, title: "Mind Is A Prison", album: "These Two Windows" },
    { id: 14, title: "Demons", album: "These Two Windows" },
    { id: 15, title: "Oh My God", album: "These Two Windows" },
    { id: 16, title: "The Book of You & I", album: "These Two Windows" },
    { id: 17, title: "Match In The Rain", album: "These Two Windows" },
    { id: 18, title: "Jesus In LA", album: "These Two Windows" },
    { id: 19, title: "Im Not A Cynic", album: "These Two Windows" },
    { id: 20, title: "Alamo", album: "These Two Windows" },
    { id: 21, title: "Must Have Been The Wind", album: "These Two Windows" },
    { id: 22, title: "Just Like You", album: "These Two Windows" }
];

// Маршрут для получения песен по ID
app.get('/songs/:id', (req, res) => {
    const { id } = req.params; // Получаем ID из параметров URL
    const song = songs.find(song => song.id === parseInt(id)); // Ищем песню по ID

    if (song) {
        res.json(song); // Если песня найдена, возвращаем её
    } else {
        res.status(404).json({ error: "Song not found" }); // Если песня не найдена
    }
});

// Маршрут для поиска песен с фильтрацией, пагинацией и параметрами поиска
app.get('/songs', (req, res) => {
    const { search, page = 1, limit = 22 } = req.query; // Получаем параметры поиска, страницы и лимита
    console.log("Query Params Received:", { search, page, limit });
    let filteredSongs = songs;

    if (search) {
        // Если есть запрос на поиск, фильтруем песни по названию
        filteredSongs = filteredSongs.filter(song => song.title.toLowerCase().includes(search.toLowerCase()));
        console.log("Filtered Songs:", filteredSongs);
    }

    // Пагинация(вычисляем, какую песню нужно отправить)
    const totalPages = Math.ceil(filteredSongs.length / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedSongs = filteredSongs.slice(startIndex, endIndex);

    res.json({
        songs: paginatedSongs,
        totalPages: totalPages
    });
});
//запуск сервера и прослушивание входящих запросов на заданном порту
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});