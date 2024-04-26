

import axios from 'axios';

// Функция для добавления нового трека
export const addTrack = async (track, status, date) => {
  try {
    const response = await axios.post('https://ak-dani-cargo.kz:3001/api/track/addTrack', {
      track,
      status,
      date
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const { message, errors } = error.response.data;
      console.log('Validation errors:', errors);
      alert(message);
    } else {
      console.error('Error:', error.message);
    }
  }

  
};

// Функция для отправки запроса на обновление треков на сервер
export const excelTracks = async (tracks, status, date) => {
  try {
      // Отправляем POST запрос на сервер для обновления треков
      const response = await axios.post('https://ak-dani-cargo.kz:3001/api/track/addExcelTrack', {
          tracks,
          status,
          date
      });
      
      // Возвращаем данные ответа от сервера
      return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const { message, errors } = error.response.data;
      console.log('Validation errors:', errors);
      alert(message);
    } else {
      console.error('Error:', error.message);
    }
  }
};
