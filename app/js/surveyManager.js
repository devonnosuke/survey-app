import { surveyData } from "./surveyData.js";

let currentSurveyIndex = 0;

export function getSurveyQuestion() {
  return surveyData[currentSurveyIndex];
}

export function goToNextSurvey() {
  if (currentSurveyIndex < surveyData.length - 1) {
    currentSurveyIndex++;
    return true;
  }
  return false;
}

export function resetSurvey() {
  currentSurveyIndex = 0;
}
