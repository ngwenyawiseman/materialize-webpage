import handlebars from 'vite-plugin-handlebars';
import data from './data.json';
import { defineConfig } from 'vite'

export default {
  plugins: [handlebars({
    context : data   
  })],
};