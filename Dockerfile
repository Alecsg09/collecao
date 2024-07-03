# Use uma imagem Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do container
WORKDIR /scripts

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY scripts/package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY scripts .

# Exponha a porta que o servidor usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
