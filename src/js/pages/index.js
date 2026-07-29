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


let videoIndex = 0;
let currentClickVideo = null;
let setupVideoWrapperList = (videoWrapperList, slider) => {

    let isDocumentInteract = false;

    document.addEventListener('click', () => {
        isDocumentInteract = true;

        Array.from(videoWrapperList).forEach((element) => {
            element.classList.remove('muted');
        });
    });

    slider.events.on('indexChanged', (event) => {
        console.log(event);
 
        Array.from(videoWrapperList).forEach((element) => {
            const video = element.querySelector('.video');
            video.muted = true;
        });
    });

    let setupVideoWrapper = (videoWrapper) => {


        const video = videoWrapper.querySelector('.video');
        const circle = videoWrapper.querySelector('.progress-ring__circle');

        video.videoIndex = videoIndex;
        videoIndex = videoIndex + 1;

        // 1. Настройки окружности
        const radius = circle.r.baseVal.value; // Берем радиус из HTML (94)
        const circumference = radius * 2 * Math.PI; // Вычисляем длину окружности (C = 2πR)

        // Инициализируем круг: задаем длину штриха и полностью его скрываем
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference; // Сдвиг равен длине, поэтому круг не виден (0%)

        // Функция установки прогресса (от 0 до 100)
        function setProgress(percent) {
            const offset = circumference - (percent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }

        // 2. Отслеживание прогресса видео
        video.addEventListener('timeupdate', () => {
            if (video.duration > 0) {
                const percent = (video.currentTime / video.duration) * 100;
                setProgress(percent);
            }
        });

        // Сброс прогресса в начало при зацикливании (опционально, чтобы не было рывка)
        video.addEventListener('ended', () => {
            setProgress(0);
            // slider.play();
        });

        // 3. Логика ховера (запуск при наведении, из прошлых ответов)
        video.addEventListener('pointerenter', (event) => {
            if (event.pointerType === 'mouse') {
                setProgress(0)
                video.currentTime = 0;
                video.play().catch(e => console.log("Play prevented:", e));
                if (isDocumentInteract) {
                    video.muted = false;
                }

                slider.pause();
            }
        });

        video.addEventListener('pointerleave', (event) => {

            if (event.pointerType === 'mouse') {
                // video.pause();
                video.muted = true;
                video.currentTime = 0;
                setProgress(0); // Сбрасываем визуальный прогресс-бар
                video.play();

                slider.play();
            }
        });


        // Работает и на ПК (мышь), и на смартфоне (палец), и на планшете (стилус)
        video.addEventListener('pointerdown', (e) => {

            // Сохраняем ID указателя, чтобы потом его освободить
            video.currentPointerId = e.pointerId;
            console.log('pointerdown');

            // 1. БЛОКИРУЕМ стандартное поведение мобильного браузера 
            // (предотвращает случайный запуск полноэкранного нативного плеера и "залипание" кликов)
            e.preventDefault();

            // 2. ОСТАНАВЛИВАЕМ всплытие, чтобы клик не ушел в slider или document
            e.stopPropagation();

            // console.log('Нажатие!', e.pointerType); // 'mouse', 'touch' или 'pen'
            // console.log('--- POINTERDOWN FIRED ---');
            // console.log('Target (на что тапнули):', e.target);
            // console.log('CurrentTarget (где висит слушатель):', e.currentTarget);
            // console.log('Pointer Type:', e.pointerType); // 'touch', 'mouse', 'pen'

            if (currentClickVideo && currentClickVideo.currentSrc !== video.currentSrc) {
                currentClickVideo.muted = true;
            }

            currentClickVideo = video;

            if (e.pointerType === 'touch') {
                if (isDocumentInteract) {
                    setProgress(0)
                    video.currentTime = 0;
                    video.play().catch(e => console.log("Play prevented:", e));
                    // video.muted = false;

                    video.muted = !video.muted;

                    if (video.muted) {
                        // slider.play();
                        console.log('slider.play();');
                        setTimeout(() => {
                            document.getElementById('play').click();
                            // document.getElementById('pause').click();
                        })
                    }

                    if (!video.muted) {
                        // slider.pause();
                        console.log('slider.pause();');
                        setTimeout(() => {
                            document.getElementById('pause').click();
                        })

                    }
                }
            } else {
                setProgress(0)
                video.currentTime = 0;
                video.play().catch(e => console.log("Play prevented:", e));
                video.muted = false;

                // if (!video.muted) {
                //     video.play().catch(e => console.log("Play prevented:", e));
                //     slider.pause();
                // } else {
                //     video.pause();
                //     slider.play();
                // }

            }
        });

        // ДОБАВЬТЕ ЭТО: Гарантированное освобождение при отпускании пальца/мыши
        video.addEventListener('pointerup', (e) => {
            console.log('pointerup');
            if (video.hasPointerCapture(e.pointerId)) {
                video.releasePointerCapture(e.pointerId);
            }
        });
    }

    Array.from(videoWrapperList).forEach((element) => {

        setupVideoWrapper(element);

        element.classList.add('muted');

    });

}




