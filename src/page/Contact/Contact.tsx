import React, { useRef } from "react";
import { styled } from "styled-components";
import theme from "../../styles/Theme";
import { MdPhoneIphone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import emailjs from "@emailjs/browser";

const Container = styled.div``;
const ImgContainer = styled.section`
  display: flex;
  justify-content: center;
  height: 30vh;
  align-items: center;
  /* border: 2px solid red; */
`;
const MainTitle = styled.h1`
  font-size: 6rem;
  margin-bottom: 3rem;
  background-clip: border-box;
  background: linear-gradient(to right top, #b9eddd, #c9a7eb, #2cd3e1);
  color: transparent;
  -webkit-background-clip: text;
`;
const MainContainer = styled.main`
  display: flex;
  justify-content: center;
`;
const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 2rem;
  margin-bottom: 1rem;
`;
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const InputContainer = styled.input`
  width: 30vw;
  height: 9vh;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: ${theme.colors.font};
  border-bottom: 2px solid ${theme.colors.font};

  &::placeholder {
    color: ${theme.colors.font};
  }
`;
const TextContainer = styled.textarea`
  width: 30vw;
  height: 18vh;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: ${theme.colors.font};
  border-bottom: 2px solid ${theme.colors.font};
  margin-bottom: 1rem;

  &::placeholder {
    color: ${theme.colors.font};
  }
`;
const Button = styled.button`
  width: 12vw;
  font-size: 1.25rem;
  color: ${theme.colors.font};
  border-bottom: 2px solid ${theme.colors.font};

  &:hover {
    color: ${theme.colors.font_hover};
    border: 2px solid ${theme.colors.font_hover};
  }
`;
const Contact = () => {
  const SERVICE_ID: string = process.env.REACT_APP_SERVICE_ID || "";
  const TEMPLATE_ID: string = process.env.REACT_APP_TEMPLATE_ID || "";
  const PUBLIC_KEY: string = process.env.REACT_APP_PUBLIC_KEY || "";

  const ref = useRef<HTMLFormElement>(null!);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, ref.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("완료");
      },
      (err) => {
        console.log(err);
        alert("다시 확인해 주세요");
      }
    );
    ref.current.reset();
  };

  return (
    <Container>
      <ImgContainer>
        <MainTitle>Contact</MainTitle>
      </ImgContainer>
      <MainContainer>
        <ArticleContainer>
          <SectionContainer>
            <section>
              <MdPhoneIphone size="45" color="black" />
            </section>
            <section>010-4964-2335</section>
          </SectionContainer>
          <SectionContainer>
            <section>
              <GoMail size="45" color="black" />
            </section>
            <section>shtngur10@gamil.com</section>
          </SectionContainer>
          <SectionContainer>
            <section>
              <FaGithub size="45" color="black" />
            </section>
            <section>https://github.com/rohsuhyoek</section>
          </SectionContainer>
        </ArticleContainer>
        <FormContainer ref={ref} onSubmit={sendEmail}>
          <TitleContainer>
            <InputContainer type="text" placeholder="Name" name="name" />
          </TitleContainer>
          <TitleContainer>
            <InputContainer type="email" placeholder="Email" name="email" />
          </TitleContainer>
          <TitleContainer>
            <TextContainer placeholder="Message" name="message" />
          </TitleContainer>
          <Button type="submit">Send</Button>
        </FormContainer>
      </MainContainer>
    </Container>
  );
};

export default Contact;
