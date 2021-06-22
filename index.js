



const slide_fade_in_object = document.querySelectorAll('.slide-fade-in');



const appear_options = {
    threshold: 1
};

const AppearOnScroll = new IntersectionObserver(function(entries, AppearOnScroll) {
    
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            AppearOnScroll.unobserve(entry.target);

        } else {
            
            return;
        }
    });

}, appear_options)


slide_fade_in_object.forEach(element => {
    AppearOnScroll.observe(element);
})

