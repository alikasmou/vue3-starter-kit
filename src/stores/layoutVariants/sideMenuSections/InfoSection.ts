export const InfoSection = [
    {
        title: 'Info',
        links: [
            //data table quick sorts and chunk quick create and modals
            { title: 'index', name: 'info' },
            //detailed filters
            { title: 'filter', name: 'info-filter' },
            //card liting
            { title: 'litsing', name: 'info-listing' },
        ],
        groups: [
            {
                title: 'advanced',
                links: [
                    // advanced statistics
                    { title: 'statistics', name: 'info-statistics' },
                    //smart targeting
                    { title: 'targeting', name: 'info-targeting' },
                    //create wizard
                    { title: 'wizard', name: 'info-wizard' },
                    // delete database
                    // { title: 'archive', name: 'users-delete' },
                ]
            },
            {
                title: 'actions',
                links: [
                    //create page
                    { title: 'create', name: 'info-create' },
                    //show trashed table and activate permanently delete
                    { title: 'trash', name: 'info-trash' },
                ]
            }
        ]
    }
]