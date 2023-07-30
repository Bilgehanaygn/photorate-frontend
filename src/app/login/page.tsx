"use client";
import { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";
import { styled } from "styled-components";
import LoginForm from "../../../lib/components/src/LoginForm";

const Overlay = styled.div`
  display: block;
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const LoginPage = () => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? ReactDom.createPortal(
        <Overlay>
          <LoginForm />
        </Overlay>,
        ref.current
      )
    : null;
};

export default LoginPage;
