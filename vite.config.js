import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import axios from 'axios';
import fs from 'fs';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  async configureServer(server) {
    const { data } = await axios.get('https://backend-task-5c19vhidx-theja12345678s-projects.vercel.app');
    const dataPath = path.resolve(__dirname, 'public', 'data.json');
    fs.writeFileSync(dataPath, JSON.stringify(data));
  }
})
