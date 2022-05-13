import {defineStore} from 'pinia';


export const useCommonStore = defineStore('common',  {
    state: ()=> ({
        isSample: false,
    })
})