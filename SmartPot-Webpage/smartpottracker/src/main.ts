import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import express from 'express';

createApp(App).use(store).mount('#app')
