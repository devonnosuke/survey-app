import { getSurveyQuestion, goToNextSurvey } from "./surveyManager.js";

const app = document.getElementById("app");

export function renderSurvey() {
  const survey = getSurveyQuestion();

  app.innerHTML = /*html*/ `
    <h1>${survey.question}</h1>
    <ul class="list-group">
      ${survey.answers
        .map(
          (
            answer,
            index
          ) => /*html*/ `<li class="list-group-item list-group-item-info d-flex justify-content-between align-items-center">${
            index + 1
          }. ${answer.text}<span class="badge bg-primary rounded-pill">
            <i class="bi bi-people-fill"></i> ${answer.points}</span></li>`
        )
        .join("")}
    </ul>
    <button id="next-btn" class="btn btn-primary">Lanjut</button>
  `;

  document.getElementById("next-btn").addEventListener("click", () => {
    if (!goToNextSurvey()) {
      alert("Survey selesai! Terima kasih.");
      resetSurvey();
    }
    renderSurvey();
  });
}
