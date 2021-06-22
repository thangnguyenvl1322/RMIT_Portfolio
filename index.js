const EA_categories = document.querySelectorAll('.EA_categories');
const EA_grade_level = document.querySelectorAll('.grade_level_detail');


//__________________________________________________________________
// OPTIONS:
const EA_categories_options = {
    root: null,
    threshold: 0.65,
}

const EA_main_title_option = {
    root: null,
    threshold: 0.75,
}

//__________________________________________________________________
// OBSERVER:
const showing_EA_categories = new IntersectionObserver(function(entries, showing_EA_categories) {
    
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            console.log('not intersecting');
            return;
        } else {
            console.log('is intersecting');
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
            showing_EA_categories.unobserve(entry.target);
        }
    })
}, EA_categories_options)



const change_EA_main_title = new IntersectionObserver(function(entries, change_EA_main_title) {

    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            console.log('EA not intersecting');
            return;
        } else {
            const EA_main_heading = document.querySelector('#EA_title_container h2');const EA_title_dashline = document.querySelector('#EA_title_dashline');

            const Current_dashline_length = EA_title_dashline.getBoundingClientRect().right - EA_title_dashline.getBoundingClientRect().x;

            const EA_main_heading_height = EA_main_heading.getBoundingClientRect().bottom - EA_main_heading.getBoundingClientRect().y;

            const Current_header_length = EA_main_heading.getBoundingClientRect().right - EA_main_heading.getBoundingClientRect().x;

            const EA_header_dashline_multiplier = Current_header_length/Current_dashline_length;

            
            const EA_years = {
                'grade_9_details': 'FRESHMEN',
                'grade_10_details': 'SOPHOMORE',
                'grade_11_details': 'JUNIOR',
                'grade_12_details': 'SENIOR',
                'gap_year_details': 'GAP YEAR',
            }


            // Scaling the EA Dashline:
            EA_title_dashline.style.transform = `scaleX(${EA_header_dashline_multiplier})`;

            //Translating the h2 downward:
            EA_main_heading.style.transform = `translateY(${EA_main_heading_height}px)`;

            EA_main_heading.innerHTML = EA_years[entry.target.id];

        }
    })
}, EA_main_title_option)

//__________________________________________________________________
// SETTING A TARGET

EA_categories.forEach(object => {
    showing_EA_categories.observe(object);
})

// EA_grade_level.forEach(object => {
//     change_EA_main_title.observe(object);
// })

