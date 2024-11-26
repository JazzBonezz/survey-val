const part1Questions = [
    {
      type: "Opros",
      name: "Ваш возраст: _____ лет (18+)",
      inputType: "number",
      placeholder: "Введите значение",
    },
    {
      type: "Select",
      name: "Ваш пол: ",
      options: [
        { value: "male", label: "Мужской" },
        { value: "female", label: "Женский" },
      ],
    },
    {
      type: "Select",
      name: "Курите ли Вы?",
      options: [
        { value: 1, label: "Да (1)" },
        { value: 2, label: "Нет (0)" },
      ],
    },
    {
      type: "Opros",
      name: "Ваш вес: _____ кг, рост: _____ м (например рост 168 см = 1,68 – записать в м.) (формула ИМТ = кг/м^2 )",
      inputType: "text",
      placeholder: "Введите значение",
    },
    {
      type: "Select",
      name: "Показатели систолического артериального давления: ____",
      options: [
        { value: "norm", label: "120-129 – норма (0)" },
        { value: "high", label: "≥130 – повышенное АД (2)" },
        { value: "low", label: "<120 – пониженное АД (0)" },
      ],
    },
    {
      type: "MultiSelect",
      name: "Встречались ли у Ваших ближайших родственников заболевания?",
      options: [
        { value: "none", label: "Нет (0)" },
        { value: "diabetes", label: "Сахарный диабет" },
        { value: "hypertension", label: "Артериальная гипертензия" },
        { value: "hypertension", label: "Ишемическая болезнь сердца" },
        { value: "hypertension", label: "Ожирение" },
        { value: "hypertension", label: "Почечная недостаточность" },
        { value: "hypertension", label: "Тромбоэмболия легочной артерии (ТЭЛА)" },
        { value: "hypertension", label: "Варикоз" },
        { value: "hypertension", label: "Остеопороз" },
        { value: "hypertension", label: "Саркопения" },
        { value: "hypertension", label: "Атеросклероз" },
      ],
    },
    {
      type: "Select",
      name: "Сколько шагов в день вы проходите?",
      options: [
        { value: "5000_or_more", label: "5000 или больше (0)" },
        { value: "less_than_5000", label: "Меньше 5000 (1)" },
      ],
    },
    
    {
        type: "Select",
        name: "Ваша профессия?",
        options: [
          { value: "5000_or_more", label: "Сидячая работа (4 часа и более) (0,5)" },
          { value: "less_than_5000", label: "Стоячая работа (4 часа и более) (0,5)" },
          { value: "less_than_5000", label: "Умеренное соотношения сидячей и стоячей работы (работа со сменой деятельности) (0)" },
        ],
    },

    {
        type: "Select",
        name: "Употребляете ли вы алкоголь?",
        options: [
          { value: "5000_or_more", label: "Никогда (0)" },
          { value: "less_than_5000", label: "Редко (1-2 раза в год) (1)" },
          { value: "less_than_5000", label: "Умеренно (раз в 1-3 месяца) (1)" },
          { value: "less_than_5000", label: "Часто (каждую неделю/практически каждую неделю) (1)" },
        ],
    },

    {
        type: "Select",
        name: "Частота употребления жирной и соленой пищи: ",
        options: [
          { value: "5000_or_more", label: "Очень часто (каждый день) (0,5)" },
          { value: "less_than_5000", label: "Часто (3-5 раз в неделю) (0,5)" },
          { value: "less_than_5000", label: "Иногда (1-2 раза в неделю) (0)" },
          { value: "less_than_5000", label: "Редко (несколько раз в месяц) (0)" },
        ],
    },
    


  ];
  
  export default part1Questions;
  