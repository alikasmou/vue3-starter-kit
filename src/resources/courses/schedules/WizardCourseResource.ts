export const WizardUserResource = {
    form: {
        steps: 3,
        attributes: {
            label: 'Create Course form',
            id: 'CreateCourseForm', //name, id and ref
            autocomplete: "on",
            action: null,
            method: "post",
            enctype: "multipart/form-data"
        },
        style: ['class1', 'class2', 'class3']
    },
    request: {
        structure: {
            label: '',
            start_date: '',
            finish_date: '',
            teacher_id: 0,
            course_id: 0,
            sections: [],
            lessons: []
        },
        endpoint: "courses/schedule/wizard",
    },
    inputs: [
        {
            style: {
                position: [
                    { screen: "sm", start: "1", end: "12" },
                    { screen: "md", start: "1", end: "12" },
                    { screen: "lg", start: "1", end: "12" },
                    { screen: "xl", start: "1", end: "12" },
                    { screen: "xxl", start: "1", end: "12" },
                ],
            },
            attributes: {
                component: 'TextInput',
                label: 'username',
                help: 'helping text related to the input',
                isRequired: true,
                isReadOnly: false,
                placeholder: 'create unique username',
                type: 'text',
                vmodel: 'username',
                ref: 'username', //for title,name,id and ref
                size: 12,
                maxlength: 12,
                min: null,
                max: null,
                pattern: null,
                autocomplete: "off"
            },
            options: null
        },
        {
            style: {
                position: [
                    { screen: "sm", start: "1", end: "12" },
                    { screen: "md", start: "1", end: "12" },
                    { screen: "lg", start: "1", end: "12" },
                    { screen: "xl", start: "1", end: "12" },
                    { screen: "xxl", start: "1", end: "12" },
                ],
            },
            attributes: {
                component: 'TextInput',
                label: 'father name',
                help: 'helping text related to the input',
                isRequired: true,
                isReadOnly: false,
                placeholder: 'create unique father_name',
                type: 'text',
                vmodel: 'father_name',
                ref: 'father_name', //for title,name,id and ref
                size: 12,
                maxlength: 12,
                min: null,
                max: null,
                pattern: null,
                autocomplete: "off"
            },
            options: null
        },
        {
            style: {
                position: [
                    { screen: "sm", start: "1", end: "12" },
                    { screen: "md", start: "1", end: "12" },
                    { screen: "lg", start: "1", end: "12" },
                    { screen: "xl", start: "1", end: "12" },
                    { screen: "xxl", start: "1", end: "12" },
                ],
            },
            attributes: {
                component: 'TextInput',
                label: 'teacher name',
                help: 'helping text related to the input',
                isRequired: true,
                isReadOnly: false,
                placeholder: 'enter teacher name',
                type: 'text',
                vmodel: 'teacher.name',
                ref: 'teacher.name', //for title,name,id and ref
                size: 12,
                maxlength: 12,
                min: null,
                max: null,
                pattern: null,
                autocomplete: "off"
            },
            options: null
        },
        {
            style: {
                position: [
                    { screen: "sm", start: "1", end: "12" },
                    { screen: "md", start: "1", end: "12" },
                    { screen: "lg", start: "1", end: "12" },
                    { screen: "xl", start: "1", end: "12" },
                    { screen: "xxl", start: "1", end: "12" },
                ],
            },
            attributes: {
                component: 'Repeater',
                label: 'Course Sections',
                help: 'helping text related to the input',
                isRequired: true,
                vmodel: 'sections',
                inputs: [
                    //repeater
                    {
                        style: {},
                        attributes: {
                            component: 'Repeater',
                            label: 'Course Section Lessons',
                            help: 'helping text',
                            isRequired: true,
                            vmodel: 'lessons',
                            inputs: [

                            ]

                        },
                        options: null
                    },
                    {
                        style: {
                            position: [
                                { screen: "sm", start: "1", end: "12" },
                                { screen: "md", start: "1", end: "12" },
                                { screen: "lg", start: "1", end: "12" },
                                { screen: "xl", start: "1", end: "12" },
                                { screen: "xxl", start: "1", end: "12" },
                            ],
                        },
                        attributes: {
                            component: 'TextInput',
                            label: 'teacher name',
                            help: 'helping text related to the input',
                            isRequired: true,
                            isReadOnly: false,
                            placeholder: 'enter teacher name',
                            type: 'text',
                            vmodel: 'teacher.name',
                            ref: 'teacher.name', //for title,name,id and ref
                            size: 12,
                            maxlength: 12,
                            min: null,
                            max: null,
                            pattern: null,
                            autocomplete: "off"
                        },
                        options: null
                    },
                ]
            },
            options: null
        }
    ]
}