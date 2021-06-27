const EA_categories_list = document.querySelectorAll('.EA_categories');
const EA_grade_level_list = document.querySelectorAll('.grade_level_detail');


//__________________________________________________________________
// OPTIONS :
const EA_categories_options = {
    root: null,
    threshold: 0.65,
}

const EA_main_title_option = {
    root: null,
    threshold: 0.75,
}

//__________________________________________________________________
// OBSERVER :
const slide_fade_in_left = new IntersectionObserver(function(entries, slide_fade_in_left) {
    
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log('is intersecting');
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
            slide_fade_in_left.unobserve(entry.target);
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
                'gap_year_details': 'GAP-YEAR',
            }

            setTimeout(function() {
                EA_title_dashline.style.transform = `scaleX(${EA_header_dashline_multiplier})`;
            },0)

            setTimeout(function() {
                const list_of_EA_title_section_background = document.querySelectorAll('.EA_title_section_background');

                list_of_EA_title_section_background.forEach(element => {
                    if (element.id.includes(EA_years[entry.target.id])) {
                        element.style.transform = 'translate(0)';
                    } else {
                        setTimeout(function() {
                            element.style.transform = 'translate(100%)';
                        }, 500)
                    }
                })

                EA_main_heading.style.opacity = 0;
                EA_main_heading.style.transform = `translateY(${EA_main_heading_height}px)`;
            },250)

            setTimeout(function() {
                EA_main_heading.innerHTML = EA_years[entry.target.id];
            },750)

            setTimeout(function() {
                EA_main_heading.style.opacity = 1;
                EA_main_heading.style.transform = `translateY(0px)`;
                
            },1000)

            setTimeout(function() {
                EA_title_dashline.style.transform = `scaleX(1)`;
            },1250)

        }
    })
}, EA_main_title_option)

//__________________________________________________________________
// SETTING A TARGET :

EA_categories_list.forEach(object => {
    slide_fade_in_left.observe(object);
})

EA_grade_level_list.forEach(object => {
    change_EA_main_title.observe(object);
})

//__________________________________________________________________
// BUTTONS :

const view_EA_extra_info = (self, extra_info_id) => {
    const extra_info_section = document.getElementById(extra_info_id);
    const extra_info_EA_category = extra_info_section.parentNode;

    const extra_info_section_height = extra_info_section.getBoundingClientRect().bottom - extra_info_section.getBoundingClientRect().y;

    const EA_category_middle_line = self.parentNode.parentNode.parentNode.parentNode.querySelector('.EA_category_middle_line');

    self.parentNode.parentNode.parentNode.style.transform = 'translateX(-100%)';

    //Scaling the middle line and changing the 
    setTimeout(function() {
        EA_category_middle_line.style.transform = 'scaleY(0)';
    }, 700)

    setTimeout(function() {
        extra_info_EA_category.style.height = `${extra_info_section_height}px`;
        extra_info_section.style.transform = 'translateX(0)';
    }, 1700)

    setTimeout(function() {
        EA_category_middle_line.style.transform = 'scaleY(1)';
    }, 2700)
    

    
}

const close_EA_extra_info = (self) => {
    const EA_categories = self.parentNode.parentNode;
    const EA_category_middle_line = self.parentNode.parentNode.querySelector('.EA_category_middle_line');
    const extra_info_section = self.parentNode;
    const EA_category_items_section = self.parentNode.parentNode.querySelector('.EA_category_items_section');
    
    extra_info_section.style.transform = 'translateX(-100%)';

    setTimeout(function() {
        EA_category_middle_line.style.transform = 'scaleY(0)';
    }, 700)

    setTimeout(function() {
        EA_categories.style.height = 'auto';
        EA_category_items_section.style.transform = 'translateX(0)';
    }, 1700)

    setTimeout(function() {
        EA_category_middle_line.style.transform = 'scaleY(1)';
    }, 2700)
}