/* This script supports IE9+ */
(function () {
    /* Opening modal window function */
    function openModal() {
        /* Get trigger element */
        const modalTrigger = document.getElementsByClassName('jsModalTrigger');

        /* Set onclick event handler for all trigger elements */
        for (let i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function () {
                const modalWindow = document.getElementById('jsModal');
                const modalTriggerId = this.getAttribute('id');
                const modalWindowData = getModalWindowData(modalTriggerId);
                const modalWindowContainer = getModalWindowContainer(modalWindow);
                const childElementsList = [];
                /* creating list of elements with hobbies data */
                modalWindowData.forEach((modalWindowDataItem, index) => {
                    const element = document.createElement('p');
                    element.innerHTML = index + 1 + '. ' + modalWindowDataItem;
                    childElementsList.push(element);
                });
                /* appending list of elements with hobbies data */
                childElementsList.forEach(element => {
                    modalWindowContainer.appendChild(element);
                });
                modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
            }
        }
    }

    function getModalWindowData(modalWindowId) {
        switch (modalWindowId) {
            case 'book-pop-up-item':
                return ['Старий і море', 'Маленький принц', '1984', 'Тигролови']
            case 'games-pop-up-item':
                return ['GTA', 'NFS', 'SpiderMan', 'CS']
            case 'music-pop-up-item':
                return ['Nirvana', 'AC/DC', 'OE', 'MGMT']
            default :
                return [];
        }
    }

    function getModalWindowContainer(modalWindow) {
        const modalWindowChildNodes = modalWindow.childNodes;
        for (const modalWindowChild of modalWindowChildNodes) {
            if (modalWindowChild.className === 'modalContainer') {
                return modalWindowChild
            }
        }
    }

    function closeModal() {
        /* Get close button */
        const closeButton = document.getElementsByClassName('jsModalClose');
        const closeOverlay = document.getElementsByClassName('jsOverlay');

        /* Set onclick event handler for close buttons */
        for (let i = 0; i < closeButton.length; i++) {
            closeButton[i].onclick = function () {
                let modalWindow = this.parentNode.parentNode;
                const modalWindowContainer = getModalWindowContainer(modalWindow);
                /* removing list of elements with hobbies data */
                modalWindowContainer.innerHTML = '';

                /* appending back close button */
                const closeButtonElement = document.createElement('button');
                closeButtonElement.innerHTML = '&#10005;';
                closeButtonElement.classList.add("modalClose");
                closeButtonElement.classList.add("jsModalClose");

                modalWindowContainer.appendChild(closeButtonElement);

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

        /* Set onclick event handler for modal overlay */
        for (let i = 0; i < closeOverlay.length; i++) {
            closeOverlay[i].onclick = function () {
                const modalWindow = this.parentNode;
                const modalWindowContainer = getModalWindowContainer(modalWindow);
                modalWindowContainer.innerHTML = '';

                const closeButtonElement = document.createElement('button');
                closeButtonElement.innerHTML = '&#10005;';
                closeButtonElement.classList.add("modalClose");
                closeButtonElement.classList.add("jsModalClose");

                modalWindowContainer.appendChild(closeButtonElement);

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

    }

    /* Handling domready event IE9+ */
    function ready(fn) {
        if (document.readyState != 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    /* Triggering modal window function after dom ready */
    ready(openModal);
    ready(closeModal);
}());
