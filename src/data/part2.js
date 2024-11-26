const part2Questions = [
    {
      type: "Select",
      name: "Чувствуете ли Вы боль в ногах при ходьбе?",
      options: [
        { value: "severe", label: "Да, сильно (2)" },
        { value: "moderate", label: "Да, умеренно (1)" },
        { value: "mild", label: "Да, слегка (0,5)" },
        { value: "no", label: "Нет (0)" },
      ],
    },
    {
      type: "Select",
      name: "Устают ли Ваши ноги при ходьбе быстрее, чем раньше?",
      options: [
        { value: "significantly_faster", label: "Да, значительно быстрее (1)" },
        { value: "slightly_faster", label: "Да, немного быстрее (0,5)" },
        { value: "no", label: "Нет (0)" },
      ],
    },
    {
      type: "Select",
      name: "Ощущаете ли Вы онемение или покалывание в ногах?",
      options: [
        { value: "frequent", label: "Да, часто (2)" },
        { value: "sometimes", label: "Да, иногда (1)" },
        { value: "no", label: "Нет (0)" },
      ],
    },
    {
      type: "Select",
      name: "Холодеют ли Ваши ноги чаще, чем раньше?",
      options: [
        { value: "significantly_often", label: "Да, значительно чаще (2)" },
        { value: "slightly_often", label: "Да, немного чаще (1)" },
        { value: "no", label: "Нет (0)" },
      ],
    },
    {
      type: "Select",
      name: "Изменился ли цвет кожи на ногах (побледнела, посинела)?",
      options: [
        { value: "noticeably", label: "Да, заметно (2)" },
        { value: "slightly", label: "Да, слегка (1)" },
        { value: "no", label: "Нет (0)" },
      ],
    },
    {
      type: "Select",
      name: "Медленно ли заживают раны на ногах?",
      options: [
        { value: "significantly_slower", label: "Да, значительно медленнее (2)" },
        { value: "slightly_slower", label: "Да, немного медленнее (1)" },
        { value: "no", label: "Нет (0)" },
      ],
    },
    {
      type: "Select",
      name: "Появляются ли судороги в ногах, особенно ночью?",
      options: [
        { value: "frequent", label: "Да, часто (2)" },
        { value: "sometimes", label: "Да, иногда (1)" },
        { value: "no", label: "Нет (0)" },
      ],
    },
    {
      type: "Select",
      name: "Наблюдаете ли Вы выпадение волос на ногах?",
      options: [
        { value: "significant", label: "Да, значительно (1)" },
        { value: "slight", label: "Да, немного (0,5)" },
        { value: "no", label: "Нет (0)" },
      ],
    },
  ];
  
  export default part2Questions;
  