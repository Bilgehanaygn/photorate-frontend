"use client";
import { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";
import Overlay from "../../../lib/components/src/Overlay";
import { getLoggedInUser } from "../../../lib/api/user";
import { useRouter } from "next/navigation";
import ReviewerLoginForm from "../../../lib/app-components/src/ReviewerLoginForm";

const ReviewerLoginPage = () => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isRouting, setIsRouting] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    async function setCurrentUser() {
      try {
        //if the user logged in navigate to the home page
        const user = await getLoggedInUser();
        router.push("/");
      } catch (err) {
        //if the user not logged in allow to see the login page
        setIsRouting(false);
      }
    }
    setCurrentUser();
    ref.current = document.getElementById("portal");
    setMounted(true);
  }, []);

  return mounted && ref.current && !isRouting
    ? ReactDom.createPortal(
        <Overlay>
          <ReviewerLoginForm />
        </Overlay>,
        ref.current
      )
    : null;
};

export default ReviewerLoginPage;
