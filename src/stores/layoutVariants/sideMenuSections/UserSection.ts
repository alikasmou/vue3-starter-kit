export const UserSection = [
    {
        title: 'Users',
        links: [
            //data table quick sorts and chunk quick create and modals
            { title: 'index', name: 'users' },
            //detailed filters
            { title: 'filter', name: 'users-filter' },
            //card liting
            { title: 'litsing', name: 'users-listing' },
        ],
        groups: [
            {
                title: 'advanced',
                links: [
                    // advanced statistics
                    { title: 'statistics', name: 'users-statistics' },
                    //smart targeting
                    { title: 'targeting', name: 'users-targeting' },
                    //create wizard
                    { title: 'wizard', name: 'users-wizard' },
                    // delete database
                    // { title: 'archive', name: 'users-delete' },
                ]
            },
            {
                title: 'actions',
                links: [
                    //create page
                    { title: 'create', name: 'users-create' },
                    //show trashed table and activate permanently delete
                    { title: 'trash', name: 'users-trash' },
                ]
            }
        ]
    }
]