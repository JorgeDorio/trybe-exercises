function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ]
  const weekDaysList = document.querySelector('.week-days')

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index]
    const dayListItem = document.createElement('li')
    dayListItem.innerHTML = days

    weekDaysList.appendChild(dayListItem)
  }
}

createDaysOfTheWeek()

// Escreva seu código abaixo.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
]
const holidays = [24, 25, 31]
ulPage = document.getElementById('days')

const friday = [4, 11, 18, 25]

for (index = 0; index < dezDaysList.length; index++) {
  day = document.createElement('li')
  ulPage.appendChild(day)
  day.innerText = dezDaysList[index]
  day.className = 'day'
  for (key = 0; key < holidays.length; key++) {
    if (dezDaysList[index] == holidays[key]) {
      day.className = day.className + ' holiday'
      console.log(day)
    }
  }
  for (key = 0; key < friday.length; key++) {
    if (dezDaysList[index] == friday[key]) {
      day.className = day.className + ' friday'
    }
  }
}

divPage = document.getElementsByClassName('buttons-container')[0]
buttonPage = document.createElement('button')
buttonPage.id = 'btn-holiday'
buttonPage.innerText = 'Feriados'
divPage.appendChild(buttonPage)

function holidayClick() {}

buttonPage.addEventListenner('click', holidayClick())
