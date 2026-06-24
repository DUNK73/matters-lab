function initModal(config) {
  var modal = document.getElementById(config.modalId);
  var modalClose = document.getElementById(config.closeId);
  var modalCourse = document.getElementById(config.courseId);
  var modalName = document.getElementById(config.nameId);
  var modalEmail = document.getElementById(config.emailId);
  var modalPhone = document.getElementById(config.phoneId);
  var modalMessage = document.getElementById(config.messageId);
  var modalAgree = document.getElementById(config.agreeId);
  var modalSendButton = document.getElementById(config.sendId);
  var modalSendButtonLater = document.getElementById(config.laterId);

  config.openButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (config.getCourseName) {
        var title = config.getCourseName(btn);
        modalCourse.textContent = title;
      }
      modal.classList.add('active');
    });
  });

  modalClose.addEventListener('click', function () {
    modal.classList.remove('active');
  });

  modalSendButtonLater.addEventListener('click', function () {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  var modalEnabled = function () {
    if (modalPhone.value && modalEmail.value && modalName.value && modalMessage.value && modalAgree.checked) {
      modalSendButton.disabled = false;
    } else {
      modalSendButton.disabled = true;
    }
  };

  var modalTouched = function (element) {
    element.classList.add('touched');
  };

  modalPhone.addEventListener('input', modalEnabled);
  modalEmail.addEventListener('input', modalEnabled);
  modalName.addEventListener('input', modalEnabled);
  modalMessage.addEventListener('input', modalEnabled);
  modalAgree.addEventListener('input', modalEnabled);

  modalPhone.addEventListener('focus', function (e) { modalTouched(e.target); });
  modalEmail.addEventListener('focus', function (e) { modalTouched(e.target); });
  modalName.addEventListener('focus', function (e) { modalTouched(e.target); });
  modalMessage.addEventListener('focus', function (e) { modalTouched(e.target); });

  modalSendButton.addEventListener('click', async function () {
    try {
      await fetch('http://127.0.0.1:3002/signCourses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: modalEmail.value,
          name: modalName.value,
          phone: modalPhone.value,
          theme: config.messageSuffix + ': ' + modalCourse.textContent, 
          message: modalMessage.value,
        }),
      });
      
      modalEmail.value = null;
      modalName.value = null;
      modalPhone.value = null;
      modalMessage.value = null;
      modalAgree.checked = false;
      modalEnabled();
      modal.classList.remove('active');
    } catch (error) {
      console.error('Error sending mail:', error);
      alert('Ошибка при отправке сообщения. Пожалуйста, попробуйте позже.');
    }
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
  closeId: 'modalClose',
  courseId: 'modalCourse',
  nameId: 'modal-name',
  emailId: 'modal-email',
  phoneId: 'modal-phone',
  messageId: 'modal-message',
  agreeId: 'modal-agree',
  sendId: 'modalSendButton',
  laterId: 'modalSendButtonLater',
  openButtons: courseButtons,
  serviceId: 'service_rg5i1no',
  templateId: 'template_yf89nxc',
  messageSuffix: 'Курс',
  getCourseName: function (btn) {
    var card = btn.closest('.steps-card__content');
    return card ? card.querySelector('.steps-card__title').textContent : '';
  }
});

var testingButtons = [];
document.querySelectorAll('.courses__button').forEach(function (btn) {
  if (btn.textContent.trim() === 'Записаться на тестирование') {
    testingButtons.push(btn);
  }
});

initModal({
  modalId: 'testingModal',
  closeId: 'testingClose',
  courseId: 'testingCourse',
  nameId: 'testing-name',
  emailId: 'testing-email',
  phoneId: 'testing-phone',
  messageId: 'testing-message',
  agreeId: 'testing-agree',
  sendId: 'testingSendButton',
  laterId: 'testingSendButtonLater',
  openButtons: testingButtons,
  serviceId: 'service_rg5i1no',
  templateId: 'template_yf89nxc',
  messageSuffix: 'Тестирование',
  getCourseName: function () {
    return 'Запись на тестирование';
  }
});
