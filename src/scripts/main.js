document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const infoTitle = document.querySelectorAll('[data-info-title]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            const tabTarget = e.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideTab();
            tab.classList.add('content--is-active');
            removeActionButton();
            e.target.classList.add('shows__tabs__button--is-active');
        });
    };

    for (let i = 0; i < infoTitle.length; i++) {
        infoTitle[i].addEventListener('click', toggleInfo);
    }
});

function toggleInfo(e){
    const newClass = 'curiosities__informations__item--is-open';
    const fatherElement = e.target.parentNode;

    fatherElement.classList.toggle(newClass);
};

function removeActionButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
};

function hideTab() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('content--is-active');
    };
};