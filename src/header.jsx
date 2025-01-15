import './style.css';
import image from './image.png';
import React, { useState, useEffect } from 'react'; //хук для управления состояниями, хук для управления побочными эффектами в фунционаkьных компонентах
import { useNavigate } from 'react-router-dom'; //хук для перенаправлений

function Header() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState(""); // хранение текущего поискового запроса
    const [error, setError] = useState(""); // хранение текста ошибки
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(""); // хранения дебаунс-запроса (отложенное выполнение поиска)

    // Функция дебаунсинга
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 500); // 500 мс задержка

        return () => clearTimeout(timeoutId); // Очистка таймера при изменении поискового запроса
    }, [searchQuery]);

    // Асинхронная функция для поиска
    const handleSearch = async (query) => {
        if (query.trim()) {
            try {
                // запрос на сервер с поисковым запросом
                const response = await fetch(`http://localhost:5000/songs?search=${query}`);
                if (!response.ok) {
                    throw new Error("Ошибка поиска песни");
                }
                // Обрабатываем ответ
                const data = await response.json();
                if (data.songs.length > 0) {
                    const song = data.songs[0]; // Берём первую песню из результатов
                    navigate(`/song/${song.id}`); // Перенаправляем на страницу с ID песни
                } else {
                    setError("Песня не найдена");
                }
            } catch (error) {
                setError(error.message); // Устанавливаем ошибку
            }
        }
    };

    //функция (срабатывает при вводе текста в поле поиска)
    //e = event
    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query); // Обновляем поисковый запрос
    };

    // выполнение поиска только после дебаунсинга
    useEffect(() => {
        if (debouncedSearchQuery) {
            handleSearch(debouncedSearchQuery); // Выполняем поиск после дебаунсинга
        }
    }, [debouncedSearchQuery]); // Срабатывает, когда изменяется дебаунс-запрос

    
    return (
        <div className="Header">
            <div style={{ display: "flex" }}>
                <img src={image} style={{ height: "37px", marginTop: "15px" }} alt="Logo" />
                <p style={{ color: "white", fontSize: "20px", marginLeft: "10px" }}>Promote your music</p>
            </div>
            <div style={{ display: "flex" }}>
                <button
                    onClick={() => navigate(-1)} // Возврат на предыдущую страницу
                    style={{
                        marginTop: "20px",
                        marginRight: "30px",
                        height: "30px",
                        width: "80px",
                        borderRadius: "20px",
                        cursor: "pointer",
                        backgroundColor: "white",
                        color: "black",
                        border: "none"
                    }}
                >
                    Go back
                </button>
                <input
                    type="text"
                    placeholder="Search for a song"
                    value={searchQuery}
                    onChange={handleInputChange} // Обновление состояния при вводе
                    style={{
                        width: "243px",
                        height: "33px",
                        marginTop: "15px",
                        marginRight: "20px"
                    }}
                />
            </div>

            {/* Вывод ошибкок, если они есть */}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}

export default Header;





