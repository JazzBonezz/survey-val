import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [selectedGender, setSelectedGender] = useState('');
  const [age, setAge] = useState('');

  const handleGenderChange = (e) => setSelectedGender(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);

  const handleSubmit = () => {
    if (selectedGender && age) {
      onSubmit(selectedGender, age); // Отправляем пол и возраст родительскому компоненту
      onClose(); // Закрываем модальное окно после отправки
    } else {
      alert("Пожалуйста, заполните все поля!"); // Если данные не заполнены, выводим предупреждение
    }
  };

  if (!isOpen) return null; // Если модальное окно закрыто, ничего не отображается

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Введите ваш возраст и пол</h2>

        <div>
          <label>Пол: </label>
          <select value={selectedGender} onChange={handleGenderChange}>
            <option value="">Выберите пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>

        <div>
          <label>Возраст: </label>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            placeholder="Введите возраст"
          />
        </div>

        <div>
          <button onClick={handleSubmit}>Подтвердить</button>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
