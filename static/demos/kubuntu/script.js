const aboutElement = document.querySelector("#about div");
// console.log(aboutElement);
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
            else {
                entry.target.classList.remove('show')
            }
        
    })
}, {threshold: 0.6});

observer.observe(aboutElement);

