import React, { useState } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Container, Title, ButtonWrapper, ErrorText } from "./Form.styled";

const Step2 = ({ nextStep, prevStep, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email jest wymagany";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Nieprawidłowy format email";
    }

    if (!formData.phone) {
      newErrors.phone = "Telefon jest wymagany";
    } else if (!/^\d{9,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Nieprawidłowy numer telefonu";
    }

    if (!formData.street) {
      newErrors.street = "Ulica i numer są wymagane";
    }

    if (!formData.city) {
      newErrors.city = "Miasto jest wymagane";
    }

    if (!formData.postalCode) {
      newErrors.postalCode = "Kod pocztowy jest wymagany";
    } else if (!/^\d{2}-\d{3}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Kod pocztowy musi mieć format XX-XXX";
    }

    if (!formData.country) {
      newErrors.country = "Wybierz kraj";
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

      <Title>Dane kontaktowe</Title>

      <Input
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <ErrorText>{errors.email}</ErrorText>}

      <Input
        placeholder="Telefon (XXX XXX XXX)"
        type="tel"
        value={formData.phone}
        maxLength={11}
        onChange={(e) => {
          let val = e.target.value.replace(/\D/g, "").slice(0, 9);
          if (val.length > 3 && val.length <= 6) {
            val = `${val.slice(0, 3)} ${val.slice(3)}`;
          } else if (val.length > 6) {
            val = `${val.slice(0, 3)} ${val.slice(3, 6)} ${val.slice(6)}`;
          }
          setFormData({ ...formData, phone: val });
        }}
      />
      {errors.phone && <ErrorText>{errors.phone}</ErrorText>}

      <Input
        placeholder="Ulica i numer"
        value={formData.street}
        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
      />
      {errors.street && <ErrorText>{errors.street}</ErrorText>}

      <Input
        placeholder="Miasto"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      {errors.city && <ErrorText>{errors.city}</ErrorText>}

      <Input
        placeholder="Kod pocztowy (XX-XXX)"
        value={formData.postalCode || ""}
        maxLength={6}
        onChange={(e) => {
          let val = e.target.value;
          val = val.replace(/\D/g, "");
          if (val.length > 2) {
            val = val.slice(0, 2) + "-" + val.slice(2, 5);
          }
          setFormData({ ...formData, postalCode: val });
        }}
      />
      {errors.postalCode && <ErrorText>{errors.postalCode}</ErrorText>}

      <Select
        value={formData.country}
        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
      >
        <option value="">Wybierz kraj</option>
        <option value="Polska">Polska</option>
        <option value="Niemcy">Niemcy</option>
        <option value="Czechy">Czechy</option>
      </Select>
      {errors.country && <ErrorText>{errors.country}</ErrorText>}

      <ButtonWrapper>
        <Button onClick={prevStep}>Wstecz</Button>
        <Button onClick={handleNext}>Dalej</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Step2;
