import React from "react";
import Cardio from "./Cardio";
import Dentist from "./Dentist";
import Surgeon from "./Surgeon";
import Gynecologist from "./Gynecologist";
import Dermatologist from "./Dermatologist";
import Physician from "./Physician";

import Neurologist from "./Neurologist";
import Pediatrician from "./Pediatrician";
import Otolaryngologist from "./Otolaryngologist";
import Psychiatrist from "./Psychiatrist";
import Ophthalmologist from "./Ophthalmologist";
import Dietcian from "./Dietcian";
function Doctor() {
  return (
    <div>
      <Cardio />
      <Dietcian />
      <Surgeon />
      <Gynecologist />
      <Psychiatrist />
      <Dermatologist />
      <Physician />
      <Ophthalmologist />
      <Neurologist />
      <Pediatrician />
      <Dentist />
      <Otolaryngologist />
    </div>
  );
}

export default Doctor;
