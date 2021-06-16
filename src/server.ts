import app from './app';

const { PORT } = process.env;

app.listen(PORT || 3000, () => {
  console.log(`🚀 Server is runing at port ${PORT} 👽`);
});
