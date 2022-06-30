export const CreateUserResource = {
    form: {
        modelKey: 'uuid',
        attributes: {
            label: 'Edit User',
            id: 'EditUserForm', //name, id and ref
            autocomplete: "off",
            action: null,
            method: "post",
            enctype: "multipart/form-data",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam maxime form.'
        },
        style: {
            cols: '6',
            rows: null,
            gap: '2',
            my: '4',
            mx: null
        }
        //gap 1,2,4,6
    },
    button: {
        type: 'submit',
        label: 'save',
        icon: 'chevronDown',
        style: {
            theme: 'primary',
            outlined: false,
            reverse: false,
            position: {},
        },
    },
    request: {
        structure: {
            phone: 'string',
            email: 'string'
        },
        axios: 'put',
        endpoint: "users",
        params: '',
    },
    inputs: [
        {
            //if input require data like select box true otherwise set false
            dataRequire: true,
            style: {
                position: {
                    sm: "sm:tw-col-start-1 sm:tw-col-end-13",
                    md: "md:tw-col-start-1 md:tw-col-end-13",
                    lg: "lg:tw-col-start-1 lg:tw-col-end-13",
                    xl: "xl:tw-col-start-1 xl:tw-col-end-13",
                    xxl: "2xl:tw-col-start-1 2xl:tw-col-end-13",
                },
            },
            attributes: {
                component: 'Multiselect',
                prefix: '',
                suffix: '',
                label: 'Select User',
                hint: 'hints',
                isRequired: true,
                isReadOnly: false,
                placeholder: '',
                type: 'select',
                vmodel: "user",
                ref: 'user_id', //for title,name,id and ref
                size: 24,
                maxlength: 24,
                min: 5,
                max: 24,
                pattern: null,
                autocomplete: "off"
            },
            rules: {},
            dependency: {
                //data from this endpoint
                endpoint: 'users',
                // depends on the value of this field
                depends_on: null,
                children: ['student_id'],

                //where belongsTo, whereHas whereHas any
                mode: null,

                //using this relation from the backend
                relation: null,

                //with key
                key: null,

                //value: computed inside the component
            },
            options: [
                { title: 'option 1', value: '1' },
                { title: 'option 2', value: '2' },
                { title: 'option 3', value: '3' },
            ],
            showIf: { key: '', is: true }
        },
        {
            dataRequire: true,
            style: {
                position: {
                    sm: "sm:tw-col-start-1 sm:tw-col-end-13",
                    md: "md:tw-col-start-1 md:tw-col-end-13",
                    lg: "lg:tw-col-start-1 lg:tw-col-end-13",
                    xl: "xl:tw-col-start-1 xl:tw-col-end-13",
                    xxl: "2xl:tw-col-start-1 2xl:tw-col-end-13",
                },
            },
            attributes: {
                component: 'Multiselect',
                prefix: '',
                suffix: '',
                label: 'Select Student Account',
                hint: 'hints',
                isRequired: true,
                isReadOnly: false,
                placeholder: '',
                type: 'select',
                vmodel: "student",
                ref: 'student_id', //for data key must be like database
                size: 24,
                maxlength: 24,
                min: 5,
                max: 24,
                pattern: null,
                autocomplete: "off"
            },
            rules: {},
            dependency: {
                //data from this endpoint
                endpoint: 'students',
                // depends on the value of this field
                depends_on: 'user_id',

                //using this relation from the backend
                relation: 'user',

                //with key
                key: 'uuid',
                children: null

                //value: computed inside the component
            },
            options: null,
            showIf: { key: '', is: true }
        }
    ]
}