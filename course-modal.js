function initModal(config) {
  var modal = document.getElementById(config.modalId);

  var modalForm = modal.getElementsByClassName('message-form__form')[0];
  var modalSuccess = modal.getElementsByClassName('message-form__success')[0];
  var modalError = modal.getElementsByClassName('message-form__error')[0];
  var modalLoader = modal.getElementsByClassName('message-form__loader')[0];

  var modalClose = modal.getElementsByClassName('message-form__close')[0];

  var modalTitle = modal.getElementsByClassName('message-form__title')[0];
  var modalSubTitle = modal.getElementsByClassName('message-form__sub-title')[0];


  var modalName = document.getElementById(config.nameId);
  var modalEmail = document.getElementById(config.emailId);
  var modalPhone = document.getElementById(config.phoneId);
  var modalMessage = document.getElementById(config.messageId);
  var modalAgree = document.getElementById(config.agreeId);


  var modalSendButton = modal.getElementsByClassName('message-form__send-button')[0];

  let title = '';
  let subTitle = '';


  config.openButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (config.getModalTitle) {
        title = config.getModalTitle(btn, modal);
        modalTitle.textContent = title;
      }
      if (config.getModalSubTitle) {
        subTitle = config.getModalSubTitle(btn , modal);
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

  let dataElements = Array.from(modal.getElementsByClassName('message-form__data-field'));
  let technicalElements = Array.from(modal.getElementsByClassName('message-form__tech-field'));

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

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        headers: {
          title: title           ,
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




