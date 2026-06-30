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

initMessageForm({
    messageFormId: 'footerMessage',
    title: 'Вопрос',
});