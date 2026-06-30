function initModal(config) {
  var modal = document.getElementById(config.modalId);

  var modalForm = modal.getElementsByClassName('modal__form')[0];
  var modalSuccess = modal.getElementsByClassName('modal__success')[0];
  var modalError = modal.getElementsByClassName('modal__error')[0];
  var modalLoader = modal.getElementsByClassName('modal__loader')[0];

  var modalClose = modal.getElementsByClassName('modal__close')[0];

  var modalTitle = modal.getElementsByClassName('modal__title')[0];
  var modalSubTitle = modal.getElementsByClassName('modal__sub-title')[0];


  var modalName = document.getElementById(config.nameId);
  var modalEmail = document.getElementById(config.emailId);
  var modalPhone = document.getElementById(config.phoneId);
  var modalMessage = document.getElementById(config.messageId);
  var modalAgree = document.getElementById(config.agreeId);


  var modalSendButton = modal.getElementsByClassName('modal__send-button')[0];

  let title = '';
  let subTitle = '';


  config.openButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (config.getModalTitle) {
        title = config.getModalTitle(btn);
        modalTitle.textContent = title;
      }
      if (config.getModalSubTitle) {
        subTitle = config.getModalSubTitle(btn);
        modalSubTitle.textContent = subTitle;
      }
      modal.classList.add('active');
    });
  });

  modalClose.addEventListener('click', function () {
    modal.classList.remove('active');
  });


  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  let dataElements = Array.from(modal.getElementsByClassName('modal__form-data'));
  let technicalElements = Array.from(modal.getElementsByClassName('modal__form-technical-data'));

  let allElements = [...dataElements, ...technicalElements];

  var modalEnabled = function () {
    let testForm = allElements.every((element) => {
      if (element.type === 'checkbox') {
        if (element.required && !element.checked) {
          return false;
        }
      }
      else if (element.required && !element.value) {
        return false;
      }

      return true;
    });

    if (testForm) {
      modalSendButton.disabled = false;
    } else {
      modalSendButton.disabled = true;
    }
  };

  var modalTouched = function (element) {
    element.classList.add('touched');
  };




  allElements.forEach((element) => {

    element.addEventListener('input', modalEnabled);
    element.addEventListener('focus', function (e) { modalTouched(e.target); });

  });

  modalSendButton.addEventListener('click', (event) => {

    modalSendButton.style.display = 'none';
    modalLoader.style.display = 'flex';

    fetch('http://127.0.0.1:3002/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        headers: {
          title: title + (subTitle ? `: ${subTitle}` : ''),
        },
        content: {
          ...(() => {

            let data = {};
            dataElements.forEach((element) => {
              data[element.name] = element.value;
            });

            return data;
          })(),

        }
      }),
    })
      .then(() => {
        modalForm.style.display = 'none';
        modalSuccess.style.display = 'block';
      })
      .catch(() => {
        modalForm.style.display = 'none';
        modalError.style.display = 'block';
      });

  });
}

var courseButtons = [];
document.querySelectorAll('.courses__button').forEach(function (btn) {
  if (btn.textContent.trim() === 'Записаться на курс') {
    courseButtons.push(btn);
  }
});

initModal({
  modalId: 'courseModal',
  openButtons: courseButtons,
  getModalTitle: function (btn) {
    var card = btn.closest('.steps-card__content');
    return 'Записаться на курс';
  },
  getModalSubTitle: function (btn) {
    var card = btn.closest('.steps-card__content');
    return card ? card.querySelector('.steps-card__title').textContent : '';
  }
});

var testingButtons = [];
document.querySelectorAll('#testing-signe-button').forEach(function (btn) {
  // if (btn.textContent.trim() === 'Записаться на тестирование') {
  testingButtons.push(btn);
  // }
});

initModal({
  modalId: 'testingModal',
  openButtons: testingButtons,
  getModalTitle: function (btn) {
    var card = btn.closest('.steps-card__content');
    return 'Записаться на тестирование';
  },
  getModalSubTitle: function () {
    return '';
  }
});



var commonCourseModalButtons = [];
document.querySelectorAll('#commonCourseModal-signe-button').forEach(function (btn) {
  // if (btn.textContent.trim() === 'Записаться на тестирование') {
  commonCourseModalButtons.push(btn);
  // }
});

initModal({
  modalId: 'commonCourseModal',
  openButtons: commonCourseModalButtons,
  getModalTitle: function (btn) {
    var card = btn.closest('.steps-card__content');
    return 'Записаться на курс';
  },
  getModalSubTitle: function () {
    return '';
  }
});
