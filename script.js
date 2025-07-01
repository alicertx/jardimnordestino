const questions = {
  facil: [
    {
      question: "Qual planta é conhecida como 'babosa'?",
      options: ["Camomila", "Aloe vera", "Hortelã", "Arruda"],
      answer: "Aloe vera"
    },
    {
      question: "Qual planta é usada para aliviar cólicas?",
      options: ["Camomila", "Jambu", "Boldo", "Manjericão"],
      answer: "Camomila"
    },
    {
      question: "Qual planta tem aroma refrescante e é usada para problemas digestivos?",
      options: ["Hortelã", "Alecrim", "Capim-santo", "Arruda"],
      answer: "Hortelã"
    },
    {
      question: "Qual planta é usada como calmante natural?",
      options: ["Erva-doce", "Guaco", "Babosa", "Camomila"],
      answer: "Camomila"
    },
    {
      question: "Qual planta ajuda no alívio de náuseas?",
      options: ["Gengibre", "Alecrim", "Manjericão", "Lavanda"],
      answer: "Gengibre"
    },
    {
      question: "Qual planta é conhecida por repelir insetos?",
      options: ["Citronela", "Capim-limão", "Babosa", "Jasmim"],
      answer: "Citronela"
    },
    {
      question: "Qual planta é usada para dores de estômago?",
      options: ["Boldo", "Rosa", "Manjerona", "Lavanda"],
      answer: "Boldo"
    },
    {
      question: "Qual planta é conhecida por seu uso em chás calmantes?",
      options: ["Capim-santo", "Cacto", "Manjericão", "Babosa"],
      answer: "Capim-santo"
    },
    {
      question: "Qual planta é muito usada para tratar resfriados?",
      options: ["Guaco", "Hortelã", "Arruda", "Arnica"],
      answer: "Guaco"
    },
    {
      question: "Qual planta tem folhas usadas como tempero e chá medicinal?",
      options: ["Manjericão", "Cacto", "Lírio", "Violeta"],
      answer: "Manjericão"
    }
  ],
  medio: [
    {
      question: "Qual planta tem efeito expectorante natural?",
      options: ["Guaco", "Erva-doce", "Tomilho", "Alecrim"],
      answer: "Guaco"
    },
    {
      question: "O chá de qual planta é indicado para insônia?",
      options: ["Capim-santo", "Lavanda", "Camomila", "Babosa"],
      answer: "Camomila"
    },
    {
      question: "Qual planta é usada como diurético natural?",
      options: ["Cavalinha", "Erva-doce", "Alfazema", "Gengibre"],
      answer: "Cavalinha"
    },
    {
      question: "Qual planta tem ação digestiva e antiespasmódica?",
      options: ["Erva-doce", "Guaraná", "Hibisco", "Cravo-da-Índia"],
      answer: "Erva-doce"
    },
    {
      question: "Qual planta é indicada para combater gases intestinais?",
      options: ["Funcho", "Guaco", "Jaborandi", "Alecrim"],
      answer: "Funcho"
    },
    {
      question: "Qual planta é conhecida por estimular o sistema imunológico?",
      options: ["Equinácea", "Babosa", "Tomilho", "Arruda"],
      answer: "Equinácea"
    },
    {
      question: "Qual planta tem propriedade cicatrizante e anti-inflamatória?",
      options: ["Babosa", "Manjerona", "Citronela", "Boldo"],
      answer: "Babosa"
    },
    {
      question: "Qual planta é usada como relaxante muscular?",
      options: ["Lavanda", "Capim-santo", "Guaco", "Erva-cidreira"],
      answer: "Erva-cidreira"
    },
    {
      question: "Qual planta é indicada para dor de cabeça e tensão nervosa?",
      options: ["Alecrim", "Camomila", "Manjerona", "Lavanda"],
      answer: "Lavanda"
    },
    {
      question: "Qual planta ajuda na circulação sanguínea?",
      options: ["Ginkgo biloba", "Arnica", "Babosa", "Boldo"],
      answer: "Ginkgo biloba"
    }
  ],
  dificil: [
    {
      question: "Qual planta possui ação antisséptica e é usada em feridas?",
      options: ["Calêndula", "Jaborandi", "Carqueja", "Guaraná"],
      answer: "Calêndula"
    },
    {
      question: "Qual parte da Arnica é usada para preparar pomadas anti-inflamatórias?",
      options: ["Raiz", "Folha", "Flor", "Semente"],
      answer: "Flor"
    },
    {
      question: "Qual planta é indicada para tratar problemas hepáticos?",
      options: ["Carqueja", "Lavanda", "Alfazema", "Camomila"],
      answer: "Carqueja"
    },
    {
      question: "Qual planta possui propriedades afrodisíacas e é estimulante?",
      options: ["Catuaba", "Guaco", "Camomila", "Babosa"],
      answer: "Catuaba"
    },
    {
      question: "Qual planta possui saponinas com propriedades anti-inflamatórias?",
      options: ["Salsaparrilha", "Arruda", "Capim-limão", "Manjericão"],
      answer: "Salsaparrilha"
    },
    {
      question: "Qual planta é utilizada no tratamento de caspa e queda de cabelo?",
      options: ["Jaborandi", "Gengibre", "Tomilho", "Cavalinha"],
      answer: "Jaborandi"
    },
    {
      question: "Qual planta medicinal é indicada como depurativa do sangue?",
      options: ["Urtiga", "Lavanda", "Funcho", "Alecrim"],
      answer: "Urtiga"
    },
    {
      question: "Qual planta tem uso tradicional no tratamento da hipertensão?",
      options: ["Alho", "Babosa", "Erva-doce", "Lavanda"],
      answer: "Alho"
    },
    {
      question: "Qual planta é famosa por seu uso contra infecções urinárias?",
      options: ["Quebra-pedra", "Tomilho", "Cravo-da-Índia", "Jasmim"],
      answer: "Quebra-pedra"
    },
    {
      question: "Qual planta é usada para estimular o apetite em casos de fraqueza?",
      options: ["Genciana", "Erva-cidreira", "Camomila", "Capim-limão"],
      answer: "Genciana"
    }
  ]
};

