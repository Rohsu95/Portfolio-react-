import React, { useRef } from "react";
import { styled } from "styled-components";
import theme from "../../styles/Theme";
import { MdPhoneIphone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import emailjs from "@emailjs/browser";

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
            <section className="ModalIcon">
              <MdPhoneIphone size="45" color="black" />
            </section>
            <section className="ModalText">010-4964-2335</section>
          </SectionContainer>
          <SectionContainer>
            <section className="ModalIcon">
              <GoMail size="45" color="black" />
            </section>
            <section className="ModalText">shtngur10@gmail.com</section>
          </SectionContainer>
          <SectionContainer>
            <section className="ModalIcon">
              <a
                href="https://github.com/Rohsu95"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub size="45" color="black" />
              </a>
            </section>
            <section className="ModalText">GitHub!</section>
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

const Container = styled.div``;
const ImgContainer = styled.section`
  display: flex;
  justify-content: center;
  height: 30vh;
  align-items: center;
`;
const MainTitle = styled.h1`
  font-size: 6rem;
  margin-bottom: 3rem;
  background-clip: border-box;
  background: linear-gradient(to right top, #b9eddd, #c9a7eb, #2cd3e1);
  color: transparent;
  -webkit-background-clip: text;

  @media ${theme.media.mobile} {
    font-size: 5rem;
  }
  @media ${theme.media.phone} {
    font-size: 4rem;
  }
`;
const MainContainer = styled.main`
  display: flex;
  justify-content: center;

  @media ${theme.media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 2rem;
  margin-bottom: 1rem;

  @media ${theme.media.mobile} {
    display: flex;
    flex-direction: initial;
    justify-content: center;
  }
  @media ${theme.media.phone} {
    display: flex;
    justify-content: space-around;
  }
`;
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .ModalText {
    @media ${theme.media.phone} {
      display: none;
      opacity: 0;
      transition: all ease 0.5s;
      font-size: 1rem;
    }
  }
  .ModalIcon:hover + .ModalText {
    display: block;
    opacity: 1;
  }

  @media ${theme.media.mobile} {
    font-size: 0.75rem;
    margin-left: 1rem;
  }
  svg {
    @media ${theme.media.mobile} {
      width: 30px;
    }
    @media ${theme.media.phone} {
      width: 30px;
      display: flex;
    }
  }
`;
const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${theme.media.mobile} {
  }
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
  @media ${theme.media.mobile} {
    width: 350px;
  }
  @media ${theme.media.phone} {
    width: 70vw;
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

  @media ${theme.media.mobile} {
    width: 350px; // 360
  }
  @media ${theme.media.phone} {
    width: 70vw; // 360
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

export default Contact;
