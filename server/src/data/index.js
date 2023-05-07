const mongoose = require('mongoose');

const zonesId = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
const logsId = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
]

const entryZoneTemplate = {
  _id: '',
  zoneType: '',
  temperature: 30,
  pressure: 101.3,
  power: 5,
  createdAt: '2023-05-04T00:00:00.000Z',
  updatedAt: '2023-05-04T00:00:00.000Z',
  __v: 0
};

const generateZones = (zone) => {
  const zones = [];
  const startTime = new Date('2023-05-04T00:00:00.000Z').getTime();

  for (let i = 0; i < 48; i++) {
    const newObj = { ...entryZoneTemplate };
    newObj._id = zonesId[i];
    newObj.zoneType += zone;
    newObj.temperature += Math.floor(Math.random() * 10) - 5;
    newObj.pressure += (Math.random() * 10) - 5;
    newObj.power += Math.floor(Math.random() * 10) - 5;
    newObj.createdAt = new Date(startTime + (i * 30 * 60 * 1000));
    newObj.updatedAt = new Date(startTime + (i * 30 * 60 * 1000));
    zones.push(newObj);
  }

  return zones;
}
const generateLogs = () => {
  return [
    {
      _id: logsId[0],
      type: 'error',
      title: 'Limite de pressão ultrapassado',
      description: 'Limite de pressão de trabalho está superior ao limite máximo de segurança, por favor, desligue o equipamento e analise suas condições de trabalho.',
      visible: false,
    },
    {
      _id: logsId[1],
      type: 'warning',
      title: 'Limite de pressão próximo',
      description: 'Limite de pressão de trabalho está próximo ao limite máximo de segurança, por favor, tome cuidado e analise suas condições de trabalho.',
      visible: false,
    },
    {
      _id: logsId[2],
      type: 'success',
      title: 'Peça acabada',
      description: 'Peça finalizada durante o ciclo de trabalho, por motivos de segurança o equipamento foi desligado.',
      visible: false,
    },
    {
      _id: logsId[3],
      type: 'success',
      title: 'Processo concluído',
      description: 'Processamento finalizado com sucesso, por motivos de segurança o equipamento foi desligado.',
      visible: false,
    },
  ]
}
module.exports = { generateZones, generateLogs };