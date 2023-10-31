import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [pesoIdeal, setPesoIdeal] = useState(''); // Armazena o peso ideal
  const [pesoAju, setPesoAju] = useState(''); // Armazena o peso ideal ajustado

  function executarCalculos() {
    const alturaFloat = parseFloat(altura);

    if (!peso || !altura || !sexo) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const pesoIdealM = 52 + (0.75 * (alturaFloat - 152.4));
    const pesoIdealF = 52 + (0.67 * (alturaFloat - 152.4));

    if (sexo.toLowerCase() === 'm') {
      const pesoAjuM = ((peso - pesoIdealM) * 0.25) + pesoIdealM;
      setPesoIdeal(pesoIdealM.toFixed(2));
      setPesoAju(pesoAjuM.toFixed(2));
    } else if (sexo.toLowerCase() === 'f') {
      const pesoAjuF = ((peso - pesoIdealF) * 0.25) + pesoIdealF;
      setPesoIdeal(pesoIdealF.toFixed(2));
      setPesoAju(pesoAjuF.toFixed(2));
    } else {
      alert('Sexo deve ser "m" ou "f".');
      return;
    }

    setPeso('');
    setAltura('');
    setSexo('');
  }

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Calcule seu Peso Ideal</Text>

      <TextInput
        style={estilo.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={estilo.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />

      <TextInput
        style={estilo.input}
        value={sexo}
        onChangeText={(sexo) => setSexo(sexo)}
        placeholder="Sexo (m/f)"
      />

      <TouchableOpacity style={estilo.botao} onPress={executarCalculos}>
        <Text style={estilo.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      <Text style={estilo.resultado}>Peso Ideal: {pesoIdeal}</Text>
      <Text style={estilo.resultado}>Peso Ideal Ajustado: {pesoAju}</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3DDEA'
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30
  },
  input: {
    backgroundColor: '#F2F7F9',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#FFDAD8',
    padding: 10,
  },
  textoBotao: {
    color: 'black',
    fontSize: 25,
  },
  resultado: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  }
});