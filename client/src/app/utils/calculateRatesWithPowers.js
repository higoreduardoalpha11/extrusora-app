export default function calculateRatesWithPowers(data) {
  const result = data.map((item) => ({
    ...item,
    Alimentacao: item.Alimentacao * 2,
    Mistura: item.Mistura * 2,
    Dosagem: item.Dosagem * 2,
  }));

  return result;
}