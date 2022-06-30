export const IndexUserResource = {
    modelKey: 'uuid',
    endpoint: "users",
    filter: {
        endpoint: '',
        view: '',
    },
    params: {
        select: ["uuid", "avatar", "email", "username", "gender", "phone", "created_at", "deleted_at"],
    },
    mapper: [
        //sum(cols) = 10
        {
            key: [
                { key: "uuid", component: "Ref", label: "Uuid" },
                { key: "avatar", component: "Image", label: "Avatar" },
                { key: "email", component: "String", label: "Email" },
                { key: "username", component: "String", label: "Username" },
                { key: "gender", component: "String", label: "Gender" },
            ],
            component: "UserGroup",
            label: "User Information",
            col: '4'
        },
        { key: "phone", component: "String", label: "Phone No.", col: '2' },
        { key: "created_at", component: "String", label: "Created at", col: '3' },
        { key: "deleted_at", component: "IsDeleted", label: "Status", col: '2' },
    ],
}