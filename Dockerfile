# Gunakan Node versi sesuai projectmu
FROM node:22

WORKDIR /app

# Copy file package.json dan lock file dulu (biar cache efisien)
COPY package*.json ./

# Install dependency
RUN npm install

# Copy semua source code
COPY . .

# Expose port untuk dev server (default: 5173 kalau Vite)
EXPOSE 5173

# Jalankan dev server
CMD ["npm", "run", "dev", "--", "--host"]
