
var commonCourseModalButtons = [];
document.querySelectorAll('#common-сourse-modal-signe-button').forEach(function (btn) {
  commonCourseModalButtons.push(btn);
});
initModal({
  modalId: 'courseModalCommon',
  openButtons: commonCourseModalButtons,
  getModalTitle: function (btn, modal) {
    return 'Записаться на курс';
  },
  getModalSubTitle: function (btn, modal) {
    return '';
  }
});



var courseButtons = [];
document.querySelectorAll('.courses__button').forEach(function (btn) {
  if (btn.textContent.trim() === 'Записаться на курс') {
    courseButtons.push(btn);
  }
});
initModal({
  modalId: 'courseModal',
  openButtons: courseButtons,
  getModalTitle: function (btn, modal) {
    return 'Записаться на курс';
  },
  getModalSubTitle: function (btn, modal) {
    var card = btn.closest('.steps-card__content');

    let text = card.querySelector('.steps-card__title').textContent;

    let cource = Array.from(modal.getElementsByClassName('message-form__data-field')).find((element) => element.name === 'cource');
    cource.value = text;    

    return text;

  }
});



var testingButtons = [];
document.querySelectorAll('#testing-signe-button').forEach(function (btn) {
  testingButtons.push(btn);
});
initModal({
  modalId: 'testingModal',
  openButtons: testingButtons,
  getModalTitle: function (btn, modal) {
    return 'Записаться на тестирование';
  },
  getModalSubTitle: function (btn, modal) {
    return '';
  }
});



initMessageForm({
  messageFormId: 'footerMessage',
  title: 'Вопрос',
});