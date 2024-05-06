import {isNil} from '@perchwell/utils';

function getRequirement(title, value) {
  return isNil(value)
    ? null
    : {
        title,
        value,
      };
}

function preparePrimaryInfo(career = {}) {
  const careerData = !isNil(career) ? career : {};
  const {
    position_title,
    compensation,
    employment_location,
    experience_required,
    position_type,
    application_deadline,
  } = careerData;

  return [
    getRequirement('Position', position_title),
    getRequirement('Salary', compensation),
    getRequirement('Location', employment_location),
    getRequirement('Experience', experience_required),
    getRequirement('Type', position_type),
    getRequirement('Deadline', application_deadline),
  ].filter((option) => option !== null);
}

export {preparePrimaryInfo};
