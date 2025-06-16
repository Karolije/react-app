import React from "react";
import Button from "../Button/Button";
import {
  Container,
  Title,
  ButtonWrapper,
  SummaryGrid,
  SummaryItem,
  Label,
  Value,
  SummaryItemWide,
} from "./Form.styled";

const Step3 = ({ prevStep, formData, setStep, setFormData }) => {
  const {
    firstName,
    lastName,
    gender,
    email,
    phone,
    street,
    city,
    postalCode,
    country,
  } = formData;

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3001/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Błąd zapisu");

      setFormData({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        postalCode: "",
        country: "",
      });
      setStep(1);

      alert("Formularz został zapisany do data.json!");
    } catch (error) {
      console.error(error);
      alert("Wystąpił błąd podczas zapisu");
    }
  };

  return (
    <Container>
      <Title>Podsumowanie</Title>
      <SummaryGrid>
        <SummaryItem>
          <Label>Imię</Label>
          <Value>{firstName}</Value>
        </SummaryItem>
        <SummaryItem>
          <Label>Nazwisko</Label>
          <Value>{lastName}</Value>
        </SummaryItem>
        <SummaryItem>
          <Label>Płeć</Label>
          <Value>{gender}</Value>
        </SummaryItem>
        <SummaryItem>
          <Label>Email</Label>
          <Value>{email}</Value>
        </SummaryItem>
        <SummaryItem>
          <Label>Telefon</Label>
          <Value>{phone}</Value>
        </SummaryItem>
        <SummaryItem>
          <Label>Ulica</Label>
          <Value>{street}</Value>
        </SummaryItem>
        <SummaryItem>
          <Label>Miasto</Label>
          <Value>{city}</Value>
        </SummaryItem>
        <SummaryItem>
          <Label>Kod pocztowy</Label>
          <Value>{postalCode}</Value>
        </SummaryItem>
        <SummaryItemWide>
          <Label>Kraj</Label>
          <Value>{country}</Value>
        </SummaryItemWide>
      </SummaryGrid>
      <ButtonWrapper>
        <Button onClick={prevStep}>Wstecz</Button>
        <Button onClick={handleSubmit}>Zatwierdź</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Step3;
