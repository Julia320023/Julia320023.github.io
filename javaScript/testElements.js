const DATA = [
    {//В1: Какого игрового персонажа мы встречаем первым в игре?
        question: 'Какого игрового персонажа мы встречаем первым в игре?',
        answers: [
            {
                id: '1',
                value: 'Двалин',
                correct: false,
            },
            {
                id: '2',
                value: 'Эмбер',
                correct: true,
            },
            {
                id: '3',
                value: 'Джинн',
                correct: false,
            },
            {
                id: '4',
                value: 'Венти',
                correct: false,
            }
        ]
    },
    {//В2: В каком регионе правит анемо архонт?
        question: 'В каком регионе правит анемо архонт?',
        answers: [
            {
                id: '5',
                value: 'Инадзума',
                correct: false,
            },
            {
                id: '6',
                value: 'Мондштадт',
                correct: true,
            },
            {
                id: '7',
                value: 'Сумеру',
                correct: false,
            },
            {
                id: '8',
                value: 'Селестия',
                correct: false,
            }
        ]
    },

    {//В3: Как называются стихии в Genshin Impact?
        question: 'Как называются стихии в Genshin Impact?',
        answers: [
            {
                id: '9',
                value: 'пиро, вода, гео, электричество, природа, ветер, крио',
                correct: false,
            },
            {
                id: '10',
                value: 'анемо, гидро, пиро, крио, электро, гео, дендро',
                correct: true,
            },
            {
                id: '11',
                value: 'электро, гидро, крио, гео, дендро, анемо',
                correct: false,
            },
            {
                id: '12',
                value: 'электро, гидро, геолокация, крио, анеме, пиро, дендрариум',
                correct: false,
            }
        ]
    },
    {//В4: Какой персонаж не из Genshin Impact?
        question: 'Какой персонаж не из геншина Genshin Impact?',
        answers: [
            {
                id: '13',
                value: 'Эола',
                correct: false,
            },
            {
                id: '14',
                value: 'Куки Синобу',
                correct: false,
            },
            {
                id: '15',
                value: 'Элой',
                correct: true,
            },
            {
                id: '16',
                value: 'Мика',
                correct: false,
            }
        ]
    },
    {//В5: До какого максимального уровня можно прокачать персонажа в Genshin Impact?
        question: 'До какого максимального уровня можно прокачать персонажа в Genshin Impact?',
        answers: [
            {
                id: '17',
                value: '90',
                correct: true,
            },
            {
                id: '18',
                value: '99',
                correct: false,
            },
            {
                id: '19',
                value: '100',
                correct: false,
            },
            {
                id: '20',
                value: '60',
                correct: false,
            }
        ]
    },
    {//В6: Где можно найти траву светяшку?
        question: 'Где можно найти траву светяшку?',
        answers: [
            {
                id: '21',
                value: 'Ли Юэ',
                correct: false,
            },
            {
                id: '22',
                value: 'Фонтейн',
                correct: false,
            },
            {
                id: '23',
                value: 'Сумеру',
                correct: false,
            },
            {
                id: '24',
                value: 'Мондштадт',
                correct: true,
            }
        ]
    },
    {//В7: Какую официальную должность имеет Лиза?
        question: 'Какую официальную должность имеет Лиза?',
        answers: [
            {
                id: '25',
                value: 'Хранитель знаний',
                correct: false,
            },
            {
                id: '26',
                value: 'Не имеет официальной должности(никто не знает кто она)',
                correct: false,
            },
            {
                id: '27',
                value: 'Библиотекарь',
                correct: true,
            },
            {
                id: '28',
                value: 'Рыцарь Ордо Фавониус',
                correct: false,
            }
        ]
    },
    {//В8: Кто является архонтом Сумеру в настоящее время?
        question: 'Кто является архонтом Сумеру в настоящее время?',
        answers: [
            {
                id: '29',
                value: 'Великая властительница Руккхадевата',
                correct: false,
            },
            {
                id: '30',
                value: 'Ирминсуль',
                correct: false,
            },
            {
                id: '31',
                value: 'Малая властительница Кусанали',
                correct: true,
            },
            {
                id: '32',
                value: 'Скарамучча(Сказитель)',
                correct: false,
            }
        ]
    },
    {//В9: Какая из перечисленных диковин находится в Ли Юэ?
        question: 'Какая из перечисленных диковин находится в Ли Юэ?',
        answers: [
            {
                id: '33',
                value: 'Сесилия',
                correct: false,
            },
            {
                id: '34',
                value: 'Шелковица',
                correct: true,
            },
            {
                id: '35',
                value: 'Валяшка',
                correct: false,
            },
            {
                id: '36',
                value: 'Цвет Сакуры',
                correct: false,
            }
        ]
    },
    {//В10: Какая из перечисленных диковин находится в Ли Юэ?
        question: 'В каком регионе находится разлом?',
        answers: [
            {
                id: '33',
                value: 'Фонтейн',
                correct: false,
            },
            {
                id: '34',
                value: 'Селестия',
                correct: false,
            },
            {
                id: '35',
                value: 'Инадзума',
                correct: false,
            },
            {
                id: '36',
                value: 'Ли Юэ',
                correct: true,
            }
        ]
    }
]

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) =>{
    renderIndecator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>
        `)
        .join('');
    questions.innerHTML = `
    <div class="quiz-questions-item">
        <div class="quiz-questions-item">
            <div class="quiz-questions-item_question">${DATA[index].question}</div>
            <ul class="quiz-questions-item_answers">
                ${renderAnswers()}
            </ul>
        </div>
    </div>
    `;
};
const renderResults = () =>{
    let content = '';
    let cnt = 0;


    for(let i = 0; i < DATA.length; i++){//подсчет правильных ответов
        for(let u = 0; u < DATA[i].answers.length; u++){
            if (DATA[i].answers[u].correct && DATA[i].answers[u].id == localResults[i]) {
                cnt++;
            }
        }
    }

    if(cnt < 4){
        content += `
            <div class="quiz-results-item">
                <div class="quiz-results-item_question">
                    <h1>${cnt}/${DATA.length}</h1>
                    <img src="../images/персонажи/12ЦиЦи_выпадение.webp" alt="picture">
                </div>
                <p class="quiz-results-item_answers">Ничего страшного, что вы знаете так мало. Ци Ци тоже постоянно все забывает и носит с собой блокнотик чтобы вести записи, хотя иногда она забывает и о блокноте.</p>
            </div>
        `;
    }
    if(cnt >= 4 && cnt <= 6){
        content += `
            <div class="quiz-results-item">
                <div class="quiz-results-item_question"><h1>${cnt}/${DATA.length}</h1><img src="../images/персонажи/1Рейзор_выпадение.webp" alt="picture"></div>
                <p class="quiz-results-item_answers">Вы неплохо справились, возможно вы как и Рейзор плохо умеете читать, поэтому запомнили не все.</p>
            </div>
        `;
    }
    if(cnt > 6){
        content += `
            <div class="quiz-results-item">
            <div class="quiz-results-item_question"><h1>${cnt}/${DATA.length}</h1><img src="../images/персонажи/8Нахида_выпадение.webp" alt="picture"></div>
            <p class="quiz-results-item_answers">У вас великолепная память, по уму вас можно сравнить только с Нихидой - малой властительницей Кусанали, архонтом мудрости.</p>
            </div>
        `;
    }

    results.innerHTML = content;
};

const renderIndecator = (currentStep) =>{
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    // логика ответа

    if(event.target.classList.contains('answer-input')) {
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false; //включает кнопку 'далее'

    }
});

quiz.addEventListener('click', (event) => {
    // далее/начало
    if(event.target.classList.contains('btn-next')){ //логика кнопки 'далее'
        const nextQestionIndex = Number(questions.dataset.currentStep) + 1;

        if(DATA.length === nextQestionIndex){ //переход к результатам
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btnNext.classList.add('btnNext--hidden');
            btnRestart.classList.add('btnRestart--visible');
            renderResults();
        } else{ //переход к следующему вопросу
            renderQuestions(nextQestionIndex);
        }
        btnNext.disabled = true;
    }


    if(event.target.classList.contains('btn-restart')){ //заново
        localResults = {};
        results.innerHTML = '';
        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('results--visible');
        btnNext.classList.remove('btnNext--hidden');
        btnRestart.classList.remove('btnRestart--visible');
        renderQuestions(0);
    }
});


renderQuestions(0);