let currentQuestionIndex = 0;
let score = 0;
let currentDifficulty = '';
const quizContainer = document.getElementById('quizContainer');

function showPlants() {
  document.getElementById('plantCards').style.display = 'block';
  document.getElementById('quizContainer').style.display = 'none';
  document.getElementById('difficultyOptions').style.display = 'none';
  document.getElementById('footerDev').style.display = 'none';
}

function toggleDifficultyOptions() {
  const container = document.getElementById('difficultyOptions');
  container.style.display = container.style.display === 'none' ? 'block' : 'none';
  document.getElementById('plantCards').style.display = 'none';
  document.getElementById('quizContainer').style.display = 'none';
}

function startQuiz(difficulty) {
  currentDifficulty = difficulty;
  currentQuestionIndex = 0;
  score = 0;

  document.getElementById('footerDev').style.display = 'none';
  document.getElementById('plantCards').style.display = 'none';
  document.getElementById('difficultyOptions').style.display = 'none';
  quizContainer.style.display = 'block';
  showQuestion();
}

// 🔁 Função para embaralhar as alternativas
function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function showQuestion() {
  const q = questions[currentDifficulty][currentQuestionIndex];
  if (!q) {
    showResult();
    return;
  }

  const shuffledOptions = shuffleArray([...q.options]);

  quizContainer.innerHTML = `
    <div class="quiz-card">
      <div class="question">${q.question}</div>
      <div class="options">
        ${shuffledOptions.map(option => `
          <div class="option" onclick="selectAnswer(this, '${option}')">${option}</div>
        `).join('')}
      </div>
    </div>
  `;
}

function selectAnswer(el, selected) {
  const correct = questions[currentDifficulty][currentQuestionIndex].answer;
  const options = document.querySelectorAll('.option');
  options.forEach(opt => {
    opt.onclick = null;
    if (opt.textContent === correct) {
      opt.classList.add('correct');
    } else if (opt.textContent === selected) {
      opt.classList.add('incorrect');
    }
  });

  if (selected === correct) {
    score++;
  }

  setTimeout(() => {
    currentQuestionIndex++;
    showQuestion();
  }, 1000);
}

function showResult() {
  quizContainer.innerHTML = `
    <div class="result">
      Você acertou ${score} de ${questions[currentDifficulty].length} perguntas!
      <br/>
      <img src="https://cdn-icons-png.flaticon.com/512/616/616490.png" alt="Coroa" />
    </div>
  `;
}
