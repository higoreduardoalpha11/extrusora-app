const existedHandling = () => {
  const error = new Error();
  error.title = 'Servidor';
  error.message = 'ocorreu um erro inesperado';
  error.httpStatusCode = 500;

  return error;
}

const requiredHandling = (err) => {
  const error = new Error();
  const keysErr = Object.keys(err);
  error.message = 'é obrigatório';
  error.httpStatusCode = 400;

  if (keysErr.includes('zoneType') && !err.zoneType) error.title = 'Zona';
  else if (keysErr.includes('temperature') && !err.temperature) error.title = 'Temperatura';
  else if (keysErr.includes('pressure') && !err.pressure) error.title = 'Pressão';
  else if (keysErr.includes('power') && !err.power) error.title = 'Potência';
  else {
    error.title = 'Servidor';
    error.message = 'ocorreu um erro inesperado';
    error.httpStatusCode = 500;
  }

  return error;
}

module.exports = { existedHandling, requiredHandling };