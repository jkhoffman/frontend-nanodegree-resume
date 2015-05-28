/*
 * Bio
 */

var bio = {
    name: 'Jeffery Hoffman',
    role: 'Senior Technology Executive',
    contacts: {
        mobile: '(704) 323-8219',
        email: 'jkhoffman@gmail.com',
        github: 'jkhoffman',
        twitter: '@jkhoffman',
        location: 'Charlotte, NC'
    },
    welcomeMessage: 'Hey! My name is Jeffery, but my friends call me Jeff. I appreciate you taking the time to ' +
        'look at my resume.',
    skills: [
        'HTML',
        'CSS',
        'JavaScript'
    ],
    bioPic: 'images/jeffery-hoffman.jpg',
    display: function() {
        var header = $('#header');
        header.prepend(HTMLheaderRole.replace('%data%', bio.role));
        header.prepend(HTMLheaderName.replace('%data%', bio.name));
        header.append(HTMLbioPic.replace('%data%', bio.biopic));
        header.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
        bio.appendContacts('#topContacts');
        if (bio.skills.length > 0) {
            header.append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                $('#skills').append(HTMLskills.replace('%data%', skill));
            });
        } // if
        bio.appendContacts('#footerContacts');
    },
    appendContacts: function(container_id) {
        var container = $(container_id);
        container.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
        container.append(HTMLemail.replace('%data%', bio.contacts.email));
        container.append(HTMLgithub.replace('%data%', bio.contacts.github));
        container.append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
        container.append(HTMLlocation.replace('%data%', bio.contacts.location));
    }
};

// add bio to DOM
bio.display();



/*
 * Education
 */

var education = {
    schools: [
        {
            name: 'School of Communication Arts',
            location: 'Raleigh, NC, USA',
            degree: 'Certification',
            majors: ['Computer Animation I', 'Computer Animation II'],
            dates: '1996',
            url: 'http://www.living-arts-college.edu/'

        }
    ],
    onlineCourses: [
        {
            title: 'Front-End Developer Nanodegree',
            school: 'Udacity',
            dates: '2015',
            url: 'http://udacity.com'
        }
    ],
    display: function() {
        var formattedNameDegree;
        var lastEntry;
        education.schools.forEach(function(school) {
            // add a new .education-entry
            $('#education').append(HTMLschoolStart);
            lastEntry = $('.education-entry:last');

            // add the school name/degree on one line
            formattedNameDegree = HTMLschoolName.replace('%data%', school.name) +
                HTMLschoolDegree.replace('%data%', school.degree);
            lastEntry.append(formattedNameDegree);

            // add the dates, location, and majors
            lastEntry.append(HTMLschoolDates.replace('%data%', school.dates));
            lastEntry.append(HTMLschoolLocation.replace('%data%', school.location));
            school.majors.forEach(function(major) {
                lastEntry.append(HTMLschoolMajor.replace('%data%', major));
            }); // school.majors.forEach
        }); // education.schools.forEach

        $('#education').append(HTMLonlineClasses);

        var formattedTitleSchool;
        education.onlineCourses.forEach(function(course) {
            // add a new .education-entry
            $('#education').append(HTMLschoolStart);
            lastEntry = $('.education-entry:last');

            // add the course title and school on one line
            formattedTitleSchool = HTMLonlineTitle.replace('%data%', course.title) +
                HTMLonlineSchool.replace('%data%', course.school);
            lastEntry.append(formattedTitleSchool);

            // add the dates and url
            lastEntry.append(HTMLonlineDates.replace('%data%', course.dates));
            lastEntry.append(HTMLonlineURL.replace('%data%', course.url));
        }); // education.onlineCourses.forEach
    }
};

// add education to DOM
education.display();



/*
 * Work
 */

