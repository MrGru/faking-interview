const data = [
  {
    question: "Câu hỏi 1",
    answer: "Đáp án 1",
  },
  {
    question: "Câu hỏi 2",
    answer: "Đáp án 2",
  },
  {
    question: "Câu hỏi 3",
    answer: "Đáp án 3",
  },
  {
    question: "Câu hỏi 4",
    answer: "Đáp án 4",
  },
  {
    question: "Câu hỏi 5",
    answer: "Đáp án 5",
  },
  {
    question: "Câu hỏi 6",
    answer: "Đáp án 6",
  },
];

const menu = [
  {
    id: 1,
    menu: "Algorithm",
    child: [
      {
        id: 1,
        menu: "sort",
      },
      {
        id: 2,
        menu: "search",
      },
    ],
  },
  {
    id: 2,
    menu: "Programming language",
    child: [
      {
        id: 1,
        menu: "Java",
      },
      {
        id: 2,
        menu: "Java script",
      },
      {
        id: 3,
        menu: "Python",
      },
    ],
  },
  {
    id: 2,
    menu: "Chó Hùng 01",
  },
  {
    id: 2,
    menu: "Chó Hiếu 01",
  },
  {
    id: 2,
    menu: "Chó Tuấn 01",
  },
  {
    id: 2,
    menu: "Web khó vl",
  },
];

export default { menu, data };
