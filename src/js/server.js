const express = require('express');
const app = express();
const port = 3000;

// Используем __dirname для определения пути к корню проекта
const rootDir = __dirname.replace(/src\\js/, "");
console.log('rootDir: ' + rootDir);

app.use(express.static(rootDir + '/public'));
app.use('/js', express.static(rootDir + 'src/js'));
app.use('/css', express.static(rootDir + 'src/css'));
app.use('/img', express.static(rootDir + 'src/assets/images'));
app.use('/fonts', express.static(rootDir + 'src/assets/fonts'));

app.get('/', (req, res) => {
  res.sendFile(rootDir + 'src/html/index.html');
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));