var work = {
    jobs: [
        {
            employer: 'Paragon Principles, Inc.',
            title: 'Software Engineer',
            location: 'Austin, TX',
            dates: '2010-2012',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vulputate est ' +
                'lacinia. Sed vel purus ac sem euismod dictum. Vivamus convallis nec odio quis commodo. Maecenas ' +
                'pharetra ex nec porta lobortis. Vestibulum vestibulum tristique nisl, ac dapibus dui pellentesque ' +
                'condimentum. Mauris feugiat est velit, vel lobortis nibh mattis nec. Ut nulla ligula, lacinia ' +
                'vulputate varius at, posuere ut lacus. Maecenas dapibus, turpis maximus finibus consequat, metus ' +
                'lacus finibus ante, non feugiat sapien risus et sapien. Maecenas at luctus sapien. Nam in rhoncus ' +
                'nisl. Donec posuere accumsan nulla eget ornare. Phasellus vitae rutrum nisl. Ut ac condimentum ' +
                'ligula. Nunc interdum sed neque consectetur placerat. Nam semper dui nulla, quis scelerisque est ' +
                'vehicula vitae.'
        },
        {
            employer: 'Nuance Labs, Inc.',
            title: 'Chief Technology Officer',
            location: 'Charlotte, NC',
            dates: '2009-2010',
            description: 'Curabitur nec magna ac velit ornare efficitur. Ut ipsum nunc, viverra eu tincidunt at, ' +
                'luctus vitae leo. Sed a laoreet ante. Vivamus id tincidunt mauris. Donec rutrum eros eu tristique ' +
                'faucibus. Fusce eu nunc eu erat eleifend consectetur vulputate in tortor. Sed scelerisque, sapien a ' +
                'porta fringilla, dui justo condimentum massa, eget semper urna nisl eu felis. Integer a sodales ' +
                'quam. Nulla facilisi. Etiam posuere vitae felis eget vehicula. Morbi ac congue lacus, id accumsan ante.'
        },
        {
            employer: 'Planned Giving Design Center, LLC',
            title: 'Chief Technology Officer',
            location: 'Matthews, NC',
            dates: '2000-2008',
            description: 'Nulla nisl mauris, sagittis non tellus a, ornare tempor magna. Fusce viverra est ac ' +
                'ligula ultricies, vel pretium arcu pellentesque. Fusce eleifend aliquam nisl vel interdum. Quisque ' +
                'gravida neque at lorem consequat tincidunt. Morbi eu leo tellus. In dignissim metus venenatis ante ' +
                'accumsan, ut ultricies ex pretium. Vivamus cursus ligula nec velit iaculis bibendum.'
        },
        {
            employer: 'Going Virtual, LLC',
            title: 'Software Engineer',
            location: 'Matthews, NC',
            dates: '1998-2000',
            description: 'Sed vitae velit quis felis cursus pulvinar. Morbi tempus felis non lectus rutrum ornare. ' +
                'Praesent nec ipsum elit. Maecenas eget massa non leo semper gravida vitae tempus dui. Nulla nec ' +
                'sodales ex, ac posuere nisi. Integer faucibus nec eros et consectetur. Phasellus ac libero placerat, ' +
                'vehicula nisl vel, laoreet nisi. Aliquam tempor porttitor enim, tristique dignissim risus aliquet ' +
                'vitae. Phasellus imperdiet eu tortor vel dictum. Integer aliquam, urna id ultrices pulvinar, massa ' +
                'tortor consectetur ligula, vitae eleifend mi tellus sit amet leo. Pellentesque elit tortor, mattis ' +
                'eu tristique non, consectetur quis leo. In hac habitasse platea dictumst. Curabitur dignissim erat ' +
                'finibus velit convallis ultrices.'
        },
        {
            employer: 'PhilanthroTec, Inc.',
            title: 'Software Engineer',
            location: 'Matthews, NC',
            dates: '1994-1998',
            description: 'Aenean erat massa, euismod volutpat blandit vel, vestibulum quis nisl. Nulla dictum odio ' +
                'eu ex finibus laoreet. Sed facilisis justo rhoncus nulla suscipit rhoncus. Suspendisse potenti. ' +
                'Vivamus sed suscipit lectus. Suspendisse ac imperdiet mauris. Proin libero quam, accumsan nec libero ' +
                'hendrerit, sollicitudin tristique libero. Etiam ac justo nibh. Fusce lacinia turpis eget magna ' +
                'ultrices finibus. Duis posuere lorem nec justo pulvinar posuere. Nam consectetur nunc vel cursus ' +
                'hendrerit. Nam elementum metus non purus tincidunt, sed congue est tristique.'
        },
        {
            employer: 'Creative Cybernetics, Inc.',
            title: 'System Administrator',
            location: 'Charlotte, NC',
            dates: '1993-1994',
            description: 'Donec nec tellus et nisl tristique rutrum a a erat. Cras feugiat ante et posuere pretium. ' +
                'Morbi imperdiet cursus nibh, id luctus nibh pellentesque non. Aenean ipsum metus, facilisis sed quam ' +
                'eget, gravida posuere massa. Sed luctus viverra vehicula. Integer vel arcu quis enim tristique ' +
                'consequat id tincidunt orci. Sed dignissim lorem ut mi hendrerit, sed tincidunt lacus finibus. ' +
                'Mauris sodales hendrerit commodo. Praesent ultrices nibh orci, vitae porttitor eros sodales sed. ' +
                'Vivamus a enim et nulla sagittis tempor in et nisi.'
        }
    ],
    display: function() {
        var formattedEmployerTitle;
        var lastEntry;
        work.jobs.forEach(function(job) {
            // add a new .work-entry
            $('#workExperience').append(HTMLworkStart);
            lastEntry = $('.work-entry:last');

            // add the employer and job title on one line
            formattedEmployerTitle = HTMLworkEmployer.replace('%data%', job.employer) +
                HTMLworkTitle.replace('%data%', job.title);
            lastEntry.append(formattedEmployerTitle);

            // add the dates, location, and job description
            lastEntry.append(HTMLworkDates.replace('%data%', job.dates));
            lastEntry.append(HTMLworkLocation.replace('%data%', job.location));
            lastEntry.append(HTMLworkDescription.replace('%data%', job.description));
        }); // work.jobs.forEach
    }
};

