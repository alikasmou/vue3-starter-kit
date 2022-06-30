export const EditUserResource = {
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
            cols: '1',
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
            style: {
                position: {
                    sm: { start: "1", end: "2" },
                    md: { start: "1", end: "2" },
                    lg: { start: "1", end: "2" },
                    xl: { start: "1", end: "2" },
                    xxl: { start: "1", end: "2" }
                },
            },
            attributes: {
                component: 'Phone',
                prefix: '',
                suffix: '',
                label: 'Label here',
                hint: 'hints',
                isRequired: true,
                isReadOnly: false,
                placeholder: '',
                type: 'text',
                vmodel: "phone",
                ref: 'phone', //for title,name,id and ref
                size: 24,
                maxlength: 24,
                min: 5,
                max: 24,
                pattern: null,
                autocomplete: "off"
            },
            rules: {},
            options: [
                { title: 'option 1', value: '1' },
                { title: 'option 2', value: '2' },
                { title: 'option 3', value: '3' },
            ],
            showIf: { key: '', is: true }
        },
        {
            style: {
                position: {
                    sm: { start: "1", end: "2" },
                    md: { start: "1", end: "2" },
                    lg: { start: "1", end: "2" },
                    xl: { start: "1", end: "2" },
                    xxl: { start: "1", end: "2" }
                },
            },
            attributes: {
                component: 'Email',
                label: 'Email Address',
                hint: 'Enter your active email to recieve the pin code to verify your email account',
                isRequired: true,
                isReadOnly: false,
                placeholder: 'e.g. example@domain.com',
                type: 'email',
                vmodel: 'email',
                ref: 'email', //for title,name,id and ref
                size: 24,
                maxlength: 24,
                min: 5,
                max: 24,
                pattern: null,
                autocomplete: "off"
            },
            rules: {
                required: (value) => !!value || "Required.",
                counter: (value) => value.length <= 20 || "Max 20 characters",
                email: (value) => {
                    const pattern =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || "Invalid e-mail.";
                },
            },
            options: [],
            showIf: { key: '', is: true }
        },
        {
            style: {
                position: {
                    sm: { start: "1", end: "2" },
                    md: { start: "1", end: "2" },
                    lg: { start: "1", end: "2" },
                    xl: { start: "1", end: "2" },
                    xxl: { start: "1", end: "2" }
                },
            },
            attributes: {
                component: 'Email',
                label: 'Phone No.',
                hint: 'Enter your active phone number to recieve the pin code to verify your phone number',
                isRequired: true,
                isReadOnly: false,
                placeholder: '',
                type: 'tel',
                vmodel: 'email',
                ref: 'phone', //for title,name,id and ref
                size: 15,
                maxlength: 15,
                min: 5,
                max: 15,
                pattern: null,
                autocomplete: "off"
            },
            rules: {
                required: (value) => !!value || "Required.",
                counter: (value) => value.length <= 20 || "Max 20 characters",
                email: (value) => {
                    const pattern =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || "Invalid e-mail.";
                },
            },
            options: [],
            showIf: { key: '', is: true }
        }
    ]
}