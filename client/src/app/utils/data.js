export const materialsProperties = [
  {
    title: "PET",
    density: 1350,
    transportFactor: 0.6,
    multiplicationFactor: 0.3476,
    specificHeat: 1.55,
    feedingTemperature: 38.00,
    meltingTemperature: 290.00,
    transitionTemperature: 70.00,
    thermalConductivity: 0.29,    
    enthalpyFusion: 140.00,
    relationTransport: [
      {
        rotate: 15,
        massFlow: 5.21,
        power: 768.56,
      },
      {
        rotate: 20,
        massFlow: 6.95,
        power: 1024.75,
      },
      {
        rotate: 25,
        massFlow: 8.69,
        power: 1280.94,
      },
      {
        rotate: 30,
        massFlow: 10.43,
        power: 1537.12,
      },
      {
        rotate: 45,
        massFlow: 15.64,
        power: 2305.69,
      },
    ],
  },
  {
    title: "PP",
    density: 971,
    transportFactor: 0.35,
    multiplicationFactor: 0.1367,
    specificHeat: 2.10,
    feedingTemperature: 38.00,
    meltingTemperature: 270.00,
    transitionTemperature: -10.00,
    thermalConductivity: 0.15,    
    enthalpyFusion: 207.00,
    relationTransport: [
      {
        rotate: 15,
        massFlow: 2.05,
        power: 395.39,
      },
      {
        rotate: 20,
        massFlow: 2.73,
        power: 527.18,
      },
      {
        rotate: 25,
        massFlow: 3.42,
        power: 658.98,
      },
      {
        rotate: 30,
        massFlow: 4.10,
        power: 790.77,
      },
      {
        rotate: 45,
        massFlow: 6.15,
        power: 1186.16,
      },
    ],
  },
  {
    title: "ABS",
    density: 1020,
    transportFactor: 0.25,
    multiplicationFactor: 0.1094,
    specificHeat: 1.40,
    feedingTemperature: 38.00,
    meltingTemperature: 270.00,
    transitionTemperature: 115.00,
    thermalConductivity: 0.23,    
    enthalpyFusion: 0.00,
    relationTransport: [
      {
        rotate: 15,
        massFlow: 1.64,
        power: 148.11,
      },
      {
        rotate: 20,
        massFlow: 2.19,
        power: 197.48,
      },
      {
        rotate: 25,
        massFlow: 2.74,
        power: 246.85,
      },
      {
        rotate: 30,
        massFlow: 3.28,
        power: 296.22,
      },
      {
        rotate: 45,
        massFlow: 4.92,
        power: 444.33,
      },
    ],
  },
];