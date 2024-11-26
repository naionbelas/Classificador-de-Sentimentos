async function analyzeSentiment() {
    const inputText = document.getElementById("inputText").value;
    const resultElement = document.getElementById("result");

    // Validar se o campo de texto não está vazio
    if (!inputText.trim()) {
        resultElement.innerText = 'Por favor, insira um texto para análise.';
        return;
    }

    // Configurar a URL da API Hugging Face com o modelo para análise de sentimentos
    const apiUrl = 'https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment';

    // Token de API (substitua com seu token gerado no Hugging Face)
    const token = 'coloque-o-seu-token-aqui'; // Substitua pelo seu token correto

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputs: inputText })
        });

        if (!response.ok) {
            resultElement.innerText = 'Erro ao processar o sentimento.';
            console.error('Erro ao chamar a API:', response.statusText);
            return;
        }

        const data = await response.json();

        // Exibir toda a resposta no console para depuração
        console.log('Resposta da API:', data);

        // Verificar a estrutura da resposta
        if (Array.isArray(data) && data.length > 0) {
            const sentimentArray = data[0];  // O primeiro item do array
            const sentimentLabel = sentimentArray[0]?.label; // Acessando o primeiro rótulo, se existir

            if (sentimentLabel) {
                resultElement.innerText = `Sentimento: ${sentimentLabel}`;
            } else {
                resultElement.innerText = 'Não foi possível determinar o sentimento.';
            }
        } else {
            resultElement.innerText = 'Erro na estrutura da resposta da API.';
        }
    } catch (error) {
        resultElement.innerText = 'Erro ao processar o sentimento';
        console.error('Erro ao chamar a API:', error);
    }
}

// Evento de clique no botão
document.getElementById('analyzeButton').addEventListener('click', analyzeSentiment);
