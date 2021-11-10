<template>
    <div class="buttons">
        <calc-button v-for="button in buttons" 
            :button="button"
            :key="button.value" />
    </div>
</template>

<script>
import { ref } from 'vue'
import CalcButton from './CalcButton.vue'
export default {
    name: 'ButtonsPanel',
    components: { CalcButton },
    setup() {
        const buttons = ref([
            { type: 'number', value: '7' },
            { type: 'number', value: '8' },
            { type: 'number', value: '9' },
            { type: 'action', value: 'DEL', class: 'clear'},
            { type: 'number', value: '4'},
            { type: 'number', value: '5'},
            { type: 'number', value: '6'},
            { type: 'plus', value: '+'},
            { type: 'number', value: '1'},
            { type: 'number', value: '2'},
            { type: 'number', value: '3'},
            { type: 'minus', value: '-'},
            { type: 'number', value: '.'},
            { type: 'number', value: '0'},
            { type: 'divide', value: '/'},
            { type: 'multi', value: 'x'},
            { type: 'action', value: 'RESET', class: 'reset'},
            { type: 'total', value: '=', class: 'total'}
        ])
        return {
            buttons
        }
    }
}
</script>