function calcularIMC(height, weight) {
    const heightMeters = height / 100; // Convertendo para metros
    const bmi = weight / (heightMeters ** 2);
    return bmi;
  }
  
  function interpretarIMC(bmi) {
    if (bmi < 18.5) {
      return {
        status: 'Abaixo do peso',
        message: 'Você está abaixo do peso ideal. Tente ganhar alguns quilos para melhorar sua saúde.'
      };
    } else if (bmi < 25) {
      return {
        status: 'Peso normal',
        message: 'Você está com o peso ideal para sua altura. Continue assim para manter sua saúde em dia.'
      };
    } else if (bmi < 30) {
      return {
        status: 'Sobrepeso',
        message: 'Você está com sobrepeso. Tente perder alguns quilos para melhorar sua saúde.'
      };
    } else {
      return {
        status: 'Obesidade',
        message: 'Você está com obesidade. É importante que você perca peso para reduzir o risco de problemas de saúde.'
      };
    }
  }
  
  module.exports = {
    calcularIMC,
    interpretarIMC
  };