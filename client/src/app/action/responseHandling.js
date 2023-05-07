export const errorHadling = (err) => {
  if (!err.response || !err.response.data)
    return {
      type: 'error',
      title: 'Servidor',
      message: 'ocorreu um erro inesperado',
    }

  return {
    type: 'error',
    title: err.response.data.title,
    message: err.response.data.message,
  }
}

export const successHandling = (title) => {
  return {
    type: 'success',
    title,
    message: 'realizado com sucesso',
  }
}