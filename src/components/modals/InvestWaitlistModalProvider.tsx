"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import InvestWaitlistModal from "@/components/modals/InvestWaitlistModal";

type InvestWaitlistModalContextValue = {
  openModal: (options?: {
    email?: string;
    step?: 1 | 2;
    firstName?: string;
    lastName?: string;
  }) => void;
};

const InvestWaitlistModalContext = createContext<InvestWaitlistModalContextValue | null>(null);

export const useInvestWaitlistModal = () => {
  const context = useContext(InvestWaitlistModalContext);
  if (!context) {
    throw new Error("useInvestWaitlistModal must be used within InvestWaitlistModalProvider");
  }
  return context;
};

type InvestWaitlistModalProviderProps = {
  children: ReactNode;
};

const InvestWaitlistModalProvider = ({ children }: InvestWaitlistModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialEmail, setInitialEmail] = useState<string | undefined>(undefined);
  const [initialStep, setInitialStep] = useState<1 | 2 | undefined>(undefined);
  const [initialFirstName, setInitialFirstName] = useState<string | undefined>(
    undefined
  );
  const [initialLastName, setInitialLastName] = useState<string | undefined>(
    undefined
  );

  const value = useMemo(
    () => ({
      openModal: (options?: {
        email?: string;
        step?: 1 | 2;
        firstName?: string;
        lastName?: string;
      }) => {
        setInitialEmail(options?.email);
        setInitialStep(options?.step);
        setInitialFirstName(options?.firstName);
        setInitialLastName(options?.lastName);
        setIsOpen(true);
      },
    }),
    []
  );

  return (
    <InvestWaitlistModalContext.Provider value={value}>
      {children}
      <InvestWaitlistModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialEmail={initialEmail}
        initialStep={initialStep}
        initialFirstName={initialFirstName}
        initialLastName={initialLastName}
      />
    </InvestWaitlistModalContext.Provider>
  );
};

export default InvestWaitlistModalProvider;
