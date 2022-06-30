export const CourseSection = [
    {
        title: 'Courses',
        links: [
            //data table quick sorts and chunk quick create and modals
            { title: 'index', name: 'courses' },
            //detailed filters
            { title: 'filter', name: 'courses-filter' },
            //card liting
            { title: 'litsing', name: 'courses-listing' },
        ],
        groups: [
            {
                title: 'advanced',
                links: [
                    // advanced statistics
                    { title: 'statistics', name: 'courses-statistics' },
                    //smart targeting
                    { title: 'targeting', name: 'courses-targeting' },
                    //create wizard
                    { title: 'wizard', name: 'courses-wizard' },
                    // delete database
                    // { title: 'archive', name: 'users-delete' },
                ]
            },
            {
                title: 'actions',
                links: [
                    //create page
                    { title: 'create', name: 'courses-create' },
                    //show trashed table and activate permanently delete
                     { title: 'trash', name: 'courses-trash' },
                ]
            }
        ]
    }
]