// add work to DOM
work.display();



/*
 * Projects
 */

var projects = {
    projects: [
        {
            title: 'Project 1',
            dates: '2015',
            description: 'Pellentesque interdum augue ac pulvinar sagittis. Sed lacinia dolor urna. Phasellus ut ' +
                'mollis ipsum. Sed venenatis sed nulla nec elementum. Maecenas ac magna eget augue ultrices ' +
                'sollicitudin. In hac habitasse platea dictumst. Proin molestie orci vitae bibendum dictum. Cras ' +
                'vestibulum felis vitae dolor condimentum, non lacinia dolor ultrices. Fusce non nibh iaculis, ' +
                'accumsan nisi quis, molestie ante.',
            images: [
                'http://placehold.it/300x200',
                'http://placehold.it/300x200'
            ]
        }
    ],
    display: function() {
        var lastEntry;
        projects.projects.forEach(function(project) {
            // add a new .project-entry
            $('#projects').append(HTMLprojectStart);
            lastEntry = $('.project-entry:last');

            // add the title, dates, and description
            lastEntry.append(HTMLprojectTitle.replace('%data%', project.title));
            lastEntry.append(HTMLprojectDates.replace('%data%', project.dates));
            lastEntry.append(HTMLprojectDescription.replace('%data%', project.description));

            // if there are project images, add them
            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    lastEntry.append(HTMLprojectImage.replace('%data%', image));
                });
            } // if
        }); // projects.projects.forEach
    }
};

// add projects to DOM
projects.display();



/*
 * Google Maps
 */

$('#mapDiv').append(googleMap);