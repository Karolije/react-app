import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import ProgressBar from "../ProgressBar/ProgressBar";

import {
  Container,
  Title,
  GenderGroup,
  GenderOptions,
  ButtonWrapper,
  ErrorText,
} from "./Form.styled";

const Step1 = ({ nextStep, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const handleGenderSelect = (gender) => {
    setFormData({ ...formData, gender });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName || formData.firstName.trim() === "") {
      newErrors.firstName = "Imię jest wymagane";
    }
    if (!formData.lastName || formData.lastName.trim() === "") {
      newErrors.lastName = "Nazwisko jest wymagane";
    }
    if (!formData.gender) {
      newErrors.gender = "Wybierz płeć";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };
  const totalFields = 9;

  const filledFields = [
    formData.firstName,
    formData.lastName,
    formData.gender,
    formData.email,
    formData.phone,
    formData.street,
    formData.city,
    formData.postalCode,
    formData.country,
  ].filter(Boolean).length;

  const progress = Math.round((filledFields / totalFields) * 100);
  return (
    <Container>
      <ProgressBar percent={progress} />

      <Title>Dane osobowe</Title>

      <Input
        placeholder="Imię"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}

      <Input
        placeholder="Nazwisko"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}

      <GenderGroup>
        <p>Płeć</p>
        <GenderOptions>
          <Checkbox
            onClick={() => handleGenderSelect("Mężczyzna")}
            $checked={formData.gender === "Mężczyzna"}
          >
            Mężczyzna
          </Checkbox>
          <Checkbox
            onClick={() => handleGenderSelect("Kobieta")}
            $checked={formData.gender === "Kobieta"}
          >
            Kobieta
          </Checkbox>
        </GenderOptions>
      </GenderGroup>
      {errors.gender && <ErrorText>{errors.gender}</ErrorText>}
      <ButtonWrapper>
        <Button onClick={handleNext}>Dalej</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Step1;
