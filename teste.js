const botao = document.getElementById("tema");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    console.log(document.body.className);
});
const botaoQuiz = document.getElementById("corrigirQuiz");

if(botaoQuiz){

    botaoQuiz.addEventListener("click", () => {

        let pontos = 0;

        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');

        if(!q1 || !q2 || !q3){

            document.getElementById("resultadoQuiz").textContent =
            "Responda todas as perguntas.";

            return;
        }

        pontos += Number(q1.value);
        pontos += Number(q2.value);
        pontos += Number(q3.value);

        const resultado =
        document.getElementById("resultadoQuiz");

        if(pontos === 3){

            resultado.textContent =
            "Excelente! Você acertou 3 de 3 perguntas.";

        }else if(pontos === 2){

            resultado.textContent =
            "Muito bom! Você acertou 2 de 3 perguntas.";

        }else if(pontos === 1){

            resultado.textContent =
            "Você acertou 1 de 3 perguntas.";

        }else{

            resultado.textContent =
            "Você não acertou nenhuma pergunta. Tente novamente.";

        }

    });

}