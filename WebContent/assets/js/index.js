const gradationMask = document.getElementById('gradationMask');
const contact = document.getElementById('contact');
const header = document.getElementById('header');

// progress
const progress = document.getElementById('progress');


let promise = new Promise((resolve, reject) => { // #1
    
    setTimeout(() => {

        progress.classList.add('load');
        resolve();
    
    }, 2000);

  })
  
  promise.then((msg) => { // #2
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('loading').classList.add('hideLoading');
      }, 1000)
    })
  }).then((msg) => { // #3
    console.log('#3')
    return msg + 'Jeccy.'
  }).catch(() => { // エラーハンドリング
    console.error('Something wrong!')
  });


window.addEventListener('scroll', () => {

    var maxHeight = Math.max.apply(null, [document.body.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight]);

    var nowHeight = document.documentElement.clientHeight + document.documentElement.scrollTop;
    console.log(document.documentElement.scrollTop);

    if (maxHeight === nowHeight) {

        gradationMask.classList.add('scrollEqualBtm');
        contact.classList.add('hoge');

    } else if (gradationMask.classList.contains('scrollEqualBtm')) {

        gradationMask.classList.remove('scrollEqualBtm');
        contact.classList.remove('hoge');

    }

    // header hide animation
    if (document.documentElement.scrollTop === 0) {

        header.classList.remove('showHeader');
        header.classList.add('hideHeader');
        setTimeout(() => {
            header.classList.remove('hideHeader');
        }, 1000);

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

    if (String(element.id) === 'top' && header.classList.contains('hoge5')) {

        // header.classList.remove('hoge5');
        // header.classList.add('hoge6');
        // setTimeout(() => {
        //     header.classList.remove('hoge6');
        // }, 1000);

    }

    if (String(element.id) === 'about') {
        console.log('ok');

        header.classList.add('showHeader');

    }
    // document.getElementById(element.id).classList.add('nav-active'); 
    newActiveIndex.classList.add("nav-active");

  }

  window.onload = function () {

    var particles = Particles.init({
        selector: '.background',
        sizeVariations: 10,
        color: ['#50FF50', '#C047F3', '#DBEDF3'],
        connectParticles: true
      });

  }