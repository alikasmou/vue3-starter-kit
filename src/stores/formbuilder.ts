import { defineStore, acceptHMRUpdate } from 'pinia'
import { Create, Update, GetSelectableData } from "@/use/UseHttpRequest";

export const useFormBuilderStore = defineStore({
    id: 'formBuilderStore',
    state: () => ({
        schema: {},
        //form data
        form: {
            //set inserted data from input with keys
            inputs: {},
        },
        //to store the relation schema between inputs
        dependency: {},
        //to store the input data like select boxes radio buttons...etc
        inputData: {},
        // to store the form status
        status: {
            editing: false,
            processing: false,
            apiStatus: false,
            response: {}
        },
        errors: [{ 'objectKey': 'key', 'hint': 'value' }]
    }),
    getters: {
        getInputData: (state) => (key: string) => {
            return Reflect.get(state.inputData, key)
        },
        getFormInputValues: (state) => state.form.inputs,
        getSchema: (state) => state.schema
    },
    actions: {
        setSchema(schema: object) {
            this.schema = schema
        },
        setInputs(inputs: object) {
            this.form.inputs = inputs
        },
        setDependencies(key: string, data: object) {
            this.dependency[key] = data
        },
        setInputData(ref: string, data: any) {
            this.inputData[ref] = data
        },
        setFormApiStatus(apiStatus: boolean) {
            this.status.apiStatus = apiStatus
        },
        setFormEditingStatus(editingStatus: boolean) {
            this.status.editing = editingStatus
        },
        setFormProcessingStatus(processing: boolean) {
            this.status.processing = processing
        },
        setFormResponse(response: object) {
            this.status.response = response
        },
        setFormErrors(exception: any) {
            this.errors = exception
        },
        setDataForInputs() {
            // get all the keys required data
            let parentInputs: string[] = []
            //check if require data and set dependency object
            this.schema.inputs.map((item: object) => {
                if (item.dataRequire && item.dependency.depends_on === null) {
                    parentInputs.push(item.attributes.ref)
                }
                this.setDependencies(item.attributes.ref, item.dependency)
            })
            if (parentInputs.length > 0) {
                parentInputs.map((key: string) => {
                    this.getInputDataFromApiParent(key)
                })
            }
        },
        syncChildrenInputs(updatedParent: string, children: string[], newParentValue: any) {
            children.map((childRefKey) => {
                this.getInputDataFromApiChild(newParentValue, childRefKey)
            })
        },
        validator() {
            return true
        },
        async getInputDataFromApiParent(parentKey: string) {
            let obj = Reflect.get(this.dependency, parentKey)
            await GetSelectableData({
                endpoint: obj.endpoint,
                params: {},
            }).then((res) => {
                this.setInputData(parentKey, res.data.data)
            }).catch((e) => {
                this.setInputData(parentKey, [])
            })
        },
        async getInputDataFromApiChild(parentValue: any, refKey: string) {
            let obj = Reflect.get(this.dependency, refKey)
            await GetSelectableData({
                endpoint: obj.endpoint,
                params: { relation: obj.relation, key: obj.key, value: parentValue },
            }).then((res) => {
                this.setInputData(refKey, res.data.data)
            }).catch((e) => {
                this.setInputData(refKey, [])
            })
        },
        async updateRequest(value: object) {
            if (!this.validator()) { return }
            let modelKey = this.schema.form.modelKey
            let http = this.schema.request.endpoint
            let checkModelKey = Reflect.get(value, modelKey)
            if (checkModelKey) {
                let obj = { ...this.getFormInputValues };
                obj[modelKey] = checkModelKey;
                await Update(
                    { ...obj, id: value.id },
                    { ...http, modelKey: value[modelKey] }
                ).then((res) => {
                    this.setFormApiStatus(true)
                    this.setFormResponse(res);
                }).catch((e) => {
                    this.setFormApiStatus(false)
                    this.setFormErrors(e);
                });
            }
        },
        async createRequest() {
            if (!this.validator()) { return }
            await Create(
                this.getFormInputValues,
                this.schema.request.endpoint
            ).then((res) => {
                this.setFormApiStatus(true)
                this.setFormResponse(res);
            }).catch((e) => {
                this.setFormApiStatus(false)
                this.setFormErrors(e);
            });
        }
    }
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useFormBuilderStore, import.meta.hot))
}