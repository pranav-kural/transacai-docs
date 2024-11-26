import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full p-10 flex flex-row justify-center items-center">
      <a
        href="https://github.com/transac-ai"
        title="Transac AI - GitHub"
        referrerPolicy="no-referrer"
        target="blank"
      >
        <Button variant="link" size="slim">
          Transac AI Project
        </Button>
      </a>
    </footer>
  );
};
