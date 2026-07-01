function initMessageForm(config) {
  var messageForm = document.getElementById(config.messageFormId);

  var messageFormForm = messageForm.getElementsByClassName('message-form__form')[0];
  var messageFormSuccess = messageForm.getElementsByClassName('message-form__success')[0];
  var messageFormError = messageForm.getElementsByClassName('message-form__error')[0];
  var messageFormLoader = messageForm.getElementsByClassName('message-form__loader')[0];


  var messageFormSendButton = messageForm.getElementsByClassName('message-form__send-button')[0];


  let dataElements = Array.from(messageForm.getElementsByClassName('message-form__data-field'));
  let technicalElements = Array.from(messageForm.getElementsByClassName('message-form__tech-field'));

  var messageFormResetButtonList = messageForm.getElementsByClassName('message-form__reset-button');


  let allElements = [
    ...dataElements,
    ...technicalElements
  ];


  Array.from(messageFormResetButtonList).forEach((element) => {
    element.addEventListener('click', () => {

      messageFormForm.style.display = 'flex';

      messageFormSuccess.style.display = 'none';
      messageFormError.style.display = 'none';

      messageFormSendButton.style.display = 'block';
      messageFormSendButton.disabled = true;

      messageFormLoader.style.display = 'none';

      allElements.forEach((element) => {
        if (element.type === 'checkbox') {
          element.checked = false;
        }
        else {
          element.value = '';
        }

        element.classList.remove('touched');
      })

    });
  })



  var messageFormEnabled = function () {
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
      messageFormSendButton.disabled = false;
    } else {
      messageFormSendButton.disabled = true;
    }
  };

  var messageFormTouched = function (element) {
    element.classList.add('touched');
  };

  allElements.forEach((element) => {

    element.addEventListener('input', messageFormEnabled);
    element.addEventListener('focus', function (e) { messageFormTouched(e.target); });

  });

  messageFormSendButton.addEventListener('click', (event) => {

    messageFormSendButton.style.display = 'none';
    messageFormLoader.style.display = 'flex';

    fetch(`${url}/sendMail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        headers: {
          title: config.title,
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
        messageFormForm.style.display = 'none';
        messageFormSuccess.style.display = 'block';
      })
      .catch(() => {
        messageFormForm.style.display = 'none';
        messageFormError.style.display = 'block';
      });

  });
}




