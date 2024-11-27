import React, { useState } from 'react';
import Modal from './modal'; // Импортируем модальное окно

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Модальное окно открыто при загрузке
  const [gender, setGender] = useState(''); // Состояние для хранения выбранного пола

  // Обработчик отправки данных из модального окна
  const handleModalClose = (selectedGender) => {
    setGender(selectedGender); // Сохраняем выбранный пол
    setIsModalOpen(false); // Закрываем модальное окно после отправки данных
  };

  return (
    <div>
      {gender && <p>Выбранный пол: {gender === 'male' ? 'Мужской' : 'Женский'}</p>}

      {/* Модальное окно */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleModalClose} 
      />
    </div>
  );
};

export default ParentComponent;
