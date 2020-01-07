const gradationMask = document.getElementById('gradationMask');
const contact = document.getElementById('contact');

window.addEventListener('scroll', () => {

    var maxHeight = Math.max.apply(null, [document.body.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight]);

    var nowHeight = document.documentElement.clientHeight + document.documentElement.scrollTop;

    if (maxHeight === nowHeight) {

        console.log('ok');
        gradationMask.classList.add('scrollEqualBtm');
        contact.classList.add('hoge');

    } else if (gradationMask.classList.contains('scrollEqualBtm')) {

        gradationMask.classList.remove('scrollEqualBtm');
        contact.classList.remove('hoge');

    }

});

// observer

const navChildren = document.querySelectorAll('.nav-children');

// console.log(navList);

const options = {

    root: null,
    rootMargin: '-50% 0px',
    threshold: 0

};

const observer = new IntersectionObserver(doWhenIntersect, options);
navChildren.forEach(child => {
    observer.observe(child);
});

function doWhenIntersect(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            activateIndex(entry.target);
        }
    });
}

function activateIndex(element) {
    console.log(element)
    const currentActiveIndex = document.querySelector("#navLists .nav-active");

    if (currentActiveIndex !== null) {
      currentActiveIndex.classList.remove("nav-active");
    }
    // 引数で渡されたDOMが飛び先のaタグを選択し、activeクラスを付与
    const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
    console.log(String(element.id));
    console.log(newActiveIndex);
    // document.getElementById(element.id).classList.add('nav-active'); 
    newActiveIndex.classList.add("nav-active");

  }